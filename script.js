// Write your JavaScript code here!


window.addEventListener("load", function () {
    let pilotInput = document.querySelector("input[name=pilotName]");
    let pilot = pilotInput;
        let copilotInput = document.querySelector("input[name=copilotName]");
        let copilotTinput=copilotName;
        let fuelLevelInput =(document.querySelector("input[name=fuelLevel]"));
        let fuelLevelInput = fuelLevel;
        let cargoMassInput = (document.querySelector("input[name=cargoMass]"));
        let cargoMassInput = cargoMass


    const list = document.getElementById("faultyItems");
    list.style.visibility = "hidden";
    const formSubmitButton = this.document.getElementById("formSubmit");

    formSubmitButton.addEventListener("click", function (event) {
        event.preventDefault();
   
            formSubmission(document, list, pilotInput.value, copilotInput.value, fuelLevelInput.value, cargoMassInput.value);
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

                    console.log(pilotInput.value)
            }); 
           
        }
    )
});
