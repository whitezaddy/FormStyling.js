// Get element
const body = document.body;
const formContainer = document.getElementById("form-container");
const inputs = document.querySelectorAll("input");
const button = document.getElementsByClassName("button");
const buttons = document.getElementById("buttons");
const h2 = document.querySelector("h2");

// style body
body.style.display = "flex";
body.style.justifyContent = "center";
body.style.alignItems = "center";
body.style.height = "100vh";
body.style.backgroundColor = "white";

// style container
formContainer.style.display = "flex";
formContainer.style.flexDirection = "column";
formContainer.style.width = "300px";
formContainer.style.height = "330px";
formContainer.style.margin = "100px";
formContainer.style.padding = "5px";
formContainer.style.backgroundColor = "white";
formContainer.style.borderRadius = "10px";
formContainer.style.border = "1px solid #ccc";
formContainer.style.fontFamily = "Arial, sans-serif";
formContainer.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
formContainer.style.color = "black";

// style h2
h2.style.textAlign = "center";
h2.style.color = "teal";
// style inputs
inputs.forEach(input => {
    input.style.padding = "10px";
    input.style.margin = "5px";
    input.style.border = "1px solid #ccc";
    input.style.fontSize = "14px";
    input.style.borderRadius = "5px";
});

// style button
Array.from(button).forEach(button => {
button.style.padding = "10px 20px";
button.style.marginTop = "10px";
button.style.border = "none";
button.style.borderRadius = "20px";
button.style.fontSize = "14px";
button.style.cursor = "pointer";
button.style.color = "white";
button.style.background = "teal";
});
button[0].style.color = "teal";
button[0].style.display = "flex";
button[0].style.background = "none";
button[0].style.fontSize = "10px";
buttons.style.textAlign = "center";
buttons.style.marginTop = "10px";
