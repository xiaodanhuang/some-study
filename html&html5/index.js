window.onload=function(){
	var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");
context.moveTo(10,10);
context.lineTo(40,50);
context.lineWidth=10;
context.stroke();
	
}
