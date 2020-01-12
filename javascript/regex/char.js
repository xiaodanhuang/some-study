var reg=/a[bc]{3,5}/g

let str='abbbb abbb abbbb abc accc a'

let arr=str.match(reg)
console.log(arr)
var reg=/[^6][G-M1-9]/g
let num='10 2 11 H 6 7'
console.log(num.match(reg))

reg=/#[0-9a-fA-Z]{3}|#[0-9a-fA-Z]{6}/g
