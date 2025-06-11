'use strict';

const FILE_UID = 'plugin::upload.file';

export default {
    /**
     * GET /api/media
     * Mirrors /api/upload/files but adds "meta.pagination".
     */
    async find(ctx) {
        // Accept both ?start/limit and ?pagination[page|pageSize]
        const { page = 1, pageSize = 20 } = ctx.query.pagination || {};
        const schema = strapi.getModel(FILE_UID);

        const query = {
            ...ctx.query,                 // keeps ?filters, ?sort, ?populate, …
            pagination: { page, pageSize },
        };

        // 1️⃣ Validate / sanitize the user input
        await strapi.contentAPI.validate.query(query, schema, { auth: ctx.state.auth });
        const sanitized = await strapi.contentAPI.sanitize.query(query, schema, { auth: ctx.state.auth });

        // 2️⃣ Fetch the rows and the total count
        const [files, total] = await Promise.all([
            strapi.documents(FILE_UID).findMany(sanitized),   // Document Service API :contentReference[oaicite:3]{index=3}
            strapi.documents(FILE_UID).count(sanitized),
        ]);

        // 3️⃣ Sanitize the response body
        const safeFiles = await strapi.contentAPI.sanitize.output(files, schema, { auth: ctx.state.auth });

        ctx.body = {
            data: safeFiles,
            meta: {
                pagination: {
                    page:      Number(page),
                    pageSize:  Number(pageSize),
                    pageCount: Math.ceil(total / pageSize),
                    total,
                },
            },
        };
    },
};
