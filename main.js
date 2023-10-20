var nosex=0
var nosey=0

function preload(){
img=loadImage("https://i.postimg.cc/XYtDXs4m/mustache-removebg-preview.png")

}

function setup(){
canvas=createCanvas(450,350)
canvas.center()
video=createCapture(VIDEO)
video.size(450,350)
video.hide()
poseNet=ml5.poseNet(video,modelLoaded)
poseNet.on("pose",gotPoses)
}

function modelLoaded(){
console.log("poseNetIsReady")
}

function draw(){

image(video,0,0,450,350)
image(img,nosex-25,nosey,50,50)
}
function gotPoses(results){

if(results.length > 0)
{ console.log(results);
 console.log("nose x = " + results[0].pose.nose.x);
 console.log("nose y = " + results[0].pose.nose.y); 
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;


}

}





function take_snapshot(){
save("moustache.png")
}



