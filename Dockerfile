# Stage 1: Build the Astro project (The Builder)
FROM node:20-alpine AS builder
WORKDIR /app

# Copy dependency manifests and install
COPY package*.json ./
RUN npm ci

# Copy source code and build
COPY . .
RUN npm run build

# Stage 2: Serve with lightweight Nginx (The Runner)
FROM nginx:alpine

# Copy the built SSG files from the builder stage to Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Overwrite default config with our hardened SecOps configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80 for the container
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]