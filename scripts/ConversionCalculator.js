const converionResultTitle = document.querySelector("#conversion-result-title");
const conversionResult = document.querySelector("#conversion-result");
const cLenghtLeft = document.querySelector("#lenghtLeft");
const cLenghtRight = document.querySelector("#lenghtRight");
const cLenghtInputFrom = document.querySelector("#length-input-from");
const cLenghtInputTo = document.querySelector("#length-input-to");

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

//Temperature
const cTempInputFrom = document.querySelector("#temp-input-from");
const cTempInputTo = document.querySelector("#temp-input-to");
const cTempLeft = document.querySelector("#tempLeft");
const cTempRight = document.querySelector("#tempRight");
const tempResultTitle = document.querySelector("#tconversion-result-title");
const tempResult = document.querySelector("#tconversion-result");

const tempRates = [
  // prettier-ignore
  [1, 274.15,33.8
  ], // Meter

  // prettier-ignore
  [-272.15,1,-457.87
  ], // Kilometer

  // prettier-ignore
  [-17.222222222,255.92777778,1
  ], // Centimeter
];

const tempOptionValues = {
  0: "Celsius",
  1: "Kelvin",
  2: "Fahrenheit",
};

const tempCalculate = () => {
  const fromValue = cTempInputFrom.value;
  const fromUnit = cTempLeft.value;
  const toUnit = cTempRight.value;
  const conversionRate = tempRates[fromUnit][toUnit];
  const result = fromValue * conversionRate;
  cTempInputTo.value = result;

  cTempRight.querySelectorAll("option").forEach((option) => {
    const toUnit = option.value;
    const conversionRate = tempRates[fromUnit][toUnit];
    const result = fromValue * conversionRate;
    option.textContent = `${tempOptionValues[option.value]} (${result})`;
  });
  tempResult.innerHTML = `
    <li class="list-group-item "><span class="">${cTempInputFrom.value} ${
    cTempLeft.selectedOptions[0].text
  } = ${result} ${cTempRight.selectedOptions[0].text.replace(
    /\b(e-)|([()])|(\d*\.?\d+(?:e[+-]?\d+)?)/gi,
    (match, p1, p2, p3) => (p1 ? "" : p2 ? "" : "")
  )} </span></li>`;
};

cTempLeft.addEventListener("change", tempCalculate);
cTempRight.addEventListener("change", tempCalculate);
cTempInputFrom.addEventListener("input", tempCalculate);

//Area
const areaResultTitle = document.querySelector("#area-result-title");
const areaResult = document.querySelector("#area-result");
const areaLeft = document.querySelector("#areaLeft");
const areaRight = document.querySelector("#areaRight");
const areaInputFrom = document.querySelector("#area-input-from");
const areaInputTo = document.querySelector("#area-input-to");

const areaRates = [
  // prettier-ignore
  [1, 0.000001,10000,1000000,1000000000000,0.0001,3.861018768E-7,1.1959900463,10.763910417,1550.0031,0.0002471054
  ], // Meter

  // prettier-ignore
  [1000000,1,10000000000,1000000000000,1000000000000000000,100,0.3861018768,1195990.0463,10763910.417,1550003100,247.10538147
  ], // Kilometer

  // prettier-ignore
  [0.0001,1.E-10,1,100,100000000,1.E-8,3.861018768E-11,0.000119599,0.001076391,0.15500031,2.471053814E-8
  ], // Centimeter

  // prettier-ignore
  [0.000001,1.E-12,0.01,1,1000000,9.999999999E-11,3.861018768E-13,0.000001196,0.0000107639,0.0015500031,2.471053814E-10
  ], // Milimeter

  // prettier-ignore
  [1.E-12,1.E-18,9.999999999E-9,0.000001,1,1.E-16,3.861018768E-19,1.195990046E-12,1.076391041E-11,1.5500031E-9,2.471053814E-16
  ], // Micrometer

  // prettier-ignore
  [10000,0.01,100000000,10000000000,10000000000000000,1,0.0038610188,11959.900463,107639.10417,15500031,2.4710538147
  ], // Hectare

  // prettier-ignore
  [2589990,2.58999,25899900000,2589990000000,2589990000000000000,258.999,1,3097602.26,27878420.34,4014492529,640.00046695
  ], // Mile

  // prettier-ignore
  [0.83612736,8.3612736E-7,8361.2736,836127.36,836127360000,0.0000836127,3.228303429E-7,1,9,1296,0.0002066116
  ], // Yard

  // prettier-ignore
  [0.09290304,9.290304E-8,929.0304,92903.04,92903040000,0.0000092903,3.58700381E-8,0.1111111111,1,144,0.0000229568
  ], // Foot

  // prettier-ignore
  [0.00064516,6.4516E-10,6.4516,645.16,645160000,6.4516E-8,2.490974868E-10,0.0007716049,0.0069444444,1,1.594225079E-7
  ], // Inch

  // prettier-ignore
  [4046.8564224,0.0040468564,40468564.224,4046856422.4,4046856422400000,0.4046856422,0.0015624989,4840,43560,6272640,1
  ], // Light Year
];

