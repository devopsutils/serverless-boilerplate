<h1 align="center">ServerLess BoilerPlate</h1>

<div align="center">
  <a href="https://travis-ci.org/mariancraciun1983/serverless-boilerplate">
    <img src="https://secure.travis-ci.org/mariancraciun1983/serverless-boilerplate.svg?branch=master" alt="Travis CI" />
  </a>
  <a href="https://coveralls.io/r/mariancraciun1983/serverless-boilerplate">
    <img src="https://img.shields.io/coveralls/mariancraciun1983/serverless-boilerplate?branch=master&style=flat" alt="Coverage Status" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
  </a>
</div>

<br />

## About the boilerplate

This code can be used as a starting point for a new ServerLess based project. It contains a working example of a very basic movie rental shop.  The code was developed in node v10.16.3.
This example is being used by the [React Boilerplate](https://github.com/mariancraciun1983/react-boilerplate). 
There is also an example of a CI/CD automated configuration [ServerLess CI/CD](https://github.com/mariancraciun1983/serverless-boilerplate-ci)

## Getting started

You can get started quickly with:

```
git clone https://github.com/mariancraciun1983/serverless-boilerplate.git
nvm use
npm install -g serverless
yarn
yarn run dev
```

## Directory Structure

The most important paths are:

- \_\_mock\_\_ - data used by APIs as there are no db connection
- \_\_test\_\_ - unit tests
- config - local|prod defaults
- handlers - handlers configurations
- src
  - endpoints - handlers implementation
  - utils - utilities

# NPM Scripts

To support development, testing and building there are a bunch of scripts like:

- dev - serverless in offline mode (useful for development/local use)
- lint - alias of the lint:app lint:styles lint:backend
- lint:src - linter for the frontend code
- lint:tests - linter for the test code
- test - test runner for unit tests
- test:watch- test runner in watch mode useful while writing tests
- build:prod - builder for production - useful in CI/CD
- deploy:dev - deploy the dev version
- deploy:prod - deploy the prod version

## Configuration

The config folder contains files for local and prod environments. You can also override parameters at run-time.

```
# deploy using yarn script alias with default settings from config/prod.yml
yarn run deploy:prod

# run deploy manually with custom params
serverless deploy --region us-east-1
```
