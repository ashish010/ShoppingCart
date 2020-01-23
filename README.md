### Shopping Cart using JavaScript
CLI application to execute commands and display the result

## Getting Started

mochaTest.tar.gz contains all the program files. The **ShoppingCart.js** contains the code for the shopping cart and
the **ShoppingCartTest.js** contains the tests using Mocha. **ShoppingCartTest.js** needs to be in a separate folder named **"test"**.

## Idea

The application is a simple shopping cart that allows users to add and remove products from their cart. It also
validates the input by handling several conditions.

## Testing and Execution
The application has been tested using Mocha. The functions in the program can be accessed using AddProduct and
RemoveProduct functions.

User may add product in the cart by using AddProduct(quanity, product name, price). Eg. AddProduct(2, "Ball", 3.5)
User may remove a product from the cart by using RemoveProduct(quantity to remove, product name). Eg. RemoveProduct(1, "Ball)

## Expectation

Inputs: - AddProduct (2, "Ball", 3.5)
Output: - { "Ball" : 2} Successfully added
