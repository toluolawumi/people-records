# people-records
A CRUD API that contains records of individuals

Hosted on Heroku: https://people-records.herokuapp.com/

This API was created using the following:
- NodeJS
- Express
- MongoDB(Cloud)
- Mongoose

With this API, you can do the following:
- View All records in the database
- Create a record
- Update a record
- Delete a record

Routes used are as follows:
 - GET request to "/records" to retrieve all records from the database
 - POST request to "/records" with JSON body to create a new record in the database
 - PUT request to "/records/:id" to update a single record
 - GET request to "/records/:id" to retrieve a single record in the database
 - DELETE request to "/records/:id" to delete a single record in the database

All routes can be tested via postman using the above routes
