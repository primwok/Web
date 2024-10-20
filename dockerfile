# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set build arguments, used by github comtainer registry
ARG NEXT_PUBLIC_PRIMWOK_API_URL

# Set environment variables used by github comtainer registry
ENV NEXT_PUBLIC_PRIMWOK_API_URL=${NEXT_PUBLIC_PRIMWOK_API_URL}

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Production image
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy the build from the builder stage
COPY --from=builder /app ./

# Expose the port the app runs on
EXPOSE 3000
