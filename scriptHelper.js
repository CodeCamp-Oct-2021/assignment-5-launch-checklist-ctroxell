
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {   
    if (testInput === "") {
        window.alert("All fields required!")
        return "Empty"
    }
   if (isNaN(testInput)) {
       return 'Not a Number';
   } else if (!isNaN(testInput)) {
       return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //preventDefault();
   if (validateInput(pilot) !== 'Not a Number') {
       window.alert("All fields required!");
   } else if (validateInput(copilot) !== "Not a Number") {
       window.alert("All fields required!");
   } else if (validateInput(fuelLevel) !== "Is a Number") {
       window.alert("All fields required!");
   } else if (validateInput(cargoLevel) !== "Is a Number") {
       window.alert("All fields required!");
   } else {
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");

        pilotStatus.innerHTML = `Pilot: ${pilot} ready`;
        copilotStatus.innerHTML = `Copilot: ${copilot} ready`;
   }


}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
