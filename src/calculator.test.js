import { Calculator } from "./calculator";

test("calculator test", () => {
  const calculator = Calculator();
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.multiply(12, 10)).toBe(120);
  expect(calculator.subtract(100, 50)).toBe(50);
  expect(calculator.divide(1000, 100)).toBe(10);
});
