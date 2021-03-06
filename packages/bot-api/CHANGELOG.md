# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [4.0.17](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.16...@wireapp/bot-api@4.0.17) (2019-04-09)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.16](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.15...@wireapp/bot-api@4.0.16) (2019-04-09)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.15](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.14...@wireapp/bot-api@4.0.15) (2019-04-09)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.14](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.13...@wireapp/bot-api@4.0.14) (2019-04-08)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.13](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.12...@wireapp/bot-api@4.0.13) (2019-04-08)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.12](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.11...@wireapp/bot-api@4.0.12) (2019-04-08)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.11](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.10...@wireapp/bot-api@4.0.11) (2019-04-05)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.10](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.9...@wireapp/bot-api@4.0.10) (2019-04-03)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.9](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.8...@wireapp/bot-api@4.0.9) (2019-04-03)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.8](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.7...@wireapp/bot-api@4.0.8) (2019-04-03)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.7](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.6...@wireapp/bot-api@4.0.7) (2019-04-02)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.5...@wireapp/bot-api@4.0.6) (2019-03-29)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.5](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.4...@wireapp/bot-api@4.0.5) (2019-03-29)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.3...@wireapp/bot-api@4.0.4) (2019-03-29)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.2...@wireapp/bot-api@4.0.3) (2019-03-28)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.1...@wireapp/bot-api@4.0.2) (2019-03-27)

**Note:** Version bump only for package @wireapp/bot-api





## [4.0.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@4.0.0...@wireapp/bot-api@4.0.1) (2019-03-27)

**Note:** Version bump only for package @wireapp/bot-api





# [4.0.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.3.3...@wireapp/bot-api@4.0.0) (2019-03-27)


### Code Refactoring

