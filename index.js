function reverseString(str) {
  let reverse = "";
  for (let char of str) {
    reverse = reverse + char;
  }
  return reverse;
}
function Palindrome(str) {
  let reverse = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    reverse = reverse + str[i];
  }
  console.log(reverse, str, "asds");
  if (reverse === str) {
    return true;
  } else {
    return false;
  }
}

function ReverseInt(int) {
  let strInt = int.toString();
  let reverseInt = "";
  for (let i = strInt.length - 1; i >= 0; i--) {
    reverseInt = reverseInt + strInt[i];
  }
  return parseInt(reverseInt) * Math.sign(int);
}

function CapitlizeString(sentance) {
  return sentance
    .toLowerCase()
    .split(" ")
    .map((item) => item[0].toUpperCase() + item.substr(1))
    .join(" ");
}

function maxCharacters(word) {
  const obj = {};
  let maxNum = 0;
  let maxChar = "";
  word
    .toLowerCase()
    .split("")
    .forEach((item) => {
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    });
  for (let i in obj) {
    if (obj[i] > maxNum) {
      maxNum = obj[i];
      maxChar = i;
    }
  }
  return console.log(maxNum, maxChar);
}
// write a program that prints all the numbers from 1 to 100.
//  For multiples of 3, instead of the number, print "Fizz",
// for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5,
//  print "FizzBuz"
function FizzBuz() {
  for (let i = 1; i <= 100; i++) {
    if ((i % 5 === 0) & (i % 3 === 0)) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else if (i % 3 === 0) {
      console.log("FizzBuz");
    } else {
      console.log(i);
    }
  }
}

// longest number in an array

longestNumber = (sentance) => {
  let wordArray = sentance.toLowerCase().match(/[a-z0-9]+/g);
  let sorted = wordArray.sort((a, b) => {
    return b.length - a.length;
  });
  let filter = sorted.filter((item) => {
    return item.length === sorted[0].length;
  });
  if (filter.length === 1) {
    return filter[0];
  } else {
    return filter;
  }
};

//Array chuncking

console.log(longestNumber("this is just, a  longest number"));
