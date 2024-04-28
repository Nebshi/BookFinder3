# 
Jag satsar på godkänt betyg.

# 
This project is designed as a practical exercise for building and testing APIs, with a focus on integrating MongoDB, mongoose, server setup, and fakerjs for data generation.

# 
To streamline API testing, a Postman collection has been provided for easy testing. The collection includes both manual and automated testing endpoints, aiding in thorough API validation.

#
For detailed instructions on API usage and endpoints, refer to the API documentation available at the following link: API Documentation.

# API Installation Guide

# Follow these steps to set up your API:

1. Clone the Repository: Clone the repository to your local machine using the command:

   git clone <https://github.com/Nebshi/BookFinder3.git>

2. Initialize npm: Navigate to the project directory and run:

   npm init -y

3. Install Dependencies: Install Express and Mongoose using:

   npm install express mongoose


4. Database Connection: In server.js, replace the MongoDB connection string mongoose.connect("mongodb+srv://<Username>:<Password>@cluster0.rsjx5gd.mongodb.net/<DB>") with your database link.

5. Update package.json: Add "type": "module" to package.json to specify the module type.

6. Run the Server: Start the server by running:

   node server.js


7. Verify Server Status: Check the terminal for the message "Listening on port http://localhost:3002" to confirm the server is running.

8. Access API Endpoints: Visit "http://localhost:3002/api/users" in your browser to view documents in the "users" collection.

9. Generate Mock Data: Install Faker.js using:

   npm install @faker-js/faker --save-dev


10. Adjust Mock Data Settings: Customize the amount of mock data in seedDB.js as needed.

11. Run Seed Script: Generate mock data by running:

    node seedDB.js


12. Restart the Server: After generating mock data, restart the server:

    node server.js


13. Rate Limiting: Implement rate limiting with express-rate-limit:

    npm install express-rate-limit





