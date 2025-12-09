# Use official Node.js v20.19.2 slim image
FROM node:20.19.2-slim

# Set working directory
WORKDIR /app

# Install YOUR pnpm version
RUN npm install -g pnpm@8.7.4
# Install dependencies first (leverage Docker cache)
COPY package*.json ./
RUN pnpm install --omit=dev

# Copy only necessary files
COPY . .

# Change UID and GID of node user to match host (githubrunner: 1001)
#RUN usermod -u 1001 node && groupmod -g 1001 node

# Give permissions to /app folder to node user
#RUN chown -R node:node /app

# Build the app
#RUN npm run build
RUN pnpm run build


# Mover build a /inicio
#RUN mkdir -p /app/inicio && mv /app/build/* /app/inicio/

# Set NODE_ENV to production
ENV NODE_ENV=production

# Expose the port your app runs on (change if needed)
EXPOSE 3000

# Use a non-root user for security
#USER node

# Start the app (adjust entrypoint as needed)
CMD ["npm", "start"]