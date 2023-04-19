const converionResultTitle = document.querySelector("#conversion-result-title");
const conversionResult = document.querySelector("#conversion-result");
const cLenghtLeft = document.querySelector("#lenghtLeft");
const cLenghtRight = document.querySelector("#lenghtRight");
const colLeft = document.querySelector("#leftCol");
const colRight = document.querySelector("#rightCol");
const cLenghtInputFrom = document.querySelector("#length-input-from");
const cLenghtInputTo = document.querySelector("#length-input-to");

window.addEventListener("load", () => {
  showLCalculate();
});

const conversionRates = [
  // prettier-ignore
  [1, 0.001, 100, 1000, 1000000, 1000000000, 0.0006213689, 1.0936132983, 3.280839895, 39.37007874, 1.057008707e-16
  ], // Meter

  // prettier-ignore
  [1000, 1, 100000,1000000,1000000000,1000000000000,0.6213688756,1093.6132983,3280.839895,39370.07874,1.057008707E-13
  ], // Kilometer

  // prettier-ignore
  [0.01, 0.00001, 1,10,10000,10000000,0.0000062137,0.010936133,0.032808399,0.3937007874,1.057008707E-18
  ], // Centimeter

  // prettier-ignore
  [0.001,0.000001,0.1,1,1000,1000000,6.213688756E-7,0.0010936133,0.0032808399,0.0393700787,1.057008707E-19
  ], // Milimeter

  // prettier-ignore
  [0.000001,9.999999999E-10,0.0001,0.001,1,1000,6.213688756E-10,0.0000010936,0.0000032808,0.0000393701,1.057008707E-22
  ], // Micrometer

  // prettier-ignore
  [1.E-9,1.E-12,1.E-7,0.000001,0.001,1,6.213688756E-13,1.093613298E-9,3.280839895E-9,3.937007874E-8,1.057008707E-25
  ], // Nanometer

  // prettier-ignore
  [1609.35,1.60935,160935,1609350,1609350000,1609350000000,1,1760.0065617,5280.019685,63360.23622,1.701096963E-13
  ], // Mile

  // prettier-ignore
  [0.9144,0.0009144,91.44,914.4,914400,914400000,0.0005681797,1,3,36,9.665287622E-17
  ], // Yard

  // prettier-ignore
  [0.3048,0.0003048,30.48,304.8,304800,304800000,0.0001893932,0.3333333333,1,12,3.22176254E-17
  ], // Foot

  // prettier-ignore
  [0.0254,0.0000254,2.54,25.4,25400,25400000,0.0000157828,0.0277777778,0.0833333333,1,2.684802117E-18
  ], // Inch

  // prettier-ignore
  [9460660000000000,9460660000000,946066000000000000,9460660000000000000,9.46066E+21,9.460659999E+24,5878559666946,10346303587051618,31038910761154856,372466929133858300,1
  ], // Light Year
];

const lengthOptionValues = {
  0: "Meter",
  1: "Kilometer",
  2: "Centimeter",
  3: "Milimeter",
  4: "Micrometer",
  5: "Nanometer",
  6: "Mile",
  7: "Yard",
  8: "Foot",
  9: "Inch",
  10: "Light Year",
};

const lengthCalculate = () => {
  const fromValue = cLenghtInputFrom.value;
  const fromUnit = cLenghtLeft.value;
  const toUnit = cLenghtRight.value;
  const conversionRate = conversionRates[fromUnit][toUnit];
  const result = fromValue * conversionRate;
  cLenghtInputTo.value = result;

  console.log(` ${cLenghtInputTo.value}`);
  cLenghtRight.querySelectorAll("option").forEach((option) => {
    const toUnit = option.value;
    const conversionRate = conversionRates[fromUnit][toUnit];
    const result = fromValue * conversionRate;
    option.textContent = `${lengthOptionValues[option.value]} (${result})`;
  });
  conversionResult.innerHTML = `
    <li class="list-group-item "><span class="">${cLenghtInputFrom.value} ${
    cLenghtLeft.selectedOptions[0].text
  } = ${result} ${cLenghtRight.selectedOptions[0].text.replace(
    /\b(e-)|([()])|(\d*\.?\d+(?:e[+-]?\d+)?)/gi,
    (match, p1, p2, p3) => (p1 ? "" : p2 ? "" : "")
  )} </span></li>`;
};

cLenghtLeft.addEventListener("change", lengthCalculate);
cLenghtRight.addEventListener("change", lengthCalculate);
cLenghtInputFrom.addEventListener("input", lengthCalculate);
const changeValues = () => {
  conversionResult.innerHTML = `
          <li class="list-group-item "><span class="">${cLenghtInputFrom.value} = ${cLenghtInputTo.value}  years</span></li>`;
};
cLenghtInputFrom.addEventListener("input", changeValues);

function showLCalculate() {
  colLeft.innerHTML = `<div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">From</span>
                    <input
                      id="length-input-from"
                      type="number"
                      class="form-control"
                      value="1"
                    />
                  </div>
                  <select id="lenghtLeft" class="form-select" size="11">
                    <option value="0" selected>Meter</option>
                    <option value="1">Kilometer</option>
                    <option value="2">Centimeter</option>
                    <option value="3">Milimeter</option>
                    <option value="4">Micrometer</option>
                    <option value="5">Nanometer</option>
                    <option value="6">Mile</option>
                    <option value="7">Yard</option>
                    <option value="8">Foot</option>
                    <option value="9">Inch</option>
                    <option value="10">Light Year</option>
                  </select>`;

  colRight.innerHTML = `<div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">To</span>
                    <input
                      id="length-input-to"
                      type="number"
                      class="form-control"
                      disabled
                    />
                  </div>
                  <select id="lenghtRight" class="form-select" size="11">
                    <option value="0">Meter</option>
                    <option value="1" selected>Kilometer</option>
                    <option value="2">Centimeter</option>
                    <option value="3">Milimeter</option>
                    <option value="4">Micrometer</option>
                    <option value="5">Nanometer</option>
                    <option value="6">Mile</option>
                    <option value="7">Yard</option>
                    <option value="8">Foot</option>
                    <option value="9">Inch</option>
                    <option value="10">Light Year</option>
                  </select>`;
}
