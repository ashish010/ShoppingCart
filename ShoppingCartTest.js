//Mocha test
const assert = require("chai").assert;
const AddProduct = require("../ShoppingCart").AddProduct;
const RemoveProduct = require ("../ShoppingCart").RemoveProduct;
const CreateShoppingCart = require ("../ShoppingCart").CreateShoppingCart;

let result = 0, expectedOutcome = 0;
//Test 1
describe ("Test1", function(){
  it("AddProduct should return correct total price for products", function(){
    CreateShoppingCart(); //create a new shopping cart
    result = parseFloat (AddProduct(2, "Apple", 4.95)); //Add 2 Apple for 4.95 each
    result = parseFloat (AddProduct (1, "Orange", 3.99)); //Add 1 Orange for 3.99 each
    expectedOutcome = ((2*4.95) + 3.99).toFixed(2);
    //-1 value for result means the input command is not valid
    assert.equal (result, expectedOutcome); //compare if total price of the products is equal to the expectedOutcome
  });
})
//Test 2
describe("Test2", function(){
  it("AddProduct should return correct total price for products", function(){
    CreateShoppingCart(); //create a new shopping cart
    result = parseFloat (AddProduct(3, "Apple", 4.95)); //Add 3 Apple for 4.95 each
    result = parseFloat (RemoveProduct (1, "Apple")); //Remove 1 Apple leaving 2 apples in the cart
    expectedOutcome = (3*4.95 - 4.95).toFixed(2);
    //-1 value for result means the input command is not valid
    assert.equal (result, expectedOutcome); //compare if total price of the products is equal to the expectedOutcome
  });
})
