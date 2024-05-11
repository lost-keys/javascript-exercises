const palindromes = function (word) {
  word = cleanString(word);
  if (reverseString(word) === word) {
    return true;
  } else {
    return false;
  }
};

// remove punctuation so that it does not cause the palindrome
// test to fail
function cleanString(str) {
  return str.split("")
            .filter((char) => /^[a-zA-Z0-9]+$/.test(char))
            .join("")
            .toLowerCase();
}

function reverseString(str) {
  return str.split("").reverse().join("")
}

// Do not edit below this line
module.exports = palindromes;
