# Step 1: Use Node image to build React app
FROM node:20-alpine AS build

# Install git to clone the repo
RUN apk add --no-cache git

# Set working directory
WORKDIR /app

# Clone your public GitHub repo (replace with your actual repo URL)
RUN git clone https://github.com:MrYashPatel/file-converter.git .

# Install dependencies and build the app
RUN npm install
RUN npm run build

# Step 2: Use Nginx to serve static build
FROM nginx:alpine

# Copy build output to nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Optional: add custom nginx config for React Router fallback
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port and start nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]