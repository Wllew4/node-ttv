# node-ttv
[![npm](https://img.shields.io/npm/v/node-ttv)]()
![npm bundle size](https://img.shields.io/bundlephobia/min/node-ttv?label=size)
![License](https://img.shields.io/github/license/Wllew4/node-ttv)

A Node.js wrapper for Twitch.tv's API.

This package adds a useful abstraction layer to make it easier for developers to interact with the API.

Please note that versions 2.0.0 and later are NOT backwards compatible with earlier versions. There were significant structural overhauls made to this project. Node-ttv is much easier to use now, so depending on how deeply integrated this package is in your project, migrating may not be too difficult.

# Getting Started
## Register your app
In order to interact with Twitch's API, you must have a registered application with a client ID and secret. You can register a new application [here](https://dev.twitch.tv/console/apps).

## Install node-ttv
Create a new project with either npm or yarn. Install the node-ttv package:
```
npm install node-ttv
or
yarn add node-ttv
```

## Import node-ttv and create a handle to your application
```js
const { Twitch } = require('node-ttv')

const myTwitchApplication = new Twitch(CLIENT_ID, SECRET);
```

# Non-user-specific requests
Requests that do not require user authentication can be made with no further setup required. Endpoints are sorted by resource as specificed by [Twitch.tv's API documentation](https://dev.twitch.tv/docs/api/reference). Refer to their documentation for information on endpoint behavior.

All endpoint functions return a `Promise<string>` which is a serialized JSON object. Make sure you treat the return value as a `Promise<>`, using `.then()` or `await`.
```js
myTwitchApplication.helix.chat.getGlobalEmotes().then(console.log)
```

# User-specific requests
Making requests on behalf of a user requires their authentication. Node-ttv can generate OAuth 2.0 links to send your users so they can authenticate your app with provided scopes. Read more about how authentication works [here](https://dev.twitch.tv/docs/authentication).

Your implementation is responsible for handling and storing user access tokens, as well as serving authentication links to users and retrieving access tokens from the redirect.

At this point in time there are no plans to implement support for OIDC tokens. As a result, the `Extensions` resource is not supported by node-ttv.

## Generating authentication links:
```js
const { Twitch, OAuth, Scopes } = require('node-ttv')

const myTwitchApplication = new Twitch(CLIENT_ID, SECRET);

//	Implicit code flow
let sendThisToUser = OAuth.implicitUserAccessToken(CLIENT_ID, REDIRECT_URL, [Scopes.CHANNEL_READ_REDEMPTIONS]);
let orThis = myTwitchApplication.oauth.implicitUserAccessToken(REDIRECT_URL, [Scopes.CHANNEL_READ_REDEMPTIONS]);

//	Authorization code flow
let sendThisToUser = OAuth.authorizationUserAccessToken(CLIENT_ID, REDIRECT_URL, [Scopes.CHANNEL_READ_REDEMPTIONS]);
let orThis = myTwitchApplication.oauth.authorizationUserAccessToken(REDIRECT_URL, [Scopes.CHANNEL_READ_REDEMPTIONS]);
```

## Making authenticated requests:
In this example, USER_ACCESS_TOKEN has been generated with `Scopes.CHANNEL_EDIT_COMMERCIAL` and `'123456789'` is their `broadcaster_id`.
```js
myTwitchApplication.ads.startCommercial(USER_ACCESS_TOKEN, '123456789', 30);
```

# License
Node-ttv is licensed under the MIT permissive license. You may use this package in your projects freely, and no warranty is provided. Read the provided LICENSE file for the complete license text.