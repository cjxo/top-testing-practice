import { capitalize } from "./capitalize";

test("Capitalize Test", () => {
  expect(capitalize("hello")).toEqual("Hello");
  expect(capitalize("this should capitalize \"This\"")).toEqual("This should capitalize \"This\"");
})
