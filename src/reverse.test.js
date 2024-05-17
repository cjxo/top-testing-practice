import { reverseString } from "./reverse.js";
test("Reverse Array Test", () => {
  expect(reverseString("reverse")).toEqual("esrever");
  expect(reverseString("Hello, World")).toEqual("dlroW ,olleH");
})
