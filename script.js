var canvas=document.querySelector('canvas');
var ctx=canvas.getContext('2d');


function Circle(i,j)
{
    this.x=20.5+i*50;
    this.y=0.5;
    this.radius=2*i;
    this.startAngle=0;
    this.endAngle=2*Math.PI;
    this.sense=true;
    this.color=`rgba(${Math.floor(255-20*Math.random())},${Math.floor(255-30*Math.random())},${Math.floor(0+50*Math.random())},${Math.random()}`;
    this.speed=2*j+2;
}

ctx.translate(500,500);
/*for(var i=0;i<10;i++)
{
    for(var j=0;j<20;j++)
    {
        draw(i,j);
    }
}*/

//Moving a circle.
var speed=4+10*Math.random();
draw(5,16,speed);
//var speed1=14+10*Math.random();
//draw(2,10,speed1); This function was not executing since window.requestAnimateFrame keeps recurisively calling draw,and that's where the script
// goes on executing!

function draw(i,j,speed)
{       
    ctx.save();
    ctx.translate(-500,-500);
    ctx.clearRect(0,0,1000,1000);
    ctx.restore();
    ctx.save();
    var timer=new Date();
   /* ctx.beginPath();
    var c=new Circle(i,j);
    console.log(i);
    //console.log(c.color)
    ctx.fillStyle=c.color;
    ctx.rotate(`${speed*(2*Math.PI*timer.getSeconds()/60 +2*Math.PI*timer.getMilliseconds()/60000)}`);
    ctx.translate(c.x,c.y);
    ctx.arc(0,0,c.radius,0,2*Math.PI,true);
    ctx.fill();
    ctx.lineWidth=0.5;
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
    ctx.save();
    ctx.fillStyle=c.color;
    ctx.rotate(`${speed*(2*Math.PI*timer.getSeconds()/60 +2*Math.PI*timer.getMilliseconds()/60000)}`);
    ctx.translate(c.x+80,c.y);
    ctx.beginPath();//Don't forget this otherwise a line comes in the diameter,figure out why after midsem..
    ctx.arc(0,0,c.radius,0,2*Math.PI,true);
    ctx.fill();
    ctx.lineWidth=0.5;
    ctx.strokeStyle="black";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();*/

    
    for(var index=0;index<15;index++)
    {
        for(var jindex=0;jindex<10;jindex++)
        {
            ctx.save();
            ctx.beginPath();
            var c=new Circle(index,jindex);
            ctx.fillStyle=c.color;
            ctx.rotate(`${c.speed*(2*Math.PI*timer.getSeconds()/60 +2*Math.PI*timer.getMilliseconds()/60000)}`);
            ctx.translate(c.x,c.y);
            ctx.arc(0,0,c.radius,0,2*Math.PI,true);
            ctx.fill();
            ctx.lineWidth=0.5;
            ctx.strokeStyle="black";
            ctx.stroke();
            ctx.closePath();
            ctx.restore();

        }
    }
    
    
    
    window.requestAnimationFrame(()=>{draw(i,j,speed);});
}