# Social Media Application API

## Overview
This is a RESTful API for a social media application where users can follow each other, like posts, comment on posts, like comments, view profiles, authenticate, and update their username or password.

## Features
- User Authentication (Signup, Login, Logout)
- Follow/Unfollow Users
- Like/Unlike Posts
- Comment on Posts
- Like/Unlike Comments
- View User Profiles
- Update Username or Password

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens) for Authentication

## Getting Started

### Prerequisites
- Node.js and npm installed on your machine
- MongoDB installed or use a MongoDB cloud service

### Installation

1. Clone the repository:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2. Install server dependencies:
    ```bash
    cd server
    npm install
    ```

3. Install client dependencies:
    ```bash
    cd ../client
    npm install
    ```

### Environment Variables
Create a `.env` file in the `server` directory and add the following environment variables:

```env
PORT=3000
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
