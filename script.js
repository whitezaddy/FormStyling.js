// Get element
const body = document.body;
const formContainer = document.getElementById("form-container");
const inputs = document.querySelectorAll("input");
const button = document.getElementsByClassName("button");
const h3 = document.querySelector("h3");

// style body
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.backgroundColor = "antiqueWhite";

// style container
formContainer.style.width = "150px";
formContainer.style.margin = "100px";
formContainer.style.padding = "5px";
formContainer.style.backgroundColor = "white";
formContainer.style.borderRadius = "10px";
formContainer.style.border = "1px solid #ccc";
formContainer.style.fontFamily = "Arial, sans-serif"
formContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
formContainer.style.color = "black"

// style h3
h3.style.textAlign = "center";
h3.style.color = "teal";
// style inputs
inputs.forEach(input => {
    input.style.padding = "3px";
    input.style.margin = "5px"
    input.style.border = "1px solid #ccc"
    input.style.fontSize = "10px"
    input.style.borderRadius = "5px"
});

// style button
Array.from(button).forEach(button => {
button.style.padding = "5px 10px"
button.style.marginTop = "10px"
button.style.border = "none"
button.style.background = "none"
button.style.borderRadius = "20px"
button.style.fontSize = "10px"
button.style.cursor = "pointer"
button.style.color = "white"
button.style.background = "teal"
});
button[0].style.color = "teal"
button[0].style.background = "none"
button[0].style.fontSize = "7px"
button[1].style.marginLeft = "23px"




