// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
let name1 = "Manish";
let greeting = "hello";
// and the greeting we want to render on the page

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerHTML = greeting + " " + name1;
