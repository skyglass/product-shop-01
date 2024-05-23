### 📖 Cloud-Native Startup Template

<ul style="list-style-type:disc">
  <li>📖 This <b>Cloud-Native Full-Stack Developer Template</b> provides fully functional Development and Production Environment</li>
    <li>📖 <b>Next.js</b> Source Code</li>
    <li>📖 Local <b>Docker</b> Environment</li>
    <li>📖 <b>Github Actions</b> CI/CD <b>GitOps</b> pipeline</li>
    <li>📖 <b>Azure Terraform</b> Infrastructure with <b>AKS Kubernetes Cluster</b> and <b>Private Container Registry</b></li>
  <li>📖 Full <b>Technology Stack</b>:</li>
  <ul>
    <li>✅ <b>React UI</b></li>  
    <li>✅ <b>Next.js React Framework</b></li>
    <li>✅ <b>Node.js Server</b></li>    
    <li>✅ <b>MongoDB</b></li>
    <li>✅ <b>Mongoose MongoDB Object Modeling for Node.js</b></li>        
    <li>✅ <b>NextAuth.js Authentication for Next.js</b></li>
    <li>✅ <b>Google OAuth Client for NextAuth.js Authentication</b></li>
    <li>✅ <b>Google Authorization Server</b></li>
    <li>✅ <b>Terraform</b></li>
    <li>✅ <b>Kubernetes</b></li>
    <li>✅ <b>Github Actions</b></li>
    <li>✅ <b>Github Secrets and envsubst Environment Variables parser</b></li>    
    <li>✅ <b>Local Docker Environment</b></li>
    <li>✅ <b>Hot reload of Node.js Typescript in Docker</b></li>
  </ul>
</ul>

### 📖 Links

- `Next.js React Ultimate Ecommerce Development` Udemy Course: https://www.udemy.com/course/react-nextjs-ecommerce/?couponCode=LEADERSALE24B


## 📖 Step By Step Guide

### Step 01 - Create New Github Repository

- Clone this repository and copy the source code to your new repository

### Step-02: Prepare Your Azure Account

