# Build Stage
FROM node:18-alpine AS builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production

# Production Stage
FROM node:18-alpine
WORKDIR /usr/src/app

# Copy dependencies from builder
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY . .

# Run as a non-root user for security
RUN addgroup -S nodeuser && adduser -S nodeuser -G nodeuser
USER nodeuser

EXPOSE 3000
CMD ["npm", "start"]