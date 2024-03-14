// Retrieve the date input element and the result element from the DOM

const userInput = document.getElementById("date");
const result = document.getElementById("result");
const btn = document.querySelector(".btn");

// Set the maximum allowed date in the date input to today's date
userInput.max = new Date().toISOString().split("T")[0];

// Define a function to calculate the age
function calculateAge() {
    // Get the birth date from the input value and create a Date object
    const birthDate = new Date(userInput.value);
    // Get the current date
    const today = new Date();

    // Calculate the difference in milliseconds between today and the birth date
    const ageInMilliseconds = today - birthDate;
    console.log(ageInMilliseconds)
    // Create a new Date object representing the difference in milliseconds
    const ageDate = new Date(ageInMilliseconds);
    console.log(ageDate)

    // Calculate the age in years by subtracting the UTC year of 1970 from the UTC year of the ageDate
    const years = Math.abs(ageDate.getUTCFullYear() - 1970);
    console.log(years)
    // Get the UTC month of the ageDate
    const months = ageDate.getUTCMonth();
    console.log(months)
    // Get the UTC day of the month of the ageDate
    const days = ageDate.getUTCDate() - 1;
    console.log(days)

    // Update the result element with the calculated age
    result.innerHTML = `You are <span>${years}</span> years, <span>${months}</span> months, and <span>${days}</span> days old.`;
}
// Add an event listener to the date input to listen for changes and trigger the calculateAge function
btn.addEventListener("click", calculateAge);