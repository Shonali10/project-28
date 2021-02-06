class stone{
	constructor(x,y,r)
	{
		var options={
			// isStatic:true,
			restitution :0.1,
            friction :1,
            density: 1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("images/stone.png")


		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var pos=this.body.position;	
		push()
		translate(pos.x, pos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		imageMode(CENTER);
        // image.scale(0.1)
		ellipseMode(CENTER);
		image(this.image,0,0,this.r*2, this.r*2)
      
		pop()
 }
}