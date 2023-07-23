// Write your helper functions here!

// ok start with validate input function - trim spaces (cause it is helpful) and use code in file/here
function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
}
// formSubmission function here - requirements say template literals so BE SURE TO USE BACKTICKS not regular
function formSubmission(document, list, pilot, copilot, fuelLevel, cargoMass) {
   
    const pilotStatus = document.getElementById("pilotStatus");
    const copilotStatus = document.getElementById("copilotStatus");
    const fuelStatus = document.getElementById("fuelStatus");
    const cargoStatus = document.getElementById("cargoStatus");
    const launchStatus = document.getElementById("launchStatus");

if (validateInput(pilot) === "Empty" || validateInput(copilot)=== "Empty" || validateInput(fuelLevel)=== "Empty" ||
         validateInput(cargoMass)=== "Empty")  {
    alert("All fields must be filled.");
} else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoMassInput) === "Not a Number") {
    alert ("Please enter a number");

} else {
    fuelLevel=Number(fuelLevelInput.value)
    cargoMass=Number(cargoMassInput.value)
    pilotStatus.innerHTML - `Pilot ${pilot} is ready for launch`;
    copilotStatus.innerHTML - `Co-pilot ${copilot} is ready for launch`;
    list.style.visibility = "visible";
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Fuel level too low for launch";
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        fuelStatus.innerHTML = "Fuel level high enough for launch";
    
    }

    if (cargoMass > 10000) {
        cargoMass.innerHTML = "Cargo Mass too heavy for launch";
       
        launchStatus.innerHTML = "Shuttle Not Ready for Launch";
        launchStatus.style.color = "rgb(199, 37, 78)";
    } else {
        cargoMass.innerHTML = "Cargo mass low enough for launch";
       
    }

    if (fuelLevel >= 10000 && cargoMass <= 10000) {
        launchStatus.innerHTML = "Shuttle is Ready for Launch";
        launchStatus.style.color = "#419F6A";
   
    }
}
}

async function myFetch() {
    let planetsResponse = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    return planetsResponse.json();
}

function pickPlanet(planets) {
    const index = Math.floor(Math.random() * planets.length);
    return planets[index];
}

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    const missionTargetDiv = document.getElementById("missionTarget");
    missionTargetDiv.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}" alt="${name}">
                `;
}


module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