const areaOptionValues = {
  0: "Square Meter",
  1: "Square Kilometer",
  2: "Square Centimeter",
  3: "Square Millimeter",
  4: "Square Micrometer",
  5: "Hectare",
  6: "Square Mile",
  7: "Square Yard",
  8: "Square Foot",
  9: "Square Inch",
  10: "Acre",
};

const areaCalculate = () => {
  const fromValue = areaInputFrom.value;
  const fromUnit = areaLeft.value;
  const toUnit = areaRight.value;
  const conversionRate = areaRates[fromUnit][toUnit];
  const result = fromValue * conversionRate;
  areaInputTo.value = result;

  areaRight.querySelectorAll("option").forEach((option) => {
    const toUnit = option.value;
    const conversionRate = areaRates[fromUnit][toUnit];
    const result = fromValue * conversionRate;
    option.textContent = `${areaOptionValues[option.value]} (${result})`;
  });
  areaResult.innerHTML = `
    <li class="list-group-item "><span class="">${areaInputFrom.value} ${
    areaLeft.selectedOptions[0].text
  } = ${result} ${areaRight.selectedOptions[0].text.replace(
    /\b(e-)|([()])|(\d*\.?\d+(?:e[+-]?\d+)?)/gi,
    (match, p1, p2, p3) => (p1 ? "" : p2 ? "" : "")
  )} </span></li>`;
};
areaLeft.addEventListener("change", areaCalculate);
areaRight.addEventListener("change", areaCalculate);
areaInputFrom.addEventListener("input", areaCalculate);

//Volume
const volumeResultTitle = document.querySelector("#volume-result-title");
const volumeResult = document.querySelector("#volume-result");
const volumeLeft = document.querySelector("#volumeLeft");
const volumeRight = document.querySelector("#volumeRight");
const volumeInputFrom = document.querySelector("#volume-input-from");
const volumeInputTo = document.querySelector("#volume-input-to");

