function setup() {
	createCanvas(windowWidth, windowHeight);

}

function draw() {

	background(255);
	noFill();
	stroke(30,255);
	circle(width / 2, height / 2, height / 2 );
	circle(width / 2 - height /3/4, height /2 - height/18, height/12 );
	circle(width / 2 + height /3/4, height /2 - height/18, height/12 );
	line(850, 500, 700, 500);
	ellipse(760, 670, 210, 242);
	ellipse(920, 580, 170, 52);
	ellipse(600, 580, 170, 52);
	}
