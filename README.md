# Hackernews clone PWA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

# About

This app is created just for fun in order to improve the skills in some aspects of Angular development.
What is used there:
- HackerNews API integration
- Angular components "inheritance"
- Hierarchical components for comment threads
- Karma + Jasmine unit test examples for some of core services
- PWA integration
- Angular best practises for project arcitecture and Observable usage
- LESS with some custom functions
- Integration with Travis

## API

The app uses public [HackerNews API](https://hackernews.api-docs.io/v0/overview/introduction), so in the project the authorization and other actions that're bound up with user profile haven't been implemented yet.

## Installation

Install node ([on Windows](https://nodejs.org/en/download/), [on Ubuntu 18.04](https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/) or via [nvm](https://github.com/nvm-sh/nvm))  & [yarn](https://yarnpkg.com/lang/en/docs/install/)

```bash
yarn install #installs dependencies
yarn start # runs app
```

## Build and test locally

To build and test the app, run
```bash
yarn run build-prod
```

The `dist` folder will be generated.

To test the app, install [http-server](https://www.npmjs.com/package/http-server) globally, and then run
```bash
cd dist/ && http-server
```

When the window is open, add '/index.html' to the end of the path
