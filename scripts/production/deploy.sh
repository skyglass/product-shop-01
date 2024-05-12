#
# Builds, publishes and deploys all microservices to a production Kubernetes instance.
#
# Usage:
#
#   ./scripts/production-kub/deploy.sh
#

set -u # or set -o nounset
: "$CONTAINER_REGISTRY"

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