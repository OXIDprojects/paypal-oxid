module.exports = function (grunt) {

    // measures the time each task takes
    require('time-grunt')(grunt);

    // load grunt config
    require('load-grunt-config')(grunt);

    require('load-grunt-config')(grunt, {
        configPath: grunt.option('configPath') || require('path').resolve('grunt'), // Set the path to the config directory
        init: true, // Automatically initialize the configurations
        loadGruntTasks: true, // Automatically load tasks from package.json dependencies
    });
};
