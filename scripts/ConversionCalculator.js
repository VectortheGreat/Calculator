const converionResultTitle = document.querySelector("#conversion-result-title");
const conversionResult = document.querySelector("#conversion-result");
const cLenghtLeft = document.querySelector("#lenght-left");
const cLenghtRight = document.querySelector("#lenght-right");
// const selectedLeftValue = cLenghtLeft.value;
// const selectedRightValue = cLenghtRight.value;
const cLenghtInputFrom = document.querySelector("#length-input-from");
const cLenghtInputTo = document.querySelector("#length-input-to");

// const lengthCalcualte = () => {
//   switch (parseInt(cLenghtLeft.value)) {
//     case 0:
//       cLenghtInputTo = cLenghtInputFrom * 100
//       break;
//     case 1:
//       break;
//     case 2:
//       break;
//     case 3:
//       break;
//     case 4:
//       break;
//     case 5:
//       break;
//     case 6:
//       break;
//     case 7:
//       break;
//     case 8:
//       break;
//     case 9:
//       break;
//     case 10:
//       break;

//     default:
//       console.log(error);
//       break;
//   }
// };

const conversionRates = [
  [1, 0.001, 100], // Meter
  [1000, 1, 100000], // Kilometer
  [0.01, 0.00001, 1], // Centimeter
  // diğer optionlar
];

function lengthCalculate() {
  const fromValue = parseFloat(cLenghtInputFrom.value);
  const fromUnit = parseInt(cLenghtLeft.value);
  const toUnit = parseInt(cLenghtRight.value);

  const conversionRate = conversionRates[fromUnit][toUnit];
  const result = fromValue * conversionRate;

  cLenghtInputTo.value = result;
}

cLenghtLeft.addEventListener("change", lengthCalculate);
const changeValues = () => {
  cLenghtInputTo.value = cLenghtInputFrom.value;
  conversionResult.innerHTML = `
          <li class="list-group-item "><span class="">${cLenghtInputFrom.value} = ${cLenghtInputTo.value}  years</span></li>`;
};

cLenghtInputFrom.addEventListener("input", changeValues);
