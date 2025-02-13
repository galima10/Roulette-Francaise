function depart(min, max) {
    // Générer un nombre aléatoire entre min/10 et max/10 (inclus)
    const randomRounded = Math.floor(Math.random() * ((max / 10 + 1) - (min / 10))) + min / 10;

    // Multiplier par 10 pour obtenir un nombre rond
    return Math.round(randomRounded) * 10;
}

// Utiliser la fonction avec les valeurs minimale et maximale souhaitées
const unitedepart = depart(100, 300);

function objectif(min, max) {
    // Générer un nombre aléatoire entre min et max (inclus)
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;

    // Garder uniquement le chiffre des milliers
    const roundedValue = Math.floor(randomValue / 1000) * 1000;

    return roundedValue;
}

// Utiliser la fonction avec les valeurs minimale et maximale souhaitées
const uniteobjectif = objectif(4000, 7000);

document.querySelector("#nbr-objectif").textContent=uniteobjectif;



let nbrjetontotal = unitedepart;
let nbrjeton = nbrjetontotal;
let limite = null;




let actionEffectuee = false; // Indicateur pour suivre si l'action a déjà été effectuée

// Fonction à appeler lorsque la condition est satisfaite
function faireAction() {
    // Ajoutez ici le code de l'action que vous souhaitez effectuer
    actionEffectuee = true; // Mettez à jour l'indicateur
}



// Fonction d'observation
function observerVariable() {

    // Condition d'observation
    if (nbrjetontotal > uniteobjectif && !actionEffectuee) {
        // Déclencher un événement personnalisé
        document.dispatchEvent(new Event('variableDepassee'));
    }

    // Demander une nouvelle frame d'animation
    requestAnimationFrame(observerVariable);
}

// Écouter l'événement personnalisé
document.addEventListener('variableDepassee', faireAction);


observerVariable();



document.querySelector(".instructions-croupier-1").textContent="Faites vos jeux ! ";

document.querySelector(".nombre-unite").textContent=nbrjeton;

let widthqte = 0;

const nbrqte = document.querySelector('#nbr-quantite');

nbrqte.value=widthqte;

let splittargjeton = null;

function numerojeton(){
    splittargjeton = targetjeton.split('');
    var startIndex = splittargjeton.indexOf('-');
    splittargjeton.splice(startIndex);
    splittargjeton = splittargjeton.join('');



    if (splittargjeton!="jeton"){
        if (splittargjeton=="plein"){
            limite=100;
        } else if (splittargjeton=="chev"){
            limite=200;
        } else if (splittargjeton=="transP"){
            limite=300;
        } else if (splittargjeton=="carre"){
            limite=400;
        } else if (splittargjeton=="sixain"){
            limite=500;
        } else if (splittargjeton=="couleur"){
            limite=100;
        } else if (splittargjeton=="deuxCol"){
            limite=50;
        } else if (splittargjeton=="colSimple"){
            limite=200;
        } else if (splittargjeton=="deuxDouz"){
            limite=50;
        } else if (splittargjeton=="douzSimple"){
            limite=200;
        }
    } else {
        limite=100;
    }
    
}

