# 
# Remove containers from Kubernetes.
#
# Usage:
#
#   ./scripts/production-kub/delete.sh
#

kubectl delete -f mongodb.yaml
envsubst < application.yaml | kubectl delete -f -