* **core:** Expect conversation ID when creating messages & Message types [BREAKING] ([#1686](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1686)) ([2a4a0b9](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/2a4a0b9))


### BREAKING CHANGES

* **core:**  - Removed PayloadBundle sub types
 - Extracted message create functions from ConversationService
 - Moved conversationId params from message send functions to message create functions

Old API:
```ts
const textPayload = await account.service.conversation.createText(this.message).build();
await account.service.conversation.send(conversationId, textPayload);
```

New API:
```ts
const textPayload = await account.service.conversation.messageBuilder.createText(conversationId, this.message).build();
await account.service.conversation.send(textPayload);
```





## [3.3.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.3.2...@wireapp/bot-api@3.3.3) (2019-03-25)

**Note:** Version bump only for package @wireapp/bot-api





## [3.3.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.3.1...@wireapp/bot-api@3.3.2) (2019-03-25)

**Note:** Version bump only for package @wireapp/bot-api





## [3.3.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.3.0...@wireapp/bot-api@3.3.1) (2019-03-25)

**Note:** Version bump only for package @wireapp/bot-api





# [3.3.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.2.4...@wireapp/bot-api@3.3.0) (2019-03-21)


### Features

* **bot-api:** Expose send text method ([#1670](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1670)) ([0eea3b3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/0eea3b3))





## [3.2.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.2.3...@wireapp/bot-api@3.2.4) (2019-03-21)

**Note:** Version bump only for package @wireapp/bot-api





## [3.2.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.2.2...@wireapp/bot-api@3.2.3) (2019-03-20)

**Note:** Version bump only for package @wireapp/bot-api





## [3.2.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.2.1...@wireapp/bot-api@3.2.2) (2019-03-20)

**Note:** Version bump only for package @wireapp/bot-api





## [3.2.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.2.0...@wireapp/bot-api@3.2.1) (2019-03-19)

**Note:** Version bump only for package @wireapp/bot-api





# [3.2.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.64...@wireapp/bot-api@3.2.0) (2019-03-19)


### Features

* **bot-api:** Add backend selection ([#1657](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1657)) ([0cafa70](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/0cafa70))





## [3.1.64](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.63...@wireapp/bot-api@3.1.64) (2019-03-18)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.63](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.62...@wireapp/bot-api@3.1.63) (2019-03-15)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.62](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.61...@wireapp/bot-api@3.1.62) (2019-03-14)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.61](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.60...@wireapp/bot-api@3.1.61) (2019-03-14)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.60](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.59...@wireapp/bot-api@3.1.60) (2019-03-14)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.59](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.58...@wireapp/bot-api@3.1.59) (2019-03-14)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.58](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.57...@wireapp/bot-api@3.1.58) (2019-03-14)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.57](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.56...@wireapp/bot-api@3.1.57) (2019-03-14)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.56](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.55...@wireapp/bot-api@3.1.56) (2019-03-13)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.55](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.54...@wireapp/bot-api@3.1.55) (2019-03-12)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.54](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.53...@wireapp/bot-api@3.1.54) (2019-03-12)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.53](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.52...@wireapp/bot-api@3.1.53) (2019-03-12)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.52](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.51...@wireapp/bot-api@3.1.52) (2019-03-12)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.51](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.50...@wireapp/bot-api@3.1.51) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.50](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.49...@wireapp/bot-api@3.1.50) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.49](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.48...@wireapp/bot-api@3.1.49) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.48](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.47...@wireapp/bot-api@3.1.48) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.47](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.46...@wireapp/bot-api@3.1.47) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.46](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.45...@wireapp/bot-api@3.1.46) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.45](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.44...@wireapp/bot-api@3.1.45) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.44](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.43...@wireapp/bot-api@3.1.44) (2019-03-11)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.43](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.42...@wireapp/bot-api@3.1.43) (2019-03-07)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.42](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.41...@wireapp/bot-api@3.1.42) (2019-03-07)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.41](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.40...@wireapp/bot-api@3.1.41) (2019-03-07)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.40](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.39...@wireapp/bot-api@3.1.40) (2019-03-07)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.39](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.38...@wireapp/bot-api@3.1.39) (2019-03-06)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.38](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.37...@wireapp/bot-api@3.1.38) (2019-03-06)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.37](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.36...@wireapp/bot-api@3.1.37) (2019-03-06)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.36](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.35...@wireapp/bot-api@3.1.36) (2019-03-04)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.35](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.34...@wireapp/bot-api@3.1.35) (2019-03-04)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.34](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.33...@wireapp/bot-api@3.1.34) (2019-03-01)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.33](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.32...@wireapp/bot-api@3.1.33) (2019-02-28)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.32](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.31...@wireapp/bot-api@3.1.32) (2019-02-28)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.31](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.30...@wireapp/bot-api@3.1.31) (2019-02-28)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.30](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.29...@wireapp/bot-api@3.1.30) (2019-02-28)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.29](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.28...@wireapp/bot-api@3.1.29) (2019-02-27)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.28](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.27...@wireapp/bot-api@3.1.28) (2019-02-27)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.27](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.26...@wireapp/bot-api@3.1.27) (2019-02-27)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.26](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.25...@wireapp/bot-api@3.1.26) (2019-02-26)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.25](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.24...@wireapp/bot-api@3.1.25) (2019-02-26)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.24](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.23...@wireapp/bot-api@3.1.24) (2019-02-26)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.23](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.22...@wireapp/bot-api@3.1.23) (2019-02-26)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.22](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.21...@wireapp/bot-api@3.1.22) (2019-02-25)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.21](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.20...@wireapp/bot-api@3.1.21) (2019-02-25)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.20](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.19...@wireapp/bot-api@3.1.20) (2019-02-25)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.19](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.18...@wireapp/bot-api@3.1.19) (2019-02-25)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.18](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.17...@wireapp/bot-api@3.1.18) (2019-02-25)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.17](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.16...@wireapp/bot-api@3.1.17) (2019-02-21)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.16](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.15...@wireapp/bot-api@3.1.16) (2019-02-19)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.15](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.14...@wireapp/bot-api@3.1.15) (2019-02-14)


### Bug Fixes

* **react-ui-kit:** Update style-components types ([#1523](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1523)) ([4c82a79](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/4c82a79))





## [3.1.14](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.13...@wireapp/bot-api@3.1.14) (2019-02-14)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.13](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.12...@wireapp/bot-api@3.1.13) (2019-02-05)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.12](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.11...@wireapp/bot-api@3.1.12) (2019-01-29)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.11](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.10...@wireapp/bot-api@3.1.11) (2019-01-24)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.10](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.9...@wireapp/bot-api@3.1.10) (2019-01-17)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.9](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.8...@wireapp/bot-api@3.1.9) (2019-01-03)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.8](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.7...@wireapp/bot-api@3.1.8) (2019-01-03)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.7](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.6...@wireapp/bot-api@3.1.7) (2019-01-02)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.5...@wireapp/bot-api@3.1.6) (2018-12-21)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.5](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.4...@wireapp/bot-api@3.1.5) (2018-12-20)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.3...@wireapp/bot-api@3.1.4) (2018-12-17)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.2...@wireapp/bot-api@3.1.3) (2018-12-10)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.1...@wireapp/bot-api@3.1.2) (2018-12-10)

**Note:** Version bump only for package @wireapp/bot-api





## [3.1.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.1.0...@wireapp/bot-api@3.1.1) (2018-12-10)

**Note:** Version bump only for package @wireapp/bot-api





# [3.1.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.0.6...@wireapp/bot-api@3.1.0) (2018-12-07)


### Features

* **core:** Add error emit ([#1371](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1371)) ([5e8c159](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/5e8c159))





## [3.0.6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.0.5...@wireapp/bot-api@3.0.6) (2018-12-06)

**Note:** Version bump only for package @wireapp/bot-api





## [3.0.5](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.0.4...@wireapp/bot-api@3.0.5) (2018-12-03)

**Note:** Version bump only for package @wireapp/bot-api





## [3.0.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.0.3...@wireapp/bot-api@3.0.4) (2018-11-30)

**Note:** Version bump only for package @wireapp/bot-api





## [3.0.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.0.2...@wireapp/bot-api@3.0.3) (2018-11-30)

**Note:** Version bump only for package @wireapp/bot-api





## [3.0.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.0.1...@wireapp/bot-api@3.0.2) (2018-11-29)

**Note:** Version bump only for package @wireapp/bot-api





## [3.0.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@3.0.0...@wireapp/bot-api@3.0.1) (2018-11-29)

**Note:** Version bump only for package @wireapp/bot-api





# [3.0.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.43...@wireapp/bot-api@3.0.0) (2018-11-29)


* [ci skip] feat(core): Read receipts [BREAKING] (WEBFOUND-56) (#1336) ([f7501b3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/f7501b3)), closes [#1336](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1336)


### BREAKING CHANGES

* removed createConfirmation(), removed ConfirmationType, changed the method signature of createPing()





## [2.1.43](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.42...@wireapp/bot-api@2.1.43) (2018-11-27)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.42](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.41...@wireapp/bot-api@2.1.42) (2018-11-26)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.41](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.40...@wireapp/bot-api@2.1.41) (2018-11-23)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.40](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.39...@wireapp/bot-api@2.1.40) (2018-11-23)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.39](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.38...@wireapp/bot-api@2.1.39) (2018-11-23)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.38](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.37...@wireapp/bot-api@2.1.38) (2018-11-22)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.37](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.36...@wireapp/bot-api@2.1.37) (2018-11-22)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.36](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.35...@wireapp/bot-api@2.1.36) (2018-11-21)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.35](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.34...@wireapp/bot-api@2.1.35) (2018-11-21)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.34](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.33...@wireapp/bot-api@2.1.34) (2018-11-21)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.33](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.32...@wireapp/bot-api@2.1.33) (2018-11-20)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.32](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.31...@wireapp/bot-api@2.1.32) (2018-11-20)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.31](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.30...@wireapp/bot-api@2.1.31) (2018-11-20)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.30](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.29...@wireapp/bot-api@2.1.30) (2018-11-19)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.29](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.28...@wireapp/bot-api@2.1.29) (2018-11-19)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.28](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.27...@wireapp/bot-api@2.1.28) (2018-11-16)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.27](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.26...@wireapp/bot-api@2.1.27) (2018-11-16)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.26](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.25...@wireapp/bot-api@2.1.26) (2018-11-16)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.25](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.24...@wireapp/bot-api@2.1.25) (2018-11-16)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.24](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.23...@wireapp/bot-api@2.1.24) (2018-11-16)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.23](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.22...@wireapp/bot-api@2.1.23) (2018-11-15)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.22](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.21...@wireapp/bot-api@2.1.22) (2018-11-15)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.21](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.20...@wireapp/bot-api@2.1.21) (2018-11-14)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.20](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.19...@wireapp/bot-api@2.1.20) (2018-11-12)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.19](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.18...@wireapp/bot-api@2.1.19) (2018-11-09)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.18](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.17...@wireapp/bot-api@2.1.18) (2018-11-08)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.17](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.16...@wireapp/bot-api@2.1.17) (2018-11-07)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.16](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.15...@wireapp/bot-api@2.1.16) (2018-11-05)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.15](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.14...@wireapp/bot-api@2.1.15) (2018-11-01)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.14](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.13...@wireapp/bot-api@2.1.14) (2018-10-31)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.13](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.12...@wireapp/bot-api@2.1.13) (2018-10-26)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.12](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.11...@wireapp/bot-api@2.1.12) (2018-10-25)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.11](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.10...@wireapp/bot-api@2.1.11) (2018-10-24)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.10](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.9...@wireapp/bot-api@2.1.10) (2018-10-23)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.9](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.8...@wireapp/bot-api@2.1.9) (2018-10-23)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.8](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.7...@wireapp/bot-api@2.1.8) (2018-10-23)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.7](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.6...@wireapp/bot-api@2.1.7) (2018-10-23)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.5...@wireapp/bot-api@2.1.6) (2018-10-19)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.5](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.4...@wireapp/bot-api@2.1.5) (2018-10-17)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.3...@wireapp/bot-api@2.1.4) (2018-10-17)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.2...@wireapp/bot-api@2.1.3) (2018-10-17)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.1...@wireapp/bot-api@2.1.2) (2018-10-17)

**Note:** Version bump only for package @wireapp/bot-api





## [2.1.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.1.0...@wireapp/bot-api@2.1.1) (2018-10-15)

**Note:** Version bump only for package @wireapp/bot-api





# [2.1.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.0.1...@wireapp/bot-api@2.1.0) (2018-10-15)


### Features

* **bot-api:** Expose `userId` parameter when sending messages ([#1226](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1226)) ([b7c1a98](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/b7c1a98))





## [2.0.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@2.0.0...@wireapp/bot-api@2.0.1) (2018-10-12)

**Note:** Version bump only for package @wireapp/bot-api





# [2.0.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.2.2...@wireapp/bot-api@2.0.0) (2018-10-12)


### Code Refactoring

* **api-client,core,cryptobox,proteus:** Rename root to index ([#1200](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1200)) ([6b937ac](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/6b937ac))


### BREAKING CHANGES

* **api-client,core,cryptobox,proteus:** Some modules can't be imported with `/root` anymore - use `/index` instead.





## [1.2.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.2.1...@wireapp/bot-api@1.2.2) (2018-10-11)

**Note:** Version bump only for package @wireapp/bot-api





## [1.2.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.2.0...@wireapp/bot-api@1.2.1) (2018-10-09)

**Note:** Version bump only for package @wireapp/bot-api





# [1.2.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.1.1...@wireapp/bot-api@1.2.0) (2018-10-08)


### Features

* **bot-api:** Add message handlers for clearConversation, sendEditedText, sendFile, sendImage, sendLocation, sendPing and sendTyping ([#1152](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1152)) ([4be69f4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/4be69f4))





## [1.1.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.1.0...@wireapp/bot-api@1.1.1) (2018-10-05)

**Note:** Version bump only for package @wireapp/bot-api





# [1.1.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.32...@wireapp/bot-api@1.1.0) (2018-10-05)


### Features

* **bot-api:** Allow client type option, cleanup ([#1202](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1202)) ([d37044d](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/d37044d))





## [1.0.32](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.31...@wireapp/bot-api@1.0.32) (2018-10-04)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.31"></a>
## [1.0.31](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.30...@wireapp/bot-api@1.0.31) (2018-10-04)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.30"></a>
## [1.0.30](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.29...@wireapp/bot-api@1.0.30) (2018-10-02)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.29"></a>
## [1.0.29](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.28...@wireapp/bot-api@1.0.29) (2018-10-02)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.28"></a>
## [1.0.28](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.27...@wireapp/bot-api@1.0.28) (2018-10-01)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.27"></a>
## [1.0.27](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.26...@wireapp/bot-api@1.0.27) (2018-10-01)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.26"></a>
## [1.0.26](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.25...@wireapp/bot-api@1.0.26) (2018-10-01)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.25"></a>
## [1.0.25](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.24...@wireapp/bot-api@1.0.25) (2018-10-01)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.24"></a>
## [1.0.24](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.23...@wireapp/bot-api@1.0.24) (2018-10-01)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.23"></a>
## [1.0.23](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.22...@wireapp/bot-api@1.0.23) (2018-10-01)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.22"></a>
## [1.0.22](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.21...@wireapp/bot-api@1.0.22) (2018-10-01)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.21"></a>
## [1.0.21](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.20...@wireapp/bot-api@1.0.21) (2018-09-28)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.20"></a>
## [1.0.20](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.19...@wireapp/bot-api@1.0.20) (2018-09-28)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.19"></a>
## [1.0.19](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.18...@wireapp/bot-api@1.0.19) (2018-09-25)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.18"></a>
## [1.0.18](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.17...@wireapp/bot-api@1.0.18) (2018-09-24)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.17"></a>
## [1.0.17](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.16...@wireapp/bot-api@1.0.17) (2018-09-24)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.16"></a>
## [1.0.16](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.15...@wireapp/bot-api@1.0.16) (2018-09-20)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.15"></a>
## [1.0.15](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.14...@wireapp/bot-api@1.0.15) (2018-09-20)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.14"></a>
## [1.0.14](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.13...@wireapp/bot-api@1.0.14) (2018-09-19)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.13"></a>
## [1.0.13](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.12...@wireapp/bot-api@1.0.13) (2018-09-19)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.12"></a>
## [1.0.12](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.11...@wireapp/bot-api@1.0.12) (2018-09-19)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.11"></a>
## [1.0.11](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.10...@wireapp/bot-api@1.0.11) (2018-09-19)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.10"></a>
## [1.0.10](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.9...@wireapp/bot-api@1.0.10) (2018-09-19)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.9"></a>
## [1.0.9](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.8...@wireapp/bot-api@1.0.9) (2018-09-18)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.8"></a>
## [1.0.8](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.7...@wireapp/bot-api@1.0.8) (2018-09-18)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.7"></a>
## [1.0.7](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.6...@wireapp/bot-api@1.0.7) (2018-09-18)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.6"></a>
## [1.0.6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.5...@wireapp/bot-api@1.0.6) (2018-09-18)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.5"></a>
## [1.0.5](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.4...@wireapp/bot-api@1.0.5) (2018-09-18)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.4"></a>
## [1.0.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.3...@wireapp/bot-api@1.0.4) (2018-09-18)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.3"></a>
## [1.0.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.2...@wireapp/bot-api@1.0.3) (2018-09-18)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.2"></a>
## [1.0.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.1...@wireapp/bot-api@1.0.2) (2018-09-17)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.1"></a>
## [1.0.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@1.0.0...@wireapp/bot-api@1.0.1) (2018-09-13)

**Note:** Version bump only for package @wireapp/bot-api





<a name="1.0.0"></a>
# [1.0.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.27...@wireapp/bot-api@1.0.0) (2018-09-12)


### Code Refactoring

* **core:** Add TextContentBuilder ([#1099](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1099)) ([18848bd](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/18848bd))


### BREAKING CHANGES

* **core:** createText() now returns a TextContentBuilder. 





<a name="0.3.27"></a>
## [0.3.27](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.26...@wireapp/bot-api@0.3.27) (2018-09-12)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.26"></a>
## [0.3.26](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.25...@wireapp/bot-api@0.3.26) (2018-09-07)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.25"></a>
## [0.3.25](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.24...@wireapp/bot-api@0.3.25) (2018-09-07)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.24"></a>
## [0.3.24](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.23...@wireapp/bot-api@0.3.24) (2018-09-07)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.23"></a>
## [0.3.23](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.22...@wireapp/bot-api@0.3.23) (2018-09-06)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.22"></a>
## [0.3.22](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.21...@wireapp/bot-api@0.3.22) (2018-09-06)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.21"></a>
## [0.3.21](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.20...@wireapp/bot-api@0.3.21) (2018-09-05)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.20"></a>
## [0.3.20](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.19...@wireapp/bot-api@0.3.20) (2018-09-05)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.19"></a>
## [0.3.19](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.18...@wireapp/bot-api@0.3.19) (2018-09-03)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.18"></a>
## [0.3.18](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.17...@wireapp/bot-api@0.3.18) (2018-08-31)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.17"></a>
## [0.3.17](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.16...@wireapp/bot-api@0.3.17) (2018-08-29)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.16"></a>
## [0.3.16](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.15...@wireapp/bot-api@0.3.16) (2018-08-28)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.15"></a>
## [0.3.15](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.14...@wireapp/bot-api@0.3.15) (2018-08-28)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.14"></a>
## [0.3.14](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.13...@wireapp/bot-api@0.3.14) (2018-08-28)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.13"></a>
## [0.3.13](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.12...@wireapp/bot-api@0.3.13) (2018-08-28)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.12"></a>
## [0.3.12](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.11...@wireapp/bot-api@0.3.12) (2018-08-27)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.11"></a>
## [0.3.11](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.10...@wireapp/bot-api@0.3.11) (2018-08-24)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.10"></a>
## [0.3.10](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.9...@wireapp/bot-api@0.3.10) (2018-08-23)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.9"></a>
## [0.3.9](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.8...@wireapp/bot-api@0.3.9) (2018-08-23)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.8"></a>
## [0.3.8](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.7...@wireapp/bot-api@0.3.8) (2018-08-23)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.7"></a>
## [0.3.7](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.6...@wireapp/bot-api@0.3.7) (2018-08-23)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.6"></a>
## [0.3.6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.5...@wireapp/bot-api@0.3.6) (2018-08-22)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.5"></a>
## [0.3.5](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.4...@wireapp/bot-api@0.3.5) (2018-08-21)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.4"></a>
## [0.3.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.3...@wireapp/bot-api@0.3.4) (2018-08-21)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.3"></a>
## [0.3.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.2...@wireapp/bot-api@0.3.3) (2018-08-21)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.2"></a>
## [0.3.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.1...@wireapp/bot-api@0.3.2) (2018-08-20)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.1"></a>
## [0.3.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.3.0...@wireapp/bot-api@0.3.1) (2018-08-20)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.3.0"></a>
# [0.3.0](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.35...@wireapp/bot-api@0.3.0) (2018-08-17)


### Features

* **bot-api:** Send image ([#1020](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/1020)) ([0a20a93](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/0a20a93))





<a name="0.2.35"></a>
## [0.2.35](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.34...@wireapp/bot-api@0.2.35) (2018-08-17)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.34"></a>
## [0.2.34](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.33...@wireapp/bot-api@0.2.34) (2018-08-16)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.33"></a>
## [0.2.33](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.32...@wireapp/bot-api@0.2.33) (2018-08-16)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.32"></a>
## [0.2.32](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.31...@wireapp/bot-api@0.2.32) (2018-08-16)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.31"></a>
## [0.2.31](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.30...@wireapp/bot-api@0.2.31) (2018-08-16)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.30"></a>
## [0.2.30](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.29...@wireapp/bot-api@0.2.30) (2018-08-16)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.29"></a>
## [0.2.29](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.28...@wireapp/bot-api@0.2.29) (2018-08-16)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.28"></a>
## [0.2.28](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.27...@wireapp/bot-api@0.2.28) (2018-08-15)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.27"></a>
## [0.2.27](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.26...@wireapp/bot-api@0.2.27) (2018-08-15)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.26"></a>
## [0.2.26](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.25...@wireapp/bot-api@0.2.26) (2018-08-15)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.25"></a>
## [0.2.25](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.24...@wireapp/bot-api@0.2.25) (2018-08-15)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.24"></a>
## [0.2.24](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.23...@wireapp/bot-api@0.2.24) (2018-08-15)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.23"></a>
## [0.2.23](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.22...@wireapp/bot-api@0.2.23) (2018-08-15)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.22"></a>
## [0.2.22](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.21...@wireapp/bot-api@0.2.22) (2018-08-15)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.21"></a>
## [0.2.21](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.20...@wireapp/bot-api@0.2.21) (2018-08-14)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.20"></a>
## [0.2.20](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.19...@wireapp/bot-api@0.2.20) (2018-08-14)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.19"></a>
## [0.2.19](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.18...@wireapp/bot-api@0.2.19) (2018-08-14)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.18"></a>
## [0.2.18](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.17...@wireapp/bot-api@0.2.18) (2018-08-14)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.17"></a>
## [0.2.17](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.16...@wireapp/bot-api@0.2.17) (2018-08-14)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.16"></a>
## [0.2.16](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.15...@wireapp/bot-api@0.2.16) (2018-08-14)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.15"></a>
## [0.2.15](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.14...@wireapp/bot-api@0.2.15) (2018-08-14)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.14"></a>
## [0.2.14](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.13...@wireapp/bot-api@0.2.14) (2018-08-13)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.13"></a>
## [0.2.13](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.12...@wireapp/bot-api@0.2.13) (2018-08-13)


### Bug Fixes

* **core,bot-api:** Handle missing payload bundle types ([#990](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/990)) ([09f6f63](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/09f6f63))





<a name="0.2.12"></a>
## [0.2.12](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.11...@wireapp/bot-api@0.2.12) (2018-08-10)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.11"></a>
## [0.2.11](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.10...@wireapp/bot-api@0.2.11) (2018-08-10)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.10"></a>
## [0.2.10](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.9...@wireapp/bot-api@0.2.10) (2018-08-10)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.9"></a>
## [0.2.9](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.8...@wireapp/bot-api@0.2.9) (2018-08-10)

**Note:** Version bump only for package @wireapp/bot-api





<a name="0.2.8"></a>
## [0.2.8](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.7...@wireapp/bot-api@0.2.8) (2018-08-10)




**Note:** Version bump only for package @wireapp/bot-api

<a name="0.2.7"></a>
## [0.2.7](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.6...@wireapp/bot-api@0.2.7) (2018-08-10)




**Note:** Version bump only for package @wireapp/bot-api

<a name="0.2.6"></a>
## [0.2.6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.5...@wireapp/bot-api@0.2.6) (2018-08-09)




**Note:** Version bump only for package @wireapp/bot-api

<a name="0.2.5"></a>
## [0.2.5](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.4...@wireapp/bot-api@0.2.5) (2018-08-09)


### Bug Fixes

* **bot-api:** Specify handler context ([#974](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/974)) ([8137c21](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/8137c21))




<a name="0.2.4"></a>
## [0.2.4](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.3...@wireapp/bot-api@0.2.4) (2018-08-09)




**Note:** Version bump only for package @wireapp/bot-api

<a name="0.2.3"></a>
## [0.2.3](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.2...@wireapp/bot-api@0.2.3) (2018-08-09)




**Note:** Version bump only for package @wireapp/bot-api

<a name="0.2.2"></a>
## [0.2.2](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.1...@wireapp/bot-api@0.2.2) (2018-08-09)




**Note:** Version bump only for package @wireapp/bot-api

<a name="0.2.1"></a>
## [0.2.1](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/compare/@wireapp/bot-api@0.2.0...@wireapp/bot-api@0.2.1) (2018-08-09)


### Bug Fixes

* **bot-api:** Upgrade dependencies ([#971](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/971)) ([e81d7d6](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/e81d7d6))




<a name="0.2.0"></a>
# 0.2.0 (2018-08-09)


### Features

* **bot-api:** Add Bot API (WEBFOUND-13) ([#814](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/issues/814)) ([01394ee](https://github.com/wireapp/wire-web-packages/tree/master/packages/bot-api/commit/01394ee))
