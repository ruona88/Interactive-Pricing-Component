//Scripting for the pricing
const price = document.getElementsByClassName("cost")[0];
const theRange = document.getElementsByTagName("input")[0];

//Key Event
theRange.addEventListener("keyup", () => {
    price.innerHTML = theRange.value;
})

//Click Event
theRange.addEventListener("click", () => {
    price.innerHTML = theRange.value;
})


//Scripting for the toggle button
const circle = document.getElementsByClassName("circle")[0];
const circleContainer = document.getElementsByClassName("container")[0];
const field = document.getElementById("field");

//Add Event Listener to the circle's container
circleContainer.addEventListener("click", () => {
    if(!circle.classList.contains("circle-left")) {
        circle.classList.add("circle-left");
        field.innerHTML = 'yearly';
        theRange.max = 352;
        theRange.min = 0;
        theRange.step = 22;
    } else {
        circle.classList.remove("circle-left");
        field.innerHTML = 'monthly';
        theRange.max = 32;
        theRange.min = 0;
        theRange.step = 2;
        price.innerHTML = theRange.value;
    }
})
