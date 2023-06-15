scoreLeftWrist=0;
scoreRightWrist=0;

belupacito_status="";
sonic_status="";

status1="";

belupacito="";
sonic_unleashed="";

LeftWristX=0;
LeftWristY=0;

RightWristX=0;
RightWristY=0;

song="";
function preload(){
belupacito = loadSound("belupacito.mp3");
sonic_unleashed = loadSound("sonic_unleashed.mp3");
}
function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){


    image(video,0,0,600,500);
    fill("#ff0000");
    stroke("#000000");
    strokeWeight(4);

    belupacito_status = belupacito.isPlaying();
    sonic_status = sonic_unleashed.isPlaying();

    console.log(belupacito);
    if(scoreLeftWrist>0.2)
    {
    circle(LeftWristX,LeftWristY,20);
    
sonic_unleashed.stop();


if(belupacito_status == false){
    peter_pan.play();
    document.getElementById("song").innerHTML = "Playing - Belupacito Music";
       }
    }
   
    
    if(scoreRightWrist>0.2)
    {
    circle(RightWristX,RightWristY,20);
peter_pan.stop();

   if(harry_status==false){
       harry_potter.play();
       document.getElementById("song").innerHTML = "Playing - Sonic Unleashed Music";
   }
    }
}
function modelLoaded(){
    console.log("PoseNet initialized"); 
}
function gotPoses(results){
    if(results.length > 0 ){
        console.log(results);
    
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        scoreRightWrist=results[0].pose.keypoints[10].score;

        LeftWristX=results[0].pose.leftWrist.x;
        LeftWristY=results[0].pose.leftWrist.y;
        console.log("LeftWristX = "  +LeftWristX + "LeftWristY = " + LeftWristY);
    
    RightWristX=results[0].pose.rightWrist.x;
    RightWristY=results[0].pose.rightWrist.y;
    console.log("RightWristX = " + RightWristX + "RightWristY = " + RightWristY);
    
    }
    }