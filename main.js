eyepatchX=0;
eyepatchY=0;

function setup(){
    canvas=createCanvas(300,275);
    canvas.center();
    video=createCapture(VIDEO);
    video.set(300,275);
    video.hide();
}

function draw(){
    image(video,0,0,300,275);
}