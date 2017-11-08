
var song;
var amp;
var button;

var volhistory = [];

// bottone
//function toggleSong() {
//  if (song.isPlaying()) {
//    song.pause();
//  } else {
//    song.play();
//  }
// }

function preload() {
  song = loadSound('assets/fearless.mp3');
  img = loadImage('./assets/magritte.png');
  img2 = loadImage('./assets/moon.png');
  img3 = loadImage('./assets/hat.png');
  img4 = loadImage('./assets/man.png');
  img5 = loadImage('./assets/ball.png');
  img6 = loadImage('./assets/pipe.png');
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
//  button = createButton('PLAY/STOP MUSIC');
//  button.mousePressed(toggleSong);
//  song.play();
  amp = new p5.Amplitude();
  
}

function draw() {
  
  push();
  fill(255);
  stroke(255);
  textSize(13);
  text('MOVE the cursor and CLICK to interact',windowWidth/3.8,windowHeight/11);
  pop();
  
  b=frameCount % 512;
  if(mouseX <= width/2 || b<=256) {
    background(71, 102, 130, b);
  }else{
    background(151,83,72, b);
  }
  
  
  if(mouseIsPressed){
    song.pause();
    } else {
    if(song.isPlaying() == false){
    song.play();
    //mySong.loop();
    }
  }

  
  //background(71, 102, 130);
  line(width*2,height,width*2,height);
  
  var vol = amp.getLevel();
  volhistory.push(vol);
  stroke(255);
  noFill();
  
  //objects
  
//moon
  var co = 3;
  var si = 6;
  var cosine = si * width / (si * 10) * cos(frameCount % 360 * co - 90);
  var sine = co * width / (co * 30) * sin(frameCount % 360 * si - 22.5);
  var l = sqrt(width * height);

  image(img2,
    cosine + width / 2 - width / 12,
    sine + height / 6 - height / 18,
    0.15 * sqrt(width * height), 0.15 * sqrt(width * height));
    
// hat
  var cosine2 = si * width / (si * 10) * cos(frameCount % 360 * co - 40);
  var sine2 = co * width / (co * 30) * sin(frameCount % 360 * si - 2.5);
  var l2 = sqrt(width * height);

  image(img3,
    cosine2 + width / 2 - width / 3,
    sine2 + height / 3 - height / 20,
    0.15 * sqrt(width * height), 0.1 * sqrt(width * height));

// man
  var cosine3 = si * width / (si * 10) * cos(frameCount % 360 * co - 60);
  var sine3 = co * width / (co * 30) * sin(frameCount % 360 * si- 2.5);
  var l3 = sqrt(width * height);

  image(img4,
    cosine3 + width / 5 - width / 10,
    sine3 + height / 1.5 - height / 19,
    0.15 * sqrt(width * height), 0.25 * sqrt(width * height));
    
// ball
  var cosine3 = si * width / (si * 10) * cos(frameCount % 360 * co - 40);
  var sine3 = co * width / (co * 60) * sin(frameCount % 360 * si - 2.5);
  var l3 = sqrt(width * height);

  image(img5,
    cosine3 + width / 1.1 - width / 4,
    sine3 + height / 3 - height / 20,
    0.15 * sqrt(width * height), 0.15 * sqrt(width * height));
    
// pipe
  var cosine3 = si * width / (si * 30) * cos(frameCount % 360 * co - 80);
  var sine3 = co * width / (co * 60) * sin(frameCount % 360 * si - 3);
  var l3 = sqrt(width * height);

  image(img6,
    cosine3 + width / 1.2 - width / 9,
    sine3 + height / 1.2 - height / 11,
    0.15 * sqrt(width * height), 0.15 * sqrt(width * height));
    
    

  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < 360; i++) {
    var r = map(volhistory[i], 0, 2, 100, 700);
    var x = r * cos(i);
    var y = r * sin(i);
    vertex(x, y);
  }
  endShape();

  if (volhistory.length > 360) {
    volhistory.splice(0, 1);
  }


  image(img,-windowWidth/8,-windowWidth/8,windowWidth/4,windowWidth/4);
  pop();
  noFill();
  stroke(255);
  strokeWeight(1);
  ellipse(0,0,windowWidth/4);
  
  var x = random() * width;
  var y = random() * height;
  var d = random() * 10;

  ellipse(0,0,windowWidth/4);
  
  
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
