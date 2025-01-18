
document.getElementById("ageCalculatorForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get the entered date of birth
    const dob = document.getElementById("dob").value;

    if (!dob) {
        document.getElementById("result").innerText = "Please select a valid date.";
        return;
    }

    // Convert the date of birth to a Date object
    const dobDate = new Date(dob);

    // Get the current date
    const today = new Date();

    // Calculate the age
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    const dayDiff = today.getDate() - dobDate.getDate();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    // Display the result
    document.getElementById("result").innerText = `Your age is: ${age} years old.`;
});
