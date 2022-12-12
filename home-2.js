let inputElement = document.getElementById("myInput");
inputElement.addEventListener("input", filterField);

function filterField(e) {
  let t = e.target;
  let badValues = /[^\d\/\+\-\*\.]/gi;

  t.value = t.value.replace(badValues, "")
}

const allButtons = document.getElementsByClassName("keys")

for (let index = 0; index < allButtons.length; index++) {
  allButtons[index].addEventListener("click", function (event) {
    handleKeyPress(event.target.value)
  })
}

//! Here I'm correcting the valueOne and valueTwo intialization: valueOne for input-1.
let listOfValuesPressed = []
let valueOne = 0  // Above input
let valueTwo = 0  // Below input
let answer = 0  // Answer record
let symbolPress = ""

function handleKeyPress(value) {
  if (value == "-" || value == "+" || value == "x" || value == "/" || value == "=") {

    // I guess below if else condition is enough to get my calculator working, let's do this.

    if ((valueOne == 0 && value != "=") && listOfValuesPressed.length > 0) {
      document.querySelector("input:nth-child(1)").value = listOfValuesPressed[listOfValuesPressed.length - 1] + " " + value

      valueOne = parseInt(listOfValuesPressed[listOfValuesPressed.length - 1])

      document.querySelector("input:nth-child(2)").value = ""
      symbolPress = value
    }

    else {
      // here need another if/else: When user hit +/- symbol and one when use hit equal
      let temporaryData
      temporaryData = document.querySelector("input:nth-child(2)").value;

      if (value == "=" && valueOne && !valueTwo) {
        answer = calculation(valueOne, parseInt(temporaryData), symbolPress)
       
        document.querySelector("input:nth-child(1)").value = valueOne + " " + symbolPress + " " + temporaryData
        
        if (document.querySelector("input:nth-child(2)").value) {
          document.querySelector("input:nth-child(2)").value = answer
        }
        valueTwo = temporaryData
      }

      else if (value == "=" && valueOne && valueTwo) {
        answer = calculation(answer, parseInt(valueTwo), symbolPress)
        document.querySelector("input:nth-child(1)").value = valueOne + symbolPress + valueTwo
        document.querySelector("input:nth-child(2)").value = answer
        valueOne = answer
      }

      else if ((value == "+" || value == "-" || value == "/" || value == "x") && valueOne) {
        document.querySelector("input:nth-child(1)").value = answer + " " + value + " "
        document.querySelector("input:nth-child(2)").value = ""
        valueTwo = document.querySelector("input:nth-child(2)").value
        symbolPress = value
        valueOne = answer
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
    listOfValuesPressed.push(document.querySelector("input:nth-child(2)").value)
  }

}

function calculation(numberOne, numberTwo, operator) {
  // For calculation part.

  switch (operator) {
    case "+":
      return numberOne + numberTwo
    case "-":
      return numberOne - numberTwo
    case "x":
      return numberOne * numberTwo
    case "/":
      return numberOne / numberTwo

    default:
      break;
  }

}