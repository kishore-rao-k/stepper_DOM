const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const circel1 = document.getElementById("circle1");
const circel2 = document.getElementById("circle2");
const circel3 = document.getElementById("circle3");
const circel4 = document.getElementById("circle4");
const bar1 = document.getElementById("bar1");
const bar2 = document.getElementById("bar2");
const bar3 = document.getElementById("bar3");

let result = document.getElementById("result");
let counter = 1;
circel1.classList.add("active");
result.textContent = "Add contact details for further communications";

incrementButton.addEventListener("click", function () {
  if (counter >= 1 && counter <= 5) {
    counter++;
    // console.log(counter);
  }
  if (counter == 1) {
    result.textContent = "Add contact details for further communications";
    circel1.classList.add("active");
  } else if (counter == 2) {
    let imgElement = document.createElement("img");
    imgElement.src = "checked.png";
    imgElement.alt = "Circle Image";
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";
    circel1.innerHTML = "";
    circel1.appendChild(imgElement);

    result.textContent = "Add shipping address for successful Delivery";
    circel1.classList.add("active");
    circel2.classList.add("active");
    bar1.classList.add("green");
  } else if (counter == 3) {
    let imgElement = document.createElement("img");
    imgElement.src = "checked.png";
    imgElement.alt = "Circle Image";
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";
    circel2.innerHTML = "";
    circel2.appendChild(imgElement);

    result.textContent = "Complete payment to complete the Order";
    circel1.classList.add("active");
    // circel2.classList.add("active");
    circel3.classList.add("active");
    // bar1.classList.add("active");
    bar2.classList.add("green");
  } else if (counter == 4) {
    let imgElement = document.createElement("img");
    imgElement.src = "checked.png";
    imgElement.alt = "Circle Image";
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";
    circel3.innerHTML = "";
    circel3.appendChild(imgElement);
    result.textContent = "Ready to get Delivered !";
    circel1.classList.add("active");
    circel2.classList.add("active");
    // circel3.classList.add("active");
    circel4.classList.add("active");
    // bar1.classList.add("active");
    // bar2.classList.add("active");
    bar3.classList.add("green");
  } else if (counter == 5) {
    let imgElement = document.createElement("img");
    imgElement.src = "checked.png";
    imgElement.alt = "Circle Image";
    imgElement.style.width = "50px";
    imgElement.style.height = "50px";
    circel4.innerHTML = "";
    circel4.appendChild(imgElement);
    result.textContent = "Order Delivered Succesfully....";
    decrementButton.remove();
    incrementButton.textContent = "Refresh";
  } else if (counter == 6) {
    window.location.reload(true);
  }
});

decrementButton.addEventListener("click", function () {
  if (counter >= 2 && counter <= 5) {
    counter--;
    // console.log(counter);
  }
  if (counter == 1) {
    let divElement = document.createElement("div");
    divElement.textContent = 1;
    circel1.innerHTML = "";
    circel1.appendChild(divElement);

    result.textContent = "Add contact details for further communications";
    circel2.classList.remove("active");
    circel3.classList.remove("active");
    circel4.classList.remove("active");
    bar1.classList.remove("green");
  } else if (counter == 2) {
    let divElement = document.createElement("div");

    divElement.textContent = 2;

    circel2.innerHTML = "";
    circel2.appendChild(divElement);

    result.textContent = "Add shipping address for successful Delivery";
    circel3.classList.remove("active");
    circel4.classList.remove("active");
    // bar2.classList.remove("active");
    bar2.classList.remove("green");
    bar3.classList.remove("green");
  } else if (counter == 3) {
    let divElement = document.createElement("div");
    divElement.textContent = 3;
    circel3.innerHTML = "";
    circel3.appendChild(divElement);

    result.textContent = "Complete payment to complete the Order";
    circel4.classList.remove("active");
    bar3.classList.remove("green");
  }
});
