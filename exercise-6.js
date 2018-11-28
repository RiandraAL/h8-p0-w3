/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.
*/


function angkaPalindrome(angkas){
function angkaPalindrome1(angka){
  var jadiString = angka.toString();
  var tampung = '';
  for (i = jadiString.length-1; i>=0; i--){
    tampung = tampung + jadiString[i];
  }
return tampung === jadiString;
}
var tambah1 = angkas + 1;
while (true){
  if(angkaPalindrome1(tambah1)){
return tambah1
  }else {
    tambah1 += 1
  }
}
}

console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
