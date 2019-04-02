FROM node:10-slim

LABEL version="1.0.0"
LABEL repository="https://github.com/wireapp/wire-web-packages/tree/master/.github/actions/node-10"
LABEL repository="https://github.com/wireapp/wire-web-packages/tree/master/.github/actions/node-10"
LABEL maintainer="wireapp"

LABEL com.github.actions.name="GitHub Action for Node.js 10"
LABEL com.github.actions.description="Wraps common actions"
LABEL com.github.actions.icon="package"
LABEL com.github.actions.color="yellow"

RUN apt-get update && \
    apt-get install --no-install-recommends -y \
        curl git openssl openssh-client \
        libappindicator1 fonts-liberation && \
    apt-get clean -y && \
    rm -rf /var/lib/apt/lists/*

COPY "entrypoint.sh" "/entrypoint.sh"

RUN "curl https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb -o google-chrome.deb"
RUN "dpkg -i google-chrome.deb"

ENTRYPOINT ["/entrypoint.sh"]
