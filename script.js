function caesarCipher(text, shift) {
  let encryptedText = "";

  for (let char of text) {
      if (char.match(/[a-z]/i)) {
          let code = char.charCodeAt();
          if (code >= 65 && code <= 90) {
              encryptedText += String.fromCharCode(((code - 65 + shift) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
              encryptedText += String.fromCharCode(((code - 97 + shift) % 26) + 97);
          }
      } else {
          encryptedText += char;
      }
  }

  return encryptedText;
}

function encrypt() {
  const text = document.getElementById("input-text").value;
  const shift = parseInt(document.getElementById("shift-value").value);
  const encryptedText = caesarCipher(text, shift);
  document.getElementById("output").textContent = "Encrypted Text: " + encryptedText;
}
