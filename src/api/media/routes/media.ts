export default {
    routes: [
        {
            method: 'GET',
            path: '/media',          // final URL is /api/media
            handler: 'media.find',
            config: {
                find: {
                    auth: true,            // toggle to false if the route should be public
                    policies: [],          // e.g. 'global::is-logged-in'
                    middlewares: [],       // rate-limit, transform headers, etc.
                }
            },
        },
    ],
};
