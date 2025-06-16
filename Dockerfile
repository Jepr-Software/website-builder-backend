# Dockerfile
FROM node:20.13-alpine
# Installing libvips-dev for sharp Compatibility
# RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
# Set environment to production
ENV NODE_ENV=production
# The SENTRY_AUTH_TOKEN is used to upload the source maps to Sentry
ARG DATABASE_URL
ENV DATABASE_URL=${DATABASE_URL}

# Copy the configuration files
WORKDIR /opt/
COPY ./package.json ./package-lock.json ./
ENV PATH /opt/node_modules/.bin:$PATH
# Install dependencies
RUN npm ci
# Copy the application files
WORKDIR /opt/app
COPY ./ .
# Build the Strapi application
RUN npm run build
# Expose the Strapi port
EXPOSE 1337
# Start the Strapi application
CMD ["npm", "start"]
