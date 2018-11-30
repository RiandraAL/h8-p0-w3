/* SOAL
Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa array yang berisi string. 
Function akan me-return array multidimensi dimana array tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad depannya. 
Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja semua text lowercase.

Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]

maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ], [ "zebra" ] ]

Urutan hewan dalam array setiap pengelompokan huruf tidak penting.
*/


function groupAnimals(animals) {
var hasil = [];
var indeks = 0;
animals.sort();

for(var i = 0; i < animals.length; i++){
if (hasil.length === 0){
hasil.push([animals[i]]);
} else if (hasil[indeks][0][0] === animals[i][0]){
hasil[indeks].push(animals[i]);
} else{
  hasil.push([animals[i]]);
  indeks++;
}
}
return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda'] ]
console.log('\n');
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
