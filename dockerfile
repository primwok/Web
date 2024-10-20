# Use the official Node.js image as the base image
FROM node:18-alpine AS builder

# Set build arguments, used by github comtainer registry
ARG NEXT_PUBLIC_BASE_URL
ARG NEXT_PUBLIC_SEARCH_ENDPOINT
ARG NEXT_PUBLIC_DEFAULT_REGION
ARG NODE_ENV


# Set environment variables
ENV NEXT_PUBLIC_BASE_URL=${NEXT_PUBLIC_BASE_URL}
ENV NEXT_PUBLIC_SEARCH_ENDPOINT=${NEXT_PUBLIC_SEARCH_ENDPOINT}
ENV NEXT_PUBLIC_DEFAULT_REGION=${NEXT_PUBLIC_DEFAULT_REGION}
ENV NODE_ENV=${NODE_ENV}

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
