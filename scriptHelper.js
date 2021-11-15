
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   
   let missionTarget = document.getElementById("missionTarget")
   missionTarget.innerHTML =
                `<h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`;
   
}

function validateInput(testInput) {   
    if (testInput === "") {
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
   if (validateInput(pilot) !== 'Not a Number' || validateInput(copilot) !== "Not a Number" || validateInput(fuelLevel) !== "Is a Number" || validateInput(cargoLevel) !== "Is a Number") {
      window.alert("All fields required.");
   } else {
        let launchStatus = document.getElementById("launchStatus");
        let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
        pilotStatus.innerHTML = `Pilot ${pilot} is ready`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready`;
        if (Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000) {
            faultyItems.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        }
        if (Number(cargoLevel) > 10000 && Number(fuelLevel) >= 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass too high for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        }
        if (Number(cargoLevel) <= 10000 && Number(fuelLevel) < 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            fuelStatus.innerHTML = "Fuel level too low for launch";
            launchStatus.style.color = "red";
            launchStatus.innerHTML = "Shuttle not ready for launch";
        }
        if (Number(cargoLevel) <= 10000 && Number(fuelLevel) >= 10000) {
            faultyItems.style.visibility = "visible";
            cargoStatus.innerHTML = "Cargo mass low enough for launch";
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            launchStatus.style.color = "green";
            launchStatus.innerHTML = "Shuttle is ready for launch";
        }
    }
}


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
});

    return planetsReturned
}

function pickPlanet(listedPlanets) {
    let randomNumber = Math.floor(Math.random() * listedPlanets.length);
    return listedPlanets[randomNumber];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
