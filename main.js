Aarray=[];
Sstatus="";

function preload(){
 alarm=loadSound("alarm.mp3");
}
function setup(){
    canvas=createCanvas(480,380);
    video=createCapture(VIDEO);
    video.size(480,380);
    canvas.center();
    video.hide();
    a= ml5.objectDetector('cocossd',detectorr);
}

function detectorr(){
    console.log("CocoSSD Detected, Model Loaded")
    Sstatus=true;

}
function errorr(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        Aarray=results;
    }
}
function draw(){
    image(video,0,0,480,380);
    if(Sstatus != ""){
        a.detect(video, errorr);
        r = random(255);
        g = random(255);
        b = random(255);
for(var i = 0; i < Aarray.length; i++){
    document.getElementById('status').innerHTML = "Status: Object Detected"
    conf = floor(Aarray[i].confidence * 100);
    fill(r, g, b);
    text(Aarray[i].label + " " + conf + "%", Aarray[i].x + 10, Aarray[i].y + 15);
    noFill();
    stroke(r, g, b);
    rect(Aarray[i].x, Aarray[i].y, Aarray[i].width, Aarray[i].height);
    if(Aarray[i].label == 'person'){
        document.getElementById("bb").innerHTML = "Baby found";
        alarm.stop();
    }
    else if(Aarray.length == 0){
        document.getElementById("bb").innerHTML = "Baby not found";
        alarm.play();
    }
    else{
        document.getElementById("bb").innerHTML = "Baby not found";
        alarm.play();
    }
   
}
}
    }