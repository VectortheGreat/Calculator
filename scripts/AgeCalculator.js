const ageCalcBirthDays = document.querySelector("#birth-day");
const ageCalcBirthMonths = document.querySelector("#birth-month");
const ageCalcBirthYear = document.querySelector("#birth-year");
const ageCalcLastDays = document.querySelector("#last-day");
const ageCalcLastMonths = document.querySelector("#last-month");
const ageCalcLastYear = document.querySelector("#last-year");
const ageCalcButton = document.querySelector("#calculate-age");
const ageCalcClearButton = document.querySelector("#clear-age");
const ageCalcResultTitle = document.querySelector("#agec-result-title");
const ageCalcResult = document.querySelector("#agec-result");

let selectedBday = 1;
let selectedBMonth = 1;
let selectedLday = 1;
let selectedLMonth = 1;
let date1;
let date2;
let currentYear = new Date();
let selectedMonth;
let maxDays;

function birthPopulateDays() {
  selectedMonth = parseInt(ageCalcBirthMonths.value, 10);
  maxDays = getMaxDays(selectedMonth);
}
function lastPopulateDays() {
  selectedMonth = parseInt(ageCalcLastMonths.value, 10);
  maxDays = getMaxDays(selectedMonth);
}

function getMaxDays(month) {
  switch (month) {
    case 2:
      return 28;
    case 4:
      return 30;
    case 6:
      return 30;
    case 9:
      return 30;
    case 11:
      return 30;
    default:
      return 31;
  }
}

const changeBDays = () => {
  birthPopulateDays();
  if (maxDays === 28 && ageCalcBirthDays.value > 28) {
    ageCalcBirthDays.value = 28;
  } else if (maxDays === 30 && ageCalcBirthDays.value > 30) {
    ageCalcBirthDays.value = 30;
  }
};
const changeLDays = () => {
  lastPopulateDays();
  if (maxDays === 28 && ageCalcLastDays.value > 28) {
    ageCalcLastDays.value = 28;
  } else if (maxDays === 30 && ageCalcLastDays.value > 30) {
    ageCalcLastDays.value = 30;
  }
};

ageCalcBirthMonths.addEventListener("change", changeBDays);
ageCalcBirthDays.addEventListener("change", changeBDays);
ageCalcLastMonths.addEventListener("change", changeLDays);
ageCalcLastDays.addEventListener("change", changeLDays);

//Birth Date
const selectBirthDay = (event) => {
  selectedBday = parseInt(event.target.value);
};

const selectBirthMonth = (event) => {
  selectedBMonth = parseInt(event.target.value);
};

ageCalcBirthDays.addEventListener("change", selectBirthDay);
ageCalcBirthMonths.addEventListener("change", selectBirthMonth);

//Last Date
const selectLastDay = (event) => {
  selectedLday = parseInt(event.target.value);
};

const selectLastMonth = (event) => {
  selectedLMonth = parseInt(event.target.value);
};

ageCalcLastDays.addEventListener("change", selectLastDay);
ageCalcLastMonths.addEventListener("change", selectLastMonth);

const calculateAge = () => {
  ageCalcResult.innerHTML = "";
  const date1 = new Date(
    `${ageCalcBirthYear.value}-${selectedBMonth}-${selectedBday}`
  );
  const date2 = new Date(
    `${ageCalcLastYear.value}-${selectedLMonth}-${selectedLday}`
  );
  const timeDiff = date2.getTime() - date1.getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  const diffHours = Math.ceil(diffDays * 24);
  const diffMinutes = Math.ceil(diffHours * 60);
  const diffSeconds = Math.ceil(diffMinutes * 60);

  const yearDiff = date2.getFullYear() - date1.getFullYear();
  const monthDiff = date2.getMonth() - date1.getMonth();
  const totalMonthDiff = yearDiff * 12 + monthDiff;

  if (diffDays > 0) {
    ageCalcResult.innerHTML += `
          <li class="list-group-item "><span class="">${yearDiff} years</span></li>`;
    ageCalcResult.innerHTML += `
          <li class="list-group-item "><span class=""> ${totalMonthDiff} months</span></li>`;
    ageCalcResult.innerHTML += `
          <li class="list-group-item "><span class="">${diffDays} days</span></li>`;
    // prettier-ignore
    ageCalcResult.innerHTML += `
          <li class="list-group-item "><span class="">${diffHours.toLocaleString("en")} hours</span></li>`;
    // prettier-ignore
    ageCalcResult.innerHTML += `
          <li class="list-group-item "><span class="">${diffMinutes.toLocaleString("en")} minutes</span></li>`;
    // prettier-ignore
    ageCalcResult.innerHTML += `
          <li class="list-group-item "><span class="">${diffSeconds.toLocaleString("en")} seconds</span></li>`;
  } else {
    ageCalcResult.innerHTML += `
          <li class="list-group-item bg-danger-subtle text-warning-emphasis">Date of birth needs to be earlier than current date..</li>`;
  }
};
ageCalcButton.addEventListener("click", calculateAge);

const clearButton = () => {
  ageCalcBirthDays.value = 1;
  ageCalcBirthMonths.value = 1;
  ageCalcBirthYear.value = currentYear.getFullYear();
  ageCalcLastDays.value = 1;
  ageCalcLastMonths.value = 1;
  ageCalcLastYear.value = currentYear.getFullYear();
  ageCalcResult.innerHTML = "";
};
ageCalcClearButton.addEventListener("click", clearButton);

const bPreventLowUpDates = () => {
  if (ageCalcBirthYear.value < 100) {
    ageCalcBirthYear.value = 100;
  } else if (ageCalcBirthYear.value > 275760) {
    ageCalcBirthYear.value = 275760;
  }
};
const lPreventLowUpDates = () => {
  if (ageCalcLastYear.value < 100) {
    ageCalcLastYear.value = 100;
  } else if (ageCalcLastYear.value > 275760) {
    ageCalcLastYear.value = 275760;
  }
};

ageCalcLastYear.addEventListener("change", lPreventLowUpDates);
ageCalcBirthYear.addEventListener("change", bPreventLowUpDates);

window.addEventListener("load", () => {
  clearButton();
});
