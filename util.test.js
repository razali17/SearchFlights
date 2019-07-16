const { checkData, getFlights, sortFlights } = require("./util");
const {invalidRequest1, invalidRequest2,
        noFlights, flights} = require("./mock-api");

test("Valid request to api should return true", () => {
  expect(checkData(flights)).toBeTruthy();
});

test("Invalid request to api should return false", () => {
  expect(checkData(invalidRequest1)).toBeFalsy();
});

test("Invalid request to api should return false", () => {
  expect(checkData(invalidRequest2)).toBeFalsy;
});

describe('input of five flights', () => {
  test("Should return an array of length five", () => {
    testFlights = getFlights(flights);
    expect(testFlights).toHaveLength(5);
  });

  test("Should return the correct format", () => {
    expect(testFlights).toEqual([
     "FR  203 STN --> DUB (07/27/2019 06:30 --> 07/27/2019 07:55) - 202.39 GBP",
     "FR  225 STN --> DUB (07/27/2019 13:40 --> 07/27/2019 15:05) - 173.39 GBP",
     "FR  297 STN --> DUB (07/27/2019 17:05 --> 07/27/2019 18:30) - 142.79 GBP",
     "FR  212 STN --> DUB (07/27/2019 18:30 --> 07/27/2019 19:55) - 202.39 GBP",
     "FR  271 STN --> DUB (07/27/2019 22:05 --> 07/27/2019 23:30) - 142.79 GBP"
    ]);
  });
});

test("Array of five flights should sort based on price then departure time",
 () => {
  expect(sortFlights()).toEqual([
    "FR  297 STN --> DUB (07/27/2019 17:05 --> 07/27/2019 18:30) - 142.79 GBP",
    "FR  271 STN --> DUB (07/27/2019 22:05 --> 07/27/2019 23:30) - 142.79 GBP",
    "FR  225 STN --> DUB (07/27/2019 13:40 --> 07/27/2019 15:05) - 173.39 GBP",
    "FR  203 STN --> DUB (07/27/2019 06:30 --> 07/27/2019 07:55) - 202.39 GBP",
    "FR  212 STN --> DUB (07/27/2019 18:30 --> 07/27/2019 19:55) - 202.39 GBP"
  ]);
});
