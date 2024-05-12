### 📖 Azure Startup Template For Cloud-Native Microservices

<ul style="list-style-type:disc">
  <li>📖 This <b>Azure Full-Stack Developer Template</b> provides fully functional Development and Production Environment</li>
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
    <li>✅ <b>GraphQL</b></li>
    <li>✅ <b>Apollo GraphQL Server</b></li>
    <li>✅ <b>NextAuth.js Authentication for Next.js</b></li>
    <li>✅ <b>Github OAuth Client for NextAuth.js Authentication</b></li>
    <li>✅ <b>Github Authorization Server</b></li>
    <li>✅ <b>Terraform</b></li>
    <li>✅ <b>Kubernetes</b></li>
    <li>✅ <b>Github Actions</b></li>
    <li>✅ <b>Github Secrets and envsubst Environment Variables parser</b></li>    
    <li>✅ <b>Local Docker Environment</b></li>
    <li>✅ <b>Hot reload of Node.js Typescript in Docker</b></li>
  </ul>
</ul>

### 📖 Links

- `The Complete Developer`Book: https://www.usemodernfullstack.dev/
- The book is also available with O'Reilly subscription: https://learning.oreilly.com/library/view/the-complete-developer/9781098168810/


## 📖 Step By Step Guide

### Step 01 - Create New Github Repository

- Clone this repository and copy the source code to your new repository

### Step-02: Prepare Your Azure Account

- make sure you have your own Azure Account with enough permissions (Sign Up for a Free Trial, if you don't have one)

### Step-03: Prepare Your Github Account

- make sure you have your own Github Account

### Step-04: Create a GitHub OAuth App

- Go to Github -> Settings -> Developer Settings -> OAuth Apps -> New OAuth App

- Make sure that URLs start with EXTERNAL_IP of your application service (see `Azure Production Environment Setup` for more details)

- If you test locally, make sure that URLs start with `http://localhost:3000/` (see `Local Docker Environment Setup` for more details)


### Step-05: Prepare API Source Code and Github Actions Workflow:

- Edit "**.github/workflows/application.yaml**" file: replace "**master**" with the name of your main branch (you can change default main branch name in github repository settings)

- Edit "**scripts/cd/application.yaml**" file: replace "**NEXTAUTH_URL**" with EXTERNAL_IP of your application service (see `Azure Production Environment` Setup for more details)

- Edit "**scripts/production/application.yaml**" file: replace "**NEXTAUTH_URL**" with EXTERNAL_IP of your application service (see `Azure Production Environment` Setup for more details)



## Local Docker Environment Setup:

- Create a GitHub OAuth App (Github -> Settings -> Developer Settings -> OAuth Apps -> New OAuth App)

- Make sure that URLs start with `http://localhost:3000/`

- create `.env.local` file in `application` folder and provide following parameters:

```
MONGO_URI=mongodb://mongodb:27017/foodfinder
GITHUB_CLIENT_ID=...
GITHUB_CLIENT_SECRET=...
NEXTAUTH_SECRET=60477026caac35080b244a879eb84873
```

```
docker-compose up -d
```

- this script will build docker images and start environment with your code changes

- open `localhost:3000` in your Browser and make sure that `Sign In` with Github Credentials works and you can see the test data


- Congratulations! You successfuly tested `Food Finder UI` locally!


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

- run `docker images` and make sure that `docker images` returns docker images from your container registry (should be 0 images when login first time)

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




