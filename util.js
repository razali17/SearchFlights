//Unsorted list of flights available.
const flights = [];

//Flight fares which will be used to sort output based on price.
const prices = [];

//Helper function to check if user parameters led to valid RyanAir API
const checkData = (apiData) => {
  //If the input params lead to an invalid apiUrl respond with Invalid Request.
  if (apiData.code === "StationNotFound" ||
      apiData.code === "The request is invalid.") {
    return false;
  }
  return true;
};

//Helper function to build flights array from RyanAir Api data.
const getFlights = (flightData) => {
  const origin = flightData.trips[0].origin;
  const destination = flightData.trips[0].destination;
  const currency = flightData.currency;
  //Go through the list of all flights for the corresponding input params.
  flightData.trips[0].dates[0].flights.forEach((flight) => {
    if (flight.faresLeft) {
      //If there is a flight left change the flag to true.
      flightsAvailable = true;
      let tempResult = [];
      const flightKey = flight.flightKey.split("~");
      const airline = flightKey[0];
      const flightNumber = flightKey[1];
      const departureTime = flightKey[5];
      const arrivalTime = flightKey[7];
      const price = flight.regularFare.fares[0].amount;
      prices.push(price);
      tempResult.push(airline, flightNumber, origin, "-->", destination,
                      "(" + departureTime, "-->", arrivalTime + ")", "-",
                      price, currency);
      flights.push(tempResult.join(" "));
    }
  });
  return flights;
};

//Helper function to sort flights array based on price.
const sortFlights = () => {
  const sortedFlights = [];
  /*Loop trough the price array to find the first minimum value (i.e. the
  cheapest fare) since the price array and flights array are already in
  chronological order. That way if two fares have the same price, the flight
  with the earliest departure will be oututted first. */
  while (prices.length > 0) {
    let index = 0;
    let min = prices[index];
    for (let i = 1; i < prices.length; i++){
      if (prices[i] < min){
        min = prices[i];
        index = i;
      }
    }
    /* Add the flight at index "index" to sorted flights and then remove the
    corresponding flight from the flights array and prices array. */
    sortedFlights.push(flights[index]);
    prices.splice(index, 1);
    flights.splice(index, 1);
  }
  return sortedFlights;
};

exports.checkData = checkData;
exports.getFlights = getFlights;
exports.sortFlights = sortFlights;