const volumeRates = [
  // prettier-ignore
  [1,1.E-9,1000000,1000000000,1000,1000000,264.17217686,1056.6887074,2113.3774149,4226.7548297,33814.038638,67628.077276,202884.23183,219.9692483,879.8769932,1759.7539864,35195.079728,56312.127565,168936.38269,2.399128636E-10,1.3079506193,35.314666721,61023.744095
  ], //Cubic Meter

  // prettier-ignore
  [1000000000,1,1000000000000000,1000000000000000000,1000000000000000,264172176858,1056688707432,2113377414864,4226754829728,33814038637823,67628077275645,202884231826936,219969248299,879876993196,1759753986393,35195079727854,56312127564566,168936382693699,0.2399128636,1307950619.3,35314666721,61023744094732
  ], //Cubic Kilometer

  // prettier-ignore
  [0.000001,9.999999999E-16,1,1000,0.001,1,0.0002641722,0.0010566887,0.0021133774,0.0042267548,0.0338140386,0.0676280773,0.2028842318,0.0002199692,0.000879877,0.001759754,0.0351950797,0.0563121276,0.1689363827,2.399128636E-16,0.000001308,0.0000353147,0.0610237441
  ], //Cubic Centimeter

  // prettier-ignore
  [1.E-9,1.E-18,0.001,1,0.000001,0.001,2.641721768E-7,0.0000010567,0.0000021134,0.0000042268,0.000033814,0.0000676281,0.0002028842,2.199692482E-7,8.798769931E-7,0.0000017598,0.0000351951,0.0000563121,0.0001689364,2.399128636E-19,1.307950619E-9,3.531466672E-8,0.0000610237
  ], //Cubic Milliliter

  // prettier-ignore
  [0.001,1.E-12,1000,1000000,1,1000,0.2641721769,1.0566887074,2.1133774149,4.2267548297,33.814038638,67.628077276,202.88423183,0.2199692483,0.8798769932,1.7597539864,35.195079728,56.312127565,168.93638269,2.399128636E-13,0.0013079506,0.0353146667,61.023744095
  ], // Liter

  // prettier-ignore
  [0.000001,9.999999999E-16,1,1000,0.001,1,0.0002641722,0.0010566887,0.0021133774,0.0042267548,0.0338140386,0.0676280773,0.2028842318,0.0002199692,0.000879877,0.001759754,0.0351950797,0.0563121276,0.1689363827,2.399128636E-16,0.000001308,0.0000353147,0.0610237441
  ], //Milliliter

  // prettier-ignore
  [0.00378541,3.78541E-12,3785.41,3785410,3.78541,3785.41,1,4,8,16,128,256,768,0.8326737922,3.3306951688,6.6613903376,133.22780675,213.1644908,639.49347241,9.081685531E-13,0.0049511294,0.1336804926,230.99989113
  ], // US Gallon

  // prettier-ignore
  [0.0009463525,9.463525E-13,946.3525,946352.5,0.9463525,946.3525,0.25,1,2,4,32,64,192,0.2081684481,0.8326737922,1.6653475844,33.306951688,53.291122701,159.8733681,2.270421382E-13,0.0012377823,0.0334201231,57.749972783
  ], // US Quart

  // prettier-ignore
  [0.0004731763,4.7317625E-13,473.17625,473176.25,0.47317625,473.17625,0.125,0.5,1,2,16,32,96,0.104084224,0.4163368961,0.8326737922,16.653475844,26.645561351,79.936684052,1.135210691E-13,0.0006188912,0.0167100616,28.874986392
  ], // US Pint

  // prettier-ignore
  [0.0002365881,2.36588125E-13,236.588125,236588.125,0.236588125,236.588125,0.0625,0.25,0.5,1,8,16,48,0.052042112,0.2081684481,0.4163368961,8.326737922,13.322780675,39.968342026,5.676053457E-14,0.0003094456,0.0083550308,14.437493196
  ], // US Cup

  // prettier-ignore
  [0.0000295735,2.957351562E-14,29.573515625,29573.515625,0.0295735156,29.573515625,0.0078125,0.03125,0.0625,0.125,1,2,6,0.006505264,0.026021056,0.052042112,1.0408422403,1.6653475844,4.9960427532,7.095066821E-15,0.0000386807,0.0010443788,1.8046866495
  ], // US Fluid Ounce

  // prettier-ignore
  [0.0000147868,1.478675781E-14,14.786757812,14786.757812,0.0147867578,14.786757812,0.00390625,0.015625,0.03125,0.0625,0.5,1,3,0.003252632,0.013010528,0.026021056,0.5204211201,0.8326737922,2.4980213766,3.54753341E-15,0.0000193403,0.0005221894,0.9023433247
  ], // US Table Spoon

  // prettier-ignore
  [0.0000049289,4.92891927E-15,4.9289192708,4928.9192708,0.0049289193,4.9289192708,0.0013020833,0.0052083333,0.0104166667,0.0208333333,0.1666666667,0.3333333333,1,0.0010842107,0.0043368427,0.0086736853,0.1734737067,0.2775579307,0.8326737922,1.182511136E-15,0.0000064468,0.0001740631,0.3007811082
  ], // US Tea Spoon

  // prettier-ignore
  [0.00454609,4.54609E-12,4546.09,4546090,4.54609,4546.09,1.2009504915,4.803801966,9.6076039319,19.215207864,153.72166291,307.44332582,922.32997747,1,4,8,160,256,768,1.09066547E-12,0.0059460612,0.1605436532,277.41943279
  ], // Imperial Gallon

  // prettier-ignore
  [0.0011365225,1.1365225E-12,1136.5225,1136522.5,1.1365225,1136.5225,0.3002376229,1.2009504915,2.401900983,4.803801966,38.430415728,76.860831456,230.58249437,0.25,1,2,40,64,192,2.726663675E-13,0.0014865153,0.0401359133,69.354858198
  ], // Imperial Quart

  // prettier-ignore
  [0.0005682613,5.6826125E-13,568.26125,568261.25,0.56826125,568.26125,0.1501188114,0.6004752457,1.2009504915,2.401900983,19.215207864,38.430415728,115.29124718,0.125,0.5,1,20,32,96,1.363331837E-13,0.0007432577,0.0200679567,34.677429099
  ], // Imperial Pint

  // prettier-ignore
  [0.0000284131,2.84130625E-14,28.4130625,28413.0625,0.0284130625,28.4130625,0.0075059406,0.0300237623,0.0600475246,0.1200950491,0.9607603932,1.9215207864,5.7645623592,0.00625,0.025,0.05,1,1.6,4.8,6.816659189E-15,0.0000371629,0.0010033978,1.7338714549
  ], // Imperial Fluid Ounce

  // prettier-ignore
  [0.0000177582,1.775816406E-14,17.758164063,17758.164063,0.0177581641,17.758164063,0.0046912129,0.0187648514,0.0375297029,0.0750594057,0.6004752457,1.2009504915,3.6028514745,0.00390625,0.015625,0.03125,0.625,1,3,4.260411993E-15,0.0000232268,0.0006271236,1.0836696593
  ], // Imperial Table Spoon

  // prettier-ignore
  [0.0000059194,5.91938802E-15,5.9193880208,5919.3880208,0.005919388,5.9193880208,0.0015637376,0.0062549505,0.012509901,0.0250198019,0.2001584152,0.4003168305,1.2009504915,0.0013020833,0.0052083333,0.0104166667,0.2083333333,0.3333333333,1,1.420137331E-15,0.0000077423,0.0002090412,0.3612232198
  ], // Imperial Tea Spoon

  // prettier-ignore
  [4168180000,4.16818,4168180000000000,4168179999999999500,4168180000000,4168180000000000,1101117184136,4404468736544,8808937473087,17617874946175,140942999569399,281885999138799,845657997416396,916871421375,3667485685501,7334971371002,146699427420047,234719083872075,704157251616224,1,5451773612.4,147197887535,254357949660781
  ], // Cubic Mile

  // prettier-ignore
  [0.764554858,7.645548579E-10,764554.85798,764554857.98,764.55485798,764554.85798,201.97412116,807.89648464,1615.7929693,3231.5859386,25852.687509,51705.375017,155116.12505,168.17855739,672.71422958,1345.4284592,26908.569183,43053.710693,129161.13208,1.834265453E-10,1,27,46656
  ], // Cubic Yard

  // prettier-ignore
  [0.0283168466,2.831684659E-11,28316.846592,28316846.592,28.316846592,28316.846592,7.480523006,29.922092024,59.844184048,119.6883681,957.50694476,1915.0138895,5745.0416686,6.228835459,24.915341836,49.830683672,996.61367345,1594.5818775,4783.7456325,6.793575755E-12,0.037037037,1,1728,
  ], // Cubic Foot

  // prettier-ignore
  [0.0000163871,1.6387064E-14,16.387064,16387.064,0.016387064,16.387064,0.0043290064,0.0173160255,0.034632051,0.0692641019,0.5541128153,1.1082256305,1.1082256305,3.3246768915,0.0036046501,0.0144186006,0.0288372012,0.576744024,0.9227904384,2.7683713151,3.931467451E-15,0.0000214335,0.0005787037,1
  ], // Cubic Inch
];

