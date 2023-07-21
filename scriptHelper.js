// Write your helper functions here!

// ok start with validate input function - trim spaces (cause it is helpful) and use code in file/here
function validateInput(testInput) {
    if(testInput.trim() === "") {
        return "Empty";
    }else if (isNaN(testInput)){
        return "Not a Number";
    }else {
        return "Is a Number";
    }
} 

// formSubmission function here - requirements say template literals so BE SURE TO USE BACKTICKS not regular
function formSubmission (document, list, pilot, copilot, fuelLevel, cargoMass) {
    const pilotStatus = document.getElementByID("pilotStatus");
    const copilotStatus = document.getElementByID("copilotStatus");
    const fuelStatus = document.getElementByID("fuelStatus");
    const cargoStatus = document.getElementByID("cargoStatus");
    const launchStatus = document.getElementByID("launchStatus");

    pilotStatus.innerHTML - `Pilot ${pilot}Ready`;
    copilotStatus.innerHTML - `Co-pilot ${copilot}Ready`;

    
     if (fuelLevel <= 10000){
        fuelStatus.innerHTML = "Fuel level too low for launch";
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color= "C7254E";
     } else{
        fuelStatus.innerHTML = "Fuel level high enough for launch";
        list.style.visibility = "hidden";
     }

     if (cargoMass >= 10000) {
        cargoMass.innerHTML = "Cargo Mass too high for launch";
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color= "C7254E";
     } else{
        cargoMass.innerHTML = "Cargo mass low enough for launch";
        list.style.visibility = "hidden";
     }

     if (fuelLevel >= 10000 && cargoMass <=10000) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "#419F6A";
        list.style.visibility = "hidden";
     }
}


// Ask for help in how to attach to the Json provided.  this is a placeholder name"
async function myFetch() {
    let planetsResponse = await fetch("planetary_data.json");
    return planetsResponse.json();
}

function pickPlanet(planets) {
    const index= Math.floor(Math.random() *planets.length);
    return planets[index];
}


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const missionTargetDiv = document.getElementByID("missionTarget");
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
