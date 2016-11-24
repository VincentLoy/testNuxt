/**
 * testNuxt
 * copyright 2016 Activkonnect - Vincent Loy <vincent.loy@activkonnect.com>
 * https://activkonnect.com
 */

module.exports = {
    routes: [
        {
            path: '/location/:locationSlug',
            component: 'pages/location'
        },
        {
            path: '/post/:postId',
            component: 'pages/post'
        }
    ]
};
