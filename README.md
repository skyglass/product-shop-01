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

- Make sure that URLs start with EXTERNAL_IP or DOMAIN of your application service (see `Azure Production Environment Setup` for more details)

- If you test locally, make sure that URLs start with `http://localhost:3000/` (see `Local Docker Environment Setup` for more details)


### Step-05: Prepare API Source Code and Github Actions Workflow:

- Edit "**.github/workflows/application.yaml**" file: replace "**master**" with the name of your main branch (you can change default main branch name in github repository settings)

- Edit "**.github/workflows/application.yaml**" file: replace "**master**" with the name of your main branch (you can change default main branch name in github repository settings)


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

- NEXTAUTH_SECRET can be generated with the command `openssl rand -base64 32`
- GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET can be found in the settings of created Google OAuth Client
- If you need help on other values, see more details in this course: https://www.udemy.com/course/react-nextjs-ecommerce/?couponCode=LEADERSALE24B
- I strongly recommend you finish this course first, before following this guide!
- This guide will only help you to deploy the application to the azure cloud kubernetes cluster and enable github actions cd pipeline
- All information about configuring Cloudinary, Stripe Payment Infrastructure, Discounts, Coupons, Tax Rate, Shipping Rate, Sales Prices, Next.js and React development, and so on, is perfectly explained in this course!

```
docker-compose up -d
```

- this script will build docker images and start environment with your code changes

- open `localhost:3000` in your Browser and make sure that `Sign In` with Google Credentials works and you can see the test data

- install Stripe CLI on your Operating System and configure WebHooks in your Stripe Account (see the course for more details)

```
stripe login
stripe listen --forward-to localhost:3000/api/webhook
```

- These commands will start local stripe webhook listener

- Add any product to the cart, apply coupon and click "Place Order" button

- You will be redirected to the Stripe Page, where you should provide payment and shipment details

- Use "magic" payment card with number 4242 4242 4242 4242 for unlimited payment. :)

- If the payment is sucessful, you will be redirected back to the shop page

- Click "View Order Status". If stripe webhooks were configured correctly, you should see "Order Receipt" information.

- Congratulations! Your order was successfully saved in MongoDB database!

- Congratulations! You successfuly tested `Product Shope UI` locally!


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

- run `kubectl get pods` and make sure that `kubectl` works correctly and return 0 resources

- login to Azure Container registry with the following command:

```
docker login {login_server}
```

- you can find docker login server, username and password in Azure Cloud (go to Container Registry -> Settings -> Access Keys)

- set environment variables CONTAINER_REGISTRY, AUTH_CLIENT_ID (Github OAuth Client ID) and AUTH_CLIENT_SECRET (Github OAuth Client Secret):

```
export CONTAINER_REGISTRY=...
export AUTH_CLIENT_ID=...
export AUTH_CLIENT_SECRET=...
```

- cd to `scripts/production` folder

- replace `NEXTAUTH_URL` in `application.yaml` with `EXTERNAL_IP` of `application` service (run `kubectl get svc` to find this value)

- run `sh deploy.sh`

- this script will build docker images, push them to container registry and deploy images to kubernetes cluster

- run `kubectl get pods` and make sure that `application` and `mongodb` containers are RUNNING

- Update a GitHub OAuth App (Github -> Settings -> Developer Settings -> OAuth Apps)

- Make sure that GitHub OAuth App URLs start with EXTERNAL_IP of your application service (run `kubectl get svc` to find this value)

- open `EXTERNAL_IP` in your Browser and make sure that `Sign In` with Github Credentials works and you can see the test data


- Congratulations! You successfuly tested `Food Finder UI` in Azure Production Environment!



## Github Actions Deployment Pipeline Setup

- cd to `scripts/cd` folder

- replace `NEXTAUTH_URL`in `application.yaml` with `EXTERNAL_IP` of `application` service (run `kubectl get svc` to find this value)

- create the following Github Secrets (Go to Your Repository -> Settings -> Secrets and Variables -> Actions -> New Repository Secret):

```
CONTAINER_REGISTRY=... (Azure Container Registry)
AUTH_CLIENT_ID=... (Github OAuth App Client ID)
AUTH_CLIENT_SECRET=... (Github OAuth App Client Secret)
KUBE_CONFIG=.. (Base64 encoded  ~/.kube/config file contents)
REGISTRY_UN=... (Azure Container Registry Username)
REGISTRY_PW=... (Azure Container Registry Password)
```

- you can find values for CONTAINER_REGISTRY, REGISTRY_UN and REGISTRY_PW in Azure Cloud (go to Container Registry -> Settings -> Access Keys)

- you can get the value of KUBE_CONFIG with this command `cat ~/.kube/config | base64`

- you can find values for AUTH_CLIENT_ID and AUTH_CLIENT_SECRET in your GitHub OAuth App (Github -> Settings -> Developer Settings -> OAuth Apps)

- make any code changes (for example change `Welcome to the Food Finder` to `Welcome BACK to the Food Finder` in `application/pages/index.tsx` file)

- push changes with `git add .`, `git commit -m "test changes"`and `git push origin`

- go to "Your repository -> Actions" and make sure that the Deployment Pipeline is automatically started and successfully finished

- this pipeline will build changed docker image, push it to container registry and deploy changed image with new version to kubernetes cluster

- open `EXTERNAL_IP` in your Browser and make sure that you can see `Welcome BACK to the Food Finder` title


- Congratulations! You successfuly tested `Food Finder UI` code changes with Github Actions Deployment Pipeline!




