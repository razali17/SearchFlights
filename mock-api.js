//Valid request to API
const validRequest = {
  code: "valid"
};

const invalidRequest1 = {
  code: "StationNotFound"
};

const invalidRequest2 = {
  code: "The request is invalid."
};

const noFlights = {
  trips: [
    {dates: [
      {flights: []}
    ]}
  ]
};

//Mulitple available flights where some have the same price
const flights = {
  currency: "GBP",
  trips: [{
          origin: "STN",
          destination: "DUB",
          dates: [{
          flights: [{
            faresLeft: 2,
            flightKey: "FR~ 203~ ~~STN~07/27/2019 06:30~DUB~07/27/2019 07:55~~",
            regularFare: {
                          fares: [{
                                  amount: 202.39
                                  }]
                          }
            },
            {
            faresLeft: 1,
            flightKey: "FR~ 225~ ~~STN~07/27/2019 13:40~DUB~07/27/2019 15:05~~",
            regularFare: {
                          fares: [{
                                  amount: 173.39
                                  }]
                        }
            },
            {
            faresLeft: 2,
            flightKey: "FR~ 297~ ~~STN~07/27/2019 17:05~DUB~07/27/2019 18:30~~",
            regularFare: {
                          fares: [{
                                  amount: 142.79
                                  }]
                        }
            },
            {
            faresLeft: 1,
            flightKey: "FR~ 212~ ~~STN~07/27/2019 18:30~DUB~07/27/2019 19:55~~",
            regularFare: {
                          fares: [{
                                  amount: 202.39
                                  }]
                        }
            },
            {
            faresLeft: 1,
            flightKey: "FR~ 271~ ~~STN~07/27/2019 22:05~DUB~07/27/2019 23:30~~",
            regularFare: {
                          fares: [{
                                  amount: 142.79
                                  }]
                        }
            }]
          }]
          }]
};

exports.invalidRequest1 = invalidRequest1;
exports.invalidRequest2 = invalidRequest2;
exports.noFlights = noFlights;
exports.flights = flights;