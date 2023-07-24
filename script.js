// Write your JavaScript code here!


window.addEventListener("load", function () {
   
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        // console.log(listedPlanets);
        
    }).then(function () {
        let selectedPlanet = pickPlanet(listedPlanets);
        console.log("test" + selectedPlanet);

        addDestinationInfo(document, selectedPlanet.name, selectedPlanet.diameter, selectedPlanet.star, 
            selectedPlanet.distance, selectedPlanet.moons, selectedPlanet.image,);

    });
    

        formSubmission(document, list, pilotInput, copilotInput, fuelLevelInput, cargoMassInput);
    const list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    const formSubmitButton = this.document.getElementById("formSubmit");

    formSubmitButton.addEventListener("click", function (event) {
        event.preventDefault();
   
        let pilotInput = document.querySelector("input[name=pilotName]").value;

        let copilotInput = document.querySelector("input[name=copilotName]").value;

        let fuelLevelInput =(document.querySelector("input[name=fuelLevel]")).value;
     
        let cargoMassInput = (document.querySelector("input[name=cargoMass]")).value;
           
        }
    )
});
