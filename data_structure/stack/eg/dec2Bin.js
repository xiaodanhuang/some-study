function dec2Bin(number){
    let arr=[]
    while(number){
        let item=number%2;
        arr.push(item);
        number=(number-item)/2
    }
    return arr.reverse().join("")
}

console.log(dec2Bin(100))