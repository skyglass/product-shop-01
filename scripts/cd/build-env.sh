#
# Builds Environment Variables file for Docker Image.
#
#       ./scripts/cd/build-env.sh
#

if envsubst < ../../application/.env.prod > ../../application/.env.prod.subst; then
    echo "File .env.prod.subst created successfully."
else
    echo "Failed to create .env.prod.subst file."
    exit 1
fi
