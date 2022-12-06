// const inputBox1Target = $("input[name=content]")

function handleAnswer() {
  let e = event || window.event; // get event object
  // console.log(e.key);
  let key = e.keyCode || e.which; // get key cross-browser
  if (key == 39 || key == 37) {
    console.log("Yes");
  }
  if (((key < 42 && key > 57)) || (key === 8) || (key === 46) || (key === 37) || (key === 39)) {
    if (e.preventDefault) e.preventDefault(); //normal browers
    e.returnValue = false; //IE
  }
}

let inputElement = document.getElementById("myInput");
inputElement.addEventListener("input", filterField);

function filterField(e) {
  let t = e.target;
  let badValues = /[^\d\/\+\-\*\.]/gi;
  t.value = t.value.replace(badValues, "")
}


// let btn_element = document.getElementsByClassName("number-keys");
// btn_element.addEventListener("click", ()=>{
//   document.getElementsByClassName("handle-data").innerHTML = "Boss has joined the party."
// })

const allButtons = document.getElementsByClassName("keys")

for (let index = 0; index < allButtons.length; index++) {
  allButtons[index].addEventListener("click", function (event) {
    // console.log(event.target.value);
    nowLetsHandleTheChicken(event.target.value)
  })

}

let listOfValuesPressed = []

function nowLetsHandleTheChicken(value) {
  let valueOne = "";
  let valueTwo = "";
  // Need 2 functions, first for showing the data on screen and second for back processing of those to show on top box as an answer.
  // console.log(value);
  if (value == "-" || value == "+" || value == "=" || value == "x" || value == "/") {
    // console.log("Jai Shree Ram");
    if (valueTwo.length == 0) {
      // console.log("Hi")
      console.log(listOfValuesPressed);
      valueTwo = listOfValuesPressed[listOfValuesPressed.length - 1]
      document.querySelector("input:nth-child(1)").value = valueTwo
    } else if (valueOne.length > 0) {

    }
    return;
  }
  else {
    document.querySelector("input:nth-child(2)").value += value
    // valueOne += document.querySelector("input:nth-child(2)").value
    // use list and append and then join parseInt
    listOfValuesPressed.push(document.querySelector("input:nth-child(2)").value)
  }

  // console.log(valueOne);
}