class Dustbin {
	constructor(x,y) {
		this.x = x;
		this.y = y;
		this.dustbinWidth = 200;
		this.dustbinHeight = 260;
		this.wallThickness = 20;

		this.image = loadImage("dustbin.png");
		this.bottomBody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:true})
		World.add(world, this.bottomBody)
		World.add(world, this.leftWallBody)
		World.add(world, this.rightWallBody);
	}
	display() {
			var posBottom = this.bottomBody.position;

			push()
			translate(posBottom.x, posBottom.y+10);
			strokeWeight(4);
			angleMode(RADIANS)
			fill(255)
			imageMode(CENTER);
			image(this.image, 0, -135, 247, 266);
			pop()
			
	}

}