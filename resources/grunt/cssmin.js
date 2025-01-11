module.exports = {
    options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
    },
    target: {
        files: [
            {
                expand: true,
                cwd: '../assets/css',
                src: ['*.css', '!*.min.css'],
                dest: '../assets/css',
                ext: '.min.css',
                extDot: 'last'
        }
        ]
    }
};
