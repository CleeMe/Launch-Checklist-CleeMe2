// Write your JavaScript code here!

window.addEventListener("load", function () {

    let listedPlanets;
 // Set listedPlanetsResponse equal to the value returned by calling myFetch()
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
const formSubmitButton - this.document.getElementById("formSubmit");


formSubmitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let pilotInput = document.querySelector("input[name=pilotName]").value;
    let copilotInput = document.querySelector("input[name=copilotName]".value);
    let fuelLevelInput = Number(document.querySelector("input[name=fuelLevel]").value);
    let cargoMassInput = Number(document.querySelector("input[name=cargoMass]").value);

formSubmission(document, faultyItemsList, pilotInput.value, copilotInput.value, 
    fuelLevelInput.value, cargoMassInput.value);


   
    
    // used to ensure the form can not be submitted if all fields aren't filled
    

    // put in the checks for if string for Pilot and Copilot inputs and alert if not. Do I need to use toString to compare?  I think NaN
    // because am looking for if number or not?  
} else if(isNaN(pilotInput.Value)===false|| isNaN(copilotInput.value)===false){
    alert("Please check Pilot and Copilot fields for valid names then resubmit.");

    // inside scriptHelper
  

  
// needs to be in the scriptHelper figure it out
    // put in the checks for if number for Fuel Level and Cargo Mass and alert if not.
} else if(isNaN(fuelLevelInput.value)=== true|| isNaN(cargoMassInput.value)=== true){
    alert("Please check Fuel Level and Cargo Mass fields for valid numbers then resubmit. ");
   

    // if those pass then declare names of pilot and copilot readiness and check the numbers readiness
    // hmmmm it says to use template literals and those need back ticks and I am not sure if those will be
    // in here or in the html.  will go check
}else{
    document.getElementById("pilotStatus").innerHTML = "Pilot " + pilotInput.value + " Ready";
    document.getElementById("copilotStatus").innerHTML = "Co-pilot " + copilotInput.value + " Ready";
        if(fuelLevelInput.value <=10000){
            // the default is hidden in the style.css file
            this.document.getElementById("faultyItems").style.visibility = "visible";
            // change the launchStatus to show not ready if the fuelLevelInput is incorrect
            this.document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            // change the color of the status words if is incorrect
            this.document.getElementById("launchStatus").style.color = "red";
            // tell the reason why 
            this.document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
        
        // write for if all fuel status is a go
        }else{
            this.document.getElementById("fuelStatus").innerHTML = "Fuel level enough to launch";
        }
        // write cargo mass is a go
        if(cargoMassInput.value >=10000) {
            this.document.getElementById("faultyItems").style.visibility = "visible";
             // change the launchStatus to show not ready if the cargoMassInput is incorrect
             this.document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
             // change the color of the status words if is incorrect (particular red #C7254E or rgb (199, 37, 78))
            //  see note on the green I don't know how to do this
             this.document.getElementById("launchStatus").style.color = '#c7254e';
             // tell the reason why 
             this.document.getElementById("cargoStatus").innerHTML = "Cargo Mass too high for launch.";
        } else{
            this.document.getElementById("cargoStatus").innHTML = "Cargo  Mass low enough for launch.";
        }

        // write for if it is a go with the color change
        if(cargoMassInput.value <=10000 && fuelLevelInput.value >=10000){
            this.document.getElementById("launchStatus").innerHTML = "Shuttle Ready for Launch";
            // if a go particular green #419F6A or rgb (65, 159, 106) OK but seriously how do I change to specific color
            // a going to try '' but I am googling to try to figure it out.  
            this.document.getElementById("launchStatus").style.color = '#419F6A';
            this.document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch";
            // I am not sure if I need to "change" this to hidden since it is default. 
            this.document.getElementById("faultyItems").style.visibility = "hidden";
        }
       
        }
    });

});



