
# Medium Clone - Blogging Website

This project is a full-stack Medium-like blogging platform, built to showcase modern web development practices using cutting-edge technologies. The platform enables users to write, share, and interact with blogs in a responsive, type-safe, and secure environment.

## Features

### 1. **Frontend**
- **React.js and TypeScript**: The frontend is developed using React for dynamic user interface management, while TypeScript ensures type safety, catching potential errors early in the development process.
- **Tailwind CSS**: Provides utility-first styling for rapid, consistent, and visually appealing designs, ensuring a clean and professional user experience.
- **JWT-based Authentication**: Secure user login and registration system, utilizing JSON Web Tokens (JWT) for session management, ensuring that sensitive data and user sessions are protected.
- **Data Validation with Zod**: Integrated Zod for schema validation, ensuring that all incoming and outgoing data complies with strict validation rules, maintaining integrity throughout the application.
- **Responsive and Interactive UI**: A sleek, mobile-first design that provides a smooth experience across devices and browsers.

### 2. **Backend**
- **Cloudflare Workers**: A robust, serverless backend built using Cloudflare Workers. This allows the application to scale easily with low-latency request handling at the edge, ensuring high availability and fast responses for global users.
- **Hono App for Routing**: Used Hono as the routing layer to handle HTTP requests efficiently within the serverless architecture.
- **PostgreSQL with Prisma ORM**: PostgreSQL is used as the primary database, managed through Prisma ORM and Prisma accelerate for **connection pooling**, allowing efficient and type-safe database queries and ensuring high performance in data handling.
  
### 3. **Deployment**
- **Vercel Hosting**: The entire frontend is deployed on Vercel, leveraging its efficient CDN for fast content delivery and zero-configuration deployment pipelines.

## Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **Backend**: Cloudflare Workers, Hono App, JWT Authentication, Zod for validation
- **Database**: PostgreSQL, Prisma ORM
- **Deployment**: Vercel

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/ankur5ahu/MediumClone.git
    cd MediumClone
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

4. Set up environment variables:
    Create a `.env` file in the root directory and add the following:

    ```bash
    DATABASE_URL=<your_postgresql_database_url>
    JWT_SECRET=<your_jwt_secret>
    ```

5. Run the development server:
    ```bash
    npm run dev
    ```

6. Open the application:
    Visit `http://localhost:3000` to interact with the platform locally.

## Key Features

- **Blogging System**: Users can create, edit, and delete blogs.
- **Authentication**: Secure user authentication using JWT.
- **Data Validation**: Ensures robust input validation through Zod.
- **Scalable Backend**: Serverless architecture using Cloudflare Workers for improved performance and scalability.
- **Responsive Design**: Tailored for seamless use across mobile and desktop devices.
- **Connection Pooling with Prisma Accelerate**: Implemented connection pooling in the serverless backend to optimize database connections, using **Prisma Accelerate**. This ensures efficient management of PostgreSQL connections in a serverless environment, reducing latency and improving overall performance.

## Future Enhancements

- **Comments and Likes System**: Implement features to allow users to comment on and like blogs.
- **Search and Tags**: Add functionality to search blogs by keywords and categorize blogs by tags.
- **User Profiles**: Enable user profile creation and management, with the ability to follow other authors.

## Contributing

Feel free to open issues or pull requests for any improvements or bug fixes. Contributions are welcome!