- make sure you have your own Azure Account with enough permissions (Sign Up for a Free Trial, if you don't have one)

### Step-03: Prepare Your Github Account

- make sure you have your own Github Account

### Step-04: Create a Google OAuth App

- Go to Google Cloud Console -> APIs and Services -> Credentials -> Create Credentials

- Make sure that one of the URLs start with DOMAIN or EXTERNAL_IP of your application service (see `Azure Production Environment Setup` for more details)

- If you test locally, make sure that one of the URLs start with `http://localhost:3000/` (see `Local Docker Environment Setup` for more details)


### Step-05: Prepare API Source Code and Github Actions Workflow:

- Edit "**.github/workflows/application.yaml**" file: replace "**master**" with the name of your main branch (you can change default main branch name in github repository settings)

- Edit "**scripts/production/application.yaml**" file: replace "**skycomposer.net**" with the name of your registered domain (see **Step-06**  and **Azure Production Environment Setup** for more details)


### Step-06: Register your domain:

- You need a registered domain to provide TLS connection with trusted Certificate Authority.

- For more details on setting up TLS on AKS Ingress with LetsEncrypt see this article: https://medium.com/@jainchirag8001/tls-on-aks-ingress-with-letsencrypt-f42d65725a3
This article will show you how to configure TLS on AKS with LetsEncrypt for any registered domain, including AWS Route 53.

- It is not necessary to register domain on Azure DNS. Just make sure that you know how to create Hosted Zone and Record A for your domain.

- If you don't want to register domain, see my previous article for more details: https://github.com/skyglass/food-finder-01 
This article will show you how to create Load Balancer Service with EXTERNAL_IP (In this case you don't need Ingress Resource on AKS)

- For more details, see `Azure Production Environment Setup`

- Warning! Stripe claims that Webhook Endpoints can only be configured for HTTPS URLs. Stripe Webhooks might not work with EXTERNAL_IP !

### Step-07: Finish Udemy Course "Next.js React Ultimate Ecommerce Development":

- If you need help on Next.js React Ecommerce Components Development, see more details in this course: https://www.udemy.com/course/react-nextjs-ecommerce/?couponCode=LEADERSALE24B
- I strongly recommend you finish this course first, before following this guide!
- This guide will only help you deploy the application to the azure cloud kubernetes cluster and enable github actions cd pipeline
- All information about Next.js React Development, Ecommerce Components, configuring Cloudinary and Stripe Payment Infrastructure, Discounts, Coupons, Tax Rate, Shipping Rate, Sales Prices, and so on, is perfectly explained in this course!


## Local Docker Environment Setup:

- Create a Google OAuth App (Google Cloud Console -> APIs and Services -> Credentials -> Create Credentials)

- Make sure that URLs start with `http://localhost:3000/`

- create `.env.local` file in `application` folder and provide following parameters:

```
DOMAIN="http://localhost:3000"
API="http://localhost:3000/api"
NEXTAUTH_URL="http://localhost:3000"

DB_URI="mongodb://mongodb:27017/productshop"
GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"
NEXTAUTH_SECRET="$NEXTAUTH_SECRET"
CLOUDINARY_CLOUD_NAME="$CLOUDINARY_CLOUD_NAME"
CLOUDINARY_API_KEY="$CLOUDINARY_API_KEY"
CLOUDINARY_API_SECRET="$CLOUDINARY_API_SECRET"

STRIPE_API_KEY="$STRIPE_API_KEY"
STRIPE_SECRET_KEY="$STRIPE_SECRET_KEY"
STRIPE_TAX_RATE="$STRIPE_TAX_RATE"
STRIPE_SHIPPING_RATE="$STRIPE_SHIPPING_RATE"
STRIPE_WEBHOOK_SECRET="$STRIPE_WEBHOOK_SECRET"
```

- Don't Worry! `.env.local` file is included to .gitignore. You will not reveal your secrets with git commit! :)
- NEXTAUTH_SECRET can be generated with the command `openssl rand -base64 32`
- GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET can be found in the settings of created Google OAuth Client
- If you need help on other values, see more details in the course: https://www.udemy.com/course/react-nextjs-ecommerce/?couponCode=LEADERSALE24B

```
docker-compose up -d
```
This script will build docker images and start environment with your code changes

- open `localhost:3000` in your Browser and make sure that `Sign In` with Google Credentials works and you can see the test data

- install Stripe CLI on your Operating System and configure WebHooks in your Stripe Account (see the course for more details)

```
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```
These commands will start local stripe webhook listener

- open `http://localhost:3000` in your Browser and make sure that `Sign In` with Google Credentials works and you can see the test product data

- Add any product to the cart, apply coupon and click "Place Order" button

- You will be redirected to the Stripe Page, where you should provide payment and shipment details

- Use "magic" payment card with number 4242 4242 4242 4242 for unlimited payment. :)

- If the payment is sucessful, you will be redirected back to the shop page.

- Click "View Order Status". If stripe webhooks were configured correctly, the order will be saved to MongoDB database and you should see "Order Receipt" information.

- Congratulations! You successfuly tested `Product Shop UI` locally!


## Azure Production Environment Setup:

- create `terraform.auto.tfvars` file in `infra` folder and provide following parameters:

```
kubernetes_version= "1.29.2"
app_name = "{provide_your_own_globally_unique_name}" 
location = "westeurope"
```

- login to Azure Cloud with `az login` CLI

- cd to `infra` folder

- run `terraform init`and `terraform apply --auto-approve`

- after the script is successfully finished, run the following command:

```
az aks get-credentials --resource-group {app_name} --name {app_name}
```

- run `kubectl get pods` and make sure that `kubectl` works correctly and returns 0 resources

- login to Azure Container registry with the following command:

```
docker login {login_server}
```

- you can find docker login server, username and password in Azure Cloud (go to Container Registry -> Settings -> Access Keys)

- in `scripts/production` folder create `.env.prod` file and set the following environment variables:

```
CONTAINER_REGISTRY="skyglassproductshop.azurecr.io"
EMAIL_ADDRESS="youremail@gmail.com"

DOMAIN="https://skycomposer.net"
API="https://skycomposer.net/api"
NEXTAUTH_URL="https://skycomposer.net"

DB_URI="mongodb://mongodb:27017/productshop"
GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"
NEXTAUTH_SECRET="$NEXTAUTH_SECRET"
CLOUDINARY_CLOUD_NAME="$CLOUDINARY_CLOUD_NAME"
CLOUDINARY_API_KEY="$CLOUDINARY_API_KEY"
CLOUDINARY_API_SECRET="$CLOUDINARY_API_SECRET"

STRIPE_API_KEY="$STRIPE_API_KEY"
STRIPE_SECRET_KEY="$STRIPE_SECRET_KEY"
STRIPE_TAX_RATE="$STRIPE_TAX_RATE"
STRIPE_SHIPPING_RATE="$STRIPE_SHIPPING_RATE"
STRIPE_WEBHOOK_SECRET="$STRIPE_WEBHOOK_SECRET"
```

- Don't Panic! `.env.prod` file is included to .gitignore. You will not reveal your secrets with git commit! :)
- Make sure that you set your own values for CONTAINER_REGISTRY, EMAIL_ADDRESS, DOMAIN, API and NEXTAUTH_URL (use your own registered domain, azure container registry address and e-mail)
- NEXTAUTH_SECRET can be generated with the command `openssl rand -base64 32`
- GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET can be found in the settings of created Google OAuth Client
- If you need help on other values, see more details in the course: https://www.udemy.com/course/react-nextjs-ecommerce/?couponCode=LEADERSALE24B
 

- register your domain and enable TLS on AKS Ingress with Lestencrypt: https://medium.com/@jainchirag8001/tls-on-aks-ingress-with-letsencrypt-f42d65725a3
- Make sure that you provide your email for CA cluster issuer Kubernetes resource (see more details in the article)
- Make sure that you installed ingress controller with helm
- Make sure that you installed all other kubernetes resources  and followed other instructions in the article
- You can find Ingress Kubernetes Resource in `scripts/production/application.yaml`. This resource will be applied with `deploy.sh`script or your can install it manually. Make sure that you replaced `skycomposer.net` with your registered domain name


- run `sh deploy.sh`

- this script will build docker images, push them to container registry and deploy images to kubernetes cluster

- Warning! Application Docker image is built with secret Environment Variables from generated `.env.prod.subst`
- `.env.prod.subst` is included in .gitignore, but anyone who has access to docker image can find the secret values!
- Make sure that docker images are stored in private Container Registry and never shared publicly!
- In this guide we use Azure Private Container Registry

- run `kubectl get pods` and make sure that `application` and `mongodb` containers are RUNNING

- Update Google OAuth App (Github -> Settings -> Developer Settings -> OAuth Apps)
Make sure that you added Google OAuth App URL that starts with your registered DOMAIN!

- open https url with your registered domain in your Browser and make sure that `Sign In` with Google Credentials works and you can see the test product data

- Add any product to the cart, apply coupon and click "Place Order" button

- You will be redirected to the Stripe Page, where you should provide payment and shipment details

- Use "magic" payment card with number 4242 4242 4242 4242 for unlimited payment. :)

