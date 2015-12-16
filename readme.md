# Webpack Babel React SCSS Starter
Want to start developing with React/ES6/Sass/Webpack/Hotloader but don't know where to start? Look no further!

## Installation

Installation is easy. First run

`npm install`

This might take up to a minute, there are lots of dependencies, so be patient! After everything is installed, run

`npm start`

Voila! A browser will open localhost:3000/client/index.html, but you will have to refresh it once to activate the react-hot-loader.

If you are getting this error:

```
Error: listen EADDRINUSE
    at exports._errnoException (util.js:746:11)
    at Server._listen2 (net.js:1156:14)
    at listen (net.js:1182:10)
    at net.js:1280:9
    at GetAddrInfoReqWrap.asyncCallback [as callback] (dns.js:81:16)
    at GetAddrInfoReqWrap.onlookup [as oncomplete] (dns.js:99:10)
```

run `npm run kill` to kill any other server processes.
