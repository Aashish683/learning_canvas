var canvas=document.querySelector('canvas');
var ctx=canvas.getContext('2d');
var audio=document.querySelector('audio');
var counter=0;
audio.volume=0.0;
var x=audio.volume;

audio.onclick= ()=>{
    console.log(1);
};
/*var timer=setInterval(()=>{
    while(1)
    {
        audio.volume=audio.volume+1/10;
        if(audio.volume>=0.90)
        clearInterval(timer);
    }
    },3000);*/


function Circle(i,j)
{
    this.x=20.5+i*50;
    this.y=0.0;
    this.radius=2*i;
    this.startAngle=0;
    this.endAngle=2*Math.PI;
    this.sense=true;
    this.color=`rgba(${Math.floor(255*Math.random())},${Math.floor(255*Math.random())},${Math.floor(255*Math.random())},${Math.random()}`;
    //this.speed=j==i?10*j+10:2*j+2;;;;
    this.speed=((audio.volume)*1.5+1)*j;
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
var start=new Date();
var seconds=start.getSeconds();
var milli=Date.now();
//var milli=start.getMilliseconds();
var fpsInterval,then,elapsed,now;
animateFPS(1000);
//var speed1=14+10*Math.random();
//draw(2,10,speed1); This function was not executing since window.requestAnimateFrame keeps recurisively calling draw,and that's where the script
// goes on executing


function draw()
{       
   now=Date.now();
   elapsed=now-then;
   if(elapsed>fpsInterval)
{
    ctx.save();
    ctx.translate(-500,-500);
    ctx.clearRect(0,0,1000,1000);
    ctx.restore();
    ctx.save();
    var timer=new Date();

    
    for(var index=0;index<30;index++)
    {
        for(var jindex=1;jindex<21;jindex++)
        {
            ctx.save();
            ctx.beginPath();
            var c=new Circle(index,jindex);
            ctx.fillStyle=c.color;
            //ctx.rotate(`${c.speed*(2*Math.PI*(timer.getSeconds()-seconds)/60 +2*Math.PI*(timer.getMilliseconds()-milli)/60000)}`);
   
            ctx.rotate(`${c.speed*(2*Math.PI*(Date.now()-milli)/60000)}`);
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
    then = now;    
    counter++;
    //console.log(counter++);
    //console.log(audio.volume);
}
    
    
    
    window.requestAnimationFrame(()=>{draw();});
    //console.log(audio.volume);
   // setInterval(()=>{draw(i,j,speed);},0.00000000000000000001);
}
function animateFPS(fps)
{
    fpsInterval=1000/fps;
    then=Date.now();
    draw();
}
audio.onclick=function(e)
{
    console.log(e);
};
