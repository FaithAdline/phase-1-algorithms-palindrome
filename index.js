function isPalindrome(word) {
  // Convert the word to lowercase to ignore case sensitivity
  const lowercaseWord = word.toLowerCase();

  let leftPointer = 0;
  let rightPointer = lowercaseWord.length - 1;

  while (leftPointer < rightPointer) {
    // If characters at the left and right pointers are different, it's not a palindrome
    if (lowercaseWord[leftPointer] !== lowercaseWord[rightPointer]) {
      return false;
    }
    leftPointer++;
    rightPointer--;
  }

  return true; // All characters matched, it's a palindrome
}

// Custom tests
console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

module.exports = isPalindrome;

