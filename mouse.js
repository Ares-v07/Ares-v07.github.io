// Fichier de gestion de la souris

var Mouse = {
	x: 0,
	y: 0
};

// Ici on v�rifie si la souris bouge et si oui on elle va
document.addEventListener('mousemove', function(e) {
	Mouse.x = e.clientX;
	Mouse.y = e.clientY;
}, false);


