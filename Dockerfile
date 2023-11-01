# Use a Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the backend application code into the container
COPY . .

# Install backend dependencies
RUN npm install

# Expose the port your backend will run on
EXPOSE 3000

# Start the Express.js server
CMD [ "node", "index.js" ]
