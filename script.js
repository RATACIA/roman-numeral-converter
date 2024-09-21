const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const numerals = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1],
];

convertBtn.addEventListener("click", () => {
  if (numberInput.value === "") {
    output.innerText = "Please enter a valid number";
  } else if (numberInput.value <= -1) {
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (numberInput.value >= 4000) {
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    let result = "";
    for (const [roman, number] of numerals) {
      while (number <= numberInput.value) {
        result += roman;
        numberInput.value -= number;
      }
    }
    output.innerText = result;
  }
});

// if(numberInput.value == 9){
//    output.innerText= "IX"
//    }

//    if(numberInput.value == 16){
//      output.innerText= "XVI"
//      }
//      if(numberInput.value == 649 ){
//      output.innerText= "DCXLIX"
//      }
//      if(numberInput.value == 1023 ){
//      output.innerText= "MXXIII"
//      }
//      if(numberInput.value == 3999  ){
//      output.innerText= "MMMCMXCIX"
//      }
