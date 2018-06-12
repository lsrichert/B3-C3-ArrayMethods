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

// this is the map method

const capPlanets = planets.map(function (singlePlanet) {
    return singlePlanet.charAt(0).toUpperCase() + singlePlanet.slice(1);
});

console.log(capPlanets);


// Use the filter method to create a new array that
// contains planets with the letter 'e'. Use the `includes()`
// method on strings.


const planetsWithE = capPlanets.filter(function (planet) {
    return planet.includes("e");
})

console.log(planetsWithE);










