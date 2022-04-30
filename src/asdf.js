function getCommonCharacterCount(s1, s2) {
  let stringRegex = s2.split("").join("|");
  let regex = new RegExp(stringRegex, "gi");

  return s1.match(regex).length;
}

console.log(getCommonCharacterCount("aabcc", "adcaa"));

