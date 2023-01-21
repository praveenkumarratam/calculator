let btn = document.querySelectorAll("span");
let arr = Array.from(btn);
let result = "";
arr.forEach((val) => {
  val.addEventListener("click", (e) => {
    let display = document.getElementById("display");
    let value = e.target.innerHTML;
    if (e.target.innerHTML == "=") {
      display.value = eval(result);
    } else if (e.target.innerHTML == "C") {
      result = "";
      display.value = result;
    } else {
      result = result + value;
      display.value = result;
    }
  });
});
