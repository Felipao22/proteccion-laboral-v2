# --- Build Stage ---
FROM node:20.19.2-slim AS build

WORKDIR /app

RUN npm install -g pnpm@8.7.4

COPY package*.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

RUN pnpm run build


# --- Production Stage ---
FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
