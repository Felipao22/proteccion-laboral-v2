# --- Build Stage ---
FROM node:20.19.2-slim AS build

WORKDIR /app

# Instalar pnpm
RUN npm install -g pnpm@8.7.4

# Copiar dependencias
COPY package*.json pnpm-lock.yaml* ./

RUN pnpm install

# Copiar proyecto entero y el .env
COPY . .
COPY .env .env

# Compilar Vite (ahora sí tiene acceso al .env)
RUN pnpm run build

# --- Production Stage ---
FROM nginx:alpine

# Copiar build de Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Exponer puertos
EXPOSE 80 443

# Arrancar Nginx
CMD ["nginx", "-g", "daemon off;"]
