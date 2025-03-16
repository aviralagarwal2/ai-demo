# FROM node:18 AS build

# WORKDIR /usr/src/app



# COPY package.json package-lock.json ./


# RUN npm install --force 


# COPY . .


# FROM node:18

# WORKDIR /usr/src/app 

# COPY --from=build /usr/src/app ./



# EXPOSE 4000

# CMD ["npm", "start"]

# Use the official Node.js image as the base image
FROM node:18-alpine

# Create and set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]