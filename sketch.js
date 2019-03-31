let video;
let poseNet;
let noseX = 0;
let noseY = 0;
let eyelX = 0;
let eyelY = 0;
let eyerX=0;
let eyerY=0;

let d;
let img;
 function preload()
{
		  	    img=loadImage('images/nose.png');
			 	img2=loadImage('images/goggle.png');


}
 
 
 function setup() {
	
  createCanvas(640, 480);
  
  video = createCapture(VIDEO);
  video.hide();
 // video.size(width, height);

  poseNet = ml5.poseNet(video, modelReady);
  poseNet.on('pose', gotPoses);

}





function gotPoses(poses) {
  // console.log(poses);
  if (poses.length > 0) {
    let nX = poses[0].pose.keypoints[0].position.x;
     let nY = poses[0].pose.keypoints[0].position.y;
    let eX = poses[0].pose.keypoints[1].position.x;
    let eY = poses[0].pose.keypoints[1].position.y;
	 let erX = poses[0].pose.keypoints[2].position.x;
    let erY = poses[0].pose.keypoints[2].position.y;
	
    noseX = lerp(noseX, nX, 0.5);
    noseY = lerp(noseY, nY, 0.5);
    eyelX = lerp(eyelX, eX, 0.5);
    eyelY = lerp(eyelY, eY, 0.5);
	eyerX = lerp(eyerX, erX, 0.5);
    eyerY = lerp(eyerY, erY, 0.5);
	   
  }
}

function modelReady() {
  console.log('model ready');
}



  

function draw() {
	image(video, 0, 0,width, height);

   d = dist(noseX, noseY, eyelX, eyelY);
  
  //this is not working
  image(img,noseX-25,noseY-25,d,d);
   
  
  
  
  //for Nose
  //  fill(255, 0, 0);

 //ellipse(noseX, noseY,d);
 //text('Emoji',noseX,noseY,d);
 //image(img,noseX,noseY,50,50);
 
 //for Left Eye
 //fill(0,0,255);
  //image(img,eyelX-25, eyelY-25,100,50);
//for Right Eye
 
//fill(0,0,255);
  image(img2,eyerX-54, eyerY-45,220,80);
}

