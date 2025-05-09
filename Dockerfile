# NODE
# Use an official Node.js runtime as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port that the application will run on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]



# APACHE
# # Use a lightweight Node.js image for building
# FROM node:18-alpine AS builder

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Build the Next.js app and export static files
# RUN npm run build

# # Use Apache as the production server
# FROM httpd:alpine

# # Copy the static files from the builder stage
# COPY --from=builder /app/out /usr/local/apache2/htdocs/

# # Expose port 80
# EXPOSE 80

# Start Apache server (this is the default CMD in the httpd image)