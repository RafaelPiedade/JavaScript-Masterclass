function humanReadable(seconds) {
  let SS = (seconds % 60).toString().padStart(2, "0");
  let MM = (parseInt(seconds / 60) % 60).toString().padStart(2, "0");
  let HH = parseInt(parseInt(seconds / 60) / 60)
    .toString()
    .padStart(2, "0");
  return `${HH}:${MM}:${SS}`;
}

function humanReadable2(seconds) {
  var pad = function (x) {
    return x < 10 ? "0" + x : x;
  };
  return (
    pad(parseInt(seconds / (60 * 60))) +
    ":" +
    pad(parseInt((seconds / 60) % 60)) +
    ":" +
    pad(seconds % 60)
  );
}

describe("tests", function () {
  it("should format correctly", function () {
    expect(humanReadable(0)).toBe("00:00:00");
    expect(humanReadable(59)).toBe("00:00:59");
    expect(humanReadable(60)).toBe("00:01:00");
    expect(humanReadable(90)).toBe("00:01:30");
    expect(humanReadable(3599)).toBe("00:59:59");
    expect(humanReadable(3600)).toBe("01:00:00");
    expect(humanReadable(45296)).toBe("12:34:56");
    expect(humanReadable(86399)).toBe("23:59:59");
    expect(humanReadable(86400)).toBe("24:00:00");
    expect(humanReadable(359999)).toBe("99:59:59");
  });
});
