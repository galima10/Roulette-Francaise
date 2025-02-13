function updateWidthcadre() {
    const cadreH = document.querySelector(".cadre-jeu").getBoundingClientRect().height;
    let calculcadre = 2.2596362146594586*cadreH
    document.querySelector(".cadre-jeu").style.width=calculcadre+"px";
    document.querySelector(".cadre-info").style.width=calculcadre+"px";
}

// Ajouter un écouteur d'événement pour le changement de hauteur (par exemple, redimensionnement de la fenêtre)
window.addEventListener("resize", updateWidthcadre);

// Appeler la fonction pour définir la largeur initiale
updateWidthcadre();

// const cadreH = document.querySelector(body).getBoundingClientRect().width;
// console.log(cadreH)

function updateWidthroue() {
    const ensroue = document.querySelector(".ens-roue").getBoundingClientRect().height;
    document.querySelector(".ens-roue").style.width = ensroue + "px";
}

// Ajouter un écouteur d'événement pour le changement de hauteur (par exemple, redimensionnement de la fenêtre)
window.addEventListener("resize", updateWidthroue);

// Appeler la fonction pour définir la largeur initiale
updateWidthroue();

function updateWidthgrille() {
    const ensgrilleW = document.querySelector(".ens-grille").getBoundingClientRect().width;
    let calculensgrille = 0.7321394008362916*ensgrilleW
    document.querySelector(".ens-grille").style.height=calculensgrille+"px";
}

// Ajouter un écouteur d'événement pour le changement de hauteur (par exemple, redimensionnement de la fenêtre)
window.addEventListener("resize", updateWidthgrille);

// Appeler la fonction pour définir la largeur initiale
updateWidthgrille();

function updateWidthjeton() {
    // Sélectionnez tous les éléments avec la classe ".jeton"
    const jetons = document.querySelectorAll(".jeton");

    // Pour chaque élément, temporairement le rendre visible, récupérer la largeur, puis le cacher à nouveau
    jetons.forEach(jeton => {
        // Rendre l'élément visible
        jeton.style.display = "block";

        // Récupérer la largeur
        const jetonWidth = jeton.getBoundingClientRect().width;

        // Appliquer la largeur à la hauteur (ou à toute autre manipulation nécessaire)
        jeton.style.height = jetonWidth + "px";

        setTimeout(() => {
            jeton.style.display = "";
        }, 1);
        // Cacher à nouveau l'élément
        
    });
}

// Ajouter un écouteur d'événement pour le changement de hauteur (par exemple, redimensionnement de la fenêtre)
window.addEventListener("resize", updateWidthjeton);

// Appeler la fonction pour définir la largeur initiale
updateWidthjeton();





document.querySelector("#btn-jouer").addEventListener("click", ()=>{
    document.querySelector(".ecran-debut").classList.add("op0");
    duration();
    setTimeout(() => {
        document.querySelector(".objectif").style.transition="1s";
        document.querySelector(".objectif").classList.remove("op0");
        setTimeout(() => {
            document.querySelector(".objectif").style="";
        }, 2*1000);
    }, 2*1000);
    setTimeout(() => {
        document.querySelector(".info-grille").style.left="";
        document.querySelector(".info-roue").style.left="";
        document.querySelector(".info-gains").style.left="";
        document.querySelector(".instructions-croupier-1").textContent="Début de la partie !";
        document.querySelector(".instructions-croupier-1").classList.remove("none");
        

        setTimeout(() => {
            document.querySelector(".btn-jeu-tuto").classList.remove("none")
            setTimeout(() => {
                document.querySelector(".instructions-croupier-1").textContent="Faites vos jeux !";
                document.querySelector(".nombre-tour").textContent="1";
                setTimeout(() => {
                    document.querySelector(".instructions-croupier-2").classList.remove("none");
                    document.querySelector(".choix-niveau-1").classList.remove("none");
                    document.querySelector(".info-mises").classList.remove("none");
                }, 1.5*1000);
            }, 2*1000);
        }, 1000);
        
    }, 7*1000);
})

document.querySelector(".btn-jeu-tuto").addEventListener("click", ()=>{
    document.querySelector(".tutoriel").classList.remove("none")
})
document.querySelector("#btn-tutoriel").addEventListener("click", ()=>{
    document.querySelector(".tutoriel").classList.remove("none")
})
document.querySelector("#btn-retour-tuto").addEventListener("click", ()=>{
    document.querySelector(".tutoriel").classList.add("none")
})

document.querySelector("#btn-prevention").addEventListener("click", ()=>{
    document.querySelector(".avertissements").classList.remove("none")
    document.querySelector("#btn-retour-aver").classList.remove("none")
})
document.querySelector("#btn-retour-aver").addEventListener("click", ()=>{
    document.querySelector(".avertissements").classList.add("none")
})
document.querySelector(".lu-et-approuve").addEventListener("click", ()=>{
    setTimeout(() => {
        document.querySelector(".lu-et-approuve").classList.add("none")
    }, 4001);
    setTimeout(() => {
        document.querySelector(".avertissements").classList.add("op0");
    setTimeout(() => {
        document.querySelector(".avertissements").classList.replace("op0", "none");
    }, 2*1000);
    }, 500);
    
})

// setTimeout(() => {
//     document.querySelector(".avertissements").classList.add("op0");
//     setTimeout(() => {
//         document.querySelector(".avertissements").classList.replace("op0", "none");
//     }, 2*1000);
// }, 5*1000);

let nbrmisetotal = 0;

let nbrmisegagnante = 0;
let nbrmiseperdante = 0;
let nbrmiseprison = 0;

