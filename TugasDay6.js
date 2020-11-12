let kata1 = "hello dunia"
let HurufVocal = str1 => Array.from(str1).filter(huruf => 'aeiou'.includes(huruf))
console.log(HurufVocal(kata1).join(''))

let kata2 = 'javascript'
let HitungVocal = str2 => Array.from(str2).filter(huruf => 'aeiou'.includes(huruf)).length
console.log(HitungVocal(kata2))



let kata3 = "purwadhika"
console.log(kata3.split('').sort().join(''))

