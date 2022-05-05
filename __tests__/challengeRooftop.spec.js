const main = require("../src/classes/Main");

describe("Rooftop Challenge Function", () => {
  test("it should correctly order the main diagonal", () => {
    const receivedMatrix = [
      [-8, 5, -1, -2, -3, 1, 5],
      [0, -9, 0, 0, 3, 1, 5],
      [6, 5, 3, 8, 7, 1, 5],
      [5, 2, 0, 5, 4, 1, 5],
      [0, 0, 0, 0, 0, 1, 5],
      [0, 5, 6, 0, 0, 1, 5],
      [0, 0, 0, 0, 0, 1, 1],
    ];

    const expectedMatrix = [
      [1, "**", "**", "**", "**", "**", "**"],
      ["**", 1, "**", "**", "**", "**", "**"],
      ["**", "**", 3, "**", "**", "**", "**"],
      ["**", "**", "**", 5, "**", "**", "**"],
      ["**", "**", "**", "**", 0, "**", "**"],
      ["**", "**", "**", "**", "**", -9, "**"],
      ["**", "**", "**", "**", "**", "**", -8],
    ];

    const result = main.challengeRooftop(receivedMatrix);

    expect(result).toEqual(expectedMatrix);
  });
});
