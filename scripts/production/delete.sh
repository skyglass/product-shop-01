# 
# Remove containers from Kubernetes.
#
# Usage:
#
#   ./scripts/production/delete.sh
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

kubectl delete -f mongodb.yaml
envsubst < application.yaml | kubectl delete -f -