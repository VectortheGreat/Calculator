const rngNormalInput1 = document.querySelector("#rng-normal-input-1");
const rngNormalInput2 = document.querySelector("#rng-normal-input-2");
const rngNormalbuttonGen = document.querySelector("#rng-normal-generate");
const rngNormalbuttonClr = document.querySelector("#rng-normal-clear");
const rngNormalResult = document.querySelector("#normal-result");

rngNormalbuttonGen.addEventListener("click", () => {
  let input1Value = parseInt(rngNormalInput1.value);
  let input2Value = parseInt(rngNormalInput2.value);
  let normalRandomNo =
    Math.floor(Math.random() * (input1Value - input2Value + 1)) + input2Value;
  rngNormalResult.innerText = "Result: " + normalRandomNo;
  console.log(normalRandomNo);
});

rngNormalbuttonClr.addEventListener("click", () => {
  rngNormalInput1.value = null;
  rngNormalInput2.value = null;
});

const rngAdvancedInput1 = document.querySelector("#rng-advanced-input-1");
const rngAdvancedInput2 = document.querySelector("#rng-advanced-input-2");
const rngAdvancedbuttonGen = document.querySelector("#rng-advanced-generate");
const rngAdvancedbuttonClr = document.querySelector("#rng-advanced-clear");
const rngAdvancedResultTitle = document.querySelector("#advanced-result-title");
const rngAdvancedResult = document.querySelector("#advanced-result");
const rngAdvancedDubYes = document.querySelector("#rngDubYes");
const rngAdvancedDubNo = document.querySelector("#rngDubNo");
const rngAdvancedSortAsc = document.querySelector("#rngSortAsc");
const rngAdvancedSortDes = document.querySelector("#rngSortDes");
const rngAdvancedSortNo = document.querySelector("#rngSortNo");
const rngAdvancedTypeInt = document.querySelector("#rngTypeInt");
const rngAdvancedTypeDec = document.querySelector("#rngTypeDec");
const rngAdvancedMaxDigit = document.querySelector("#max-digit");
const rngAdvancedMaxDigitInput = document.querySelector("#max-digit-input");
const rngAdvancedTotalNumberInput = document.querySelector(
  "#rngAdvTotalNoInput"
);
const rngDubDiv = document.querySelector("#rng-duplication");
const rngSortDiv = document.querySelector("#rng-sort");

function dublicationRadioClick(event) {
  if (event.target === rngAdvancedDubYes) {
    rngAdvancedDubNo.checked = !event.target.checked;
  } else if (event.target === rngAdvancedDubNo) {
    rngAdvancedDubYes.checked = !event.target.checked;
  }
}
function sortRadioClick(event) {
  if (event.target === rngAdvancedSortAsc) {
    rngAdvancedSortDes.checked = !event.target.checked;
    rngAdvancedSortNo.checked = !event.target.checked;
  } else if (event.target === rngAdvancedSortDes) {
    rngAdvancedSortAsc.checked = !event.target.checked;
    rngAdvancedSortNo.checked = !event.target.checked;
  } else if (event.target === rngAdvancedSortNo) {
    rngAdvancedSortAsc.checked = !event.target.checked;
    rngAdvancedSortDes.checked = !event.target.checked;
  }
}
function typeRadioClick(event) {
  if (event.target === rngAdvancedTypeInt) {
    rngAdvancedTypeDec.checked = !event.target.checked;
    rngAdvancedMaxDigit.style.display = "none";
  } else if (event.target === rngAdvancedTypeDec) {
    rngAdvancedTypeInt.checked = !event.target.checked;
    rngAdvancedMaxDigit.style.display = "flex";
  }
}

rngAdvancedDubYes.addEventListener("click", dublicationRadioClick);
rngAdvancedDubNo.addEventListener("click", dublicationRadioClick);
rngAdvancedSortAsc.addEventListener("click", sortRadioClick);
rngAdvancedSortDes.addEventListener("click", sortRadioClick);
rngAdvancedSortNo.addEventListener("click", sortRadioClick);
rngAdvancedTypeInt.addEventListener("click", typeRadioClick);
rngAdvancedTypeDec.addEventListener("click", typeRadioClick);

rngAdvancedTotalNumberInput.addEventListener("input", function () {
  if (rngAdvancedTotalNumberInput.value <= 1) {
    rngDubDiv.style.display = "none";
    rngSortDiv.style.display = "none";
  } else {
    rngDubDiv.style.display = "block";
    rngSortDiv.style.display = "block";
  }
});

rngAdvancedbuttonGen.addEventListener("click", () => {
  const input1Value = parseFloat(rngAdvancedInput1.value);
  const input2Value = parseFloat(rngAdvancedInput2.value);
  const numberOfRandomNumbers = parseInt(rngAdvancedTotalNumberInput.value);
  const isDubNoChecked = rngAdvancedDubNo.checked;
  const isDecimal = rngAdvancedTypeDec.checked;

  if (numberOfRandomNumbers === 1) {
    //Single Random number
    let advancedRandomNo;
    if (isDecimal) {
      advancedRandomNo = (
        Math.random() * (input1Value - input2Value) +
        input2Value
      ).toFixed(rngAdvancedMaxDigitInput.value);
    } else {
      advancedRandomNo =
        Math.floor(Math.random() * (input1Value - input2Value + 1)) +
        input2Value;
    }

    rngAdvancedResult.innerText = `Result: ${advancedRandomNo}`;

    console.log(advancedRandomNo);
  } else if (numberOfRandomNumbers > 1) {
    //Multiple Random numbers
    rngAdvancedResultTitle.innerText = "Result";
    // rngAdvancedResultTitle.innerHTML = `Result<br>`;
    let numbers = [];

    if (!isDubNoChecked) {
      for (let i = 0; i < numberOfRandomNumbers; i++) {
        let randomNo;
        if (isDecimal) {
          randomNo = (
            Math.random() * (input1Value - input2Value) +
            input2Value
          ).toFixed(rngAdvancedMaxDigitInput.value);
        } else {
          randomNo =
            Math.floor(Math.random() * (input2Value - input1Value + 1)) +
            input1Value;
        }
        numbers.push(randomNo);
      }
    } else {
      const randomNumberArray = [];

      while (randomNumberArray.length < numberOfRandomNumbers) {
        let randomNo;
        if (isDecimal) {
          randomNo = (
            Math.random() * (input1Value - input2Value) +
            input2Value
          ).toFixed(rngAdvancedMaxDigitInput.value);
        } else {
          randomNo =
            Math.floor(Math.random() * (input2Value - input1Value + 1)) +
            input1Value;
        }
        if (!randomNumberArray.includes(randomNo)) {
          randomNumberArray.push(randomNo);
        }
        if (randomNumberArray.length === input2Value - input1Value + 1) {
          rngAdvancedResult.innerText +=
            "- Error: All available numbers have been used!";
          break;
        }
      }

      numbers = randomNumberArray;
    }

    if (rngAdvancedSortAsc.checked) {
      numbers.sort(function (a, b) {
        return a - b;
      });
    } else if (rngAdvancedSortDes.checked) {
      numbers.sort(function (a, b) {
        return b - a;
      });
    }

    for (let i = 0; i < numberOfRandomNumbers; i++) {
      rngAdvancedResult.innerHTML += `${numbers[i]}<br>`;
    }
  }
});

rngAdvancedbuttonClr.addEventListener("click", () => {
  rngNormalInput1.value = null;
  rngNormalInput2.value = null;
});
