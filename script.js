

//const { formSubmission } = require("scriptHelper.js");

window.addEventListener("load", function() {
    console.log("window loaded");
    let form = document.getElementById("launchForm");
    
    let submitButton = document.getElementById("formSubmit");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        console.log("submit")
        let pilotName = document.querySelector("input[name=pilotName]").value;
        let copilotName = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoMass = document.querySelector("input[name=cargoMass]").value;
        let faultyItems = document.getElementById("faultyItems");
        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);

    })


   
    let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   });

   
   
});