# people-records
A CRUD API that contains records of individuals

## Tech Stack

**Server:** Node, Express, Mongoose

## Hosted on Heroku

https://people-records.herokuapp.com/

## API Routes

With this API, you can do the following:
- View All records in the database
- Create a record
- Update a record
- Delete a record

#### Get all records in the database

```http
  GET /records
```

#### Get one single record in the database
```http
  GET /records/:id
```

#### Create a single record in the database
```http
  POST /records
```

#### Update a single record in the database
```http
  PUT /records/:id
```

#### Delete one single record in the database
```http
  DELETE /records/:id
```