const titre = document.querySelector(".titre-choix-mises");
const quotagains = document.querySelector(".quota-gains");
let targetjeton = null;
document.querySelectorAll(".targetjeton").forEach(jeton=>{
    jeton.addEventListener("click", ()=>{
        if (jeton.classList.contains("targetjeton")){
            document.querySelectorAll(".jeton").forEach(otherJeton => {
                otherJeton.classList.remove("jeton-clic");
            });
            targetjeton = jeton.id;
            jeton.classList.add("jeton-clic");

    
            numerojeton();
    
            document.querySelector(".ens-choix-paris").classList.add("none");
            document.querySelector(".ens-choix-mises").classList.remove("none");

            if (splittargjeton=="plein"){
                titre.textContent="Mise en plein";
                quotagains.textContent="Gains : 36 fois la mise";
            } else if (splittargjeton=="chev"){
                titre.textContent="Mise à cheval";
                quotagains.textContent="Gains : 17 fois la mise";
            } else if (splittargjeton=="transP"){
                titre.textContent="Mise en transversale pleine"
                quotagains.textContent="Gains : 11 fois la mise";
            } else if (splittargjeton=="carre"){
                titre.textContent="Mise en carré"
                quotagains.textContent="Gains : 8 fois la mise";
            } else if (splittargjeton=="sixain"){
                titre.textContent="Mise en sixain"
                quotagains.textContent="Gains : 5 fois la mise";
            } else if (splittargjeton=="couleur"){
                titre.textContent="Mise sur une couleur"
                quotagains.textContent="Gains : 1 fois la mise";
            } else if (splittargjeton=="deuxCol"){
                titre.textContent="Mise sur deux colonnes"
                quotagains.textContent="Gains : 0,5 fois la mise";
            } else if (splittargjeton=="colSimple"){
                titre.textContent="Mise sur une colonne"
                quotagains.textContent="Gains : 2 fois la mise";
            } else if (splittargjeton=="deuxDouz"){
                titre.textContent="Mise sur deux douzaines"
                quotagains.textContent="Gains : 0,5 fois la mise";
            } else if (splittargjeton=="douzSimple"){
                titre.textContent="Mise sur une douzaine"
                quotagains.textContent="Gains : 2 fois la mise";
            }
            if (targetjeton=="jeton-pair"){
                titre.textContent="Mise sur les pairs"
                quotagains.textContent="Gains : 1 fois la mise";
            } else if (targetjeton=="jeton-impair"){
                titre.textContent="Mise sur les impairs"
                quotagains.textContent="Gains : 1 fois la mise";
            } else if (targetjeton=="jeton-manque"){
                titre.textContent="Mise sur manque"
                quotagains.textContent="Gains : 1 fois la mise";
            } else if (targetjeton=="jeton-passe"){
                titre.textContent="Mise sur passe"
                quotagains.textContent="Gains : 1 fois la mise";
            }
        }
        
        
    });
});










const draggableDiv = document.getElementById('draggableDiv');
let isDragging = false;
let initialX;

draggableDiv.addEventListener('mousedown', (e) => {
    const rect = draggableDiv.getBoundingClientRect();
    const parentRect = draggableDiv.closest('.barre-quantite').getBoundingClientRect();

    isDragging = true;
    initialX = e.clientX - rect.left + parentRect.left; // Ajuster l'offset initial pour tenir compte du bord gauche de l'élément parent

});


document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const newX = e.clientX - initialX;
    const parentRect = draggableDiv.closest('.barre-quantite').getBoundingClientRect();
    const maxX = parentRect.width - draggableDiv.clientWidth;

    // Calculez le pourcentage de la nouvelle position par rapport à la largeur du parent
    const percentageX = (newX / maxX) * 100;

    // Utilisez Math.min et Math.max pour s'assurer que le pourcentage reste dans la plage [0, 100 - (width en pourcentage de la div draggable)]
    const clampedPercentageX = Math.min(100 - (draggableDiv.clientWidth / parentRect.width * 100), Math.max(0, percentageX));

    widthqte=Math.round(clampedPercentageX);
    // Appliquez la nouvelle position en pourcentage
    draggableDiv.style.left = widthqte + '%';

    document.querySelector("#flux-quantite").style.width=widthqte+5 + "%";
    if (nbrjeton>limite){
        nbrqte.value=parseInt((Math.round(widthqte*100/90)*limite)/100);
    } else if (nbrjeton<=limite){
        nbrqte.value=parseInt((Math.round(widthqte*100/90)*nbrjeton)/100);
    }
    
    
});

document.addEventListener('mouseup', () => {
    isDragging = false;

});

document.querySelector("#btn-moins").addEventListener("click", ()=>{
    if (widthqte>0){
        widthqte--;
        document.querySelector("#flux-quantite").style.width= widthqte+5+ "%";
        draggableDiv.style.left = widthqte + '%';

        if (nbrjeton>limite){
            nbrqte.value=parseInt((Math.round(widthqte*100/90)*limite)/100);
        } else if (nbrjeton<=limite){
            nbrqte.value=parseInt((Math.round(widthqte*100/90)*nbrjeton)/100);
        }
    }
})
document.querySelector("#btn-plus").addEventListener("click", ()=>{
    if (widthqte<90){
        widthqte++;
        document.querySelector("#flux-quantite").style.width=widthqte+5 + "%";
        draggableDiv.style.left = widthqte + '%';

        if (nbrjeton>limite){
            nbrqte.value=parseInt((Math.round(widthqte*100/90)*limite)/100);
        } else if (nbrjeton<=limite){
            nbrqte.value=parseInt((Math.round(widthqte*100/90)*nbrjeton)/100);
        }
    }
})

