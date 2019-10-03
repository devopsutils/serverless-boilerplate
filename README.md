<h1 align="center">Serverless BoilerPlate</h1>

<div align="center">
	<a href="https://serverless.com">
		<img src="http://public.serverless.com/badges/v3.svg" alt="Serverless" />
	</a>
	<a href="https://travis-ci.org/mariancraciun1983/serverless-boilerplate">
		<img src="https://secure.travis-ci.org/mariancraciun1983/serverless-boilerplate.svg?branch=master" alt="Travis CI" />
	</a>
	<a href="https://coveralls.io/r/mariancraciun1983/serverless-boilerplate">
		<img src="https://img.shields.io/coveralls/mariancraciun1983/serverless-boilerplate?branch=master&style=flat" alt="Coverage Status" />
	</a>
	<a href="https://david-dm.org/mariancraciun1983/serverless-boilerplate">
		<img src="https://david-dm.org/mariancraciun1983/serverless-boilerplate/status.svg" alt="Dependencies Status" />
	</a>
	<a href="https://david-dm.org/mariancraciun1983/serverless-boilerplate">
		<img src="https://david-dm.org/mariancraciun1983/serverless-boilerplate/dev-status.svg"  alt="devDependencies Status" />
	</a>
	<a href="https://www.codefactor.io/repository/github/mariancraciun1983/serverless-boilerplate">
		<img src="https://www.codefactor.io/repository/github/mariancraciun1983/serverless-boilerplate/badge" alt="code quality">
	</a>
	<a href="https://deepscan.io/dashboard#view=project&tid=5557&pid=7430&bid=75083">
		<img src="https://deepscan.io/api/teams/5557/projects/7430/branches/75083/badge/grade.svg" alt="DeepScan grade">
	</a>
	<a href="https://greenkeeper.io/">
		<img src="https://badges.greenkeeper.io/mariancraciun1983/serverless-boilerplate.svg" alt="Greenkeeper badge" />
	</a>
	<a href="https://bettercodehub.com/">
		<img src="https://bettercodehub.com/edge/badge/mariancraciun1983/serverless-boilerplate?branch=master" alt="BCH compliance" />
	</a>
	<a href="https://codebeat.co/projects/github-com-mariancraciun1983-serverless-boilerplate-master">
		<img src="https://codebeat.co/badges/ff609ebe-e3db-409f-a833-4b6a7c557ef0" alt="codebeat badge" />
	</a>
	<a href="https://opensource.org/licenses/MIT">
		<img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License" />
	</a>
</div>

<br />

## About the boilerplate

This code can be used as a starting point for a new Serverless based project. It contains a working example of a very basic movie rental shop.  The code was developed in node v10.16.3.
This example is being used by the [React Boilerplate](https://github.com/mariancraciun1983/react-boilerplate). 
There is also an example of a CI/CD automated configuration [Serverless CI/CD](https://github.com/mariancraciun1983/serverless-boilerplate-ci)

## Getting started

You can get started quickly with:

```bash
git clone https://github.com/mariancraciun1983/serverless-boilerplate.git
nvm use
# skip this to use npx serverless in the local folder
npm install -g serverless
yarn
yarn run dev
# Now the APIs (offline mode) will listen to 0.0.0.0:4000

curl http://localhost:4000/dev/api/genres | json_pp
#{
#   "genres" : [
#      {
#         "name" : "Action",
#         "slug" : "action"
#		 .....


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
- package:prod - packager for production - useful in CI/CD
- deploy:dev - deploy the dev version
- deploy:prod - deploy the prod version

## Configuration

The config folder contains files for local and prod environments. You can also override parameters at run-time.
Also the serverless.yml points to eu-central-1 as default. That can be changed at runtime with the `--region eu-central-1` extra parameter, or just edited in the config.

```bash
# deploy using yarn script alias with default settings from config/prod.yml
yarn run package:prod

# run deploy manually with custom params
serverless package --region us-east-1
# or
npx serverless package --region us-east-1
```
## Deployment

In order to deploy your stack to AWS, first make sure that credentials are configured [AWS - Credentials](https://serverless.com/framework/docs/providers/aws/guide/credentials/). Once done, check your config files (serverless.yml and config/.*.yml) and than:

```bash
yarn run deploy:prod # or serverless deploy --stage=prod
# Serverless: Packaging service...
# Serverless: Excluding development dependencies...
# Serverless: Creating Stack...
# Serverless: Checking Stack create progress...
# .....
# Serverless: Stack create finished...
# Serverless: Uploading CloudFormation file to S3...
# Serverless: Uploading artifacts...
# Serverless: Uploading service serverless-boilerplate.zip file to S3 (158.73 KB)...
# Serverless: Validating template...
# Serverless: Updating Stack...
# Serverless: Checking Stack update progress...
# ...............................................................................................................................................................
# Serverless: Stack update finished...
# Service Information
# service: serverless-boilerplate
# stage: prod
# region: us-east-1
# stack: serverless-boilerplate-prod
# resources: 53
# api keys:
#   None
# endpoints:
#   POST - https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/auth/login
#   POST - https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/auth/register
#   POST - https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/auth/token
#   GET - https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/genres
#   GET - https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/movies
#   GET - https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/cart
#   POST - https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/cart


curl https://ctgiklbj9k.execute-api.us-east-1.amazonaws.com/prod/api/genres | json_pp
#{
#   "genres" : [
#      {
#         "name" : "Action",
#         "slug" : "action"
#		 .....

```

# Destroying

When you're done with this project, you can easily remove all resources created with:

```bash

serverless remove --stage prod #or dev
# or
npx serverless remove --stage prod #or dev

```

#Others
You could configure the region,app-name and the stage via command line. This is useful in a CI/CD:

```bash
npx serverless deploy --name serverless-boilerplate-ci --region eu-central-1 --stage dev
```

