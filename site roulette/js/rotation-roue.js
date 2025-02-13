
// Définissez les bornes inférieure et supérieure de votre intervalle
var borneInferieure = -2;
var borneSuperieure = 348.28;

// Définissez l'incrément en fonction du multiple désiré
var increment = 9.73;

// Calculez le nombre maximum de possibilités compte tenu de l'incrément
var nombrePossibilites = Math.floor((borneSuperieure - borneInferieure) / increment) + 1;

// Générez un nombre aléatoire entier dans l'intervalle [0, nombrePossibilites - 1]
var nombreAleatoireEntier = Math.floor(Math.random() * nombrePossibilites);

// Calculez le nombre final avec deux chiffres après la virgule
var nombreFinal = (nombreAleatoireEntier * increment + borneInferieure).toFixed(2);

// console.log(Number(nombreFinal)); // Convertir en nombre pour s'assurer que le format est correct



let n = Number(nombreFinal);


document.querySelector(".roue-centre").style.transform = "rotate(" + n + "deg)";
document.querySelector(".structure-roue").style.transform = "rotate(" + n + "deg)";

let acceleration = 0.08;
let deceleration = 0.005; // Nouvelle variable pour la décélération
let maxSpeed = 5;
let speed = 0;

let accelerating = false; // Drapeau pour indiquer si on est en train d'accélérer
let accelerationTime = 10; // Temps total d'accélération en millisecondes

function boucle() {
    let increment = speed;

    document.querySelector(".roue-centre").style.transform = "rotate(" + n + "deg)";
    document.querySelector(".structure-roue").style.transform = "rotate(" + n + "deg)";
    n += increment;

    if (accelerating && speed < maxSpeed) {
        // Ajuster la logique d'accélération en fonction de la différence entre la vitesse actuelle et la vitesse maximale
        speed += acceleration * (maxSpeed - speed);
    }

    if (speed > 0) {
        setTimeout(boucle, calculateAccelerationTimeout());
    }
}

function decelerate() {
    // Décélération progressive
    if (speed > 0) {
        speed -= deceleration; // Utiliser la nouvelle variable pour la décélération

        // Assurer que la vitesse ne devient pas négative
        speed = Math.max(speed, 0);

        setTimeout(() => {
            decelerate();
        }, calculateDecelerationTimeout());
    }
}

function calculateAccelerationTimeout() {
    // Vous pouvez ajuster le temps d'accélération ici
    const steps = Math.ceil(accelerationTime / 10); // Nombre d'étapes d'accélération
    return Math.floor(accelerationTime / steps); // Temps entre chaque étape
}

function calculateDecelerationTimeout() {
    // Vous pouvez ajuster le temps de décélération ici
    const decelerationTime = 10; // par exemple, 1 seconde
    const steps = Math.ceil(decelerationTime / 10); // Nombre d'étapes de décélération
    return Math.floor(decelerationTime / steps); // Temps entre chaque étape
}

function aleatoire(){
    // Définissez les bornes inférieure et supérieure de votre intervalle
    var borneInferieure = -2;
    var borneSuperieure = 348.28;

    // Définissez l'incrément en fonction du multiple désiré
    var increment = 9.73;

    // Calculez le nombre maximum de possibilités compte tenu de l'incrément
    var nombrePossibilites = Math.floor((borneSuperieure - borneInferieure) / increment) + 1;

    // Générez un nombre aléatoire entier dans l'intervalle [0, nombrePossibilites - 1]
    var nombreAleatoireEntier = Math.floor(Math.random() * nombrePossibilites);

    // Calculez le nombre final avec deux chiffres après la virgule
    var nombreFinal = (nombreAleatoireEntier * increment + borneInferieure).toFixed(2);

    // console.log(Number(nombreFinal)); // Convertir en nombre pour s'assurer que le format est correct



    n = Number(nombreFinal);
    document.querySelector(".roue-centre").style.transform = "rotate(" + n + "deg)";
    document.querySelector(".structure-roue").style.transform = "rotate(" + n + "deg)";
}




document.querySelector(".btn-valider-toutes-mises").addEventListener("click", () => {
    if (document.querySelector(".liste-mises").childElementCount!=0){
        aleatoire();
        setTimeout(() => {
            accelerating = true;
            boucle(); // Commencer l'accélération
            setTimeout(() => {
                accelerating = false;
                decelerate(); // Commencer la décélération
            }, 7000);
        }, 6*1000);
    }
    
})












