# Project Management Application with GitHub Integration

## Overview

This Project Management Application is a robust and comprehensive platform designed to facilitate efficient management of projects and tasks within an organization. It features seamless integration with GitHub, allowing automatic creation of GitHub repositories and management of issues directly from the application.

## Features

### 1. Client Onboarding
- Streamlined process to onboard new clients into the system.
- Secure storage and management of client information.

### 2. Project Management
- Create and manage multiple projects for different clients.
- Automatically create GitHub repositories with project names.
- Manage project details and progress efficiently.

### 3. GitHub Integration
- Automatic creation of GitHub repositories upon project creation.
- Synchronize project issues with GitHub issues.
- Manage GitHub issues directly from the application.

### 4. Task Assignment and Management
- Assign tasks to employees within projects.
- Monitor task progress and completion.
- Prioritize and categorize tasks for better organization.

### 5. Bug Management
- Raise bugs and assign them to employees.
- Bugs are automatically created as GitHub issues for tracking and resolution.

### 6. File Management
- Secure file storage for each project.
- Easy access and management of project-related files.

### 7. Kanban Board
- Visual representation of tasks for each member.
- Drag and drop functionality to update task statuses.
- Personalized boards for each team member to track their tasks.

## Authentication and Authorization
- Robust backend API with secure authentication mechanisms.
- Role-based authorization to control access to various features.
- Different roles include Admin, Manager, and Employee with specific permissions.

## Technologies Used
- **Backend**: Node.js, Express.js
- **Database**: MySQL with Sequelize ORM
- **Frontend**: React.js
- **Version Control**: GitHub API for repository and issue management
- **Authentication**: JWT (JSON Web Tokens) for secure authentication

## Installation

### Prerequisites
- Node.js installed on your machine
- MySQL server running
- GitHub account and personal access token for API integration

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/dsvasudev19/ProjeXpert.git
   ```
2. Navigate to the project directory:
   ```bash
   cd projexpert
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Set up the environment variables:
   - Create a `.env` file in the root directory.
   - Add the following environment variables:
     ```
     JWT_SECRET=your-jwt-secret
     ```
5. Run the application:
   ```bash
   npm start
   ```

## Usage

1. Access the application in your browser at `http://localhost:3000`.
2. Register as a new user or log in with existing credentials.
3. Create clients and projects, and manage tasks and bugs.
4. Utilize the Kanban board for visual task management.

## Contributing

We welcome contributions to enhance the functionality and performance of this application. Please follow the standard GitHub process for contributions:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push to your fork and submit a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Contact

For any inquiries or support, please contact us at [vasudevds1729@gmail.com](mailto:vasudevds1729@gmail.com).





<!-- https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227527/c01mnt3r0tqe0fg3tfgu.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227521/k09jmcombszpagadr30h.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227520/xnksymlkrv27ix1cnqgl.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227519/d7bqf7pgg5lj0xinhf9l.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227517/q0vbalxcwkmjemzyf9pe.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227515/vvfwtasj8feclodgyo2i.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227513/qynwlnhao0cdfl9drw2v.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227511/xdtgnj68rbj7iwm7oesi.png
https://res.cloudinary.com/dxqrg09mq/image/upload/v1737227511/wiwip0quo6p2bonez172.png -->