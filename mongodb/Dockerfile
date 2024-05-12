FROM mongo:latest

# Set environment variables
ENV DB_NAME=foodfinder
ENV MONGO_INITDB_DATABASE=foodfinder

# Expose port
EXPOSE 27017

# Copy seed script
COPY ./seed-mongodb.js /docker-entrypoint-initdb.d/seed-mongodb.js