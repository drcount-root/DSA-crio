function capitalizeWords(paragraph) {
  let capitalizedParagraph = "";

  // Iterate over each character in the paragraph
  for (let i = 0; i < paragraph.length; i++) {
    let currentChar = paragraph.charAt(i);

    // If the current character is a letter and the previous character is a space or the first character of the string, capitalize it
    if (
      (i === 0 || paragraph.charAt(i - 1) === " ") &&
      currentChar >= "a" &&
      currentChar <= "z"
    ) {
      currentChar = String.fromCharCode(currentChar.charCodeAt(0) - 32);
    }

    capitalizedParagraph += currentChar;
  }

  return capitalizedParagraph;
}

console.log(capitalizeWords("Learn by doing"));
