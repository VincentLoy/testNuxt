const routes = require('./config/routes');

module.exports = {
    css: [{
        src: 'assets/main.scss',
        lang: 'scss'
    }],
    build: {
        vendor: ['axios']
    },
    router: routes
};
