## [1.34.1](https://github.com/recurser/string-is/compare/v1.34.0...v1.34.1) (2022-05-03)


### Bug Fixes

* add jest-environment-jsdom to make upgraded jest run ([81a341e](https://github.com/recurser/string-is/commit/81a341ef39f681a72553b446ea0aad7886f5d7d6))
* get jest tests passing after major-version upgrade ([83bb999](https://github.com/recurser/string-is/commit/83bb9995ac594fc3369cb59cc37d71e4946bff57))

# [1.34.0](https://github.com/recurser/string-is/compare/v1.33.1...v1.34.0) (2022-04-19)


### Bug Fixes

* make TypeScript happy ([26e8982](https://github.com/recurser/string-is/commit/26e898237d4ddd3cf15eb054c6623ce42dcce02e))
* resolve potential race conditions in the regex debugger tests ([a662287](https://github.com/recurser/string-is/commit/a662287ffa2cc770f501ee1a8079933b0681fe84))


### Features

* add a diff compare feature ([612b2dd](https://github.com/recurser/string-is/commit/612b2dd671f21ed82cff86923c06bbd3ab0eb56e))

## [1.33.1](https://github.com/recurser/string-is/compare/v1.33.0...v1.33.1) (2022-04-14)


### Bug Fixes

* encode share links with encodeURI() to avoid decoding issues with XML strings ([4c9e8a9](https://github.com/recurser/string-is/commit/4c9e8a9e142874545df5ec24d7b01c0b56ec9429))

# [1.33.0](https://github.com/recurser/string-is/compare/v1.32.0...v1.33.0) (2022-04-14)


### Features

* add a JSON to TOML converter ([5dbe0b9](https://github.com/recurser/string-is/commit/5dbe0b9364f96091ade98a814db750d11e2d87d6))
* add a query string to TOML converter ([9c15a3e](https://github.com/recurser/string-is/commit/9c15a3e5c8a3f7ce9903b28f1f1d7d7e86350e38))
* add a TOML to JSON converter ([f9efa58](https://github.com/recurser/string-is/commit/f9efa58bce3fb45fa4dfd6e38df27bef60fe43db))
* add a TOML to XML converter ([a1b93d1](https://github.com/recurser/string-is/commit/a1b93d1568465333e7c60836ffa57b1e099e5009))
* add a TOML to YAML converter ([82290c6](https://github.com/recurser/string-is/commit/82290c69b637de7756678818680f511263a06188))
* add a YAML to TOML converter ([c67ba30](https://github.com/recurser/string-is/commit/c67ba30db5f2c86ea26ad9c6ca799d8e3ff77ed9))
* add an XML to TOML converter ([9967d44](https://github.com/recurser/string-is/commit/9967d44bad43aaecc5fd83276f139c756c5ffcb6))

# [1.32.0](https://github.com/recurser/string-is/compare/v1.31.6...v1.32.0) (2022-04-12)


### Bug Fixes

* casing issues with SqlTextArea naming ([88849cf](https://github.com/recurser/string-is/commit/88849cf5122033e62e556f849eebedf02603f04f))


### Features

* add a TOML formatter ([4e4ebb9](https://github.com/recurser/string-is/commit/4e4ebb9ea3cb0e20d243f657a4db86dd7e288132))

## [1.31.6](https://github.com/recurser/string-is/compare/v1.31.5...v1.31.6) (2022-04-12)


### Bug Fixes

* remove unwanted condition from Docker Hub Github action ([4226482](https://github.com/recurser/string-is/commit/4226482fd829404220bbf5c85a668748c517331a))

## [1.31.5](https://github.com/recurser/string-is/compare/v1.31.4...v1.31.5) (2022-04-11)


### Bug Fixes

* push to Docker Hub as part of the semantic-release action ([f847bbb](https://github.com/recurser/string-is/commit/f847bbbc318b84c479512f9bf8e3fa2f362c726f))

## [1.31.4](https://github.com/recurser/string-is/compare/v1.31.3...v1.31.4) (2022-04-11)


### Bug Fixes

* use custom Github token for the release action, take 2 ([da0c2ed](https://github.com/recurser/string-is/commit/da0c2ed11604145b3617576a124b3dd64511d35a))

## [1.31.3](https://github.com/recurser/string-is/compare/v1.31.2...v1.31.3) (2022-04-11)


### Bug Fixes

* use custom Github token for the release action, so that Docker Hub can be triggered ([54c62f8](https://github.com/recurser/string-is/commit/54c62f8ffb9c518c0873acdfcfe7d681e4584f37))

## [1.31.2](https://github.com/recurser/string-is/compare/v1.31.1...v1.31.2) (2022-04-11)


### Bug Fixes

* revert Docker Hub github action trigger changes ([7d7fbae](https://github.com/recurser/string-is/commit/7d7fbaedd8c2d07d90247e64dd28b49f547080a4))

## [1.31.1](https://github.com/recurser/string-is/compare/v1.31.0...v1.31.1) (2022-04-11)


### Bug Fixes

* trigger Docker build from semantic-release ([92d7216](https://github.com/recurser/string-is/commit/92d7216a15753d6e7388d161beb7c3990a5cb07d))

# [1.31.0](https://github.com/recurser/string-is/compare/v1.30.0...v1.31.0) (2022-04-11)


### Features

* test release to trigger a Docker Hub build ([c2f6ed6](https://github.com/recurser/string-is/commit/c2f6ed63d2c8e522114f568c9696b448bfceda6f))

# [1.30.0](https://github.com/recurser/string-is/compare/v1.29.0...v1.30.0) (2022-04-11)


### Features

* publish releases to DockerHub ([53c2092](https://github.com/recurser/string-is/commit/53c20929d19f521c7b63802d722b7eb8d64c4478))

# [1.29.0](https://github.com/recurser/string-is/compare/v1.28.1...v1.29.0) (2022-04-09)


### Features

* add Docker support ([cedc917](https://github.com/recurser/string-is/commit/cedc917063928a561dc7018a5dfcf4c92534414b))

## [1.28.1](https://github.com/recurser/string-is/compare/v1.28.0...v1.28.1) (2022-04-08)


### Bug Fixes

* don't allow multiline regexes during regex identification to avoid false positives ([8df899d](https://github.com/recurser/string-is/commit/8df899ddf649b1ea05daea8a77767dc396aa3600))

# [1.28.0](https://github.com/recurser/string-is/compare/v1.27.0...v1.28.0) (2022-04-07)


### Features

* add a modifier selector for the regex debugger ([f37809c](https://github.com/recurser/string-is/commit/f37809cd12e859155fbe391abfca6d487c492755))
* don't require slashes around regexes ([e2170f6](https://github.com/recurser/string-is/commit/e2170f6f5c2a8e41ba7b0dcc60abaeb9339d75a7))

# [1.27.0](https://github.com/recurser/string-is/compare/v1.26.0...v1.27.0) (2022-04-04)


### Bug Fixes

* only import prism.css once globally ([8d7f634](https://github.com/recurser/string-is/commit/8d7f634f9f906cb89ca1b993430391954f456f3f))


### Features

* add support for multiple examples for each converter ([035126a](https://github.com/recurser/string-is/commit/035126a012182dd2a38255bd24ab4308c4be1370))

# [1.26.0](https://github.com/recurser/string-is/compare/v1.25.0...v1.26.0) (2022-04-03)


### Features

* tailor the input label to the converter ([e0a7192](https://github.com/recurser/string-is/commit/e0a7192275b837ceef4c9951bcfea5b6ba32cf91))

# [1.25.0](https://github.com/recurser/string-is/compare/v1.24.0...v1.25.0) (2022-04-03)


### Bug Fixes

* accept the 's' modifier for regexes ([4576277](https://github.com/recurser/string-is/commit/45762778fda22012d01eb8cbb2a4e13c9445f97b))
* export SqlInput.defaultOptions so that the form defaults populate correctly ([8fec68a](https://github.com/recurser/string-is/commit/8fec68ac17bf186582dd465e22fbeccb6274e2e0))


### Features

* add an SQL formatter ([44da672](https://github.com/recurser/string-is/commit/44da67229c855e4c5921bfa67510739505339c15))

# [1.24.0](https://github.com/recurser/string-is/compare/v1.23.2...v1.24.0) (2022-03-31)


### Features

* support sharing of converters and their inputs ([47a3525](https://github.com/recurser/string-is/commit/47a35253f0f312d2dc38a00e7881397d2aaddf0d))

## [1.23.2](https://github.com/recurser/string-is/compare/v1.23.1...v1.23.2) (2022-03-27)


### Bug Fixes

* add the missing main logo pointer cursor ([d72a105](https://github.com/recurser/string-is/commit/d72a105c76f1159e66e53967e35a7d02908b3f90))
* remove SVG mask-icon that looks ugly on Safari ([b01852b](https://github.com/recurser/string-is/commit/b01852b17394ed42b48e86c9322a25a9aef5e2c7))

## [1.23.1](https://github.com/recurser/string-is/compare/v1.23.0...v1.23.1) (2022-03-27)


### Bug Fixes

* don't auto-focus on mobile, since it zooms the page ([5efa5a6](https://github.com/recurser/string-is/commit/5efa5a6b290330d92fadc76d9dcbbe3e5bbdf3b7))
* fix textarea height on Safari ([375dd30](https://github.com/recurser/string-is/commit/375dd3051c5d08e109b25d75cce40c0dbedfc413))

# [1.23.0](https://github.com/recurser/string-is/compare/v1.22.0...v1.23.0) (2022-03-26)


### Bug Fixes

* replace react-responsive and styled-components with [@compiled](https://github.com/compiled) + media queries ([d99aabc](https://github.com/recurser/string-is/commit/d99aabcdff334e61e8dc1ac35e9646e055698e71))


### Features

* change the URL when a converter is selected ([ad6d16c](https://github.com/recurser/string-is/commit/ad6d16c58ae74ebf72a1e75c1c8498bef6b0a670))
* clear the input when navigating back to the home page ([639c94f](https://github.com/recurser/string-is/commit/639c94f3867d0e4810d6f1d91e9b238d2c8be400))

# [1.22.0](https://github.com/recurser/string-is/compare/v1.21.0...v1.22.0) (2022-03-22)


### Bug Fixes

* avoid layout issues in the header title on mobile ([bd6e869](https://github.com/recurser/string-is/commit/bd6e869a496c0146a93f01725f721e8d33d1510d))


### Features

* add canonical meta tags ([6709209](https://github.com/recurser/string-is/commit/67092099c8ddf9ef3b73f35435d8e8ea51dbf2e8))

# [1.21.0](https://github.com/recurser/string-is/compare/v1.20.0...v1.21.0) (2022-03-21)


### Features

* add a robots.txt file ([d93076c](https://github.com/recurser/string-is/commit/d93076c4069ee1c3be86c61159e9c96a7c7f6ad7))

# [1.20.0](https://github.com/recurser/string-is/compare/v1.19.2...v1.20.0) (2022-03-21)


### Features

* add a CSV to XML converter ([f966639](https://github.com/recurser/string-is/commit/f9666395e43e96bb94438035d533936b755be5c0))
* add a JSON to XML converter ([fce2ddb](https://github.com/recurser/string-is/commit/fce2ddb7ddaef1d758aab5f96fbb458b5c7ba628))
* add a YAML to XML converter ([5bce8f0](https://github.com/recurser/string-is/commit/5bce8f0f758386786c9ec1fb20ed7ecbb70df3e0))
* add an XML to JSON converter ([45fa76d](https://github.com/recurser/string-is/commit/45fa76d05d5f6414dc386ca4840cb9164e68d57d))
* add an XML to YAML converter ([f588f3b](https://github.com/recurser/string-is/commit/f588f3b55d8a22064da54c784670dbecbe13a5df))
* use the 'dynamicTyping' option when parsing CSVs ([f82bf54](https://github.com/recurser/string-is/commit/f82bf549d444940d6290432edb0f221b9df2a6dc))

## [1.19.2](https://github.com/recurser/string-is/compare/v1.19.1...v1.19.2) (2022-03-21)


### Bug Fixes

* revert prettier 2.6.0 upgrade since it breaks the app ([4ede389](https://github.com/recurser/string-is/commit/4ede38989609e731a1def912daeac1adc2d1a1d5))

## [1.19.1](https://github.com/recurser/string-is/compare/v1.19.0...v1.19.1) (2022-03-21)


### Bug Fixes

* fix flash-of-unstyled-content issues that were preventing true SSR ([2d12b14](https://github.com/recurser/string-is/commit/2d12b14086ef6fd11e645ff162e99b068f953c8e))

# [1.19.0](https://github.com/recurser/string-is/compare/v1.18.0...v1.19.0) (2022-03-10)


### Features

* add a landing page for each converter ([2c90bd4](https://github.com/recurser/string-is/commit/2c90bd4af1965708f7eb2efebd2dd81980f23b25))
* add a sitemap ([8ff3928](https://github.com/recurser/string-is/commit/8ff3928103576a466a5e49dabf2b9a66c7f5e6f4))
* add proper page titles and meta descriptions ([5b504cb](https://github.com/recurser/string-is/commit/5b504cb0bbeba79f9a5291064d9c73d7e69ac588))
* add Twitter and Open Graph meta tags ([9e301ce](https://github.com/recurser/string-is/commit/9e301ce1ae8e2cd391a2e54454551572aabb5a6c))

# [1.18.0](https://github.com/recurser/string-is/compare/v1.17.0...v1.18.0) (2022-03-03)


### Features

* add syntax highlighting for outputs ([5d1bcd9](https://github.com/recurser/string-is/commit/5d1bcd93cdee98378024838c84beed65c79b01a6))

# [1.17.0](https://github.com/recurser/string-is/compare/v1.16.0...v1.17.0) (2022-02-28)


### Features

* add a JSON-to-JavaScript converter ([fd96b6a](https://github.com/recurser/string-is/commit/fd96b6a4fa12d47f6ba2d76947f2f8b2702f679a))

# [1.16.0](https://github.com/recurser/string-is/compare/v1.15.0...v1.16.0) (2022-02-28)


### Features

* handle timezones provided during timestamp formatting ([d03d9a1](https://github.com/recurser/string-is/commit/d03d9a10af0f06f5a9deb6e5a0bd440c0766365b))

# [1.15.0](https://github.com/recurser/string-is/compare/v1.14.1...v1.15.0) (2022-02-20)


### Features

* make column headings labels that focus on their associated inputs ([062e60d](https://github.com/recurser/string-is/commit/062e60d5d84acc27802d3d66f03d8bd01d64b788))

## [1.14.1](https://github.com/recurser/string-is/compare/v1.14.0...v1.14.1) (2022-02-19)


### Bug Fixes

* improve copy button layout on MacOS Safari ([9c7dcfa](https://github.com/recurser/string-is/commit/9c7dcfa83c3cfcd1d166f86818af3b417e8e2842))
* improve development CSP rules for MacOS Safari ([72dddf7](https://github.com/recurser/string-is/commit/72dddf7f596f89cbd41140673190599661343451))
* linting issues raised after eslint upgrade ([cd77232](https://github.com/recurser/string-is/commit/cd772328c2398114181efcc48097ae58d610bf96))

# [1.14.0](https://github.com/recurser/string-is/compare/v1.13.0...v1.14.0) (2022-02-17)


### Features

* make timestamp detection more robust ([1386e86](https://github.com/recurser/string-is/commit/1386e86b82213d883e1ce5a889648f598b639921))

# [1.13.0](https://github.com/recurser/string-is/compare/v1.12.0...v1.13.0) (2022-02-08)


### Features

* expand the right textarea if it's longer than the left ([14e87d2](https://github.com/recurser/string-is/commit/14e87d2c0ab1721dee21239e798863b5fcb8f0df))

# [1.12.0](https://github.com/recurser/string-is/compare/v1.11.0...v1.12.0) (2022-01-31)


### Features

* make the chevron icons consistent with layout on mobile ([0b336b6](https://github.com/recurser/string-is/commit/0b336b61697b7738c1bba6eb4f9f427f3c4b83b4))

# [1.11.0](https://github.com/recurser/string-is/compare/v1.10.0...v1.11.0) (2022-01-27)


### Features

* parse natural language dates ([07218c7](https://github.com/recurser/string-is/commit/07218c7cdd5f2aece163ed5a81fba2677e3239bb))

# [1.10.0](https://github.com/recurser/string-is/compare/v1.9.0...v1.10.0) (2022-01-27)


### Features

* add keywords to trigger the current timestamp as input (now / time / timestamp) ([ce04c73](https://github.com/recurser/string-is/commit/ce04c730498e6157ec9e7c200aa59ccf1a1c6ba9))
* display timestamps in the DatetimeOutput ([ce990a8](https://github.com/recurser/string-is/commit/ce990a87ddc79db3b15d92569eb13ee6b66c751d))

# [1.9.0](https://github.com/recurser/string-is/compare/v1.8.0...v1.9.0) (2022-01-26)


### Features

* add a UUID generator ([c330d62](https://github.com/recurser/string-is/commit/c330d62577059b3d23e17e4c66cba07fb6e76eed))

# [1.8.0](https://github.com/recurser/string-is/compare/v1.7.0...v1.8.0) (2022-01-23)


### Features

* add a use-as-input button ([4178f2d](https://github.com/recurser/string-is/commit/4178f2d1e02c197fdccab136c5118a38b0574cd8))

# [1.7.0](https://github.com/recurser/string-is/compare/v1.6.0...v1.7.0) (2022-01-17)


### Bug Fixes

* add missing IconButton tooltip required for accessibility ([dcad5cd](https://github.com/recurser/string-is/commit/dcad5cd5aed75a535fb4f937a32a876ebefc9f4b))
* add missing unique key to RegexOutput elements ([9fdd9e2](https://github.com/recurser/string-is/commit/9fdd9e2bd451c261b304b0b51ddeb0db37b146a7))
* disable TextAreas consistently ([c47748f](https://github.com/recurser/string-is/commit/c47748fae5963fae5a33b4e95e18f9be4715d621))
* fix unwanted exception when identifying YAML ([183beb5](https://github.com/recurser/string-is/commit/183beb565976a64a34b556d93ef1c79b6490d457))
* remove blank lines from CSV input ([868a4a7](https://github.com/recurser/string-is/commit/868a4a7e959ab86cf66010d3811bea3be25ee625))


### Features

* add a copy button ([f8b1b30](https://github.com/recurser/string-is/commit/f8b1b309bdd778cbec6e45addba72e1b6502462e))

# [1.6.0](https://github.com/recurser/string-is/compare/v1.5.1...v1.6.0) (2022-01-16)


### Features

* select the most recently used converter ([7db47ba](https://github.com/recurser/string-is/commit/7db47baa4e4d0fba8b8abee221c3f97b13c550b6))


### Performance Improvements

* don't setConverter() unless it has actually changed ([f661d8d](https://github.com/recurser/string-is/commit/f661d8d7baee522f0d6f7d05c4e7850802d7e292))

## [1.5.1](https://github.com/recurser/string-is/compare/v1.5.0...v1.5.1) (2022-01-09)


### Bug Fixes

* fix edge cases in the regular expression debugger ([81fd450](https://github.com/recurser/string-is/commit/81fd4504a10fd733eca4ee3b09ed3e02d12ceaae))

# [1.5.0](https://github.com/recurser/string-is/compare/v1.4.0...v1.5.0) (2022-01-09)


### Features

* add a regex debugger ([ef9b07c](https://github.com/recurser/string-is/commit/ef9b07cacf17c4ac88615fa49692a8e18599a52a))


### Performance Improvements

* simplify the regex-for-identifying-regexes ([f23584e](https://github.com/recurser/string-is/commit/f23584e3cfcc179fffaccd8b8e27b8420bfa3e38))

# [1.4.0](https://github.com/recurser/string-is/compare/v1.3.0...v1.4.0) (2022-01-05)


### Features

* enable strikethrough for Markdown conversion ([52cbf6d](https://github.com/recurser/string-is/commit/52cbf6dab9839fafc24a393590d4db03870b645f))

# [1.3.0](https://github.com/recurser/string-is/compare/v1.2.0...v1.3.0) (2022-01-05)


### Features

* add a Markdown-to-HTML converter ([90d2956](https://github.com/recurser/string-is/commit/90d29565a9e69ad401e5d2dcdc39db7c6e383e19))

# [1.2.0](https://github.com/recurser/string-is/compare/v1.1.0...v1.2.0) (2022-01-05)


### Features

* expand the output textarea for long strings ([51589a9](https://github.com/recurser/string-is/commit/51589a9c70118c0a306aabbe959f9a6e7dd804c6))


### Performance Improvements

* remove inefficient multi-line CSS regexes that were causing freezes in long strings ([cc246d2](https://github.com/recurser/string-is/commit/cc246d2986a64c30bc2eaf47121165dbfe0d7b5b))

# [1.1.0](https://github.com/recurser/string-is/compare/v1.0.0...v1.1.0) (2022-01-05)


### Features

* add a Markdown formatter ([75e3c58](https://github.com/recurser/string-is/commit/75e3c588791241883ae440f024b2a9bce7878506))

# 1.0.0 (2021-12-31)


### Features

* Add a LESS converter. ([7249e9b](https://github.com/recurser/string-is/commit/7249e9b3631e58cc6d2274b5c350cd7396d324a9))
