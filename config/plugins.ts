export default () => ({
    upload: {
        config: {
            breakpoints: {
                128: 128,
                256: 256,
                384: 384,
                512: 512,
                768: 768,
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
    'webp-converter': {
        enabled: true,
        config: {
            // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
            mimeTypes: undefined,
            options: {
                // WebP options: https://sharp.pixelplumbing.com/api-output#webp
            },
        },
    },
});
