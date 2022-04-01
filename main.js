song1="";
song2="";

function preload(){
song1=loadSound("mighty morphin power rangers.mp3");
song2=loadSound("harry-potter-theme-song.mp3");
}

function setup(){
canvas=createCanvas(500,400);
canvas.position(400,180);
video=createCapture(VIDEO);
video.hide();
}
    
function draw(){
image(video,0,0,500,400);
}