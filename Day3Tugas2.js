let soal = 485
let tahun = 360
let bulan = 30
let hari = 1

let HitungTahun = Math.floor (soal / tahun) //1
let SisaTahun = Math.floor (soal % tahun)  //125

let HitungBulan = Math.floor (SisaTahun / bulan) //4
let SisaBulan = Math.floor (SisaTahun % bulan) //5

let HitungMinggu = Math.floor (SisaBulan / bulan) //0
let SisaMinggu = Math.floor (SisaBulan % bulan) //5

let HitungHari = Math.floor (SisaMinggu / hari) //5

console.log(`485 hari = ${HitungTahun} tahun ${HitungBulan} bulan ${HitungMinggu} minggu ${HitungHari} hari
`)