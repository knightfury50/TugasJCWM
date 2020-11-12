// menghitung huruf vocal 
function hitungVocal (kata) {
    let hasil = kata.split('').filter(huruf => 'aeiou'.includes(huruf))
    console.log(hasil.length)
}
hitungVocal('purwadhika')
hitungVocal('javascript')


// menghapus huruf vocal
function hapusVocal (kata) {
    let hasil = ''
    for (let i = 0 ; i < kata.length ; i++) {
        if (kata[i] === 'a' || kata[i] === 'e' || kata[i] === 'i' || kata[i] === 'o' || kata[i] === 'u') {
            continue
        }
        hasil += kata[i]
    }
    console.log(hasil)
}
hapusVocal('reactjs')
hapusVocal('hello')


//alternating case
function altercase (kata) {
    let hasil = ''
    for (i = 0; i < kata.length; i++) {
      if (kata[i] === kata[i].toLowerCase()) {
        hasil += kata[i].toUpperCase();
      } else {
        hasil += kata[i].toLowerCase();
      }
    }
    console.log(hasil)
}
altercase('heLLO wOlRd')


// menghitung huruf duplikat
function hitungDuplikat (kata) {
    let hasil = kata.split('').filter((a, b) => kata.indexOf(a) != b).filter(kata => kata.trim())
    console.log(`ada ${hasil.length} huruf yang duplikat : ${hasil}`)
}
hitungDuplikat('i love javascript')