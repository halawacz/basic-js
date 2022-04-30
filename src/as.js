function getCommonCharacterCount(s1, s2) {
  let s3 = s1 + s2;
  let set1 = new Set(s1.split(""));
  let set2 = new Set(s2.split(""));
  let set3 = new Set(s3.split(""));

  // return s3.length - set3.size;

  console.log(set1, set2, set3);
  console.log(set3.size - set1.size);
}
getCommonCharacterCount("aa", "aaaa");
