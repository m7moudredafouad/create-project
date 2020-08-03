const baseScss = `
$mainColor: #FFF;

*,
*::before,
*::after{
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

html{
    box-sizing: border-box;
    font-size: 62.5%;
}

body{
    font-family: 'Lato', sans-serif;
    font-size: 300;
    line-height: 1.6;
}

.container{
    display: grid;
}
`;

// eslint-disable-next-line no-undef
module.exports = baseScss