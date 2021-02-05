class Rock
{
	constructor(x,y,r)
	{
 
    var options={

		isStatic:false,    
		density:1.2,
		friction:1,
		restitution:0

	}
      

		this.x=x;
		this.y=y;
		this.radius=r;
		
		this.image=loadImage("images/stone.png");
		this.bottomBody=Bodies.circle(this.x, this.y, this.radius/2,options)
		World.add(world, this.bottomBody);

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			ellipse(RADIUS);
			image(this.image, 0,0,this.radius/2, this.radius/2);
			pop()
			
	}

}

