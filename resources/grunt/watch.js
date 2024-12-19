module.exports = {
    js: {
        files: ['build/js/**/*.js'], // Files to watch
        tasks: ["jshint:moduleproduction","concat:moduleproduction"], // Tasks to run when JS files change
        options: {
            spawn: false,
        },
    },
    css: {
        files: ['build/scss/**/*.scss'], // Files to watch
        tasks: ['sass:moduledevelopment'], // Tasks to run when CSS files change
        options: {
            spawn: false,
        },
    },
};
