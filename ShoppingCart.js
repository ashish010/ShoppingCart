///defining variables
///shoppingCart contains products in the cart
var shoppingCart = new Object();
///productList is the list of products
var productList = new Object();
///variable used to store the total price of products in the cart
let totalprice = 0;

///function to calculate the total price on the shopping cart
///parameter: prodName is the name of the products
///returns the total price of products upto 2 decimal points
function CalculateTotal (prodName) {
  ///define local variable to store the total price
  var total = 0;
  ///loop through all items in the shopping cart
  for (prodName in shoppingCart){
    ///add total cost of each product by adding (product price * quantity)
    total = total + parseFloat (productList[prodName])* parseFloat (shoppingCart[prodName]);
  }
  ///print all key-value pairs in the object in the console
  console.log(shoppingCart);
  ///print the total price in the cart to 2 decimal numbers
  console.log("The total amount is "+ total.toFixed(2) + ".\n");
  ///return the total price of products in the cart upto 2 decimal points
  return (total.toFixed(2));
}
///provide access to ShoppingCart.js from different JS file for Mocha test
module.exports = {
  ///function to create a new empty shopping cart
  CreateShoppingCart:function() {
  ///set shopping cart empty
    shoppingCart = {};
  ///list of products is set empty
    productList = {};
  ///total price not calculated
    totalprice = 0;
  },
  ///function to add new product in the shoppingCart
  ///parameter: quantity is the total number of a product to add in the ShoppingCart
  ///parameter: productName is the name of the product to add in the ShoppingCart
  ///parameter: productPrice is the cost of the product
  ///returns the total price of the products in the shopping cart
AddProduct: function(quantity, productName, productPrice ) {
  if (Number.isInteger(quantity) && isNaN(productPrice) === false && quantity >= 0 && productPrice >= 0) {
      /*conditions to check if the values for quantity and productPrice are valid
      * productPrice needs to be a positive number atleast 0 or greater
      * quantity needs to be an integer atleast 0 or greater*/
      ///condition when product is added to the productList and shoppingCart for the first time
      if (!([productName] in productList)) {
        ///product name and price are added to productList as a key-value pair
        Object.assign(productList, {[productName]: productPrice});
        ///product name and quantity are added to the cart (shoppingCart) as key-value pair
        Object.assign(shoppingCart,{[productName]: quantity});
        console.log("Successfully added");
        ///Call function to calculate the total price on the shopping cart and stores value in totalprice
        totalprice = CalculateTotal(productName);
        ///return the total price of the products in the shopping cart for mocha test when Successfully added
        return (totalprice);
        }else {
          ///else condition when product is already present in the productList
          ///if-condition when stored product price is not the same as the input provided
          if(productList[productName] != productPrice)
            {
              console.log("Multiple price detected for same item: Check input price of product");
              ///return -1 for failing to add product Successfully
              return (-1);
            }else {
              ///else condition when product addition rules are satisfied
              ///product quantity is added to existing quantity in the shopping cart
              shoppingCart[productName] = shoppingCart[productName] + quantity;
              console.log("Successfully added");
              ///Call function to calculate the total price on the shopping cart and stores value in totalprice
              totalprice = CalculateTotal(productName);
              ///return the total price of the products in the shopping cart for mocha test when Successfully added
              return (totalprice);
            }
          }
        } else {
      ///if-condition for invalid input of product information that cannot be added to the shoppingCart
      console.log("Input : ",quantity, productName, productPrice);
      console.log("Invalid input for the product. Check input again. format : AddProduct(quantity, product name, price)");
      ///return -1 for failing to add product Successfully
      return (-1);
    }
  },
  ///function to remove product from the shopping cart.
  /// parameter: removeQuantity contains the number of product to remove from cart
  ///parameter: productName is the name of the product
  ///return changed totalprice of the product after removing a product

  RemoveProduct : function (removeQuantity, productName){
    ///if-condition when removeQuantity is a valid number product is found correctly in the shopping cart
    ///Also check whether the quantity to be removed is less than or equal to the quantity in the cart
    if (isNaN(removeQuantity) === false  && removeQuantity >= 0 && [productName] in shoppingCart && removeQuantity <= shoppingCart[productName]){
      ///reduce product quantity
      shoppingCart[productName] = shoppingCart[productName]-removeQuantity;
      console.log("Successfully removed");
      ///call function to calculate the total price on the shopping cart and store it in totalprice
      totalprice = CalculateTotal (productName);
      ///if-condition when 0 product is in the cart
      if (shoppingCart[productName] === 0) {
      ///delete product item from the cart
        delete shoppingCart[productName];
        console.log(shoppingCart);
      }
      ///return the total price of the products in the shopping cart for mocha test when Successfully removed
      return (totalprice);
      }else {
      ///else condition when product name has been entered wrong or removeQuantity value is invalid
      console.log("Product could not be removed because product could not be found or quantity to be removed is not entered correctly");
      ///return -1 for failing to remove product Successfully
      return (-1);
    }
  }
}
