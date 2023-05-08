<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ yarn install
```

## Running the app

```bash
# development
$ yarn run start

# development with watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Migrations

Create a migration

```bash
$ npm run migrate:create <path>
$ yarn migrate:create <path>

# example
$ npm run migrate:create src/migrations/migration_name
$ yarn migrate:create src/migrations/migration_name
```

Generate a migration

```bash
$ npm run migrate:g <path>
$ yarn migrate:g <path>

# example
$ npm run migrate:g src/migrations/migration_name
$ yarn migrate:g src/migrations/migration_name

```

Run a migration

```bash
$ npm run migrate:run
$ yarn migrate:run
```

Revert a migration

```bash
$ npm run migrate:rollback
$ yarn migrate:rollback
```

Migrations scripts with yarn
```bash
"typeorm": "ts-node ./node_modules/typeorm/cli",
"migrate:create": "yarn typeorm migration:create",
"migrate:g": "yarn typeorm -d ./src/config/data.source.ts migration:generate",
"migrate:run": "yarn typeorm migration:run -d ./src/config/data.source.ts",
"migrate:rollback": "yarn typeorm -d ./src/config/data.source.ts migration:revert"
```

Migrations scripts with npm
```bash
"typeorm": "ts-node ./node_modules/typeorm/cli",
"migrate:create": "npm run typeorm -- migration:create",
"migrate:g": "npm run typeorm -- -d ./src/config/data.source.ts migration:generate",
"migrate:run": "npm run typeorm migration:run -- -d ./src/config/data.source.ts",
"migrate:rollback": "npm run typeorm -- -d ./src/config/data.source.ts migration:revert"
```

## Recommendations

- To install ts-node globally
```bash
$ npm install -g ts-node
```
- Copy migrations scripts into the package.json
