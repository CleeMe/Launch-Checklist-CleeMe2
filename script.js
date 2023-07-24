// Write your JavaScript code here!


window.addEventListener("load", function () {
   
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (response) {
        listedPlanets = response;
 

    }).then(function () {
        let selectedPlanet = pickPlanet(listedPlanets);
     // console.log("test" + selectedPlanet);

        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, 
            selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image,);

    });
    
        let submitForm = document.querySelector("form");
        submitForm.addEventListener("submit", function(event){
            let faultyItems = document.getElementById("faultyItems");
            faultyItems.style.visibility = "hidden";
            let pilotName = document.querySelector("input[name=pilotName]");
            let copilotName = document.querySelector("input[name=copilotName]");
            let fuelLevel = document.querySelector("input[name=fuelLevel]");
            let cargoMass = document.querySelector("input[name=cargoMass]");
            event.preventDefault();
            formSubmission(document, faultyItems, pilot, copilot, fuelLevel, cargoMass);
});
});
