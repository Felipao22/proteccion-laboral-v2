# --- Build stage ---
FROM node:20.19.2-slim AS build
WORKDIR /app

# Install YOUR pnpm version
RUN npm install -g pnpm@8.7.4

# Install dependencies
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# Copy the rest of the project
COPY . .

# Build the Vite app
RUN pnpm run build

# --- Production stage ---
FROM nginx:alpine

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
