#  DevOps Incident Dashboard

A production-style microservice deployed using Docker and Kubernetes (Minikube).

---

##  Project Overview

This project demonstrates an end-to-end DevOps workflow:

Development → Docker Image → Docker Hub → Kubernetes Deployment → Service Exposure

The application is built using Node.js and deployed inside a Kubernetes cluster.

---

##  Technologies Used

- VirtualBox
- RHEL 10
- Docker
- Docker Hub
- Minikube
- kubectl
- Node.js + Express

---

## Architecture

Browser → Kubernetes Service → Pod → Docker Container → Node.js Application

- 2 Replicas
- Liveness Probe
- NodePort Service

---

##  Features

- `/health` → Check service status
- `/version` → Display version and environment
- `/uptime` → Show container runtime
- Environment variable configuration
- High availability using replicas

---

##  Docker Commands

```bash
docker build -t kaushal13x/devops-dashboard:v1 .
docker login
docker push kaushal13x/devops-dashboard:v1
##  kubernetes Commands
minikube start
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml
kubectl get pods
kubectl get svc