nbrqte.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      var texteinput = event.target.value;
      widthqte=Math.round((texteinput*90)/300);
      document.querySelector("#flux-quantite").style.width=widthqte+5 + "%";
        draggableDiv.style.left = widthqte + '%';
  }
  });

  
nbrqte.addEventListener('input', function(event) {
    var texteinput = event.target.value;
    

    if (nbrjeton>limite){
        if (texteinput>limite){
            nbrqte.value=limite;
        }
    } else if (nbrjeton<=limite){
        if (texteinput>nbrjeton){
            nbrqte.value=nbrjeton;
        }
    }
    
});


document.querySelector("#retour-mises").addEventListener("click", ()=>{
    widthqte = 0;

    nbrqte.value=widthqte;
    document.querySelector("#flux-quantite").style.width=widthqte+5 + "%";
    draggableDiv.style.left = widthqte + '%';

    document.querySelectorAll(".jeton").forEach(otherJeton => {
        otherJeton.classList.remove("jeton-clic");
    });
    document.querySelectorAll(".targetjeton").forEach(jetons=>{
        jetons.classList.add("op0");
    });
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    });

    document.querySelectorAll(".choix").forEach(cases=>{
        cases.classList.add("case-op0-5");
    });

    let id = null;
    document.querySelectorAll(".choix-niveau").forEach(element=>{
        if (!element.classList.contains("none")){
            id = element.id;
        }
    });
    if (id=="ch-inte-niv-2"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
    }
    if (id=="ch-exte-niv-2"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
    }
    if (id=="ch-col-niv-3"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
    }
    if (id=="ch-douz-niv-3"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
    }
    
    
    document.querySelector(".ens-choix-paris").classList.remove("none");
    document.querySelector(".ens-choix-mises").classList.add("none");
})


let limitemise = 4;
let limitemiseexte = 1;
let nbrmise = 0;
let nbrmiseexte = 0;
let nbrmiseinte = 0;

document.querySelector("#lim-nbr-mise").textContent=4;
document.querySelector("#lim-mise-exte").textContent=limitemiseexte;

const listemise = document.querySelector(".liste-mises");

