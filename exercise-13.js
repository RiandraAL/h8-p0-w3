/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter.
Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. 
Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, 
function akan me-return nilai 0.
Code
*/

/* CARA 1

function targetTerdekat(arr){
	var index1 = 0;
	var index2 = 0;
	var tampung = 0;
	var arrx = [];
	
	if (arr.indexOf('x') === -1){ 
		return 0;
	}
	else{
		for(var i=0;i<=arr.length;i++){ 
				if(arr[i] === 'x'){
				index1 = i;
				arrx.push(index1);
				}
				else if (arr[i] === 'o'){
				index2 = i; 
				}
			
			var hasil = []; 
				for (var j = 0;j<arrx	.length; j++){
					tampung = Math.abs(index2 - arrx[j]);
					hasil.push(tampung);
					hasil.sort();
					}
		}
		
		return hasil[0]; 
	}
}
*/

// CARA 2

function targetTerdekat(arr){
var indexO = arr.indexOf('o');
var jarak = 0;
var jarakTerdekat = arr.length;

if(arr.indexOf('x') === -1){
return 0;
}
for (var i = 0; i < arr.length; i++){
if (arr[i] === 'x'){
jarak = Math.abs(i - indexO)
if(jarak < jarakTerdekat){
  jarakTerdekat = jarak
}
}
}
return jarakTerdekat;
}
	
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2
