let sekarang = new Date ()
let hari = sekarang.getDate ()
let bulan = sekarang.getMonth ()+1
let tahun = sekarang.getFullYear ()

console.log('hari ini tanggal ' + hari + '-' + bulan + '-' + tahun) 
console.log('besok tanggal ' + (hari+1) + '-' + bulan + '-' + tahun)
console.log('kemarin tanggal ' + (hari-1) + '-' + bulan + '-' + tahun)