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

let selectedMonth;
let maxDays;

function populateDays() {
  selectedMonth = parseInt(ageCalcBirthMonths.value, 10);
  maxDays = getMaxDays(selectedMonth);

  //   ageCalcBirthDays.innerHTML = "";

  //   for (let i = 1; i <= maxDays; i++) {
  //     const option = document.createElement("option");
  //     option.value = i;
  //     option.textContent = i;
  //     ageCalcBirthDays.appendChild(option);
  //   }
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

ageCalcBirthMonths.addEventListener("change", function () {
  populateDays();
  console.log(ageCalcBirthDays.value);

  if (maxDays === 28 && ageCalcBirthDays.value > 28) {
    console.log(true);
  }
});

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
  //   console.log(`${ageCalcBirthYear.value}-${selectedBMonth}-${selectedBday}`);
  //   console.log(`${ageCalcLastYear.value}-${selectedLMonth}-${selectedLday}`);

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
          <li class="list-group-item bg-danger-subtle text-warning-emphasis">Date of birth needs to be earlier than the age at date..</li>`;
  }
};
ageCalcButton.addEventListener("click", calculateAge);
