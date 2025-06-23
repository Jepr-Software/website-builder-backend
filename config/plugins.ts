export default () => ({
    upload: {
        config: {
            breakpoints: {
                128: 128,
                256: 256,
                384: 384,
                420: 420,
                512: 512,
                640: 640,
                768: 768,
                920: 920,
                1024: 1024,
                1280: 1280,
                1536: 1536,
                2048: 2048,
            },
            providerOptions: {
                localServer: {
                    maxage: 300000 * 12 * 24 * 365,
                },
            },
        },
    },
    // 'webp-converter': {
    //     enabled: true,
    //     config: {
    //         // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
    //         mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'],
    //         options: {
    //             // WebP options: https://sharp.pixelplumbing.com/api-output#webp
    //         },
    //     },
    // },
    'vibesite-strapi-plugin': {
        enabled: true,
        config: {
            mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'],
            options: {
                quality: 80, // Adjust quality as needed
                // effort: 6, // Adjust effort as needed
            },
        },
    },
});
