# node-ttv
<	README IS WORK IN PROGRESS	>
A Node.js wrapper for Twitch.tv's helix API.
This package can help developers exchange data with Twitch without the headache of web requests.
As of right now (v1.0.1), this package is very new, and not all features have been tested, but they *should* work.

## Installing
Install using [`npm`](https://docs.npmjs.com/).
```sh
npm i node-ttv
```

## Importing & Registering Your Application
First, import node-ttv into your project. All functionality in this package can be accessed through the `Twitch` object.
```js
const {Twitch} = require("node-ttv");
```

Next, the `Twitch` object must be initialized with your `refresh token`, `client id`, and `secret`.

You can obtain your `client id` and `secret` by registering an application with Twitch [here](https://dev.twitch.tv/console/apps/create).
Use whatever name you like, and for the OAuth Redirect URL, enter `http://localhost`.
Once you create the app, you should see your `client id` and be given the option to create a new `secret`.

Open this url in your browser. Replacing `CLIENT_ID` with the `client id` for your registered application. Replace `SCOPES` with a list of scopes separated by `+`. To figure out which scopes your application will need, refer to [Twitch's documentation](https://dev.twitch.tv/docs/api/reference).


`
https://id.twitch.tv/oauth2/authorize?response_type=code&redirect_uri=http://localhost/&client_id=`CLIENT_ID`&scope=`SCOPES



As an example, a URL may look like this:

`https://id.twitch.tv/oauth2/authorize?response_type=code&redirect_uri=http://localhost/&client_id=xdfitb1fcc3axffemy5r7b56k0pp8z&scope=channel:edit:commercial+channel:manage:redemptions+clips:edit`

Authorize your app for those scopes. You will then be redirected to what looks like a broken page. Check the url, and you will find it takes this form:
`http://localhost/?code=`OAUTH CODE`&scope=`SCOPES

Copy this `OAUTH CODE` somewhere because you will need it for the next step.
Open this URL in your browser:
`https://id.twitch.tv/oauth2/token?grant_type=authorization_code&redirect_uri=http://localhost/&client_id=`CLIENT_ID`&client_secret=`SECRET`&code=`OAUTH_CODE
