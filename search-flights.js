"use strict";
const fetch = require("node-fetch");
const { checkData, getFlights, sortFlights } = require("./util");

//Get and rename input params for ease of use.
const args = process.argv.slice(2);
const origin = args[0];
const destination = args[1];
const departureDate = args[2];
const ADT = args[3];

//Default Ryanair Api Url that will be adjusted depending on the input params.
const apiUrl = ("https://desktopapps.ryanair.com/v4/en-gb/availability?ADT="
                +ADT+"&CHD=0&DateOut="+departureDate+"&Destination="
                +destination+
                "&FlexDaysOut=0&INF=0&IncludeConnectingFlights=true&Origin="
                +origin+"&RoundTrip=false&TEEN=0&ToUs=AGREED&exists=false"
                );

//Flag to see if the api returns any available flights.
let flightsAvailable = false;

//Check if user entered correct number of input parameters.
if (!(origin | destination | departureDate | ADT)) {
  throw new Error("Please enter correct number of input parameters");
}
fetch(apiUrl)
.then((response) => {
  return response.json();
}).then((data) => {
  //Call helper funciton to sort through the returned data.
  if (!checkData(data)) {
    throw new Error("Invalid request for RyanAir API. Check airport codes or "
                  +"date format");
  }
  const flightsList = getFlights(data);
  if (flightsList[0] === undefined) {
    console.log("No flights found.");
    return;
  }
  /* Now all available flights are stored in the flights array in
  chronologicalorder but they are not sorted based on price. So call helper
  function sortFlights. */
  console.log(sortFlights().join("\n"));
  return;
});