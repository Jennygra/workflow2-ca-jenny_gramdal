import {
  getDiscountPercentage,
  formatDecimalSpaces,
  convertKrone,
  calculateTax,
} from "./question-3.js";

/* Test 1 */
test("Calculates the discount percentage from a normal price and a discounted price.", () => {
  expect(getDiscountPercentage(100, 75)).toBe(25);
});

/* Test 2 */
test("Converts a value to 2 decimal spaces", () => {
  expect(formatDecimalSpaces(18.88888)).toBe(18.89);
});

/* Test 3 */
test("Converts a value to or from Krone", () => {
  expect(convertKrone(88)).toBe(895.84);
});

/* Test 4 */
test("Calculates the tax for an amount given", () => {
  expect(calculateTax(100)).toBe(125);
});
