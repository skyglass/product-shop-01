#
# Builds, publishes and deploys all microservices to a production Kubernetes instance.
#
# Usage:
#
#   ./scripts/production/deploy.sh
#

# Source the .env.prod file to load the environment variables
if [ -f .env.prod ]; then
  set -o allexport
  source .env.prod
  set +o allexport
else
  echo ".env.prod file not found"
  exit 1
fi

set -u # or set -o nounset
: "$CONTAINER_REGISTRY"

if envsubst < ../../application/.env.prod > ../../application/.env.prod.subst; then
    echo "File .env.prod.subst created successfully."
else
    echo "Failed to create .env.prod.subst file."
    exit 1
fi

#
# Build Docker images.
#
docker build -t $CONTAINER_REGISTRY/mongodb:1 --file ../../mongodb/Dockerfile ../../mongodb
docker push $CONTAINER_REGISTRY/mongodb:1

docker build -t $CONTAINER_REGISTRY/application:1 --file ../../application/Dockerfile-prod ../../application
docker push $CONTAINER_REGISTRY/application:1

# 
# Deploy containers to Kubernetes.
#
# Don't forget to change kubectl to your production Kubernetes instance
#

envsubst < mongodb.yaml | kubectl apply -f -
envsubst < application.yaml | kubectl apply -f -

if rm ../../application/.env.prod.subst; then
    echo "File .env.prod.subst deleted successfully."
else
    echo "Failed to delete .env.prod.subst file."
    exit 1
fi