document.querySelector("#btn-valider-mises").addEventListener("click", ()=>{
    if (nbrmise<3){
        
        if (nbrqte.value!=0){
            nbrmise++;
            const targjeton = document.querySelector(`#${targetjeton}`);
            const mise = document.createElement("div");
            mise.classList.add("mise");

            

            if (nbrqte.value<=50){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#ff9710 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#ff9710 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#ff9710 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#ff9710 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#ff9710 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#ff9710 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#f19012");
            } else if (nbrqte.value>50 && nbrqte.value<=100){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#d7d713 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#d7d713 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#d7d713 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#d7d713 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#d7d713 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#d7d713 330deg 360deg)";



                mise.style.setProperty("--mise-special-color", "#c5c519");
            } else if (nbrqte.value>100 && nbrqte.value<=200){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#23d738 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#23d738 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#23d738 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#23d738 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#23d738 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#23d738 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#21c134");
            } else if (nbrqte.value>200 && nbrqte.value<=300){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#1d5ee1 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#1d5ee1 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#1d5ee1 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#1d5ee1 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#1d5ee1 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#1d5ee1 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#1b58d2");
            } else if (nbrqte.value>400){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#b43ef4 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#b43ef4 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#b43ef4 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#b43ef4 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#b43ef4 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#b43ef4 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#a437de");
            }
            mise.setAttribute("data-content", nbrqte.value);
            targjeton.appendChild(mise);



    
            targjeton.classList.remove("targetjeton");
            nbrjeton = nbrjeton - parseInt(nbrqte.value);
            document.querySelector(".nombre-unite").textContent=nbrjeton;

            document.querySelector(".addi-soustra").textContent="- "+nbrqte.value;
            adsous('moins')

            if (splittargjeton=='plein' || splittargjeton=='chev' || splittargjeton=='transP' || splittargjeton=='carre' || splittargjeton=='sixain'){
                nbrmiseinte++;
            } else {
                nbrmiseexte++;
            }
        }
        if (nbrmiseexte==limitemiseexte){
            document.querySelector(".desactiver-exte").classList.remove("none");
        }
        if (nbrmiseinte==3){
            document.querySelector(".desactiver-inte").classList.remove("none");
        }
    
        
    
    

    
        document.querySelectorAll(".jeton").forEach(otherJeton => {
            otherJeton.classList.remove("jeton-clic");
        });
        document.querySelectorAll(".targetjeton").forEach(jetons=>{
            jetons.classList.add("op0");
        });
        document.querySelectorAll(".texte-paris").forEach(element=>{
            element.style.background="";
        });
    
        document.querySelectorAll(".choix").forEach(cases=>{
            cases.classList.add("case-op0-5");
        });
    
        let id = null;
        document.querySelectorAll(".choix-niveau").forEach(element=>{
            if (!element.classList.contains("none")){
                id = element.id;
            }
        });

        document.querySelectorAll(".choix-niveau").forEach(choix=>{
            choix.classList.add("none");
        });
        document.querySelector("#ch-niv-1").classList.remove("none");
        document.querySelectorAll(".choix").forEach(cases=>{
            cases.classList.remove("case-op0-5");
        });

        document.querySelector("#precedent-paris").classList.add("none");

        document.querySelector(".ens-choix-paris").classList.remove("none");
        document.querySelector(".info-mises").classList.remove("none");
        document.querySelector(".ens-choix-mises").classList.add("none");

        if (nbrjeton==0){
            document.querySelectorAll(".choix-niveau").forEach(choix=>{
                choix.classList.add("none");
            });
            document.querySelector("#ch-niv-1").classList.remove("none");
            document.querySelectorAll(".choix").forEach(cases=>{
                cases.classList.remove("case-op0-5");
            });
            document.querySelector("#ch-niv-1").classList.add("none");
            document.querySelector(".instructions-croupier-2").textContent="Vous n'avez plus de jetons :'(";
            document.querySelector("#precedent-paris").classList.add("none");
            document.querySelector(".info-mises").classList.remove("none");
        }
    }

    else {
        if (nbrqte.value!=0){
            nbrmise++;
            const targjeton = document.querySelector(`#${targetjeton}`);
            const mise = document.createElement("div");
            mise.classList.add("mise");
            mise.textContent=nbrqte.value;
            targjeton.appendChild(mise);

            if (nbrqte.value<=50){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#ff9710 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#ff9710 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#ff9710 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#ff9710 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#ff9710 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#ff9710 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#f19012");
            } else if (nbrqte.value>50 && nbrqte.value<=100){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#d7d713 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#d7d713 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#d7d713 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#d7d713 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#d7d713 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#d7d713 330deg 360deg)";



                mise.style.setProperty("--mise-special-color", "#c5c519");
            } else if (nbrqte.value>100 && nbrqte.value<=200){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#23d738 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#23d738 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#23d738 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#23d738 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#23d738 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#23d738 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#21c134");
            } else if (nbrqte.value>200 && nbrqte.value<=300){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#1d5ee1 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#1d5ee1 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#1d5ee1 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#1d5ee1 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#1d5ee1 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#1d5ee1 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#1b58d2");
            } else if (nbrqte.value>400){
                mise.style.background = "conic-gradient(" +
                "#edf5f6 0deg 30deg," +
                "#b43ef4 30deg 60deg," +
                "#edf5f6 60deg 90deg," +
                "#b43ef4 90deg 120deg," +
                "#edf5f6 120deg 150deg," +
                "#b43ef4 150deg 180deg," +
                "#edf5f6 180deg 210deg," +
                "#b43ef4 210deg 240deg," +
                "#edf5f6 240deg 270deg," +
                "#b43ef4 270deg 300deg," +
                "#edf5f6 300deg 330deg," +
                "#b43ef4 330deg 360deg)";

                mise.style.setProperty("--mise-special-color", "#a437de");
            }
            mise.setAttribute("data-content", nbrqte.value);
            targjeton.appendChild(mise);
    
            targjeton.classList.remove("targetjeton");
            nbrjeton = nbrjeton - parseInt(nbrqte.value);
            
            document.querySelector(".nombre-unite").textContent=nbrjeton;

            document.querySelector(".addi-soustra").textContent="- "+nbrqte.value;
            adsous('moins')
        }
    
        document.querySelectorAll(".jeton").forEach(otherJeton => {
            otherJeton.classList.remove("jeton-clic");
        });
        document.querySelectorAll(".targetjeton").forEach(jetons=>{
            jetons.classList.add("op0");
        });
        document.querySelectorAll(".texte-paris").forEach(element=>{
            element.style.background="";
        });
    
        document.querySelectorAll(".choix").forEach(cases=>{
            cases.classList.add("case-op0-5");
        });
        document.querySelector(".ens-choix-paris").classList.remove("none");
        document.querySelector(".ens-choix-mises").classList.add("none");
        document.querySelectorAll(".choix-niveau").forEach(choix=>{
            choix.classList.add("none");
        });
        document.querySelectorAll(".choix").forEach(cases=>{
            cases.classList.remove("case-op0-5");
        });
        document.querySelector("#ch-niv-1").classList.add("none");
        
        document.querySelector("#precedent-paris").classList.add("none");
        document.querySelector(".info-mises").classList.remove("none");

        document.querySelector(".instructions-croupier-2").textContent="Nombre maximale de mises :'(";
    }

    if (nbrqte.value!=0){
    let targetjetonsplit = targetjeton.split('');
    numero = [];
    for (let i = 0; i < targetjetonsplit.length; i++) {
        // Vérifiez si le caractère est un chiffre
        if (!isNaN(targetjetonsplit[i]) && isNaN(targetjetonsplit[i+1]) ) {
            // Ajoutez le chiffre au tableau "numero"
            numero.push(Number(targetjetonsplit[i]));
        }
        else if (!isNaN(targetjetonsplit[i]) && !isNaN(targetjetonsplit[i+1])) {
            // Ajoutez le chiffre au tableau "numero"
            numero.push(Number(targetjetonsplit[i] + targetjetonsplit[i+1]));
            i=i+1;
        }
        
    }

    let typemise = null;
    let determinant = null;
    let resultatmise = null;
    let qogain = null;
    if (splittargjeton=='plein'){
        typemise='en plein';
        determinant='le numéro ';
        resultatmise = "Mise " + typemise + " sur  " + determinant + numero;
        qogain="36:1";
    } else if (splittargjeton=='chev'){
        typemise='à cheval';
        determinant='les numéros ';
        resultatmise = "Mise " + typemise + " sur  " + determinant + numero;
        qogain="17:1";
    } else if (splittargjeton=='transP'){
        typemise='en tranversale pleine';
        determinant='les numéros ';
        resultatmise = "Mise " + typemise + " sur  " + determinant + numero;
        qogain="11:1";
    } else if (splittargjeton=='carre'){
        typemise='en carré';
        determinant='les numéros ';
        resultatmise = "Mise " + typemise + " sur  " + determinant + numero;
        qogain="8:1";
    } else if (splittargjeton=='sixain'){
        typemise='en sixain';
        determinant='les numéros ';
        resultatmise = "Mise " + typemise + " sur  " + determinant + numero;
        qogain="5:1";
    }
    
    if (targetjeton=='couleur-rouge'){
        resultatmise = "Mise sur les numéros rouges";
        qogain="1:1";
    } else if (targetjeton=='couleur-noire'){
        resultatmise = "Mise sur les numéros noirs";
        qogain="1:1";
    } else if (targetjeton=='jeton-pair'){
        resultatmise = "Mise sur les numéros pairs";
        qogain="1:1";
    } else if (targetjeton=='jeton-impair'){
        resultatmise = "Mise sur les numéros impairs";
        qogain="1:1";
    } else if (targetjeton=='jeton-manque'){
        resultatmise = "Mise sur manque";
        qogain="1:1";
    } else if (targetjeton=='jeton-passe'){
        resultatmise = "Mise sur passe";
        qogain="1:1";
    } else if (targetjeton=='colSimple-1'){
        resultatmise = "Mise sur la colonne 1";
        qogain="2:1";
    } else if (targetjeton=='colSimple-2'){
        resultatmise = "Mise sur la colonne 2";
        qogain="2:1";
    } else if (targetjeton=='colSimple-3'){
        resultatmise = "Mise sur la colonne 3";
        qogain="2:1";
    } else if (targetjeton=='deuxCol-1-2'){
        resultatmise = "Mise sur les deux colonnes 1 et 2";
        qogain="0,5:1";
    } else if (targetjeton=='deuxCol-2-3'){
        resultatmise = "Mise sur les deux colonnes 2 et 3";
        qogain="0,5:1";
    } else if (targetjeton=='douzSimple-P'){
        resultatmise = "Mise sur la douzaine P";
        qogain="2:1";
    } else if (targetjeton=='douzSimple-M'){
        resultatmise = "Mise sur la douzaine M";
        qogain="2:1";
    } else if (targetjeton=='douzSimple-D'){
        resultatmise = "Mise sur la douzaine D";
        qogain="2:1";
    } else if (targetjeton=='deuxDouz-P-M'){
        resultatmise = "Mise sur les deux douzaines P et M";
        qogain="0,5:1";
    } else if (targetjeton=='deuxDouz-M-D'){
        resultatmise = "Mise sur les deux douzaines M et D";
        qogain="0,5:1";
    }

    const divchild = document.createElement("div");
    divchild.classList.add("mises");

    divchild.textContent= resultatmise + " : " + parseInt(nbrqte.value) + " unités ; Gains : "+qogain;

    listemise.appendChild(divchild);

    widthqte = 0;
    
    nbrqte.value=widthqte;
    document.querySelector("#flux-quantite").style.width=widthqte+5 + "%";
    draggableDiv.style.left = widthqte + '%';
    
    document.querySelector("#nbr-mise").textContent=nbrmise;
}
});

