const respondScss = `
@mixin respond($breakpoint) {
    @if($breakpoint == v1300){
        @media  only screen and (max-width: 81.25em) {@content}
    };

    @if($breakpoint == v970){
        @media  only screen and (max-width: 60.625em) {@content}
    };

}
`;

module.exports = respondScss;