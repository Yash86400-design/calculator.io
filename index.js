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
let valueOne = 0;
let valueTwo = "";

function nowLetsHandleTheChicken(value) {

  // Need 2 functions, first for showing the data on screen and second for back processing of those to show on top box as an answer.
  if ((value == "-" || value == "+" || value == "x" || value == "/" || value == "=") && valueOne == 0) {
    if (valueTwo.length == 0 && value != "=") {
      valueTwo = listOfValuesPressed[listOfValuesPressed.length - 1] + " " + value
      // console.log(valueTwo);
      document.querySelector("input:nth-child(1)").value = valueTwo
      listOfValuesPressed.length = 0
      document.querySelector("input:nth-child(2)").value = ""
    } else if (value == "=") {
      let temp = document.querySelector("input:nth-child(2)").value
      if (valueTwo.length > 0 && valueOne == 0) {
        let inputFirst = parseInt(valueTwo.slice(0, valueTwo.length - 2))
        let inputSecond = parseInt(temp)
        let key = valueTwo.slice(-1)

        switch (key) {
          case "+":
            document.querySelector("input:nth-child(2)").value = inputFirst + inputSecond
            valueOne = inputFirst + inputSecond
            break;
          case "-":
            document.querySelector("input:nth-child(2)").value = inputFirst - inputSecond
            valueOne = inputFirst - inputSecond
            break;
          case "x":
            document.querySelector("input:nth-child(2)").value = inputFirst * inputSecond
            valueOne = inputFirst * inputSecond
            break;
          case "/":
            document.querySelector("input:nth-child(2)").value = inputFirst / inputSecond
            valueOne = inputFirst / inputSecond
            break;

          default:
            break;
        }
      }
      else if (valueOne.length > 0) {
        // console.log(valueOne, valueTwo);
      }
      // return;
    }

  } else if ((value == "-" || value == "+" || value == "x" || value == "/" || value == "=") && valueOne > 0) {

    if (value != "=") {
      document.querySelector("input:nth-child(1)").value = valueOne + " " + value
      valueTwo = (valueOne + " " + value).toString()
      document.querySelector("input:nth-child(2)").value = ""
      // console.log(valueOne, valueTwo);
    } else if (value == "=") {
      if (value != "=") {
        valueOne = parseInt(document.querySelector("input:nth-child(2)").value)
        let inputFirst = valueOne
        let inputSecond = parseInt(valueTwo.slice(0, valueTwo.length - 2))
        let key = valueTwo.slice(-1)

        switch (key) {
          case "+":
            document.querySelector("input:nth-child(2)").value = inputFirst + inputSecond
            valueOne = inputFirst + inputSecond
            break;
          case "-":
            document.querySelector("input:nth-child(2)").value = inputFirst - inputSecond
            valueOne = inputFirst - inputSecond
            break;
          case "x":
            document.querySelector("input:nth-child(2)").value = inputFirst * inputSecond
            valueOne = inputFirst * inputSecond
            break;
          case "/":
            document.querySelector("input:nth-child(2)").value = inputFirst / inputSecond
            valueOne = inputFirst / inputSecond
            break;

          default:
            break;
        }
      } else if (value=="=") {
        console.log(valueOne, valueTwo, value);
        valueTwo =  ""
        // I don't know how to get valueTwo and symbol to send for our calculator....
      }
    }

  } else if (value == "clear") {
    document.querySelector("input:nth-child(1)").value = ""
    document.querySelector("input:nth-child(2)").value = ""
    listOfValuesPressed.length = 0
    valueOne = 0
    valueTwo = ""
  } else {
    document.querySelector("input:nth-child(2)").value += value
    // valueOne += document.querySelector("input:nth-child(2)").value
    // use list and append and then join parseInt
    listOfValuesPressed.push(document.querySelector("input:nth-child(2)").value)
  }

}
