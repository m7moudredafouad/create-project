module.exports = `{
    "name": "movanewapp",
    "version": "1.0.0",
    "description": "",
    "main": "scripts/build/bundle.js",
    "scripts": {
        "build": "webpack",
        "build:dev": "webpack-dev-server",
        "build:prod": "webpack --config webpack.config.prod.js",
        "compile:sass": "node-sass sass/main.scss css/style.css -w",
        "build:sass": "node-sass sass/main.scss css/style.css --output-style compressed"
    },
    "author": "m7moudredafouad",
    "license": "ISC",
    "browserslist": "> 0.2%, not dead",
    "devDependencies": {
        "@babel/core": "^7.11.0",
        "@babel/preset-env": "^7.11.0",
        "babel-loader": "^8.1.0",
        "clean-webpack-plugin": "^3.0.0",
        "eslint": "^7.5.0",
        "eslint-config-google": "^0.14.0",
        "webpack": "^4.44.1",
        "webpack-cli": "^3.3.12",
        "webpack-dev-server": "^3.11.0",
        "node-sass": "^4.14.1"
    }
  }
  `