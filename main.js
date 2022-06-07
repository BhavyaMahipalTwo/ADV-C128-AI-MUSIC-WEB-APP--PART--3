leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
song2 = " ";
song = " ";

function preload(){
    song = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(500, 400);
    canvas.position(500, 275);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet mOdel is Loaded!!:)");
}

function draw(){
    image(video, 0, 0, 500, 600);
}

function gotPoses(results){
    if(results.lenght > 0){
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.righttWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("left Wrist X = " + leftwristX);
        console.log("left Wrist Y = " + leftwristY);
        console.log("Right Wrist X = " + rightwristX);
        console.log("Right Wrist Y = " + rightwristY);
    }
}
