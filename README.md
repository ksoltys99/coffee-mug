## Setup
To run this project, install it locally using npm:

```
$ npm install
$ npm run dev
```

## End-points
* https://localhost:8000/products -  [GET] get all product names
* https://localhost:8000/products/{id} - [GET] get product details with specific id
* https://localhost:8000/products/update/{id} - [PUT] update product with specific id (requires body)
* https://localhost:8000/products/delete/{id} - [DELETE] delete product with specific id
* https://localhost:8000/products/add - [POST] add product (requires body)

## About
I decided to use .json file as a mock database to simplify installation and usage of the app :)
The app is testable via Postman.
Node.js version: 18.12
