
// Ici on s'occupe du Vaisseau
var vaisseau = new Vaisseau();
vaisseau.afficher();

// Ici on s'occupe des aliens
var listeAliens = [];

// Ici on s'occupe des tirs
var boulet = new Tir(0, 0);
boulet.afficher();
var listeBoulets = [];

var dateDebut = new Date();
var tempsDebut = dateDebut.getTime();
var tempsActuel;

function afficherBoulet() {
    canvas.drawImage(IMG_TIR, posx, posy);
}

// Ici on s'occupe de l'affichage du bouton pause
function afficherBoutonPause() {
    canvas.drawImage(BOUTON_PAUSE, 368, 0);
}

// Ici on s'occupe du score
function ajouterPoint(point) {	
    score += point;
    document.getElementById('score').innerHTML = 'Points: ' + score;	
}

// Ici on gère les événements
document.addEventListener('mouseup', function(e) {
    if (e.clientX >= 368 && e.clientX <= 400 && e.clientY <= 32) {
        if (!JEU_EN_PAUSE) {
            JEU_EN_PAUSE = true;
            document.getElementById('etat').innerHTML = 'JEU EN PAUSE';
        } else {
            JEU_EN_PAUSE = false;
            document.getElementById('etat').innerHTML = '';
        }
    } else if (e.clientX <= 450 && e.clientX >= 0) {
        tirer(vaisseau.x, vaisseau.y);
    }
}, false);

function tirer(nx, ny) {
    var nouveauBoulet = new Tir(nx + 15, ny);
    listeBoulets.push(nouveauBoulet);
}

function detectionCollisionVaisseau() {
    for (var i = 0; i < listeAliens.length; i++) {
        var alien = listeAliens[i];
        if (vaisseau.x <= alien.x + alien.largeur / 2 &&
            vaisseau.x + vaisseau.largeur >= alien.x + alien.largeur / 2 &&
            vaisseau.y <= alien.y + alien.hauteur / 2 &&
            vaisseau.y + vaisseau.hauteur >= alien.y + alien.hauteur / 2) {
                listeAliens.splice(i, 1);
                alert("Vous êtes mort\nVotre score : " + score);
                score = 0;	
        }
    }
}

function detectionCollisionTir() {
    for (var i = 0; i < listeAliens.length; i++) {
        for (var j = 0; j < listeBoulets.length; j++) {
            if (listeAliens[i].x <= listeBoulets[j].x + listeBoulets[j].largeur / 2 &&
                listeAliens[i].x + listeAliens[i].largeur >= listeBoulets[j].x + listeBoulets[j].largeur / 2 &&
                listeAliens[i].y <= listeBoulets[j].y + listeBoulets[j].hauteur / 2 &&
                listeAliens[i].y + listeAliens[i].hauteur >= listeBoulets[j].y + listeBoulets[j].hauteur / 2) {
                    listeAliens.splice(i, 1);
                    listeBoulets.splice(j, 1);
                    ajouterPoint(1);
            }
        }
    }
}

// Fonction principale du jeu
function demarrerJeu() {
    if (!JEU_EN_PAUSE) {
        // Efface l'écran
        canvas.fillStyle = 'white';
        canvas.fillRect(0, 0, 400, 600);
        canvas.drawImage(IMG_FOND, -1, -1);
        afficherBoutonPause();
        dateDebut = new Date();
        tempsActuel = dateDebut.getTime();
        
        if (tempsActuel - tempsDebut > INTERVALLE_APPARITION_ALIEN - score * 40) {
            listeAliens.push(new Alien());
            listeAliens.push(new Alien());
            if (score >= 10) {
                listeAliens.push(new Alien());
            }
            if (score >= 20) {
                listeAliens.push(new Alien());
            }
            if (score >= 30) {
                listeAliens.push(new Alien());
            }
            tempsDebut = tempsActuel;
        }
        
        vaisseau.deplacer();
        
        for (var i = 0; i < listeAliens.length; i++) {
            listeAliens[i].deplacer();
        }
        
        for (var i = 0; i < listeBoulets.length; i++) {
            listeBoulets[i].deplacer();
        }
        
        detectionCollisionTir();
        detectionCollisionVaisseau();
    }
}

setInterval(demarrerJeu, INTERVALLE_BOUCLE_JEU);
