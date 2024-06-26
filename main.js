difference = 0;
rightWristX = 0;
leftWristX = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses)
}
function draw(){
    background ('#279A43');
    textSize(difference);
    fill(#123456);
    text('hola, si se portan bien hoy, vamos a jugar mañana', 10, 20)
}
function modelLoaded(){
    console.log('PoseNet se inicializó');
}
function gotPoses(results)
{
    if(results.length > 0)
        {
            console.log(results);
             leftWristX = results[0].pose.leftWrist.x;
            righttWristX = results[0].pose.rightWrist.x;
            difference = floor(leftWristX - rightWristX);

        }
}