const volumeOptionValues = {
  0: "Cubic Meter",
  1: "Cubic Kilometer",
  2: "Cubic Centimeter",
  3: "Cubic Millimeter",
  4: "Liter",
  5: "Milliliter",
  6: "US Gallon",
  7: "US Quart",
  8: "US Pint",
  9: "US Cup",
  10: "US Fluid Ounce",
  11: "US Table Spoon",
  12: "US Tea Spoon",
  13: "Imperial Gallon",
  14: "Imperial Quart",
  15: "Imperial Pint",
  16: "Imperial Fluid Ounce",
  17: "Imperial Table Spoon",
  18: "Imperial Tea Spoon",
  19: "Cubic Mile",
  20: "Cubic Yard",
  21: "Cubic Foot",
  22: "Cubic Inch",
};

const volumeCalculate = () => {
  const fromValue = volumeInputFrom.value;
  const fromUnit = volumeLeft.value;
  const toUnit = volumeRight.value;
  const conversionRate = volumeRates[fromUnit][toUnit];
  const result = fromValue * conversionRate;
  volumeInputTo.value = result;

  volumeRight.querySelectorAll("option").forEach((option) => {
    const toUnit = option.value;
    const conversionRate = volumeRates[fromUnit][toUnit];
    const result = fromValue * conversionRate;
    option.textContent = `${volumeOptionValues[option.value]} (${result})`;
  });
  volumeResult.innerHTML = `
    <li class="list-group-item "><span class="">${volumeInputFrom.value} ${
    volumeLeft.selectedOptions[0].text
  } = ${result} ${volumeRight.selectedOptions[0].text.replace(
    /\b(e-)|([()])|(\d*\.?\d+(?:e[+-]?\d+)?)/gi,
    (match, p1, p2, p3) => (p1 ? "" : p2 ? "" : "")
  )} </span></li>`;
};
volumeLeft.addEventListener("change", volumeCalculate);
volumeRight.addEventListener("change", volumeCalculate);
volumeInputFrom.addEventListener("input", volumeCalculate);