let tour0mise = 0;

document.querySelector(".btn-valider-toutes-mises").addEventListener("click", ()=>{
    if (listemise.childElementCount!=0){
        
        let toutemise = [];
        document.querySelectorAll(".mise").forEach(mise=>{
            if (!mise.parentElement.classList.contains("prison")){
                toutemise.push(parseInt(mise.getAttribute("data-content")))
                console.log("mise", mise)
            }
            
        })
        console.log("toutemise", toutemise)
        if (toutemise.length!=0){
            var sommemise = toutemise.reduce(function(acc, valeur) {
                return parseInt(acc) + parseInt(valeur);
            }, 0);
            console.log("sommemise", sommemise)
            nbrjetontotal=nbrjetontotal - sommemise;
            console.log("nbrjetontotal", nbrjetontotal)
            nbrjeton=nbrjetontotal;
            document.querySelector(".nombre-unite").textContent=nbrjeton;
        }
        
        

        
        document.querySelectorAll(".targetjeton").forEach(jeton=>{
            jeton.classList.add("op0");
        })
        
        nbrmise=0;
        nbrmiseexte=0;
        nbrmiseinte=0;
        
        document.querySelector(".desactiver-exte").classList.add("none");
        document.querySelector(".desactiver-inte").classList.add("none");

        document.querySelector("#ch-niv-1").classList.remove("none");

        

        widthqte = 0;
        
        nbrqte.value=widthqte;
        document.querySelector("#flux-quantite").style.width=widthqte+5 + "%";
        draggableDiv.style.left = widthqte + '%';
        
        document.querySelector("#nbr-mise").textContent=nbrmise;

        document.querySelector(".instructions-croupier-1").textContent="Rien ne vas plus !";
        document.querySelector(".instructions-croupier-2").textContent="Choisissez un type de pari";
        document.querySelector(".instructions-croupier-2").classList.add("none")
        document.querySelectorAll(".choix-niveau").forEach(choix=>{
            choix.classList.add("none");
        })

        document.querySelector(".info-mises").classList.add("none")

        setTimeout(() => {
            document.querySelector(".jeu").style.left="0";
            document.querySelector(".info-roue").style.left="100%";
            document.querySelector(".info-grille").style.left="100%";
            document.querySelector(".info-gains").style.left="100%";
            
        }, 2000);
        setTimeout(() => {
            document.querySelector(".info-grille").classList.add("none");
            document.querySelector(".info-gains").classList.add("none");
            document.querySelector(".info-roue").classList.remove("none");
            
            
        }, 3000);
        setTimeout(() => {
            document.querySelector(".info-roue").style.left="0%";
            document.querySelector(".info-grille").style.left="0%";
            document.querySelector(".info-gains").style.left="0%";
            document.querySelector(".instructions-croupier-1").classList.add("none")
        }, 3050);


        setTimeout(() => {
            
            


            setTimeout(() => {
                document.querySelector(".jeu").style.left="-70%";
                document.querySelector(".info-roue").style.left="100%";
                document.querySelector(".info-grille").style.left="100%";
                document.querySelector(".info-gains").style.left="100%";
                
            }, 2000);
            setTimeout(() => {
                document.querySelector(".info-roue").classList.add("none");
                document.querySelector(".info-grille").classList.add("none");
                document.querySelector(".info-gains").classList.remove("none");
                
                
            }, 3000);
            setTimeout(() => {
                document.querySelector(".info-roue").style.left="0%";
                document.querySelector(".info-grille").style.left="0%";
                document.querySelector(".info-gains").style.left="0%";
            }, 3050);
        }, 27*1000);

        

        
    }
    
});

