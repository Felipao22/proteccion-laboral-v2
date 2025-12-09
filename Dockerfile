# --- Build stage ---
FROM node:20.19.2-slim AS build

# Set working directory
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy manifest files
COPY package.json pnpm-lock.yaml ./

# Install dependencies (only prod deps)
RUN pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Build Vite app
RUN pnpm run build



# --- Production stage using NGINX ---
FROM nginx:alpine AS production

# Copy custom nginx config (YOU MUST CREATE THIS FILE)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Vite dist folder into NGINX public folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
