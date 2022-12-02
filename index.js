// const inputBox1Target = $("input[name=content]")

function handleAnswer() {
  let e = event || window.event; // get event object
  // console.log(e.key);
  let key = e.keyCode || e.which; // get key cross-browser

  if (((key < 42 || key > 57)) || (key == 8) || (key == 46)) {
    if (e.preventDefault) e.preventDefault(); //normal browers
    e.returnValue = false; //IE
  }
}
