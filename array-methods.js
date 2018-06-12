// solar system practice

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const planetEl = document.getElementById("planets")

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

function addPlanet (onePlanet) {
const planetSection = document.createElement("section")
planetSection.textContent = onePlanet 
planetEl.appendChild(planetSection)



console.log(onePlanet);


}

planets.forEach(addPlanet)


// Use the map method to create a new array where the
// first letter of each planet is capitalized. Use the
// toUpperCase()` method on strings.

// const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]




// console.log(planets);
// planets.map(toUpper);

const capPlanets = planets.map(function (singlePlanet) {
    return singlePlanet.toUpperCase

})

console.log(capPlanets);







