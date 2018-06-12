
// this is a regular for loop
const food = ["lasagna", "tacos", "chicken", "steak"]
for (let i=0, i<= food.length; i ++) {
    console.log("I love" + food[i])
}
// this is the same loop using a 'for each' loop
food.forEach(printFood)
function printFood(food) {
    console.log("I love" + food)
}

const foodItems = ["lasagna", "tacos", "chicken", "steak"]
foodItems.forEach(function(foodItem) {
    console.log(`I love ${foodItem}`)
}

const printFoodWithFatArrow = (foodItem) => {
    console.log(`I love ${food item}`)
}

const printFoodWithFatArrow = foodItem => console.log(`I love ${foodItem}`)


let foodLoveString = "I love ";

const loveAllFoods = (foodName) => {
    console.log("in loop, before reassignment", foodLoveString)
    foodLoveString = foodLoveString + " " + foodName + " and";
    console.log("in loop, after reassignment", foodLoveString)
}

foodItems.forEach(loveAllFoods);

console.log(foodLoveString);

const loveAllFoods = (foodName) => {
    foodLoveString += `${foodName} and `;
    console.log("in loop, after reassignment", foodLoveString);
}


