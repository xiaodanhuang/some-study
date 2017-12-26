var ctx=document.getElementById('mycan');
var context=ctx.getContext('2d');
context.moveTo(10,10);
context.lineTo(400,10);
context.lineWidth=10;
context.stroke();
context.beginPath();
context.moveTo(10,50);
context.lineTo(400,50);
context.lineCap='square'
context.lineWidth=10;
context.stroke();
context.beginPath();
context.moveTo(10,100);
context.lineTo(400,100);
context.lineCap='round'
context.lineWidth=10;
context.stroke();
context.beginPath();
context.moveTo(50,150);
context.lineTo(75,180);
context.lineTo(25,180);
context.lineTo(50,150);
//context.closePath();
//context.fillStyle='pink';
//context.fill();
context.strokeStyle='pink';
context.lineJoin='round'
context.stroke();
context.beginPath();
context.strokeRect(10,200,100,100);
context.beginPath();
context.arc(500,150,100,0,2*Math.PI);
context.stroke();
context.beginPath();
context.moveTo(50,400);
context.bezierCurveTo(25,200,500,600,400,280);
context.stroke();
context.translate(100,100);
for(var i=1;i<10;i++){
    context.rotate(2*Math.PI*1/(10-1));
    context.rect(0,0,60,60);

}
context.lineWidth=1;
//context.globalAlpha=0.3;
context.globalCompositeOperation='xor';
context.stroke();


