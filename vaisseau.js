// Ficher principal du Vaisseau

// Fonction d'initialisation du Vaisseau
function Vaisseau() {
	this.x = 195;
	this.y = 540;
	this.width = 41;
	this.height = 54;
	this.speed = 0;
	this.print = function() {
		canvas.drawImage(VAISSEAU_IMG, this.x, this.y);
	};
	// Ici on s'occupe de modifi� la position du Vaisseau
	this.move = function(nx, ny) {
		this.x = nx;
		this.y = ny;
	};
	
	
	// Ici on s'occupe de la position de notre souris
	this.go = function() {
		if(Mouse.x >= 370)
			Mouse.x = 370;
		else if(Mouse.x <= 30) {
			Mouse.x = 30;
		}
		this.move(Mouse.x - (this.width/2), this.y - this.speed);
		this.print();
	};
}
