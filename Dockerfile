# --- Build Stage ---
FROM node:20.19.2-slim AS build

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm@8.7.4

# Copiar deps
COPY package*.json pnpm-lock.yaml* ./
RUN pnpm install

# Copiar proyecto entero
COPY . .

# Compilar Vite
RUN pnpm run build

# --- Production Stage ---
FROM nginx:alpine

# Copiar archivos generados
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puertos
EXPOSE 80
EXPOSE 443

CMD ["nginx", "-g", "daemon off;"]
