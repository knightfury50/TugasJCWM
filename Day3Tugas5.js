let massa = 67
let tinggi = 1.78
let IMT = massa / tinggi ** 2

console.log('massa ' + massa + ' kg & tinggi ' + tinggi + ' m')

switch (true) {
    case (IMT<18.5):
        console.log('IMT = ' + IMT + ', BERAT BADAN ANDA KURANG!')
        break
    case (IMT<=24.9):
        console.log('IMT = ' + IMT + ', BERAT BADAN ANDA IDEAL!')
        break
    case (IMT<=29.9) :
        console.log('IMT = ' + IMT + ', BERAT BADAN ANDA BERLEBIH!')
        break
    case (IMT<=39.9) :
        console.log('IMT = ' + IMT + ', BERAT BADAN ANDA SANGAT BERLEBIH!')
        break
    default :
        console.log('IMT = ' + IMT + ', ANDA OBESITAS!')
}