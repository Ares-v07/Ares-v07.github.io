// Recuperation de l'�lement canvas et redimensionnement
var game = document.getElementById('game');
game.width = 400;
game.height = 600;
// L'objet canvas
var canvas = game.getContext('2d');
// Les images
var VAISSEAU_IMG = new Image();
var ALIEN_IMG = new Image();
var BUTTON_PAUSE = new Image();
var TIR_IMG = new Image();
var BACK = new Image();
VAISSEAU_IMG.src = "img/vaisseau.png";
BUTTON_PAUSE.src = "img/pause.png";
TIR_IMG.src = "img/boulet.png";
ALIEN_IMG.src="img/monstre.png";
BACK.src = "img/ciel+etoile.png"
// Les Constantes


var GAME_PAUSE = false;

var yMax = 0;
var yCurrent = 0;
var currentPoint = 0;