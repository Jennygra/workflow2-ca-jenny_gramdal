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
    expect(myCart.getNumberOfItems()).toBe(myCart.cart.length);
  });

  test("Get cart", () => {
    expect(myCart.getCart()).toEqual(myCart.cart);
  });
});

/* test 2 */
myCart.addToCart(tomato);
myCart.addToCart(cheese);

describe("Adding 2 item to the cart, then check if the returning values is correct", () => {
  test("Total cost", () => {
    expect(myCart.getCostTotal()).toBe(9.45);
  });

  test("Number of items in cart", () => {
    expect(myCart.getNumberOfItems()).toBe(myCart.cart.length);
  });

  test("Get cart", () => {
    expect(myCart.getCart()).toEqual(myCart.cart);
  });
});

/* test 3 */
myCart.addToCart(milk);
myCart.addToCart(milk);
myCart.addToCart(milk);

describe("Test that it can't add the same item 3 times.", () => {
  test("Total cost", () => {
    expect(myCart.getCostTotal()).toBe(19.99);
  });

  test("Number of items in cart", () => {
    expect(myCart.getNumberOfItems()).toBe(myCart.cart.length);
    console.log(myCart.cart.length);
  });

  test("Get cart", () => {
    expect(myCart.getCart()).toEqual(myCart.cart);
    console.log(myCart.cart);
  });
});

/* test 4 */
