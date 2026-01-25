# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci || npm install

# Copy source files
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Install serve and curl (for healthcheck)
RUN npm install -g serve && apk add --no-cache curl

# Copy built files from builder
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Healthcheck configuration
HEALTHCHECK --interval=60s --timeout=10s --start-period=30s --retries=3 \
  CMD curl --fail http://localhost:3000/ || exit 1

# Start the server
CMD ["serve", "dist", "-l", "3000"]
