//20 有效的括号
function isValid(s){
     let map =new Map([['(',')'],['{','}'],['[',']']]);
     let arr=s.split("");
     let stack=[];
     let flag=true;
     arr.map((item,key)=>{
         if(map.get(item)&&key<arr.length-1){
             stack.push(item)
         }else if(map.get(stack[stack.length-1])==item){
             stack.splice(stack.length-1,1);
         }else{
             flag=false
         }
     })
     if(stack.length){
         flag=false
     }
     return flag;
 }


console.log(isValid("[()"))