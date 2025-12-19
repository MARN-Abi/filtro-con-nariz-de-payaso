function preload(){

}
function setup(){
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();
 otimcolor="";

}
function draw(){
image(video,0,0, 640,480);
tint(otimcolor)
}
function aplicarfiltro(){
 otimcolor=document.getElementById ("colormain").value;
}
function tomarfoto(){
save("filtro.png");
}