//Weight
const weightResultTitle = document.querySelector("#weight-result-title");
const weightResult = document.querySelector("#weight-result");
const weightLeft = document.querySelector("#weightLeft");
const weightRight = document.querySelector("#weightRight");
const weightInputFrom = document.querySelector("#weight-input-from");
const weightInputTo = document.querySelector("#weight-input-to");

const weightRates = [
  // prettier-ignore
  [1,1000,1000000,0.001,0.0009842073,0.0011023122,2.2046244202,35.273990723,5000,6.022136652E+26
  ], // Kilogram

  // prettier-ignore
  [0.001,1,1000,0.000001,9.842073304E-7,0.0000011023,0.0022046244,0.0352739907,5,6.022136652E+23
  ], // Gram

  // prettier-ignore
  [0.000001,0.001,1,9.999999999E-10,9.842073304E-10,1.10231221E-9,0.0000022046,0.000035274,0.005,602213665200000000000
  ], // Miligram

  // prettier-ignore
  [1000,1000000,1000000000,1,0.9842073304,1.1023122101,2204.6244202,35273.990723,5000000,6.022136652E+29
  ], // Metric Ton

  // prettier-ignore
  [1016.04608,1016046.08,1016046080,1.01604608,1,1.12,2240,35840,5080230.4,6.118768338E+29
  ], // Long  Ton

  // prettier-ignore
  [907.184,907184,907184000,0.907184,0.8928571429,1,2000,32000,4535920,5.463186016E+29
  ], // Short Ton

  // prettier-ignore
  [0.453592,453.592,453592,0.000453592,0.0004464286,0.0005,1,16,2267.96,2.731593008E+26
  ], // Pound

  // prettier-ignore
  [0.0283495,28.3495,28349.5,0.0000283495,0.0000279018,0.00003125,0.0625,1,141.7475,1.70724563E+25
  ], // Ounce

  // prettier-ignore
  [0.0002,0.2,200,2.E-7,1.96841466E-7,2.20462442E-7,0.0004409249,0.0070547981,1,1.20442733E+23
  ], // Carrat

  // prettier-ignore
  [1.660540199E-27,1.660540199E-24,1.660540199E-21,1.660540199E-30,1.634315837E-30,1.830433737E-30,3.660867475E-27,5.85738796E-26,8.302700999E-24,1
  ], // Atomic Mass Unit
];

const weightOptionValues = {
  0: "Kilogram",
  1: "Gram",
  2: "Miligram",
  3: "Metric Ton",
  4: "Long Ton",
  5: "Short Ton",
  6: "Pound",
  7: "Ounce",
  8: "Carrat",
  9: "Atomic Mass Unit",
};

const weightCalculate = () => {
  const fromValue = weightInputFrom.value;
  const fromUnit = weightLeft.value;
  const toUnit = weightRight.value;
  const conversionRate = weightRates[fromUnit][toUnit];
  const result = fromValue * conversionRate;
  weightInputTo.value = result;

  weightRight.querySelectorAll("option").forEach((option) => {
    const toUnit = option.value;
    const conversionRate = weightRates[fromUnit][toUnit];
    const result = fromValue * conversionRate;
    option.textContent = `${weightOptionValues[option.value]} (${result})`;
  });
  weightResult.innerHTML = `
    <li class="list-group-item "><span class="">${weightInputFrom.value} ${
    weightLeft.selectedOptions[0].text
  } = ${result} ${weightRight.selectedOptions[0].text.replace(
    /\b(e-)|([()])|(\d*\.?\d+(?:e[+-]?\d+)?)/gi,
    (match, p1, p2, p3) => (p1 ? "" : p2 ? "" : "")
  )} </span></li>`;
};
weightLeft.addEventListener("change", weightCalculate);
weightRight.addEventListener("change", weightCalculate);
weightInputFrom.addEventListener("input", weightCalculate);

window.addEventListener("load", () => {
  lengthCalculate();
  tempCalculate();
  areaCalculate();
  volumeCalculate();
  weightCalculate();
});
