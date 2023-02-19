# School Management System Backend Service

This is a backend service for a school management system, implemented using Node.js and MongoDB.

## Getting Started

1.First install mongodb and node.js on your machine. 
2.Clone the repository: `https://github.com/Jtandoh01/subah-info-solutions.git`
3. Install the dependencies: `npm install express mongoose dotenv nodemon`
4. Create a database on the mongodb atlas
3. Create a `.env` file with the MongoDB connection string
4. Start the server.js file with npm start

## API Endpoints
DOWNLOAD POSTMAN OR ANY OTHER HTTP CLIENT YOU  KNOW.
FOR THE PURPOSES OF THIS OF THIS README, I'M GOING TO USE POSTMAN.
   
   Hint: Use the localhost:{port} instead of the mongodb atlas connection string. The local connection string returns a response message without many problems.   

   ##  GET REQUEST
   Select the GET option on the left search bar input your database connectcion follwed by forward slash and the object (in this case a student). Then add a string of characters to assign to the student  click send. 
 For example, inputing localhost:3000/'studentId' will return the a message that contains the ID of the student.

    ##POST REQUEST
    1.Select the POST on the left side of the address bar in the postman app.
    2. Select 'body' and 'raw data' below the options listed under the address bar.
    3. In the text area of of the inframed window type "studentId": "input ID here"
    4. In the address bar, type localhost:"port number"/"insatnce of the students" and click send.
    5. A response message containing the id you assigned to the student client.



replcing api with your database connection string, you can simply send GET and POST request to student

- `GET api/student/:studentId`: Retrieve student details by student id
- `POST api/student`: Register a new student by supplying student details in the request body

