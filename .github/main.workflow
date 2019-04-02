workflow "Build, lint and test" {
  on = "push"
  resolves = "Build projects"
}

action "Don't skip CI" {
  uses = "./.github/actions/common"
  args = "is_skip_ci"
}

action "Install dependencies" {
  uses = "./.github/actions/common"
  needs = "Don't skip CI"
  args = "yarn"
}

action "Bootstrap projects" {
  uses = "./.github/actions/common"
  needs = "Install dependencies"
  args = "yarn boot"
}

action "Test projects" {
  uses = "./.github/actions/common"
  needs = "Bootstrap projects"
  args = "yarn test"
}

action "Check for master branch" {
  uses = "./.github/actions/common"
  needs = "Test projects"
  args = "is_branch master"
}

action "Build projects" {
  uses = "./.github/actions/common"
  needs = "Check for master branch"
  args = "yarn dist"
}
