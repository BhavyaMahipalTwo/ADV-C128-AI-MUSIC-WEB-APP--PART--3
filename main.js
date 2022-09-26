rightwristScore = 0;
leftwristScore = 0;
rightwristX = 0;
rightwristY = 0;
leftwristX = 0;
leftwristY = 0;
songStatus = " ";
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
    console.log("PoseNet model is Loaded!!:)");
}

function draw(){
    image(video, 0, 0, 500, 600);
}

function gotPoses(results){

        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("Score of Left Wrist = " + scoreLeftWrist);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("Score of Right Wrist = " + scoreRightWrist);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("X coordinates of left Wrist = " + leftwristX + ", Y coordinates of left Wrist = " + leftwristY);
        console.log("X coordinates of right Wrist = " + rightwristX + ", Y coordinates of right Wrist = " + rightwristY);
    }
