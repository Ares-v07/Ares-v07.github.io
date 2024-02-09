//fonction d'initialistation du tir

function Tir(x,y) {
	this.x = x;
	this.y = y;
	this.width = 41;
	this.height = 54;
	this.speed = 0;
	this.print = function() {
		canvas.drawImage(TIR_IMG, this.x, this.y);
	};
	// Ici on s'occupe de modifi� la position du Vaisseau
	this.move = function(nx, ny) {
		this.x = nx;
		this.y = ny;
	};
	
	var APESANTEUR = 0;
	
	// Ici on s'occupe de la position de notre souris
	this.go = function() {
		
		this.move(this.x, this.y - 7);
		
		this.speed -= APESANTEUR;
		this.print();
	};
}