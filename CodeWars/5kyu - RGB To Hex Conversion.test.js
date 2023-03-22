/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3

*/

// My
function rgb(r, g, b) {
  return `${verifyNumber(r)}${verifyNumber(g)}${verifyNumber(b)}`.toUpperCase();
}

function verifyNumber(number) {
  number = Math.trunc(number); // método Math.trunc() retorna a parte inteira de um número, descartando suas casas decimais.
  if (number < 0) {
    return "00";
  }
  if (number > 255) {
    return (255).toString(16).padStart(2, "0");
  }
  return number.toString(16).padStart(2, "0");
}
// Other
function rgb2(r, g, b){
	return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Math.trunc(d).toString(16))).slice(-2).toUpperCase()
}

describe("5kyu - RGB To Hex Conversion.test", () => {
  it("Basic Tests", () => {
    expect(rgb(0, 0, 0)).toBe("000000");
    expect(rgb(0, 0, -20)).toBe("000000");
    expect(rgb(300, 255, 255)).toBe("FFFFFF");
    expect(rgb(173, 255, 47)).toBe("ADFF2F");
  });
});

//
