import * as Caesar from "./caesar-cipher.js";

test("caesar test", () => {
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const str = "julius caesar";
  expect(Caesar.caesarCipherDecrypt(Caesar.caesarCipher(str, alpha, 3), alpha, 3)).toEqual(str);
});

test("caesar test with space and excla", () => {
  const alpha = "abcdefghijklmnopqrstuvwxyz !";
  const str = "julius caesar!";
  expect(Caesar.caesarCipherDecrypt(Caesar.caesarCipher(str, alpha, 3), alpha, 3)).toEqual(str);
});
