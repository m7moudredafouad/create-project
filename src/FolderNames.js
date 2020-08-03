const html = require('../assets/html');
const mainScss = require('../assets/mainScss');
const baseScss = require('../assets/baseScss');
const respondScss = require('../assets/respondScss');
const webPack = require('../assets/webpack');
const webPackProd = require('../assets/webpackProd');
const gitignore = require('../assets/gitignore');
const packageJSON = require('../assets/package');
const eslint = require('../assets/eslint')


const folderNames = [
    ['css'],
    ['sass', [
        ['component'],
        ['abstracts'],
        ['pages'],
        ['base', [
            ['text:base.scss', baseScss],
            ['text:respond.scss', respondScss]]
        ],
        ['layout'],
        ['text:main.scss', mainScss]
    ]
    ],
    ['assets'],
    ['scripts', [
        ['src', [
            ['text:app.js', '']
        ]],
        ['build']
    ]],
    ['text:index.html', html],
    ['text:webpack.config.js', webPack],
    ['text:webpack.config.prod.js', webPackProd],
    ['text:.gitignore', gitignore],
    ['text:package.json', packageJSON],
    ['text:.eslintrc.json', eslint]
];

module.exports = folderNames