/**
 Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
 */
function incrementString(strng) {
  let number = strng.match(/\d*$/)[0];
  let result = ((parseInt(number) || 0) + 1)
    .toString()
    .padStart(number.length, 0);
  return strng.replace(/\d*$/, "").concat(result);
}

let incrementString2 = (str) => {
  return str.replace(/([0-8]|\d?9+)?$/, (e) => (e ? +e + 1 : 1));
  /*
    explaining:
      /([0-8]|\d?9+)?$/
      - ? : 1 ou 0 time
      - $ : Matches the end of input
      - () : Capturing group
        - [0-8] : number between 0 and 8
        - | : or
        - \d?9+ 
          - \d? - \d as the same [0-9]] with ? match 1 ou 0 times
          - digit 9
          - + : 1 or more times

      So at the end he used the captured value
      - Ex: 
          - 129  -> e = 29
          - a9   -> e =  9
          - aa01ff12999 -> e = 2999
      and return e+1 or just return 1 if no value is capturing
      
      
  */
};

test("sample tests", () => {
  function doTest(input, expected) {
    const actual = incrementString(input);
    expect(actual).toBe(expected);
  }
  doTest("foobar999", "foobar1000");
  doTest("foobar00999", "foobar01000");
  doTest("foo", "foo1");
  doTest("foobar001", "foobar002");
  doTest("foobar1", "foobar2");
  doTest("1", "2");
  doTest("009", "010");
  doTest("fo99obar99", "fo99obar100");
});
