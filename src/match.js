function getCommonCharacterCount(s1, s2) {
  if (s1.length <= s2.length) {
    shorterString = s1;
    longerString = s2;
  } else {
    shorterString = s2;
    longerString = s1;
  }

  let arr1 = shorterString.split("");
  let arr2 = longerString.split("");
  let stack = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      stack.push(arr1[i]);
      arr2.splice(arr2.indexOf(arr1[i]), 1);
    }
  }

  //let result = new Set(stack);

  return stack.length;
}
console.log(getCommonCharacterCount("aabcc", "adcaa"));
