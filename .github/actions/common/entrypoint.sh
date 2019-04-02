#!/usr/bin/env sh

set -e

has_updates() {
  if lerna updated > /dev/null 2>&1; then
    echo "some packages are ready to publish"
    exit 0
  fi

  echo "no packages to publish"
  exit 78
}

is_branch() {
  if [ -z "${1}" ]; then
    echo "is_branch: No argument provided"
    exit 1
  fi

  PATTERN="${1}"
  BRANCH="$(git rev-parse --abbrev-ref HEAD)"

  if [ "${BRANCH}" = "${PATTERN}" ]; then
    echo "\"${BRANCH}\" matches \"${PATTERN}\""
    exit 0
  fi

  echo "\"${BRANCH}\" does not match \"${PATTERN}\""
  exit 78
}

is_skip_ci() {
  PATTERN="^(?:(?!\\[(ci skip|skip ci)\\]).)*$"
  LAST_COMMIT="$(git log -1 --pretty=%B | head -n 1)"

  if echo "${LAST_COMMIT}" | grep -qP "${PATTERN}"; then
    echo "\"${LAST_COMMIT}\" matches \"${PATTERN}\""
    exit 0
  fi

  echo "\"${LAST_COMMIT}\" does not match \"${PATTERN}\""
  exit 78
}

release() {
  git config --global "user.email" "webapp+github@wire.com"
  git config --global "user.name" "Wire GitHub CI"
  mkdir -p "temp"
  openssl aes-256-cbc -K "${encrypted_d95474b06f11_key}" -iv "${encrypted_d95474b06f11_iv}" -in "deploy.enc" -out "temp/deploy" -d
  chmod 600 "temp/deploy"
  eval $(ssh-agent -s)
  ssh-add "temp/deploy"
  rm -rf "temp"
  echo "//registry.npmjs.org/:_authToken=${NPM_TOKEN}" >> "${HOME}/.npmrc"
  git checkout master
  git pull
  REPO="$(git config remote.origin.url)"
  SSH_REPO="${REPO/https:\/\/github.com\//git@github.com:}"
  echo "${SSH_REPO}"
  git remote set-url origin "${SSH_REPO}"
  #yarn release
  echo "would run yarn release"
  #NODE_DEBUG="@wireapp:*" node packages/core/src/demo/status-bot.js "4ae15efc-d061-4013-98f2-bcd81ab39b60"
  rm "${HOME}/.npmrc"
}

COMMAND="$@"

if [ -z "${COMMAND}" ]; then
  echo "No command provided"
  exit 1
fi

${COMMAND}
