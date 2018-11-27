/*
//contoh output
["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"]  

Buatlah sebuah function dengan nama dataHandling2 yang akan menerima input array seperti di atas.

Gunakan fungsi splice untuk memodifikasi variabel tersebut agar menjadi seperti array dibawah. Lalu console.log array yang baru seperti di bawah.

["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]  

    Berdasarkan elemen yang berisikan tanggal/bulan/tahun (elemen ke-4), ambil angka bulan dan console.log nama bulan sesuai dengan angka tersebut.
        Gunakan split untuk memisahkan antara tanggal, bulan, dan tahun.
        Format tanggal pada data adalah dd-mm-YYYY
        Misal angka bulan 01, tuliskan "Januari"
        Gunakan switch case untuk menuliskan bulan di atas.

    Pada array hasil split dari tanggal/bulan/tahun, lakukan sorting secara descending dan console.log array yang sudah di-sort.

    Masih pada array hasil split dari elemen tanggal/bulan/tahun, gabungkan semua elemen menggunakan join dan pisahkan dengan karakter strip (-) lalu console.log hasilnya.

    Nama (elemen ke-2), harus dibatasi sebanyak 15 karakter saja. Gunakan slice untuk menghapus kelebihan karakter dan console.log nama yang sudah di-slice, sebelum di-slice pastikan Nama (elemen ke-2) sudah dalam bentuk String agar bisa di-slice.

Test-case

Untuk memastikan program kamu sudah bekerja dengan benar, gunakan test-case dibawah.

var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);


 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */

 
function dataHandling2(input){
  input.splice(1, 1, 'Roman Alamsyah Elsharawy');
  input.splice(2, 1, 'Provinsi Bandar Lampung');
  input.splice(4, 1, 'Pria', 'SMA Internasional Metro');
console.log(input);

var hari = '';
var tahun = '';
var bulan = 05;
switch(bulan){
  case 1 : {console.log(hari+ ' '+ 'Januari'+ ' ' +tahun); break;}
  case 2 : {console.log(hari+ ' '+ 'Februari'+ ' ' +tahun); break;}
  case 3 : {console.log(hari+ ' '+ 'Maret'+ ' ' +tahun); break;}
  case 4 : {console.log(hari+ ' '+ 'April'+ ' ' +tahun); break;}
  case 5 : {console.log(hari+ ' '+ 'Mei'+ ' ' +tahun); break;}
  case 6 : {console.log(hari+ ' '+ 'Juni'+ ' ' +tahun); break;}
  case 7 : {console.log(hari+ ' '+ 'Juli'+ ' ' +tahun); break;}
  case 8 : {console.log(hari+ ' '+ 'Agustus'+ ' ' +tahun); break;}
  case 9 : {console.log(hari+ ' '+ 'September'+ ' ' +tahun); break;}
  case 10 : {console.log(hari+ ' '+ 'Oktober'+ ' ' +tahun); break;}
  case 11 : {console.log(hari+ ' '+ 'November'+ ' ' +tahun); break;}
  case 12 : {console.log(hari+ ' '+ 'Desember'+ ' ' +tahun); break;}
  default:  { console.log('Tidak terjadi apa-apa'); }
  }

var tanggal = input[3];
var tanggalSplit = tanggal.split('/');

var x = tanggalSplit.sort(function(a,b) {
  return b-a;
});
console.log(x);

var y = tanggal.split("/");
var z = y.join("-")
console.log(z);

var nama = input[1];
var namaSlice = nama.slice(0, 15);
console.log(namaSlice);
} 

var input = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];
dataHandling2(input);