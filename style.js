// Get element
const formContainer = document.getElementById("form-container");
const inputs = document.querySelectorAll("input");
const button = document.getElementById("Submit");

// style container
formContainer.style.width = "300px";
formContainer.style.margin = "100px";
formContainer.style.padding = "20px";
formContainer.style.backgroundColor = "antiquewhite";
formContainer.style.borderRadius = "20px";
formContainer.style.textAlign = "center"

// style inputs
inputs.forEach(input => {
    input.style.padding = "10px";
    input.style.margin = "5px 0"
    input.style.border = "1px solid red"
    input.style.fontSize = "15px"
    // input.style.borderRadius = "20px"
});

// style button
button.style.padding = "10px 20px"


