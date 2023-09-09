import { assert } from "chai";
import { add, sub } from "../src";

describe("global", () => {
  it("#add", () => {
    const a = 1;
    const b = 2;
    const expected = a + b;
    assert.equal(add(a, b), expected);
  });

  it("#sub", () => {
    const a = 1;
    const b = 2;
    const expected = a - b;
    assert.equal(sub(a, b), expected);
  });
});
