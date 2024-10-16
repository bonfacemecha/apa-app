# Laravel Vue 3 Application

This is a step-by-step guide to set up a Laravel application with Vue 3. This application serves as a base for building modern web applications using Laravel as the backend and Vue 3 as the frontend.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed:

- [PHP](https://www.php.net/) (8.2 or higher)
- [Composer](https://getcomposer.org/)
- [Node.js](https://nodejs.org/) (14.x or higher)
- [NPM](https://www.npmjs.com/) (comes with Node.js)
- A database (e.g., MySQL, SQLite)

## Installation Steps

### Step 1: Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
### Step 2: Install PHP Dependencies
Navigate to the root of your project and run Composer to install the required PHP packages:

```bash
composer install
```
### Step 3: Set Up Environment File
Create a .env file by copying the example provided:

```bash
Copy code
cp .env.example .env
```

### Step 4: Configure Environment Variables
Edit the .env file and configure your database and application settings. Make sure to set the following variables:

```bash
Copy code
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password

```

### Step 5: Generate Application Key
Generate a new application key:

```bash
Copy code
php artisan key:generate

```

#### Step 6: Run Migrations
If your application has migrations, run them to create the database tables:

```bash
Copy code
php artisan migrate

```
### Step 7: Install Frontend Dependencies

Navigate to the frontend directory and install the necessary Node.js packages:

```bash
Copy code
npm install

```
### Step 8: Compile Assets
Compile your Vue components and other assets using:

```bash
Copy code
npm run dev
```
For production, you can run:

```bash
Copy code
npm run build
```
### Step 9: Run the Application
You can start the Laravel development server with:

```bash
Copy code
php artisan serve
```
The application will be accessible at http://localhost:8000.

Step 10: Access the Application
Open your web browser and go to http://localhost:8000 to see your application in action.
