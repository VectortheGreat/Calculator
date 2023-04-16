const input1 = document.querySelector("#rpg-input-1");
const input2 = document.querySelector("#rpg-input-2");
const rpgCheckLower = document.querySelector("#rpgChechkLower");
const rpgCheckUpper = document.querySelector("#rpgChechkUpper");
const rpgCheckNumber = document.querySelector("#rpgChechkNumber");
const rpgCheckSymbol = document.querySelector("#rpgChechkSymbol");
const rpgCheckNoRepeat = document.querySelector("#rpgChechkNoRepeat");
const rpgResultTitle = document.querySelector("#rpg-result-title");
const rpgResult = document.querySelector("#rpg-result");
const rpgGenButton = document.querySelector("#rpg-gen-button");
const rpgCheckboxes = document.querySelectorAll(
  "#check-boxes input[type='checkbox']"
);

input1.addEventListener("input", () => {
  if (input1.value > 50) {
    input1.value = 50;
  }
  if (input1.value < 4) {
    input1.value = 4;
  }
  input2.value = input1.value;
  generatePassword();
});

input2.addEventListener("input", () => {
  if (input2.value > 50) {
    input2.value = 50;
  }
  if (input2.value < 4) {
    input2.value = 4;
  }
  input1.value = input2.value;
  generatePassword();
});

function generatePassword() {
  let result = "";
  // prettier-ignore
  const numbers = ['1','2','3','4','5','6','7','8','9'];
  // prettier-ignore
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // prettier-ignore
  const symbols = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  let notEnoughNumbers = false;

  if (
    !rpgCheckNumber.checked &&
    !rpgCheckLower.checked &&
    !rpgCheckUpper.checked &&
    !rpgCheckSymbol.checked
  ) {
    rpgResult.innerHTML = `
          <li class="list-group-item bg-danger-subtle text-warning-emphasis">Please include at least one characters set for the password to be based on.</li>`;
  } else {
    if (rpgCheckNoRepeat.checked) {
      const noRepeat = [];

      let maxLength = 0;
      if (rpgCheckNumber.checked) {
        maxLength += numbers.length;
      }
      if (rpgCheckLower.checked || rpgCheckUpper.checked) {
        maxLength += letters.length;
      }
      if (rpgCheckSymbol.checked) {
        maxLength += symbols.length;
      }

      for (let i = 0; i < input1.value; i++) {
        if (noRepeat.length >= Math.min(input1.value, maxLength)) {
          rpgResult.innerHTML = `
          <li class="list-group-item bg-danger-subtle text-warning-emphasis">Not enough characters to generate such a long non-repeating password.</li>`;

          notEnoughNumbers = true;
          break;
        }

        const randomIndex = Math.floor(Math.random() * 3);
        let randomChar;

        if (randomIndex === 0 && rpgCheckNumber.checked) {
          const randomIndexNumbers = Math.floor(Math.random() * numbers.length);
          randomChar = numbers[randomIndexNumbers];
        } else if (
          randomIndex === 1 &&
          (rpgCheckLower.checked || rpgCheckUpper.checked)
        ) {
          const randomIndexLet = Math.floor(Math.random() * 2);
          if (randomIndexLet === 0 && rpgCheckLower.checked) {
            const randomIndexLetters = Math.floor(
              Math.random() * letters.length
            );
            randomChar = letters[randomIndexLetters];
          } else if (randomIndexLet === 1 && rpgCheckUpper.checked) {
            const randomIndexLetters = Math.floor(
              Math.random() * letters.length
            );
            randomChar = letters[randomIndexLetters].toUpperCase();
          } else {
            i -= 1;
          }
        } else if (randomIndex === 2 && rpgCheckSymbol.checked) {
          const randomIndexSymbols = Math.floor(Math.random() * symbols.length);
          randomChar = symbols[randomIndexSymbols];
        } else {
          i -= 1;
        }

        if (randomChar === undefined) {
          continue;
        }

        if (noRepeat.includes(randomChar)) {
          i -= 1;
          continue;
        } else {
          noRepeat.push(randomChar);
        }

        result += randomChar;
      }
      if (notEnoughNumbers == false) {
        rpgResult.innerHTML = `
          <li class="list-group-item "><span class="">${result}</span></li>`;
      }
    } else {
      for (let i = 0; i < input1.value; i++) {
        const randomIndex = Math.floor(Math.random() * 3);
        let randomChar;

        if (randomIndex === 0 && rpgCheckNumber.checked) {
          const randomIndexNumbers = Math.floor(Math.random() * numbers.length);
          randomChar = numbers[randomIndexNumbers];
        } else if (
          randomIndex === 1 &&
          (rpgCheckLower.checked || rpgCheckUpper.checked)
        ) {
          const randomIndexLet = Math.floor(Math.random() * 2);
          if (randomIndexLet === 0 && rpgCheckLower.checked) {
            const randomIndexLetters = Math.floor(
              Math.random() * letters.length
            );
            randomChar = letters[randomIndexLetters];
          } else if (randomIndexLet === 1 && rpgCheckUpper.checked) {
            const randomIndexLetters = Math.floor(
              Math.random() * letters.length
            );
            randomChar = letters[randomIndexLetters].toUpperCase();
          } else {
            i -= 1;
          }
        } else if (randomIndex === 2 && rpgCheckSymbol.checked) {
          const randomIndexSymbols = Math.floor(Math.random() * symbols.length);
          randomChar = symbols[randomIndexSymbols];
        } else {
          i -= 1;
        }

        if (randomChar === undefined) {
          continue;
        }

        result += randomChar;
      }
      rpgResult.innerHTML = `
          <li class="list-group-item "><span class="">${result}</span></li>`;
    }
  }
}

rpgGenButton.addEventListener("click", generatePassword);
rpgCheckboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", generatePassword);
});

window.addEventListener("load", () => {
  generatePassword();
});
