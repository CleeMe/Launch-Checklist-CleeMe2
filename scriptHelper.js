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

// formSubmittsion function here - requirements say template literals so BE SURE TO USE BACKTICKS not regular
function formSubmission (document, list, pilot, copilot, fuelLevel, cargoLevel) {
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

     if (cargoLevel >= 10000) {
        cargoLevel.innerHTML = "Cargo Mass too high for launch";
        list.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color= "C7254E";
     } else{
        cargoLevel.innerHTML = "Cargo mass low enough for launch";
        list.style.visibility = "hidden";
     }

     if (fuelLevel >= 10000 && cargoLevel <=10000) {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "#419F6A";
        list.style.visibility = "hidden";
     }
}






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





async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
