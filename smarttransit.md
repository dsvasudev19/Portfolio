# **SmartTransit System** 🚍💡

Welcome to the **SmartTransit System**! This project demonstrates a robust, scalable, and flexible microservices architecture designed for a smart public transportation system. Using **Spring Boot**, **Netflix Eureka** for service discovery, and several other supporting services, this system handles **Carpooling**, **Bus Scheduling**, **User Management**, **Operator Management**, **Route Optimization**, and integrates features like **Notifications**, **Feedback**, **Payments**, and **Live Bus Tracking** using **Ola Maps**. Additionally, **Centralized Authentication** is implemented to secure all services.

## **Project Overview**

The **SmartTransit System** is a fully-fledged microservices-based application that covers a wide range of functionalities for modern transportation services. Below are the key components of the system:

- **Netflix Eureka Server**: Service Discovery
- **Carpool Service**: Manages carpooling requests and routes.
- **Bus Service**: Manages bus routes, schedules, availability, and **Live Bus Tracking**.
- **User Management Service**: Handles user registrations, profile management, and user data.
- **Operator Management Service**: Manages bus and carpool operators.
- **Route Management Service**: Handles route data, optimization, and planning.
- **Notification Service**: Sends notifications related to user actions, status updates, and alerts.
- **Feedback Service**: Collects and manages user feedback and ratings for services.
- **Payment Service**: Handles payment transactions for services such as booking and reservations.
- **Authentication Service**: Centralized authentication for secure API access across all services.
- **API Gateway**: Manages routing, load balancing, and authentication for incoming requests.
- **Live Bus Tracking**: Tracks real-time bus locations using **Ola Maps** integration.

## **High-Level Architecture Diagram**

Below is the high-level architecture diagram for the **SmartTransit System**, which illustrates how the various services communicate and interact with each other:

![SmartTransit System Architecture](/Documents/ARCHITECTURE.JPEG)

## **Sequence Diagram**

The sequence diagram below shows how a typical user request is processed through the system. It highlights the flow of data and how different services (like Authentication, API Gateway, Carpool, and Payment Service) work together to fulfill the user's request:

![SmartTransit Sequence Diagram](/Documents/sequence-diagram.png)

## **Technologies Used**

This project leverages modern technologies and frameworks to build an efficient and scalable microservices ecosystem.

### **Backend**:
- **Spring Boot**: A powerful framework for building microservices-based applications.
- **Spring Cloud**: For service discovery, configuration management, and fault tolerance.
- **Spring Security**: To secure the application using authentication and authorization mechanisms.
- **Netflix Eureka**: For service registration and discovery to ensure scalability and communication between services.
- **Spring Data JPA**: For easy database interactions using **PostgreSQL**.
- **PostgreSQL**: A robust relational database for managing data.
- **Ola Maps**: For tracking live bus locations and displaying them in real-time.

### **Frontend (optional)**:
- **React.js**: If integrated, used for the user interface.

### **Infrastructure**:
- **Docker**: For containerization, making deployment easier and more consistent.
- **Kubernetes**: Optional, for orchestrating and scaling the microservices.

### **Communication**:
- **RESTful APIs**: The primary communication method between microservices.

### **Authentication & Security**:
- **JWT**: For token-based authentication, ensuring secure communication between services.
- **OAuth2**: For handling authorization flows.

---

## **Features**

- **Centralized Authentication**: All requests pass through the **API Gateway**, where authentication is handled by the **Authentication Service**. Secure access is provided via **JWT tokens**.
  
- **Service Discovery**: With **Netflix Eureka**, microservices register themselves and discover each other dynamically, ensuring high availability and scalability.

- **Multiple Microservices**: The project consists of independent microservices for **Carpool**, **Bus Scheduling**, **User Management**, **Operator Management**, **Route Optimization**, and more. This separation of concerns makes the system flexible and easy to scale.

- **Payment Integration**: The **Payment Service** integrates with third-party gateways to handle transactions, making payments secure and efficient.

- **Notification System**: **Notification Service** delivers timely updates, alerts, and notifications to users regarding their travel, schedules, or bookings.

- **User Feedback Collection**: **Feedback Service** allows users to provide feedback on services, which can be used to improve the system.

- **Live Bus Tracking**: **Bus Service** integrates with **Ola Maps** to track and display the real-time location of buses, providing users with accurate information on bus arrivals and current locations.

---

## **How to Run the Project**

### Prerequisites

- **JDK 11 or above**
- **Docker** (optional, for containerization)
- **PostgreSQL** (local or Dockerized)

### Step-by-Step Guide

1. **Clone the Repository**:

    ```bash
    git clone https://github.com/dsvasudev19/Capstone-Project.git
    cd Backend
    ```

2. **Set up PostgreSQL Database**:
   - Install PostgreSQL locally or use Docker to set up a PostgreSQL container.
   - Configure the database credentials in the `application.properties` of each service.

3. **Run the Eureka Server**:
   - Navigate to the **eureka-server** project folder and run:

     ```bash
     ./mvnw spring-boot:run
     ```

4. **Run the Microservices**:
   - For each microservice (Carpool, Bus, User Management, etc.), run:

     ```bash
     ./mvnw spring-boot:run
     ```

5. **Run the API Gateway**:
   - Navigate to the **api-gateway** folder and run:

     ```bash
     ./mvnw spring-boot:run
     ```

6. **Access the System**:
   - **Eureka Server**: `http://localhost:8761` (for service registration and discovery)
   - **API Gateway**: `http://localhost:9000` (gateway for all API requests)
   - Use **Swagger UI** for API testing and exploration:
     - **Carpool Service**: `http://localhost:8081/swagger-ui.html`
     - **Bus Service**: `http://localhost:8082/swagger-ui.html`
     - **User Management Service**: `http://localhost:8083/swagger-ui.html`

---

## **API Documentation**

Each microservice has integrated **Swagger UI** for easy exploration of the available endpoints. To access the API documentation, navigate to the following URLs:

- **Carpool Service**: `http://localhost:8081/swagger-ui.html`
- **Bus Service**: `http://localhost:8082/swagger-ui.html`
- **User Management Service**: `http://localhost:8083/swagger-ui.html`
- **Operator Management Service**: `http://localhost:8084/swagger-ui.html`
- **Route Management Service**: `http://localhost:8085/swagger-ui.html`

---

## **Contributions**

We welcome contributions to improve the features and performance of the **SmartTransit System**. To contribute:

1. Fork the repository.
2. Create a new branch.
3. Implement your changes or fix bugs.
4. Submit a pull request with a detailed description of your changes.

---

## **License**

This project is licensed under the **MIT License**.

---

## **Technology Stack**  

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
![Eureka](https://img.shields.io/badge/Eureka-FF9900?style=flat&logo=apache-eureka&logoColor=white)
![Spring Security](https://img.shields.io/badge/Spring%20Security-6DB33F?style=flat&logo=spring-security&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=flat&logo=json-web-tokens&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=black)
![Ola Maps](https://img.shields.io/badge/Ola%20Maps-000000?style=flat&logo=olacabs&logoColor=white)

---

For more information and support, feel free to reach out via GitHub Issues or contact the team at `vasudevds1729@gmail.com`.
