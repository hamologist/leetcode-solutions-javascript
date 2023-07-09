const { fizzBuzz } = require('./main');

describe("fizz-buzz", () => {
  it("example one", () => {
    const actual = fizzBuzz(3);
    expect(actual).toStrictEqual(["1","2","Fizz"]);
  });
});

