#
## Deletes Environment Variables file for Docker Image
#
#       ./scripts/cd/delete-env.sh
#

if rm ./application/.env.prod.subst; then
    echo "File .env.prod.subst deleted successfully."
else
    echo "Failed to delete .env.prod.subst file."
    exit 1
fi