document.querySelector(".btn-reinitialiser").addEventListener("click", ()=>{
    document.querySelector(".instructions-croupier-2").textContent="Choisissez un type de pari";
    nbrjeton=nbrjetontotal;
    document.querySelector(".nombre-unite").textContent=nbrjeton;

    var miseenfants = document.querySelectorAll('.mise');

    // Parcourir tous les éléments et les supprimer
    miseenfants.forEach(function(miseenfants) {
        if (!miseenfants.parentElement.classList.contains("prison")){
            miseenfants.remove();
        }
    });

    document.querySelectorAll(".jeton").forEach(jeton=>{
        if (!jeton.classList.contains("prison")){
            jeton.classList.add("targetjeton");
        }
    })
    document.querySelectorAll(".targetjeton").forEach(jeton=>{
        jeton.classList.add("op0");
    })
    nbrmise = 0;
    nbrmiseexte=0;
    nbrmiseinte=0;
    document.querySelector(".desactiver-exte").classList.add("none");
    document.querySelector(".desactiver-inte").classList.add("none");

    document.querySelector("#ch-niv-1").classList.remove("none");

    var listemiseenfant = document.querySelectorAll('.mises');

    // Parcourir tous les éléments et les supprimer
    listemiseenfant.forEach(function(listemiseenfant) {
        if (!listemiseenfant.classList.contains("liste-prison")){
            listemiseenfant.remove();
        }
    });

    widthqte = 0;
    
    nbrqte.value=widthqte;
    document.querySelector("#flux-quantite").style.width=widthqte+5 + "%";
    draggableDiv.style.left = widthqte + '%';
    
    document.querySelector("#nbr-mise").textContent=nbrmise;

    
})






