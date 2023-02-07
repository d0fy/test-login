// a
const soal1 = "Hello World";

const str1 = soal1;
const charac1 = {};
for (let char of str1) {
  if (!charac1[char]) {
    charac1[char] = 1;
  } else {
    charac1[char]++;
  }
}
console.log(charac1);

// b
const soal2 = "Bismillah";
const str2 = soal2;
const charac2 = {};
for (let char of str2) {
  if (!charac2[char]) {
    charac2[char] = 1;
  } else {
    charac2[char]++;
  }
}
console.log(charac2);
