// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
    let selectedPlanet = pickPlanet(listedPlanets);
    
addDestinationInfo(
    document,
    selectedPlanet.name, 
    selectedPlanet.diameter, 
    selectedPlanet.star, 
    selectedPlanet.distance, 
    selectedPlanet.moons, 
    selectedPlanet.image, 
);
    });


const list = document.getElementById("faultyItems");
list.style.visibility = "hidden";
const formSubmitButton = this.document.getElementById("formSubmit");


formSubmitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]").value;
    let copilotInput = document.querySelector("input[name=copilotName]".value);
    let fuelLevelInput = Number(document.querySelector("input[name=fuelLevel]").value);
    let cargoMassInput = Number(document.querySelector("input[name=cargoMass]").value);

const formStatus = validateInput(pilotNameInput);
if(formStatus === "Empty"){
    alert ("All fields are required!");
}else {
    formSubmission(document, list, pilotNameInput, copilotNameInput, fuelLevelInput, cargoMassInput);
}
});
});
