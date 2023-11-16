let productsArray = [
  {
    id: "1",
    name: "pants",
  },
  {
    id: "2",
    name: "shorts",
  },
  {
    id: "3",
    name: "shirts",
  },
];

## Instructions
1. Spin up a brand new Express app using the steps covered in class.
   - **Note:** Run `npm init -y`, `npm i express morgan uuid`, and create `app.js`.

2. **Task 1:** Setup a public folder.
3. **Task 2:** Setup a view folder.
4. **Task 3:** Setup a router folder.
5. **Task 4:** Create a file called `productRouter.js` inside the router folder.
6. **Task 5:** Require the `productRouter.js` file inside `app.js` and give it a path = "/api/product".
7. Code the CRUD functionality inside `productRouter.js` file.

### CRUD Functionality

1. **Setup a GET route to retrieve all the products.**
2. **Setup a GET route to retrieve an item by id.**
3. **Setup a GET route to retrieve an item by name.**
4. **Set a POST route to create a product and give it an ID.**
5. **Set a PUT route to update a product by ID.**
6. **Set a DELETE route to delete a product by ID.**
