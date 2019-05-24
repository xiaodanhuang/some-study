//67 二进制求和
var addBinary = function(a, b) {
    let arrA=a.split('').reverse();
    let arrB=b.split('').reverse();
    let arrC=[]
    let flag=0;
    for(let i=0;i<arrA.length&&i<arrB.length;i++){
       arrC[i]=(flag+(arrA[i]-0)+(arrB[i]-0))%2;
       flag=flag+(arrA[i]-0)+(arrB[i]-0)>=2?1:0
    }
    if(arrC.length<arrA.length){
        for(let i=arrC.length;i<arrA.length;i++){
            arrC[i]=(flag+(arrA[i]-0))%2;
            flag=flag+(arrA[i]-0)>=2?1:0
        }

    }
    if(arrC.length<arrB.length){
        for(let i=arrC.length;i<arrB.length;i++){
            arrC[i]=(flag+(arrB[i]-0))%2;
            flag=flag+(arrB[i]-0)>=2?1:0
        }

    }
    if(flag==1){
        arrC.push(1)
    }
    return arrC.reverse().join('')

};
console.log(addBinary("1010","1011"))