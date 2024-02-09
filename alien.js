// Fonction d'initialisation de l'alien
function Alien() {
	this.x = rand(0,350);      // apparition � une abscisse x al�atoire
	this.y = 0;
	this.width = 60;
	this.height = 80;
	this.speedy = rand(2,12);
	this.speedx = rand(-10-currentPoint/4,10+currentPoint/4);    // vitesse laterale al�atoire
	this.print = function() {
		canvas.drawImage(ALIEN_IMG, this.x, this.y);
	};
	// Ici on s'occupe de modifi� la position du Vaisseau
	this.move = function(nx, ny) {
		this.x = nx;
		this.y = ny;
	};
	
	
	
	// Ici on s'occupe de la position de notre souris
	this.go = function() {
		if(this.x<0 || this.x >350)               // si on arrive au bord on change de sens
			this.speedx=-this.speedx;
		this.move(this.x+this.speedx, this.y + this.speedy);
		this.print();
	};
}