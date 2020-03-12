# Spotify-Website-Rework
Spotify Website Rework (Semester 5 - CS344 Web Engineering)

https://developer.spotify.com/web-api/authorization-guide/

## Installation

The authorization_code runs on Node.js. On [its website](http://www.nodejs.org/download/) you can find instructions on how to install it. You can also follow [this gist](https://gist.github.com/isaacs/579814) for a quick and easy way to install Node.js and npm.

Once installed, clone the repository, change directory to `/web-api` and install its dependencies running:

    $ npm install

### Using your own credentials
You will need to register your app and get your own credentials from the Spotify for Developers Dashboard.

To do so, go to [your Spotify for Developers Dashboard](https://beta.developer.spotify.com/dashboard) and create your application. Change `Redirect URIs` to:

* http://localhost:8888/callback

Once you have created your app, replace the `client_id`, `redirect_uri` and `client_secret` in the `/web-api/authorization_code/app.js` with the ones you get from My Applications.

## Running
In order to run, open the folder `/web-api/authorization_code` and run its `app.js` file:

    $ cd web-api/authorization_code
    $ node app.js

Then, open `http://localhost:8888` in a browser, log in with your spotify account, copy everything after `http://localhost:8888/#access_token=` and paste in `js/dashboard.js` at Line 4.

Run `dashboard.html`.
