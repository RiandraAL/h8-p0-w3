/*
Buatlah sebuah fungsi dengan nama balikString. 
Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.
Example

//input "hello world!"
//output
"!dlrow olleh"
*/

    function balikString(kata) {
        var balik = '';
        for (var i= kata.length-1; i>= 0; i--){
            balik = balik + kata[i];
        }
        return balik;
    }
    console.log(balikString('hello world!'));