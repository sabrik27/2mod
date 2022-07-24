let i = 0;
while(i < 10) {
const { encrypt, decrypt } = require("./index");

  test("encrypt test", () => {
  expect(encrypt("abc")).not.toEqual("abc");
  });

 test("decrypt test", () => {
expect(decrypt(encrypt("abc"))).toEqual("abc");
 });
 i++;
}