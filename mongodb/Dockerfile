FROM mongo:latest

# Set environment variables
ENV DB_NAME=productshop
ENV MONGO_INITDB_DATABASE=productshop

# Expose port
EXPOSE 27017

# Copy seed script
COPY ./seed-mongodb.js /docker-entrypoint-initdb.d/seed-mongodb.js