const calorieCounter = document.getElementById("calorie-counter");
const budgetNumberInput = document.getElementById("budget");
const entryDropdown = document.getElementById("entry-dropdown");
const addEntryButton = document.getElementById("add-entry");
const clearButton = document.getElementById("clear");
const output = document.getElementById("output");
let isError = false;
function cleanInputString(str) {
    const regex = /[+-\s]/g;
    return regex.replace(regex, "");
}
function isInvalidInput(str) {
    const regex = /\d+e\d+/i;
    return str.match(regex);
}
function addEntry() {
    const targetInputContainer = document.querySelector(`#${entryDropdown.value} .input-container`);
    const entryNumber = targetInputContainer.querySelectorAll('input[type="text"]').length + 1;
    const HTMLString = `<label for="${entryDropdown.value}-${entryNumber}-name">Entry ${entryNumber} Name</label>
    <input type="text" id="${entryDropdown.value}-${entryNumber}-name" placeholder="Name" />
    <label for="${entryDropdown.value}-${entryNumber}-calories">Entry ${entryNumber} Calories</label>
    <input type="number" min="0" placeholder="Calories" id="${entryDropdown.value}-${entryNumber}-calories"/>`;
    targetInputContainer.insertAdjacentHTML("beforeend", HTMLString);
}
addEntryButton.addEventListener('click', addEntry);
function getCaloriesFromInputs(list) {
    let calories = 0;
    for(const item of list){
        const currVal = cleanInputString(item.value);
        const invalidInputMatch = isInvalidInput(currVal);
        if (invalidInputMatch) {
            alert(`Invalid Input: ${invalidInputMatch[0]}`);
            isError = true;
            return null;
        }
    }
    calories += Number(currVal);
    return calories;
}
function calculateCalories(e) {
    e.preventDefault();
    isError = false;
    dinnerNumberInputs = document.querySelectorAll('#dinner input[type=number]');
    snacksNumberInputs = document.querySelectorAll('#snacks input[type=number]');
    exerciseNumberInputs = document.querySelectorAll('#exercise input[type=number]');
    lunchNumberInputs = document.querySelectorAll('#lunch input[type=number]');
    const breakfastNumberInputs = document.querySelectorAll('#breakfast input[type=number]');
    const lunchCalories = getCaloriesFromInputs(lunchNumberInputs);
    const breakfastCalories = getCaloriesFromInputs(breakfastNumberInputs);
    const dinnerCalories = getCaloriesFromInputs(dinnerNumberInputs);
    const snacksCalories = getCaloriesFromInputs(snacksNumberInputs);
    const exerciseCalories = getCaloriesFromInputs(exerciseNumberInputs);
    const budgetCalories = getCaloriesFromInputs([budgetNumberInput]);
    if (isError) {
        return   
    }
}