function adsous(etat){
    if (etat=='moins'){
        document.querySelector(".nombre-unite").style.transition="0s";
        document.querySelector(".addi-soustra").style.transition="0s";
        document.querySelector(".nombre-unite").style.color="red";
        document.querySelector(".addi-soustra").style.color="red";
    } else if (etat=='plus'){
        document.querySelector(".nombre-unite").style.transition="0s";
        document.querySelector(".addi-soustra").style.transition="0s";
        document.querySelector(".nombre-unite").style.color="chartreuse";
        document.querySelector(".addi-soustra").style.color="chartreuse";
    }
    setTimeout(() => {
        document.querySelector(".nombre-unite").style.transition="";
        document.querySelector(".addi-soustra").style.transition="";
    }, 1);
    document.querySelector(".addi-soustra").classList.remove("none");
    setTimeout(() => {
        document.querySelector(".addi-soustra").style.top="90%";
        setTimeout(() => {
            document.querySelector(".addi-soustra").style.opacity="0";
        }, 200);
        setTimeout(() => {
            document.querySelector(".addi-soustra").classList.add("none");
            document.querySelector(".addi-soustra").textContent="";
            document.querySelector(".nombre-unite").style.color="";
            document.querySelector(".addi-soustra").style.color="black";
            document.querySelector(".addi-soustra").style.top="";
            document.querySelector(".addi-soustra").style.opacity="";
        }, 1.5*1000);
    }, 50);
    
}

function tours(){
    const tour = document.querySelector(".nombre-tour");
    let nbrtour = parseInt(tour.textContent);
    nbrtour=nbrtour+1;
    tour.textContent=nbrtour;
    console.log("TOUR SUIVANT !")
}


function supprimerCaractereNonNumerique() {
    // Récupérer la valeur de l'input
    let valeurInput = nbrqte.value;

    // Vérifier si le dernier caractère n'est pas un chiffre
    if (isNaN(valeurInput.charAt(valeurInput.length - 1))) {
        // Supprimer le dernier caractère non numérique
        nbrqte.value = valeurInput.slice(0, -1);
    }
}