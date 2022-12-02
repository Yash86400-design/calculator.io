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