- If the payment is sucessful, you will be redirected back to the shop page.

- Click "View Order Status". If stripe webhooks were configured correctly, the order will be saved to MongoDB database and you should see "Order Receipt" information.

- Congratulations! You successfuly tested `Product Shop UI` in Azure Production Environment!


## Github Actions Deployment Pipeline Setup

- cd to `scripts/cd` folder

- replace `NEXTAUTH_URL`in `application.yaml` with `EXTERNAL_IP` of `application` service (run `kubectl get svc` to find this value)

- create the following Github Secrets (Go to Your Repository -> Settings -> Secrets and Variables -> Actions -> New Repository Secret):

```
CONTAINER_REGISTRY=... (Azure Container Registry)
GOOGLE_CLIENT_ID=... (Google OAuth App Client ID)
GOOGLE_CLIENT_SECRET=... (Google OAuth App Client Secret)
KUBE_CONFIG=.. (Base64 encoded  ~/.kube/config file contents)
REGISTRY_UN=... (Azure Container Registry Username)
REGISTRY_PW=... (Azure Container Registry Password)

EMAIL_ADDRESS="youremail@gmail.com"

DOMAIN="https://skycomposer.net" (replace with your own domain)
API="https://skycomposer.net/api" (replace with your own domain)
NEXTAUTH_URL="https://skycomposer.net" (replace with your own domain)

DB_URI="mongodb://mongodb:27017/productshop"
GOOGLE_CLIENT_ID="$GOOGLE_CLIENT_ID"
GOOGLE_CLIENT_SECRET="$GOOGLE_CLIENT_SECRET"
NEXTAUTH_SECRET="$NEXTAUTH_SECRET"
CLOUDINARY_CLOUD_NAME="$CLOUDINARY_CLOUD_NAME"
CLOUDINARY_API_KEY="$CLOUDINARY_API_KEY"
CLOUDINARY_API_SECRET="$CLOUDINARY_API_SECRET"

STRIPE_API_KEY="$STRIPE_API_KEY"
STRIPE_SECRET_KEY="$STRIPE_SECRET_KEY"
STRIPE_TAX_RATE="$STRIPE_TAX_RATE"
STRIPE_SHIPPING_RATE="$STRIPE_SHIPPING_RATE"
STRIPE_WEBHOOK_SECRET="$STRIPE_WEBHOOK_SECRET"
```

- you can find values for CONTAINER_REGISTRY, REGISTRY_UN and REGISTRY_PW in Azure Cloud (go to Container Registry -> Settings -> Access Keys)
- you can get the value of KUBE_CONFIG with this command `cat ~/.kube/config | base64`
- NEXTAUTH_SECRET can be generated with the command `openssl rand -base64 32`
- GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET can be found in the settings of created Google OAuth Client
- If you need help on other values, see more details in the course: https://www.udemy.com/course/react-nextjs-ecommerce/?couponCode=LEADERSALE24B

- make any code changes (for example change `NextEcom` to `NextEcom 2` in `application/components/TopNav.js` file)

- push changes with `git add .`, `git commit -m "test changes"`and `git push origin`

- go to "Your repository -> Actions" and make sure that the Deployment Pipeline is automatically started and successfully finished

- this pipeline will build changed docker image, push it to container registry and deploy changed image with new version to kubernetes cluster

- open https link for your registered domain in your Browser and make sure that you can see `NextEcom 2` title on the top left

- Congratulations! You successfuly tested `Product Shop UI` code changes with Github Actions Deployment Pipeline!




