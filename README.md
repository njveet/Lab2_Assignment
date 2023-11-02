# Marketplace

Marketplace is a web application that allows users to buy and sell products. This project demonstrates the basic setup of a Node.js server, MongoDB integration, and API endpoints for managing products and categories.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [MongoDB Setup](#mongodb-setup)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Marketplace project, follow these steps:
bash
git clone <repository-url>
cd Marketplace
npm install
npm install express mongoose
To run the server, use the following command:

npm start

After setup:
 node server.js

API Endpoints
GET /api/products: Get all products.
GET /api/products/:id: Get product by ID.
POST /api/products: Create a new product.
PUT /api/products/:id: Update product by ID.
DELETE /api/products/:id: Delete product by ID.
GET /api/categories: Get all categories.
GET /api/categories/:id: Get category by ID.
POST /api/categories: Create a new category.
PUT /api/categories/:id: Update category by ID.
DELETE /api/categories/:id: Delete category by ID.
MongoDB Setup
MongoDB Connection String: mongosh "mongodb+srv://cluster0.n6mq1ti.mongodb.net/" --apiVersion 1 --username webmasterg555 
or
Copy the connection string, then open MongoDB Compass
mongodb+srv://webmasterg555:<password>@cluster0.n6mq1ti.mongodb.net/
Create Collections and Insert Sample Data: Use MongoDB Shell or an HTTP request to create collections and insert sample data into "products" and "categories" collections.

overview:

Marketplace:
|-- node_modules/
|-- package.json
|-- server.js
|-- routes/
   |-- products.js
   |-- categories.js
|-- models/
   |-- Product.js
   |-- Category.js
|-- .gitignore
|-- README.md