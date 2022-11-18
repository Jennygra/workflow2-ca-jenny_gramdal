import { milk, bread, cheese, tomato, lettuce } from "./items";
import { ShoppingCart } from "./question-4";

const myCart = new ShoppingCart();

/* test 1 */
myCart.addToCart(bread);

describe("Adding 1 item to the cart, then check if the returning values is correct", () => {
  test("Total cost", () => {
    expect(myCart.getCostTotal()).toBe(9.25);
  });

  test("Number of items in cart", () => {
    expect(myCart.getNumberOfItems()).toEqual(myCart.cart.length);
  });

  test("Get cart", () => {
    expect(myCart.getCart()).toEqual(myCart.cart);
  });

  console.log(myCart);
});

/* test 2 */
const cartTwo = new ShoppingCart();
myCart.addToCart(tomato);
myCart.addToCart(cheese);

describe("Adding 2 item to the cart, then check if the returning values is correct", () => {
  test("Total cost", () => {
    expect(cartTwo.getCostTotal()).toBe(9.45);
  });

  test("Number of items in cart", () => {
    expect(cartTwo.getNumberOfItems()).toEqual(cartTwo.cart.length);
  });

  test("Get cart", () => {
    expect(cartTwo.getCart()).toEqual(cartTwo.cart);
  });

  console.log(cartTwo);
});

/* test 3 */
// myCart.addToCart(milk);
// myCart.addToCart(milk);
// myCart.addToCart(milk);

// describe("Test that it can't add the same item 3 times.", () => {
//   test("Total cost", () => {
//     expect(myCart.getCostTotal()).toBe(19.99);
//   });

//   test("Number of items in cart", () => {
//     expect(myCart.getNumberOfItems()).toEqual(myCart.cart.length);
//   });

//   test("Get cart", () => {
//     expect(myCart.getCart()).toEqual(myCart.cart);
//   });

//   console.log(myCart);
// });

/* test 4 */
// myCart.addToCart(lettuce);
// myCart.addToCart(bread);

// myCart.removeFromCart(bread);

// describe("Test that it can add 2 separate items, then remove one of them", () => {
//   test("Total cost", () => {
//     expect(myCart.getCostTotal()).toBe(1.95);
//   });

//   test("Number of items in cart", () => {
//     expect(myCart.getNumberOfItems()).toEqual(myCart.cart.length);
//   });

//   test("Get cart", () => {
//     expect(myCart.getCart()).toEqual(myCart.cart);
//   });

//   console.log(myCart);
// });
