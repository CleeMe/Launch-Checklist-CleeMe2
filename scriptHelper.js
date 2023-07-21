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



function formSubmission(document, faultyItemsList, pilot, copilot, fuelLevel, cargoLevel) {
    // this part says that if the value of any of these variables are empty the alert will happen
    if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" 
    || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){ 
//    the alert for all fields to be required
    alert ("All fields are required!");
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
