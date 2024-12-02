const sass = require('node-sass');

module.exports = {
    moduledevelopment: {
        options: {
            implementation: sass,
            update: true,
            style: 'nested'
        },
        files: {
            "../assets/css/bootstrap.css": "node_modules/bootstrap/scss/bootstrap.scss",
            "../assets/css/paypal.css": "build/scss/paypal.scss",
            "../assets/css/paypal-admin.css": "build/scss/paypal-admin.scss",
        }
    },

    moduleproduction: {
        options: {
            implementation: sass,
            update: true,
            style: 'compressed'
        },
        files: {
            "../assets/css/bootstrap.css": "node_modules/bootstrap/scss/bootstrap.scss",
            "../assets/css/paypal.css": "build/scss/paypal.scss",
            "../assets/css/paypal-admin.css": "build/scss/paypal-admin.scss",
        }
    }
};

