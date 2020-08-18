# Rakuten TV technical test

Technical test for Rakuten TV. This project is `client-side`

## Technologies
- Node.js v12.18.3
- React.js v16.13.1
- Redux.js v4.0.5
- React router v5.2.0
- Webpack v 4.44.1
- EcmaScript 6, 7, 8
- nvm

## Getting Started

Clone project:
``` shell
$ git clone git@github.com/andreybejarano/rakuten-technical-test.git
```
## Prerequisites

This project uses Node.js version 12.18.3 or higher, if you have NVM run the following:
``` shell
$ nvm install
$ nvm use
```

## Installing
Install dependencies
``` shell
$ npm install
```

## Development
For development run the following on a terminal:
``` shell
$ npm run dev
```
When development mode is executed, the default browser opens automatically; otherwise, open your browser on http://localhost:5000 this is restarted when changes to the source are saved

## Built to Production
Run the following on a terminal:
``` shell
$ npm run build
```
This create dir dist with all statics builded to send to web server

## Run on web server for production
This project is `client-side`. When you try run on production you have to be in the same domain that the API beacause it blocks `CORS`, you should two option for run in your local if you have Linux or mac as operating sistem; the firts one is edit your `/etc/hosts` and add `127.0.0.1       local.rakuten.tv` then you open a brower on this URL, for example http://local.rakuten.tv:{PORT}. (I use [http-server.js](https://www.npmjs.com/package/http-server) for testing it)