let meilleurmisegagnante = [
    ['Mise sur les numéros rouges : 67 unités ; Gains : 1:1', 67],
    ['Mise sur les numéros rouges : 67 unités ; Gains : 1:1', 67]
]


let duree = 0;


const statistiques1 = document.querySelector("#sous-stat-1");
const statistiques2 = document.querySelector("#sous-stat-2");

let finioberve = new Proxy({ funcfini: true }, {
    set: function(target, key, value) {
      if (key === "funcfini" && value === true) {

        document.querySelector(".ecran-fin").classList.replace("none", "op0");
        setTimeout(() => {
            document.querySelector(".ecran-fin").classList.remove("op0");
        }, 1);



        const stat5 = document.createElement('div');
        stat5.classList.add("stat")
        stat5.id="stat5"
        stat5.classList.add("none")
        stat5.textContent = "Objectif de la partie : " + document.querySelector("#nbr-objectif").textContent  + " unités";
        statistiques1.appendChild(stat5);

        

        
        const stat1 = document.createElement('div');
        stat1.classList.add("stat")
        stat1.id="stat1"
        stat1.classList.add("none")
        stat1.textContent = "Nombre d'unités total : " + document.querySelector(".nombre-unite").textContent + " unités";
        statistiques1.appendChild(stat1);
        

        const stat2 = document.createElement('div');
        stat2.classList.add("stat")
        stat2.id="stat2"
        stat2.classList.add("none")
        stat2.textContent = "Durée de jeu total : " + duree  + " secondes";
        statistiques1.appendChild(stat2);

        const stat4 = document.createElement('div');
        stat4.classList.add("stat")
        stat4.id="stat4"
        stat4.classList.add("none")
        stat4.textContent = "Nombre de tour total : " + document.querySelector(".nombre-tour").textContent  + " tours";
        statistiques1.appendChild(stat4);

        const stat10 = document.createElement('div');
        stat10.classList.add("stat")
        stat10.id="stat10"
        stat10.classList.add("none")
        stat10.textContent = "Nombre de mises total : " + nbrmisetotal  + " mises";
        statistiques1.appendChild(stat10);

        const stat9 = document.createElement('div');
        stat9.classList.add("stat")
        stat9.id="stat9"
        stat9.classList.add("none")
        stat9.textContent = "Nombre de mises total : " + nbrmiseprison;
        statistiques2.appendChild(stat9);

        const stat6 = document.createElement('div');
        stat6.classList.add("stat")
        stat6.id="stat6"
        stat6.classList.add("none")
        stat6.textContent = "Nombre de mises gagnantes rénumérées : " + nbrmisegagnante;
        statistiques2.appendChild(stat6);

        let meilmise = [];
        
        if (meilleurmisegagnante.length!=0){
            let valeurmeill = [];
            for (let i = 0; i<meilleurmisegagnante.length ; i++){
                valeurmeill.push(meilleurmisegagnante[i][1]);
            }

            let plusgrdemise = Math.max(...valeurmeill);
            
            for (let i = 0; i<meilleurmisegagnante.length ; i++){
                if (meilleurmisegagnante[i][1]==plusgrdemise){
                    meilmise.push(meilleurmisegagnante[i][0]+" avec un gain total de la mise de : " + plusgrdemise + " unités")
                }
            }


            
            const stat3 = document.createElement('div');
            stat3.classList.add("stat")
            stat3.id="stat3";
            stat3.classList.add("none")

            stat3.textContent = "Votre mise la mieux rénumérée : - " + meilmise[0];
            statistiques2.appendChild(stat3);

            
        }
        const stat7 = document.createElement('div');
        stat7.classList.add("stat")
        stat7.id="stat7"
        stat7.classList.add("none")
        stat7.textContent = "Nombre de mises perdantes : " + nbrmiseperdante;
        statistiques2.appendChild(stat7);

        const stat8 = document.createElement('div');
        stat8.classList.add("stat")
        stat8.id="stat8"
        stat8.classList.add("none")
        stat8.textContent = "Nombre de mises en prison : " + nbrmiseprison;
        statistiques2.appendChild(stat8);

        setTimeout(() => {
            document.querySelector("#stat5").classList.remove("none")
            setTimeout(() => {
                document.querySelector("#stat1").classList.remove("none")
                setTimeout(() => {
                    document.querySelector("#stat2").classList.remove("none")
                    setTimeout(() => {
                        document.querySelector("#stat4").classList.remove("none")
                        setTimeout(() => {
                            document.querySelector("#stat10").classList.remove("none")
                            setTimeout(() => {
                                document.querySelector("#stat9").classList.remove("none")
                                setTimeout(() => {
                                    document.querySelector("#stat6").classList.remove("none")
                                    setTimeout(() => {
                                        if (meilmise.length!=0){
                                            document.querySelector("#stat3").classList.remove("none")
                                        }
                                        
                                        setTimeout(() => {
                                            document.querySelector("#stat7").classList.remove("none")
                                            setTimeout(() => {
                                                document.querySelector("#stat8").classList.remove("none")
                                            }, 800);
                                        }, 800);
                                    }, 800);
                                }, 800);
                            }, 800);
                        }, 800);
                    }, 800);
                }, 800);
            }, 800);
        }, 3*1000);
        
        
        
        
        // Effectuez votre action ici
        // Remettez la propriété à false après l'action
        target[key] = false;
      } else {
        target[key] = value;
      }
      return true;
    }
  });



let fini = false;
function duration(){
    if (!fini){
        duree++;
        console.log("duree", duree)
        setTimeout(() => {
            duration()
        }, 1000);
    } else {
        finioberve.funcfini = true;
    }
}
// setTimeout(() => {
//     finioberve.funcfini = true;
// }, 10);




  
  