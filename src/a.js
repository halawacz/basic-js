function getCommonCharacterCount(s1, s2) {
  if (s1.length <= s2.length) {
    sShortest = s1;
    sLongest = s2;
  } else {
    sShortest = s2;
    sLongest = s1;
  }
  let charArray = sLongest.split("");
  let counter = 0;
  for (i = 0; i < sShortest.length; i++) {
    if (charArray.includes(sShortest.charAt(i))) {
      counter++;
    }
  }
  return counter;
}

console.log(getCommonCharacterCount("aabcc", "adcaa"));
