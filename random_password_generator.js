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

rpgGenButton.addEventListener("click", () => {
  let result = "";
  // prettier-ignore
  const numbers = ['1','2','3','4','5','6','7','8','9'];
  // prettier-ignore
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  // prettier-ignore
  const symbols = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];

  if (
    !rpgCheckNumber.checked &&
    !rpgCheckLower.checked &&
    !rpgCheckUpper.checked &&
    !rpgCheckSymbol.checked
  ) {
    console.log("En az bir checkbox seçeneği seçmelisiniz!");
  } else {
    for (let i = 0; i < input1.value; i++) {
      if (rpgCheckNoRepeat) {
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
          if (randomChar === undefined) {
            continue;
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
      } else {
        const NoRepeat = [];

        while (
          NoRepeat.length <
          numbers.length + letters.length + symbols.length
        ) {}
      }
      console.log(result);
    }
  }
});
