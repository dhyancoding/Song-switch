song = " "

function preload(){
    song = loadSound("1.mp3")
    song2 = loadSound("2.mp3")
}
scoreRW = 0
scoreLW = 0

LwristX = 0
RwristX = 0

LwristY = 0
RwristY = 0

function setup(){
    canvas = createCanvas(675, 500)
    canvas.center()
    v = createCapture(VIDEO)
    v.hide()

    pn = ml5.poseNet(v, modelLoaded)
    pn.on("pose", getposes)
}

function modelLoaded(){
    console.log("posenet initialised")
}

function getposes(results){
    if (results.length > 0) {
        
        scoreRW = results[0].pose.keypoints[10].score
        scoreLW = results[0].pose.keypoints[9].score

        LwristX = results[0].pose.leftWrist.x
        RwristX = results[0].pose.rightWrist.x

        LwristY = results[0].pose.leftWrist.y
        RwristY = results[0].pose.rightWrist.y

    }
}

function draw(){
    image(v, 0, 0, 700, 500)

        if (scoreRW > 0.2 ){
            if (song.isPlaying()){
                song.pause()
                song2.play()
            }
        }

        if (scoreLW > 0.2){
            if (song2.isPlaying()){
                song2.pause()
                song.play()
            }

        }
}
    

function Play(){
    song.play()
}