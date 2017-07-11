window.onload=function(){
var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
 context.translate(100,80);
 
 var copies=10;
 for(var i=1;i<copies;i++){
 	context.rotate(2*Math.PI*1/(copies-1));
 	context.rect(0,0,60,60);
 	
 }
 context.stroke();
}
