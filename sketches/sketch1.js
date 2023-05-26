function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Show Mouse coordinates
  textSize(20)
  strokeWeight(1)
  fill(0,0,0);
  text('Mouse X:  '+ mouseX,0,20);
  text('Mouse Y:  '+ mouseY,0,40);
  
   fill(225,198,153); 
  ellipse (200,200,200,300);
 fill('white');
  ellipse (150,150,50,50);
  ellipse (250,150,50,50);
fill(0,0,0,180)
  ellipse (150,150,20,50);
  ellipse (250,150,20,50);
  fill('black')
  rect(190,202,24,10)
  fill('brown')
  rect(130,100,50,10)
  rect(220,100,50,10)
  
  strokeWeight(4)
  line(200,165,200,180)
  
  
}






