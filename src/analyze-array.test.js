import { analyzeArray, findMinMax } from "./analyze-array";

test("min-max test odd numbered length", () => {
  expect(findMinMax([1,8,3,4,2,6,9])).toEqual({ min: 1, max: 9 });
});

test("min-max test even numbered length", () => {
  expect(findMinMax([1,8,3,4,2,6])).toEqual({ min: 1, max: 8 });
});

test("analyze-array test", () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({ average: 4, min: 1, max: 8, length: 6 });
  // risky floating-point comparison test. But what ever it works
  expect(analyzeArray([1,8,3,4,2,6,9])).toEqual({ average: 4.714285714285714, min: 1, max: 9, length: 7 });
})
