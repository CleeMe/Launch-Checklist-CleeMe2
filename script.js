// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    })


    // set up submit so it knows what input goes to which id on the HTML Document
// 
let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    
    let pilotInput = document.querySelector("input[name=pilotName]");
    let copilotInput = document.querySelector("input[name=copilotName]");
    let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
    let cargoMassInput = document.querySelector("input[name=cargoMass]");

    // this part says that if the value of any of these variables are empty the alert will happen
    if (pilotInput.value === "" || copilotInputilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === "" || 
//    the alert for all fields to be required
    alert ("All fields are required!");
    
    // used to ensure the form can not be submitted if all fields aren't filled
    event.preventDefault();

    
}

});


