module.exports = {

    options: {
        curly: true,
        eqeqeq: false,
        eqnull: true,
        browser: true,
        globals: {
            jQuery: true
        },
        esversion: 9
    },
    moduleproduction: {
        src: [
            "build/js/*.js"
        ]
    }
};