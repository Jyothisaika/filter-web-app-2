function preload(){


}

function setup(){
canvas = createcanvas(300,300)
canvas = center()
video = createCapture(VIDEO)
video size = 300,300
video.hide();
posenet = ml5.posenet(video , modelLoaded)
}

function takesnapshot(){
    save('myfilterImage.png');
}

function draw(){
image(video,0,0,300,300)


}

function onclick(){
    
}

classifier = ml5.classifier

function modelloaded(){
console.log('Model Loaded!');
}


nosex=0;
nosey=0;

function gotposes(results)
{
    if (results . )
}
