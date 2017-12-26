var box='mawemswermwseram';
var c=box.substring(2);
box.age='df';
a=[1,2,3,4,5,6];
b=[1,1,3,4,6,7];
for(var i=0;i<a.length;i++){
    for(var j=0;j<b.length;j++){
      if(a[i]==b[j]){
          console.log(b[j]);

      }

    }
}
function createFunction(){
    var result=new Array();
    for(var i=0;i<10;i++){
        result[i]=function(){
            console.log(i);
            return i;
        }
    }
    return result;

}