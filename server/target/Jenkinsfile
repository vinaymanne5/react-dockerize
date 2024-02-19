pipeline {
    agent any

    environment {
        AWS_DEFAULT_REGION = 'us-west-1'
        AWS_ACCOUNT_ID = '651699247958'
        ECR_REPO_NAME = 'dod-repo'
        ECR_IMAGE_TAG = 'latest'
        K8S_NAMESPACE = 'default'
        K8S_DEPLOYMENT_NAME = 'dod'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Push to ECR') {
            steps {
                script {
                    withAWS(credentials: 'dod-aws') {
                        // Login to ECR
                        sh "aws ecr get-login-password --region $AWS_DEFAULT_REGION | docker login --username AWS --password-stdin $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com"

                        // Build Docker image
                        sh "docker build -t $ECR_REPO_NAME:$ECR_IMAGE_TAG ."

                        // Tag the Docker image
                        sh "docker tag $ECR_REPO_NAME:$ECR_IMAGE_TAG $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO_NAME:$ECR_IMAGE_TAG"

                        // Push the Docker image to ECR
                        sh "docker push $AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO_NAME:$ECR_IMAGE_TAG"
                    }
                }
            }
        }

        stage('Deploy to EKS') {
            steps {
                script {
                    withKubeConfig(credentialsId: 'kubeconfig', serverUrl: 'https://ED7F1731D741BA611A12AAAA90E6AB09.yl4.us-west-1.eks.amazonaws.com') {
                        // Update Kubernetes deployment
                        sh "kubectl set image deployment/$K8S_DEPLOYMENT_NAME $K8S_DEPLOYMENT_NAME=$AWS_ACCOUNT_ID.dkr.ecr.$AWS_DEFAULT_REGION.amazonaws.com/$ECR_REPO_NAME:$ECR_IMAGE_TAG -n $K8S_NAMESPACE"
                    }
                }
            }
        }
    }
}
