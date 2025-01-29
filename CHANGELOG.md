## [4.9.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.9.0...v4.9.1) (2025-01-29)


### Bug Fixes

* **Menu:** add missing arg to showContextMenu and document it ([c03db3e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c03db3e0d55f2ba14a8d82ba1380e9838769efe1))

# [4.9.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.8.3...v4.9.0) (2025-01-02)


### Features

* add MenuSeparator component ([484a882](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/484a882015ceb51c2c80e08151e79056e751ac15))

## [4.8.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.8.2...v4.8.3) (2024-12-14)


### Bug Fixes

* **utils:** add new nav root name ([a43cd7f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a43cd7f3c56a2e30e332417e5b4abde8f4492be1))

## [4.8.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.8.1...v4.8.2) (2024-11-20)


### Bug Fixes

* **Footer:** add missing focus/nav properties ([#113](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/113)) ([8117693](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/8117693427e4dba2f3b5bd24f36704d8d5e65ae2))

## [4.8.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.8.0...v4.8.1) (2024-10-11)


### Bug Fixes

* **DialogCheckbox:** prevent some potential issues in dialogcheckbox ([bf58e08](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bf58e08e4b5b183737c9ad43a858b642ce593f93))
* prevent issues where toString may not be a function (what) ([e965816](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e96581614471524cbf91bf962742df867ba3c3e9))

# [4.8.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.7.4...v4.8.0) (2024-10-05)


### Bug Fixes

* **components/Modal:** dont break in desktop ui ([bea9ac7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bea9ac777452b883c2f3f3ebf8510c22c4577cd0))
* **components/Router:** dont break in desktop ui ([980df68](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/980df687e7b7bf389f478e831f992fb9475eeb15))


### Features

* **utils/react:** add some window-related utils ([063dedb](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/063dedbbc1573a825571c675bf6bfa8a1bc1c6cd))

## [4.7.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.7.3...v4.7.4) (2024-10-04)


### Bug Fixes

* **DialogCheckbox:** don't access getters to prevent their side effects from breaking the component ([241b22c](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/241b22cad711621a1695dfd11da857f13c3fffdf))

## [4.7.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.7.2...v4.7.3) (2024-10-03)


### Bug Fixes

* **components:** fix missing components on oct 2 2024 beta ([0f9fb5a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0f9fb5a3b8ef4f9978025a28323ab080fb0e7a4c))

## [4.7.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.7.1...v4.7.2) (2024-09-16)


### Bug Fixes

* **utils:** fix potential race condition in findSP ([3aa07dc](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/3aa07dc9ce798ff8d1148424ee9e8a8bf2ba78c6))

## [4.7.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.7.0...v4.7.1) (2024-08-08)


### Bug Fixes

* **utils/react:** fix potential race condition in injectFCTrampoline ([4c97097](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/4c97097757919580a380b70785e6c161de6b03cc))

# [4.7.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.6.0...v4.7.0) (2024-07-28)


### Features

* **router:** support desktop bpm overlay ([7eb484d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7eb484d55c6be6e7844878eb47eda55591a6cf51))

# [4.6.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.5.0...v4.6.0) (2024-07-26)


### Features

* **classMapper:** add findClassByName back ([2b8d2ae](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2b8d2ae4dbd9a0c4a59a43be0101a0a8fe1c518f))

# [4.5.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.4.0...v4.5.0) (2024-07-24)


### Features

* **classMapper:** add classModuleMap, make findClass require ID ([a370c1f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a370c1f7d3dca0db56a346c98c28ed9681a415e0))
* **webpack:** refactor to prepare for classMapper changes ([d83bada](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d83bada4af2d16c750955de9a52f94a0080a2c14))

# [4.4.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.3.1...v4.4.0) (2024-07-18)


### Features

* **utils/react:** add injectFCTrampoline ([44fdf9e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/44fdf9ed3b9a676a88b0ddc6a1c2c89d46ff7651))

## [4.3.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.3.0...v4.3.1) (2024-07-17)


### Bug Fixes

* **Menu/MenuGroup:** rewrite filter to work on beta and prevent future errors ([d64c42a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d64c42ac310d3c3266c4ff610d9ec5ab6c7707b6))

# [4.3.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.2.2...v4.3.0) (2024-07-09)


### Features

* **utils:** react tree patching api ([2c3a9f8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2c3a9f81de0b63364bb31f4a4dd8e559784ece16))

## [4.2.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.2.1...v4.2.2) (2024-07-04)


### Bug Fixes

* **SteamSpinner:** add background option ([c04f024](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c04f024b34b1148c965850965127f9fd44204157))

## [4.2.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.2.0...v4.2.1) (2024-06-27)


### Bug Fixes

* **errorboundary:** work around broken react types ([3ef9648](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/3ef96483550020cecf656b94a73d2bb9313bda07))

# [4.2.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.1.1...v4.2.0) (2024-06-27)


### Features

* **components:** add ErrorBoundary ([dcdbb2d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/dcdbb2d6c7c0b72197f04153d7c3e73e9e71ea5c))

## [4.1.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.1.0...v4.1.1) (2024-06-27)


### Bug Fixes

* **ReorderableList:** avoid mutating props ([#109](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/109)) ([bd1dc85](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bd1dc85b9202c8ec6ca994177417574fdd71cbd7))

# [4.1.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.0.1...v4.1.0) (2024-06-27)


### Features

* **release:** release v4.1.0 ([b040444](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b04044451a9dc3633fe624e47dd58c7ea206d0a3))

## [4.0.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v4.0.0...v4.0.1) (2024-06-27)


### Bug Fixes

* **release:** empty commit to bump to v4.0.1 ([2bfe624](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2bfe62409f775a69124e0f2e853ae0b1668a9c36))

# [4.0.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.25.0...v4.0.0) (2024-06-27)


### Bug Fixes

* **ci:** empty commit so semantic-release shuts up ([8cb7c27](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/8cb7c273eb61c1f949844291b2864c11bf746058))
* **ci:** temp remove npm publisher ([abfd2c0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/abfd2c010508ddf6e18149374dc52b50402ffb4c))
* **components:** fix missing children prop ([688c747](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/688c7471cde96bf9e9a71c47d19bd63cff7a66b3))
* **components:** forgot one ([e6e8c91](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e6e8c91ec7ea711f6c147f28e300f745dcbd24f4))
* **Field:** add children prop ([2a78cc0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2a78cc011671ab123fb6356f54102e531a7953a8))
* fixes for jun 26 beta ([7e0cb15](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7e0cb153b197267f49b5e1f513b54a880bf3710f))
* **Menu:** work around ConfigContext error ([9f26209](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/9f262097b9808a0366bb52cd24844371bbe65316))
* **package:** fix ts memes ([ea19d62](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/ea19d62dabfbecad97c1ab9384c676f8a018f96b))
* **package:** pin react properly ([62b454f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/62b454f71255d5e1898677909a63612615e09083))
* **package:** unbreak react ([b1e5038](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b1e503853ff6d39f1e86a6180f355e73b9fd6925))
* **plugin:** shim definePlugin for now [ci skip] ([0cd498b](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0cd498beacbd23efa3b771880ff0a4df3f636836))
* **utils/react:** shut it ts ([d91f49e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d91f49e728b613e24b40d7e81d47fd1f3bd92372))


### Features

* add v4 webpack api and port everything to it ([bffd530](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bffd530bda9a49aae603c323c0a2b4328eee968d))


### BREAKING CHANGES

* **ci:** v4 release
* **ci:** v4 release

## [3.26.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.26.0...v3.26.1) (2024-05-25)


### Bug Fixes

* **Field:** add children prop ([2a78cc0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2a78cc011671ab123fb6356f54102e531a7953a8))
* **plugin:** shim definePlugin for now [ci skip] ([0cd498b](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0cd498beacbd23efa3b771880ff0a4df3f636836))

# [3.26.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.25.0...v3.26.0) (2024-05-24)


### Bug Fixes

* **utils/react:** shut it ts ([d91f49e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d91f49e728b613e24b40d7e81d47fd1f3bd92372))


### Features

* add v4 webpack api and port everything to it ([bffd530](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bffd530bda9a49aae603c323c0a2b4328eee968d))

# [3.25.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.24.5...v3.25.0) (2024-03-09)


### Bug Fixes

* **staticclasses:** unbreak on latest beta ([17b99df](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/17b99dfed8e4e146d0f4f5e78a950db5b10ae2b4))


### Features

* **classMapper:** add class mapper ([a8eeb91](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a8eeb917e22ef72905d448e159d70375ebf77ba6))

## [3.24.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.24.4...v3.24.5) (2024-02-03)


### Bug Fixes

* **finds:** make modal and scroll components work on latest betaa ([c2b0fad](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c2b0fad298512aa8778c677275bd497bd8f7b00e))

## [3.24.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.24.3...v3.24.4) (2024-01-22)


### Bug Fixes

* **types:** fix incorrect `as` on many components leading to any types ([bb12921](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bb129218634b77ddb1d73b0fe38a91898073707c))

## [3.24.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.24.2...v3.24.3) (2024-01-20)


### Bug Fixes

* **router:** wait 2s if internal navigators init fails ([95d977d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/95d977df452d3b73b007c98854deab1842fa6fbf))

## [3.24.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.24.1...v3.24.2) (2024-01-20)


### Bug Fixes

* **navigation:** Fix on chromium 109 ([#100](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/100)) ([ebf496b](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/ebf496bf61cffa1a5205b4a094fd2279011bffa9))

## [3.24.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.24.0...v3.24.1) (2023-12-13)


### Bug Fixes

* **utils/react:** support react 18, add getReactRoot ([11dd82b](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/11dd82bbb1814ac4d2fa9d381372e325daba2558))

# [3.24.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.23.1...v3.24.0) (2023-12-03)


### Features

* **static-classes:** add BasicAppDetailsSectionStylerClasses ([#99](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/99)) ([e27b638](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e27b638d26e41332b1554dbd55ca0c55a1821138))

## [3.23.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.23.0...v3.23.1) (2023-11-09)


### Bug Fixes

* **webpack:** don't break if a module fails to load ([5203ce3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/5203ce348afd727da0c8c52f6d8f8a16712f88d2))

# [3.23.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.22.1...v3.23.0) (2023-10-11)


### Features

* **static-classes:** add more css classes ([#94](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/94)) ([30e3194](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/30e319425bd4b0ee481dd7bd3245dacd90806afb))

## [3.22.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.22.0...v3.22.1) (2023-10-10)


### Bug Fixes

* **useQuickAccessVisible:** use the "Page Visibility API" instead of focus/blur ([4c4fda4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/4c4fda47e3d9fd936b493c5965634a0ff443014f))

# [3.22.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.8...v3.22.0) (2023-08-09)


### Bug Fixes

* add patch indicator to prevent crashes ([3170779](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/3170779c6b3d02ea17f7b6c1fbd57e00498ffe4f))


### Features

* add components found while working on tabmaster ([4f8f65d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/4f8f65d42979149cc80b4a86545d3d0d9bf14bf3))
* add components found while working on tabmaster ([fd0d011](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/fd0d011cbf05790c5a1078970b5be72f9267402c))

## [3.21.8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.7...v3.21.8) (2023-06-27)


### Bug Fixes

* the typescript compiler was eating the enum ([c9b5839](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c9b583945c1cb5267b41a821743590a841572abe))

## [3.21.7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.6...v3.21.7) (2023-06-26)


### Bug Fixes

* add patch indicator to prevent crashes ([#88](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/88)) ([9128c1e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/9128c1e7dadb98a8926d3dba9907a01cc78d90cf))

## [3.21.6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.5...v3.21.6) (2023-06-22)


### Bug Fixes

* reposition parameter for file picker V2 ([ee51dc5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/ee51dc5fc0dd5bdc2b0b9e10aa27607fbe51f491))

## [3.21.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.4...v3.21.5) (2023-06-22)


### Bug Fixes

* missing parameter ([8b54ee9](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/8b54ee990ee4d9b51174737979c35ab7ad92ed7a))

## [3.21.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.3...v3.21.4) (2023-06-22)


### Bug Fixes

* move the new file picker api as v2 ([8bfeae4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/8bfeae4b3593b2efa0aa075a0d9e0b5926cdf169))

## [3.21.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.2...v3.21.3) (2023-06-22)


### Bug Fixes

* total is not needed as a return value to plugins ([979a630](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/979a630f2b02ac4a1ac19e38002244f9dfe97177))

## [3.21.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.1...v3.21.2) (2023-06-18)


### Bug Fixes

* **SidebarNavigation:** allow ReactNode for page title ([44d9b90](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/44d9b90cdcfb9e6441fdb1e4b21fe844f1f29fd5))

## [3.21.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.21.0...v3.21.1) (2023-05-28)


### Bug Fixes

* **reorderable-list:** open label type from string to ReactNode ([fb5f043](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/fb5f043ba9eeed0209960c8ae4ae597c2831b8c8))

# [3.21.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.7...v3.21.0) (2023-05-19)


### Bug Fixes

* **Utils:** return null when SP not found ([18d341f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/18d341f82acf843ff830d1bf3d44678f3f2eda52))


### Features

* **StaticClasses:** add new GamepadUI classes ([3ca8c43](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/3ca8c43a542b1049c4e203ad186e555401fbfbfe))

## [3.20.7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.6...v3.20.7) (2023-05-10)


### Bug Fixes

* **decky:** fix decky on latest beta ([74a7cba](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/74a7cbaf94538c68a01f5fa707935c4d21570c5f))

## [3.20.6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.5...v3.20.6) (2023-04-29)


### Bug Fixes

* **QuickAccessTab:** set decky tab ID to 999 ([5d5cb31](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/5d5cb31638070deae9970a93c587b447d5e56559))

## [3.20.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.4...v3.20.5) (2023-04-04)


### Bug Fixes

* reorderable list no longer toggles on backout ([7e1182a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7e1182a83f7fafbec6fe115a72f8b64b71c119a4))

## [3.20.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.3...v3.20.4) (2023-04-04)


### Bug Fixes

* **SteamSpinner:** oh apparently the class was moved outside the component for some reason?????? ([b8ddf3d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b8ddf3d927401d04c0fde8ebc8960639369b8ad3))

## [3.20.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.2...v3.20.3) (2023-04-04)


### Bug Fixes

* **SteamSpinner:** fix the fix ([79d229b](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/79d229be50d26e2510af0ea16cdf6644371a5967))

## [3.20.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.1...v3.20.2) (2023-04-04)


### Bug Fixes

* **SteamSpinner:** dont error on latest desktop beta ([19819b7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/19819b7a5bc9434fa802f4e8dca4f4cb6921df07))

## [3.20.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.20.0...v3.20.1) (2023-04-03)


### Bug Fixes

* **useQuickAccessVisible:** make it work again ([7dacb23](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7dacb23e8be7b1f076cdd0869a4e3a3902b07ec5))

# [3.20.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.19.2...v3.20.0) (2023-04-03)


### Bug Fixes

* **Field:** remove style ([53faf55](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/53faf55df1484204e276cd21a32703c2d7809332))
* fixed missing export ([b480d39](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b480d397c4251f42c1f24ff5e74322d22e313f05))
* list didn't update on prop change ([b146eab](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b146eab8d7e1338afa54a168a2fd895e716c2bb2))


### Features

* added doc comments ([dfcb3be](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/dfcb3bec19900e099ae3766771e120dbd4f229f5))
* added reorderable list and updated fieldProps ([3c171cf](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/3c171cfb8ff18ed02eeb569a183c9d43fd0b4f57))
* changed ReorderableList to working version ([5b166d6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/5b166d6db879200b049e872cba327957ba5fb705))
* made requested changes and ran prettier ([b1b2f4f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b1b2f4fa2da755efd65b82b15b52196f89fb09c0))
* refactoring mostly complete ([cea315a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/cea315a52c285b31ad4e5d0a03104c674ae4f7f5))
* reorderable list now saves on backout ([b1591f8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b1591f86bbd36e160818626760e0717ee50878e0))
* **ReorderableList:** add animations, clean up ([26fae13](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/26fae13c8ebd3f11f134c3bc0edfc971afd42fff))
* support for non-interactable reordering ([dbd01b1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/dbd01b11cafe9b102cc371b9812f99aec718d106))
* support for user specified icon ([47a6fdd](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/47a6fddc89b8f9110252c5e19a6e95152c367dbf))

## [3.19.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.19.1...v3.19.2) (2023-03-07)


### Bug Fixes

* **Item:** add highlightOnFocus prop ([c53f87b](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c53f87b4a9273b377853bfff1d27474ebd6e564a))

## [3.19.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.19.0...v3.19.1) (2023-02-23)


### Bug Fixes

* refactoring to fix for feb 22 2023 beta ([0b6dc24](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0b6dc24c0da2d7644e185425e975787657f8bba1))

# [3.19.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.11...v3.19.0) (2023-02-22)


### Features

* added reorderable list and updated fieldProps ([#57](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/57)) ([5a074b5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/5a074b5bb68c675c484a7b693f67a67488be9bcf))

## [3.18.11](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.10...v3.18.11) (2023-02-18)


### Bug Fixes

* **Navigation:** fix NavigateToExternalWeb ([82214fe](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/82214fef4c0a383776631fbb754550fe69f9000d))
* **Navigation:** fix NavigateToExternalWeb ([c53d7f8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c53d7f8448d8aad76dc699f1f309bdd547ee14df))

## [3.18.10](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.9...v3.18.10) (2023-01-17)


### Bug Fixes

* **SuspensefulImage:** fix changing src ([9723854](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/9723854ddca53d7708e1effbddec9e5ead22d5de))

## [3.18.9](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.8...v3.18.9) (2023-01-16)


### Bug Fixes

* **Navigation:** fix on stable ([4affd4a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/4affd4aaec088f01d0f30af48cb4daa34acf26b1))

## [3.18.8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.7...v3.18.8) (2023-01-16)


### Bug Fixes

* **Navigation:** fix timing issue in decky-loader ([58b69f0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/58b69f0d6c43356c4f0ed183802d5bf7fb80e978))

## [3.18.7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.6...v3.18.7) (2023-01-16)


### Bug Fixes

* un-break navigation on stable ([2e66e5a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2e66e5a555f44009d24e332eca82453ba930baf7))

## [3.18.6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.5...v3.18.6) (2023-01-13)


### Bug Fixes

* **Router:** fix Navigation for the millionth time ([aac2d52](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/aac2d520a68b1074ba1ae988d6c92f7881a296d7))

## [3.18.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.4...v3.18.5) (2022-12-21)


### Bug Fixes

* fixed prop interfaces ([#70](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/70)) ([0b50f2c](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0b50f2cf0baa76fc00aa0a41a8435d7a512bff19))

## [3.18.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.3...v3.18.4) (2022-12-16)


### Bug Fixes

* **modals:** fix ModalRoot again ([fd94842](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/fd94842647e51dd9a104e170e0c5ee2bebce12d6))

## [3.18.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.2...v3.18.3) (2022-12-12)


### Bug Fixes

* **Router:** update Router interface to SteamOS3.4 and add Navigation ([#52](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/52)) ([f0379e5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/f0379e5d19279863b571e66918bc9107efedb612))

## [3.18.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.1...v3.18.2) (2022-12-11)


### Bug Fixes

* **useQuickAccessVisible:** remove invalid prop access ([#66](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/66)) ([767dc2f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/767dc2fcee97d8b6c2d331ae29704d9b469de51a))

## [3.18.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.18.0...v3.18.1) (2022-12-11)


### Bug Fixes

* **findSP:** fallback to last active context ([#53](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/53)) ([6f14da1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/6f14da152acc4757b814844f1b77bf83dd98d77e))

# [3.18.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.17.0...v3.18.0) (2022-12-11)


### Features

* **DialogCheckbox:** Add DialogCheckbox component ([#58](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/58)) ([88f245d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/88f245d476a6477e9fc0cd35e9b675961ecbc26c))

# [3.17.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.16.2...v3.17.0) (2022-12-11)


### Features

* **ControlsList:** Add ControlsList component ([#61](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/61)) ([c586afb](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c586afb97d59928ecb703b5a254ed1b9405e2c7e))

## [3.16.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.16.1...v3.16.2) (2022-12-11)


### Bug Fixes

* **Marquee:** replace default export with named export ([cd0635e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/cd0635e94f98499f9f5fc24a7fd4b93efe7dfc38))

## [3.16.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.16.0...v3.16.1) (2022-12-11)


### Bug Fixes

* **FooterLegend:** change description types to ReactNode ([#62](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/62)) ([d24136e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d24136ecb6b0c5239b68723e8f92a4822aa7b590))

# [3.16.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.15.0...v3.16.0) (2022-12-11)


### Features

* **Marquee:** Add Marquee component ([#63](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/63)) ([925ea8c](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/925ea8c3ceaaf6ff2f79b8808908a9b144a4fcff))

# [3.15.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.14.0...v3.15.0) (2022-12-11)


### Features

* **Focusable:** add noFocusRing prop type ([#65](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/65)) ([cc29dda](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/cc29ddaf578e21ab2abe1cd266f1d15debee0637))

# [3.14.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.13.0...v3.14.0) (2022-12-10)


### Features

* **toast:** add showToast/playSound to ToastData ([#64](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/64)) ([7ba1229](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7ba1229a4e24fea587b96dc8b078200faf45ddee))

# [3.13.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.12.0...v3.13.0) (2022-11-29)


### Features

* **Menu:** add more missing props ([#60](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/60)) [CI SKIP] ([678ba21](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/678ba216f1e194986b0c391398e6f73536cd0102))

# [3.12.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.11.1...v3.12.0) (2022-11-28)


### Features

* **MenuItem:** add missing props ([#59](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/59)) ([c84a091](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c84a09146935f0942265b7a1e4aadc40e8cf22dc))

## [3.11.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.11.0...v3.11.1) (2022-11-20)


### Bug Fixes

* **Footer:** add types for ActionDescriptionMap ([2ec9519](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2ec9519b7d6d1cc0d232853ce05a773953b37c5a))

# [3.11.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.10.0...v3.11.0) (2022-11-18)


### Features

* **classes:** add "appDetailsClasses" ([#55](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/55)) ([ed98d14](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/ed98d14b37cf09500afd88e7c8e9c03749119b38))

# [3.10.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.9.0...v3.10.0) (2022-11-18)


### Features

* **classes:** add appDetailsHeaderClasses ([#54](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/54)) ([3229162](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/32291620b403f8b65cf378343454a3f2668fb6ee))

# [3.9.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.8.0...v3.9.0) (2022-11-16)


### Features

* **Dialog:** add "focusable" button prop ([#51](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/51)) ([e167ef5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e167ef5a138a3edc004db2365334f8455c177132))

# [3.8.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.14...v3.8.0) (2022-11-11)


### Features

* **routerhook:** add global components support ([215156d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/215156d31688faac9028627379e5a3ac4d64ec46))

## [3.7.14](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.13...v3.7.14) (2022-11-05)


### Bug Fixes

* **Menu:** fix on Steam beta ([82768e0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/82768e0415d084deb2af39beb3f9273a83e819de))
* **Modal:** fix on Steam beta ([e44187f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e44187fe4b9d3e3c9e94490669591599dc5246ba))

## [3.7.13](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.12...v3.7.13) (2022-11-02)


### Bug Fixes

* **useQuickAccessVisible:** make it work in beta ([#49](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/49)) ([e1f64a3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e1f64a38de85073e5cea74ecea4b9cde9a783ecc))

## [3.7.12](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.11...v3.7.12) (2022-10-29)


### Bug Fixes

* **Item:** change title and description types to ReactNode ([0ed054f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0ed054fae972ffd36299b142bd693f80388480a6))

## [3.7.11](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.10...v3.7.11) (2022-10-28)


### Bug Fixes

* **package.json:** train wtf ([789e163](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/789e16380fd01a6b46188c7a1174a55c18c8dead))

## [3.7.10](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.9...v3.7.10) (2022-10-28)


### Bug Fixes

* **tabs:** shut up typescript ([75f3588](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/75f35882f27252e1255208953a6e801c68d5dcec))

## [3.7.9](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.8...v3.7.9) (2022-10-28)


### Bug Fixes

* **tabs:** fix on stable for real this time i think ([a074277](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a074277bb58428a64295154ebf96aceb96e654a7))

## [3.7.8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.7...v3.7.8) (2022-10-26)


### Bug Fixes

* **Field:** fix this time for real ([#44](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/44)) ([cfef1dc](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/cfef1dc320a5f649d66c3af365cd6aa2d88e46ea))

## [3.7.7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.6...v3.7.7) (2022-10-26)


### Bug Fixes

* **Field:** remove incompatible properties ([#42](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/42)) ([0010a1f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0010a1fceedc417aa25b709d066341da97d42444))

## [3.7.6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.5...v3.7.6) (2022-10-26)


### Bug Fixes

* **Field:** add override for onClick type ([#43](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/43)) ([fe75dfb](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/fe75dfb5f4fb1ec9417cc07dc714c71820945748))

## [3.7.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.4...v3.7.5) (2022-10-26)


### Bug Fixes

* **Field:** add types for focusing field ([#41](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/41)) ([bedb6b8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bedb6b8bb90e021a60e47a93709d6f48e0bd75c6))

## [3.7.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.3...v3.7.4) (2022-10-26)


### Bug Fixes

* **docs:** change arg format ([ed0b92d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/ed0b92de2ec13a585f6524b45eef0ab538d87448))
* **tabs:** fix on stable ([f16e0b2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/f16e0b29f8e1de500e8f436db659d1ad99d4eaa6))

## [3.7.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.2...v3.7.3) (2022-10-25)


### Bug Fixes

* **tabs:** it returns ([3c553a2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/3c553a227d1aa7b03c4431ff968f336b4f871801))

## [3.7.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.1...v3.7.2) (2022-10-24)


### Bug Fixes

* **tabs:** unkill build ([3dbca1a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/3dbca1a0567592a597e70ce5e9bef157f709c765))

## [3.7.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.7.0...v3.7.1) (2022-10-24)


### Bug Fixes

* **Tabs:** temp remove until we have a way to grab it on beta ([25c33b2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/25c33b2a05a30c3c72008c5f459c3b77f819db5a))

# [3.7.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.6.1...v3.7.0) (2022-10-24)


### Features

* **modal:** support for latest steamos preview ([5f0470c](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/5f0470c351dc4ecb24ea3e928ff0b0199c399fa4))

## [3.6.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.6.0...v3.6.1) (2022-10-19)


### Bug Fixes

* **plugin:** export RoutePatch ([#39](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/39)) ([c44c66f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c44c66facd4e158aa4fe0a69f62a2ca3add805c1))

# [3.6.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.5.6...v3.6.0) (2022-10-15)


### Features

* **plugin:** add alwaysRender ([2fc2060](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2fc2060a6c0d9414d1c36a1a022fdc6f2cd7f8bb))

## [3.5.6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.5.5...v3.5.6) (2022-10-08)


### Bug Fixes

* **Dialog:** remove not exported dialog button ([#37](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/37)) ([5a5218a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/5a5218a7c43f6a90fc4de5f7a0cd524d1cd298d6))

## [3.5.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.5.4...v3.5.5) (2022-10-08)


### Bug Fixes

* **sidebarnavigation:** no dont ([0ce1b54](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0ce1b5499df699f602aa83ab87ad8b246d133eac))

## [3.5.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.5.3...v3.5.4) (2022-10-08)


### Bug Fixes

* **sidebarnavigation:** allow null pags ([d6b00b0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d6b00b07337f7a9d38813eeec7c0a848d5c15f17))

## [3.5.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.5.2...v3.5.3) (2022-10-08)


### Bug Fixes

* **tabs:** fix props and add example ([4024b76](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/4024b76918eea43e43a24c162a937877f18627f0))

## [3.5.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.5.1...v3.5.2) (2022-10-08)


### Bug Fixes

* **Tabs:** make onShowTab required ([7161e75](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7161e757e9c98d677510e03eb2606ce58152f3b1))

## [3.5.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.5.0...v3.5.1) (2022-10-08)


### Bug Fixes

* **Tabs:** actually export it lmao ([0e0e0d2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0e0e0d204adc8d888f05e98edb6c1a1a171d00bb))

# [3.5.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.4.0...v3.5.0) (2022-10-08)


### Features

* **Tabs:** initial tabs component, props, docs ([abbd3cd](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/abbd3cddae24039cbc9b7d955924431e8fbacf94))

# [3.4.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.3.5...v3.4.0) (2022-10-06)


### Features

* **hooks:** Added useParams hook ([#36](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/36)) ([e2920dd](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e2920dd91e81d915a2319280d8473df71a4e4232))

## [3.3.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.3.4...v3.3.5) (2022-10-02)


### Bug Fixes

* **docs:** set categorizeByGroup to true ([0f205e8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/0f205e891694e2cee211b0c2db74a6dda2432507))

## [3.3.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.3.3...v3.3.4) (2022-10-02)


### Bug Fixes

* **docs:** build each component as a seperate page ([fbd936d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/fbd936dc1fe4c23c72f4ee27af95abc004382acd))

## [3.3.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.3.2...v3.3.3) (2022-10-02)


### Bug Fixes

* **modal:** make children optional ([#34](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/34)) ([99ad754](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/99ad7543a9966b8ff3f4ec01e6f05c94e5242c93))

## [3.3.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.3.1...v3.3.2) (2022-10-02)


### Bug Fixes

* **modal:** allow children ([40871af](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/40871af8539858f435c83123a56d4b31b63d627d))

## [3.3.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.3.0...v3.3.1) (2022-10-02)


### Bug Fixes

* **SidebarNavigation:** add more props ([#29](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/29)) ([ed0be5e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/ed0be5e87e964ed57cc99b40ff55fe35a2f518b2))

# [3.3.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.2.2...v3.3.0) (2022-10-02)


### Features

* **Menu:** add nested menu groups + more props ([#30](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/30)) ([4233128](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/4233128c7ee8c6e5ab4ee74385c7b1b911d507a6))

## [3.2.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.2.1...v3.2.2) (2022-09-29)


### Bug Fixes

* **modal:** extend props for modals ([#32](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/32)) ([1fbe55a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/1fbe55aa544c9e84e2b3e2d6af9950db2fe7546c))

## [3.2.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.2.0...v3.2.1) (2022-09-24)


### Bug Fixes

* **modal:** update showModal types ([#27](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/27)) ([6996e54](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/6996e5424f33467ef5bb93f47614058c127cb3ee))

# [3.2.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.1.4...v3.2.0) (2022-09-20)


### Features

* **FooterLegend:** add GamepadEvent ([130dfa2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/130dfa24c51c3a670cca9ebc38e4891618532bef))

## [3.1.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.1.3...v3.1.4) (2022-09-19)


### Bug Fixes

* **License:** update license in package.json ([064c161](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/064c161b6736bb5574f28cb986c5899620fd69fe))

## [3.1.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.1.2...v3.1.3) (2022-09-18)


### Bug Fixes

* **DialogButton:** fix ref type ([74aefc7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/74aefc7b3c19a98fb607e78c4063c098a2e12546))

## [3.1.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.1.1...v3.1.2) (2022-09-18)


### Bug Fixes

* **DialogButton:** fix types, add ref types ([db41e74](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/db41e74cf9f584301e59556e64a5c2371df18ed0))

## [3.1.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.1.0...v3.1.1) (2022-09-18)


### Bug Fixes

* **Button:** add types to DialogButton ([29201fa](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/29201fadafff6bdaa0f8fe7d7806cfa88ec545ab))

# [3.1.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v3.0.0...v3.1.0) (2022-09-18)


### Features

* **components:** add FocusRing ([b05f846](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b05f84658a1b91bd260f0acd7d0984c2ed714e06))

# [3.0.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v2.0.0...v3.0.0) (2022-09-09)


### Bug Fixes

* **button:** add style prop ([d6a08fe](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d6a08feca0f7c42e88b4d227b2953a28ac6c424d))
* **textfield:** extend HTMLAttributes ([71c7afa](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/71c7afa1a641b6651e6e73ff5575b665e5e3c48e))


### Features

* **modal:** add more props, refactor ([26017e7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/26017e7de4600cc677a8a1e0881f2e58b3d5fe65))
* **serverAPI:** add FilePicker ([8eb921e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/8eb921e8b787a8e5045badff58cd9a1a54038692))


### BREAKING CHANGES

* **modal:** ModalRoot ->ConfirmModal
add the actual ModalRoot which does not contain buttons

# [2.0.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.8.3...v2.0.0) (2022-09-04)


### Features

* **patcher:** rewrite to support multiple patches ([076d9eb](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/076d9eb5e8f22bfa49afc242608698da2ded50e4))


### BREAKING CHANGES

* **patcher:** All usage of *Patch functions must now store the result and call .unpatch()
unpatch() has been removed.

## [1.8.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.8.2...v1.8.3) (2022-09-03)


### Bug Fixes

* **plugin:** Export ServerResponse for use in plugin-loader.tsx ([#20](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/20)) ([d01c7b3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d01c7b3904c12142a58f78cbb93a4c1ecb438280))

## [1.8.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.8.1...v1.8.2) (2022-08-28)


### Bug Fixes

* **utils:** Mutable variable must be non-const ([#19](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/19)) ([1dd48cd](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/1dd48cd4c42989c75ee6859ebf8b857c027ff0f5))

## [1.8.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.8.0...v1.8.1) (2022-08-26)


### Bug Fixes

* **utils:** update wrapReactClass impl. and defaults for prop argument ([#17](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/17)) ([55bd06a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/55bd06a5ee9468f572aed8f78be4d0acaaffe45a))

# [1.8.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.8...v1.8.0) (2022-08-26)


### Features

* **components:** add Carousel component ([cf137c4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/cf137c43b4962977650e6ce0fad554b6ae966e43))
* **Focusable:** add FooterLegend props to Focusable and Field ([c25fe58](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/c25fe58f082d70a34443ac3c8b32b4528a4b01fb))

## [1.7.8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.7...v1.7.8) (2022-08-20)


### Bug Fixes

* **Dropdown:** correct Dropdown types ([#15](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/15)) ([a09af35](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a09af357c7e750377feefad86ab417b19484cb60))

## [1.7.7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.6...v1.7.7) (2022-08-20)


### Bug Fixes

* **FieldProps:** Add "bottomSeparator" option ([#16](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/16)) ([490a1f7](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/490a1f77fa98a988f0cae61d74370bf3fa96336c))

## [1.7.6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.5...v1.7.6) (2022-08-18)


### Bug Fixes

* **TextFieldProps:** Add "disabled" option to TextFieldProps ([#14](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/14)) ([af98a76](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/af98a76b86fb05942b9554adb369adbeaf27e70f))

## [1.7.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.4...v1.7.5) (2022-08-18)


### Bug Fixes

* **ButtonItem:** update to account for both prop settings ([6be0644](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/6be06446f2a7e0357b830be116fd25810c427dd5))

## [1.7.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.3...v1.7.4) (2022-08-18)


### Bug Fixes

* updates for webpack v5 ([a672230](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a672230b0051dd942988554ec663ea7bfcd61cfe))

## [1.7.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.2...v1.7.3) (2022-08-17)


### Bug Fixes

* **Router:** Add more members to Router interface ([#12](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/12)) ([7d3b5e8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7d3b5e8123f6eeead1e2e227985069e54fe52572))

## [1.7.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.1...v1.7.2) (2022-08-17)


### Bug Fixes

* **utils:** allow prop reassigns to fail ([a592883](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a592883a2eba52ba18876989acf939d12fa61fd3))

## [1.7.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.7.0...v1.7.1) (2022-08-17)


### Bug Fixes

* **utils:** better method to wrap react classes ([e644de3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e644de35d70680d17d70e89cc9b929a5aae08b48))

# [1.7.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.6.2...v1.7.0) (2022-08-17)


### Features

* **utils:** add wrapReactClass ([d237bd4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d237bd48e4b9e6436d7daefdf70327875e9e940d))

## [1.6.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.6.1...v1.6.2) (2022-08-15)

## [1.6.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.6.0...v1.6.1) (2022-08-13)


### Bug Fixes

* **wrapReactType:** try another method ([b7dc1d6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b7dc1d6275ed28b1e37b6cb512b2c5d1600a8f63))

# [1.6.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.5.1...v1.6.0) (2022-08-13)


### Features

* **Utilities:** add wrapReactType utility ([7cf45cf](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7cf45cf3718d6e5295115f28a5f4dd24c6ff14e3))

## [1.5.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.5.0...v1.5.1) (2022-08-10)


### Bug Fixes

* **security:** update for minimist pollution exploit ([1de979f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/1de979f7135c8d5eea1faca3d480d662c5e41d3d))

# [1.5.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.4.0...v1.5.0) (2022-08-10)


### Features

* **ServerAPI:** add Toaster to serverAPI ([e2126af](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e2126afd06f339a22dbbaea89b834157a5975b96))

# [1.4.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.3.0...v1.4.0) (2022-08-08)


### Features

* **utils:** add findInTree and findInReactTree ([b21dfcd](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/b21dfcdb661fd7ad43213756dadb6cfdf0ac1e94))

# [1.3.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.2.4...v1.3.0) (2022-08-02)


### Features

* **plugin:** api for patching existing routes ([5b29447](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/5b29447cfa597773a81aa233da9362346683505d))

## [1.2.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.2.3...v1.2.4) (2022-07-25)


### Bug Fixes

* **Modal:** add closeModal ([994b9e2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/994b9e2cc6f41da3d813e6f339bd2fd30e4fa3ad))

## [1.2.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.2.2...v1.2.3) (2022-07-25)


### Bug Fixes

* **Modal:** add another prop ([2fdfcdd](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2fdfcdd4788ea0d6483e92729c3102212f3ec0fb))

## [1.2.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.2.1...v1.2.2) (2022-07-25)


### Bug Fixes

* **Modal:** add more props to typings ([97997ad](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/97997adfaf1a68ef436279e6e48f34f5eaa9531c))

## [1.2.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.2.0...v1.2.1) (2022-07-13)


### Bug Fixes

* **ProgressBar:** extend correct prop type ([944a902](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/944a9024ff20f0b596869564d014d7dd73e74254))

# [1.2.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.1.0...v1.2.0) (2022-07-13)


### Features

* **ProgressBar:** add new progress bars ([d9e4ff3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d9e4ff3ebd22a31306f564e7f8ad82879c8fb699))

# [1.1.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.0.2...v1.1.0) (2022-07-09)


### Features

* **Router.tsx:** adds more methods to router ([#9](https://github.com/SteamDeckHomebrew/decky-frontend-lib/issues/9)) ([602f93a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/602f93ae6a5ceca5383b888cd4803638799558c5))

## [1.0.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.0.1...v1.0.2) (2022-07-07)


### Bug Fixes

* **Plugin:** support non-ui plugins ([51c418d](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/51c418d560247c917125cd5534a978256724e5f3))

## [1.0.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v1.0.0...v1.0.1) (2022-06-29)


### Bug Fixes

* **package:** enable tree shaking ([58933f8](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/58933f827ce2e2ae9b162da4e0061a7591c5759d))

# [1.0.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.12.3...v1.0.0) (2022-06-23)


### Code Refactoring

* **components:** rename Field components ([9bd9622](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/9bd96227a0bb295dcc29abca71e37983307f0505))


### BREAKING CHANGES

* **components:** Toggle -> ToggleField Slider -> SliderField & add Toggle component

## [0.12.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.12.2...v0.12.3) (2022-06-23)


### Bug Fixes

* **Field:** description is a string you idiot ([4697749](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/46977496fd4cbe266c370fcffe59a9d9b7543a92))

## [0.12.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.12.1...v0.12.2) (2022-06-23)


### Bug Fixes

* **Field:** title -> label ([da4c79b](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/da4c79b5aeb3c589527e17ad29610a8e3f929b79))

## [0.12.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.12.0...v0.12.1) (2022-06-23)


### Bug Fixes

* **components:** export FIeld ([a87e1bb](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a87e1bb46f749e10ea2b94a011df48f162834c25))

# [0.12.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.11.1...v0.12.0) (2022-06-23)


### Features

* **components:** add Field ([7d82a82](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7d82a82e9c4db59832593cb6f0f78775b252dc69))

## [0.11.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.11.0...v0.11.1) (2022-06-23)


### Bug Fixes

* **Router:** make specifying quick access tab not required ([7efc034](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7efc0347f7aa22773feccb0763280c4fd1c4a231))

# [0.11.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.10.5...v0.11.0) (2022-06-20)


### Features

* **utils:** add sleep util ([db64f34](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/db64f3472542b080b1d470c6b8d7aa441db0bfe6))

## [0.10.5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.10.4...v0.10.5) (2022-06-20)


### Bug Fixes

* **patcher:** why the hell did i do it that way ([2afb7f1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2afb7f16bb219013d338bc4e002605d32235385c))

## [0.10.4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.10.3...v0.10.4) (2022-06-19)


### Bug Fixes

* **plugin:** correct return type on injectCssIntoTab ([1ce15d2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/1ce15d261f4726a2f8bdaff7c8a98497f2622969))

## [0.10.3](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.10.2...v0.10.3) (2022-06-18)


### Bug Fixes

* **ServerAPI:** add injectCssIntoTab to serverAPI typings ([823a274](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/823a2745f9717ed2d2a5d95e2ef25739bffc18c9))

## [0.10.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.10.1...v0.10.2) (2022-06-16)


### Bug Fixes

* **Router:** add NavigateBackOrOpenMenu() ([077334e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/077334e376fb42283e094f0b57c818c580c6f7ba))

## [0.10.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.10.0...v0.10.1) (2022-06-16)


### Bug Fixes

* **Focusable:** add ref prop, fix event types ([f1e20cd](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/f1e20cd0b54622d634202c85cca920323e4df336))

# [0.10.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.9.1...v0.10.0) (2022-06-10)


### Features

* **components:** remove HorizontalFocus, add Focusable ([9beab5f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/9beab5f7e913f2ef2a8a3047046a524d3007c3b8))

## [0.9.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.9.0...v0.9.1) (2022-06-09)


### Bug Fixes

* **SuspensefulImage:** fix export ([dddb703](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/dddb703a2e712bf2e9d7e172a414c63ffd6a1cc9))

# [0.9.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.8.0...v0.9.0) (2022-06-09)


### Features

* **custom-components:** add SuspensefulImage ([6324282](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/6324282b480f358a3d5936ab6d08ab239d640997))

# [0.8.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.7.2...v0.8.0) (2022-06-09)


### Features

* **components:** add HorizontalFocus ([4d30efc](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/4d30efc33b5398b91e756695fefa91cc37f83ff1))

## [0.7.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.7.1...v0.7.2) (2022-06-08)


### Bug Fixes

* **package:** fix pnpm peer dependencies errors ([e5e561e](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/e5e561edd67994b8c55f99c1228e47d77b1c2ee2))

## [0.7.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.7.0...v0.7.1) (2022-06-08)


### Bug Fixes

* **Router:** add NavigateToStore to interface ([dd5c42c](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/dd5c42c57d9ce6266f56237607bf37d8b5bd3b4c))
* **spinners:** add SVG props ([24244f6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/24244f6e91e39a11bb964ee2779662084dcd0fd0))

# [0.7.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.6.0...v0.7.0) (2022-06-08)


### Features

* **components:** added shared item-props, progressbar, and more types for slider ([4328385](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/43283853916f3993d92f6841b12f7ee47667e75b))

# [0.6.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.5.1...v0.6.0) (2022-06-08)


### Bug Fixes

* **husky:** wrong script for husky caused problems when installing ([bc2bec4](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bc2bec4b839d691e20beb090327a359c9e93f1cc))


### Features

* **dropdown:** add dropdown ([a99fb4a](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a99fb4a22dcea3b6cd2a52f0dbd274d9a10f2e35))
* **sidebar-navigation:** add sidebar navigation component ([d8794ef](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/d8794ef4d36b25e600123d41696b0d5cc10dc2af))

## [0.5.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.5.0...v0.5.1) (2022-06-06)


### Bug Fixes

* **classes:** switch static-classes to findModule ([244ae12](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/244ae128da03e0687f1ba0b0e5b5b548b581277a))

# [0.5.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.4.2...v0.5.0) (2022-06-06)


### Features

* **utils:** add joinClassNames util ([f34b9de](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/f34b9de97f61eb5b075d6adedfcacfa5e097943b))

## [0.4.2](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.4.1...v0.4.2) (2022-06-06)


### Bug Fixes

* **classes:** add gamepadDialogClasses and quickAccessControlsClasses ([2e7b4b6](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/2e7b4b664a673b46b402b995fb58f0ce8ffbafac))

## [0.4.1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.4.0...v0.4.1) (2022-06-05)


### Bug Fixes

* **textfield:** correct type for onChange callback ([32c355f](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/32c355f2a7e0b6ca6592b956e8174d217766bc5c))

# [0.4.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.3.0...v0.4.0) (2022-06-05)


### Bug Fixes

* **typings:** export all prop types ([7f9dfc5](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/7f9dfc5910dfc172ba161d9b63763e85eb289a43))


### Features

* **textfield:** extract TextField component ([a3c1a7c](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/a3c1a7c7b73eae475574a13b6ff9c75ff78cbcb6))

# [0.3.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.2.0...v0.3.0) (2022-06-04)


### Features

* **typings:** add Navigate to router typings ([f124480](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/f124480af8082d24730ed03fdf88742f76abc026))

# [0.2.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.1.0...v0.2.0) (2022-06-04)


### Features

* **router:** expose GetQuickAccessTab and rename QuickAccessTabs to QuickAccessTab ([bf0c2b1](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/bf0c2b17bfc4e67a8aa90cfee6a91bd1482720d4))

# [0.1.0](https://github.com/SteamDeckHomebrew/decky-frontend-lib/compare/v0.0.6...v0.1.0) (2022-06-04)


### Features

* **router:** types for steam router ([62bf0ea](https://github.com/SteamDeckHomebrew/decky-frontend-lib/commit/62bf0eaffa83d85245a038ffe3819315bd02f045))
