const calcInputTop = document.querySelector("#calc-input-top");
const calcInputBot = document.querySelector("#calc-input-bot");
const calcButtonNumber = document.querySelectorAll(".calc-button-number");
const calcButtonOperator = document.querySelectorAll(".calc-button-operator");
const calcButtonDeleteAll = document.querySelector(".calc-button-delete-all");
const calcButtonDelete = document.querySelector(".calc-button-delete");
const calcButtonEqual = document.querySelector(".calc-button-equal");

let sayi1 = null;
let sayi2 = null;
let operator = "";
let opDeger = "";
let deger = null;
let result = 0;

//NUMBERS
calcButtonNumber.forEach((buton) => {
  buton.addEventListener("click", () => {
    deger = buton.getAttribute("value");
    if (opDeger == "") {
      if (sayi1 == undefined) {
        sayi1 = parseInt(deger);
      } else {
        sayi1 += deger;
      }
    } else if (!opDeger == "" && sayi1 !== undefined) {
      if (sayi2 == undefined) {
        sayi2 = parseInt(deger);
      } else {
        sayi2 += deger;
      }
    }
    calcInputBot.value += deger;
  });
});

//OPERATOR
calcButtonOperator.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (sayi1 !== undefined && sayi2 == undefined) {
      opDeger = operator.getAttribute("value");
      calcInputBot.value += opDeger;
      console.log(opDeger);
    }
  });
});

//CALCULATE
calcButtonEqual.addEventListener("click", () => {
  sayi1 = parseFloat(sayi1);
  sayi2 = parseFloat(sayi2);
  console.log("1.Değer: " + sayi1);
  console.log("2.Değer: " + sayi2);
  if (opDeger == "+") {
    result = sayi1 + sayi2;
    calcInputBot.value = result;
    calcInputTop.value = `${sayi1 + opDeger + sayi2 + "=" + result}`;
  } else if (opDeger == "-") {
    result = sayi1 - sayi2;
    calcInputBot.value = result;
    calcInputTop.value = `${sayi1 + opDeger + sayi2 + "=" + result}`;
  } else if (opDeger == "*") {
    result = sayi1 * sayi2;
    calcInputBot.value = result;
    calcInputTop.value = `${sayi1 + opDeger + sayi2 + "=" + result}`;
  } else if (opDeger == "/") {
    result = sayi1 / sayi2;
    calcInputBot.value = result;
    calcInputTop.value = `${sayi1 + opDeger + sayi2 + "=" + result}`;
  } else if (opDeger == "%") {
    var mod = (sayi2 / sayi1) * 100;
    result = mod.toFixed(2);
    calcInputBot.value = result;
    calcInputTop.value = `${sayi1 + opDeger + sayi2 + "=" + result}`;
  }
  sayi1 = result;
  sayi2 = null;
  operator = "";
  opDeger = "";
  console.log("Sıradaki sayı ve sonuç:" + sayi1);
});

//DELETE ALL
calcButtonDeleteAll.addEventListener("click", () => {
  calcInputBot.value = "";
  calcInputTop.value = "";
  sayi1 = null;
  sayi2 = null;
  operator = "";
  opDeger = "";
  deger = null;
  console.log("All numbers are deleted.");
});

//DELETE
calcButtonDelete.addEventListener("click", () => {
  var currentValue = calcInputBot.value;
  if (sayi1 !== undefined && !opDeger == "") {
    opDeger == "";
    calcInputBot.value = currentValue.substr(0, currentValue.length - 1);
  }
  if (sayi1 !== undefined && opDeger == "") {
    calcInputBot.value = currentValue.substr(0, currentValue.length - 1);
    sayi1 = calcInputBot.value;
    console.log(calcInputBot.value);
  }
});
