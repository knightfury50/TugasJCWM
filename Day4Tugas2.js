let a = 0   
let b = 1
console.log(a)
console.log(b)
while(true) {
    let c = b
    b += a
    a = c
    if (b > 25) {
        break
    }
    console.log(b)
}