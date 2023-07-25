// Write your helper functions here!
require('isomorphic-fetch');
function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${image}">
                `;
}
// ok start with validate input function - trim spaces (cause it is helpful) and use code in file/here
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    if (isNaN(testInput) === false) {
        return "Is a Number";
    }
}
// formSubmission function here - requirements say template literals so BE SURE TO USE BACKTICKS not regular
formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass) {

    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");


    if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
        alert("All fields are required filled!");
        formSubmission();
    }
    if (validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
        alert("Make sure to enter valid information for each field.");
        formSubmission();
    } else {
        faultyItems.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${
            pilotName.value
        } is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${
            copilotName.value
        } is ready for launch`;
    }

    const launchStatus = document.getElementById("launchStatus");
    let passedValidation = true;
    if (fuelLevel.value < 10000) { // faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel level too low for launch";
        passedValidation = false;
    }
    if (cargoMass.value > 10000) {
        cargoStatus.innerHTML = "Cargo mass too heavy for launch";
        passedValidation = false;
    }
    if (passedValidation) {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
    } else {
        launchStatus.style.color = "red";
        launchStatus.innerHTML = "Shuttle not ready for launch.";
    }
}

async function myFetch() {
    let planetsReturned;
    await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
        planetsReturned = response.json()
    })
    return planetsReturned;
}

function pickPlanet(planets) {
    const selection = Math.floor(Math.random() * planets.length);
    const planetSelection = planets[selection];
    return planetSelection;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
