


let typenumero = [

    // Numéros rouges [0]
    [
        1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36
    ],

    // Numéros noirs [1]
    [
        2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35
    ],

    // Colonne 1 [2]
    [
        1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34
    ],

    // Colonne 2 [3]
    [
        2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35
    ],

    // Colonne 3 [4]
    [
        3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36
    ],

    // Douzaine 1 [5] P
    [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12
    ],

    // Douzaine 2 [6] M
    [
        13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24
    ],

    // Douzaine 3 [7] D
    [
        25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36
    ],
];

// Sélectionnez la div en utilisant son ID (remplacez "nomDeLaDiv" par l'ID réel de votre div)
var maDiv = document.querySelector(".numero-tire");

// Créez une instance de MutationObserver et spécifiez une fonction de retour de l'observateur
var observer = new MutationObserver(function(mutations) {
    // Parcourez les mutations pour vérifier si le texte de la div a changé
    mutations.forEach(function(mutation) {
        // Vérifiez si le texte de la div est différent de la chaîne vide
        if (maDiv.innerText.trim() !== "") {
            // Le texte de la div n'est pas vide, exécutez votre action ici
            // console.log("Le texte de la div n'est pas vide !");
            const resultat = maDiv.textContent;
            var resultatfinal = '"' + resultat;

            let couleur = "";
            for (let i = 0; i<18;i++){
                if (resultat==typenumero[0][i]){
                    couleur = true;
                }
            }
            for (let i = 0; i<18;i++){
                if (resultat==typenumero[1][i]){
                    couleur = false;
                }
            }
            if (couleur){
                resultatfinal=resultatfinal + ", Rouge"
            } else if (!couleur){
                resultatfinal=resultatfinal + ", Noir"
            }

            var nbrPairImpair = resultat;
            if (nbrPairImpair % 2 === 0) {
                resultatfinal=resultatfinal + ", Pair"
            } else {
                resultatfinal=resultatfinal + ", Impair"
            }

            if (resultat<=18){
                resultatfinal=resultatfinal + ", et Manque !"
                // console.log("oui");
            } else {
                resultatfinal=resultatfinal + ", et Passe !"
            }

            if (resultat==0){
                document.querySelector(".resultat-roue").textContent = '"' + resultat + ' Douzaine D"';
            } else {
                document.querySelector(".resultat-roue").textContent = resultatfinal + '"';
            }

            

            
        }
    });
});

// Configurez les types de mutations à observer (en particulier, observez les modifications du contenu de la div)
var config = { childList: true, subtree: true };

// Commencez à observer la div avec la configuration spécifiée
observer.observe(maDiv, config);

// maDiv.textContent="3";

// Exemple de fonction à exécuter lorsque le texte de la div n'est pas vide
function maFonction() {
    // Votre action ici
    alert("Le texte de la div n'est pas vide !");
}

document.querySelector(".btn-valider-toutes-mises").addEventListener("click", () => {
    if (listemise.childElementCount!=0){
        setTimeout(() => {
            maDiv.textContent="";
            setTimeout(() => {
                document.querySelector(".resultat-roue").textContent = "";
            }, 1);
        }, 31*1000);
    }
});




let niv = 1;
function niveau(){
    document.querySelectorAll(".jeton").forEach(otherJeton => {
        otherJeton.classList.remove("jeton-clic");
    });
    document.querySelectorAll(".targetjeton").forEach(jetons=>{
        jetons.classList.add("op0");
    });
    document.querySelectorAll(".choix").forEach(cases=>{
        cases.classList.add("case-op0-5");
    });
    if (niv==1){
        
    }
    if (niv==2){
        document.querySelectorAll(".choix").forEach(cases=>{
            cases.classList.remove("case-op0-5");
        });
        document.querySelector("#precedent-paris").classList.add("none");
        document.querySelector("#ch-niv-1").classList.remove("none");
        document.querySelector(".info-mises").classList.remove("none");

        document.querySelectorAll("#ch-exte-niv-2").forEach(choix=>{
            choix.classList.add("none");
        });
        document.querySelectorAll("#ch-inte-niv-2").forEach(choix=>{
            choix.classList.add("none");
        });
        niv=1;
    }
    if (niv==3){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelector("#ch-douz-niv-3").classList.add("none");
        document.querySelector("#ch-col-niv-3").classList.add("none");
        document.querySelectorAll("#ch-exte-niv-2").forEach(choix=>{
            choix.classList.remove("none");
        });
        niv=2;
    }
}
document.querySelector("#precedent-paris").addEventListener("click", ()=>{
    niveau();
})

let choixparis = "";

function typeparis(){
    document.querySelectorAll(".jeton").forEach(otherJeton => {
        otherJeton.classList.remove("jeton-clic");
    });
    document.querySelectorAll(".targetjeton").forEach(jetons=>{
        jetons.classList.add("op0");
    });
    document.querySelectorAll(".choix").forEach(cases=>{
        cases.classList.add("case-op0-5");
    });
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    if (choixparis=="paris interieurs"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        });

        document.querySelector("#ch-niv-1").classList.add("none");
        document.querySelectorAll("#ch-inte-niv-2").forEach(choix=>{
            choix.classList.remove("none");
        });

        niv = 2;
        document.querySelector("#precedent-paris").classList.remove("none");
    }
    if (choixparis=="paris exterieurs"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })

        document.querySelector("#ch-niv-1").classList.add("none");
        document.querySelectorAll("#ch-exte-niv-2").forEach(choix=>{
            choix.classList.remove("none");
        });

        niv = 2;
        document.querySelector("#precedent-paris").classList.remove("none");
    }

    if (choixparis=="paris douzaine"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelector("#case-12D").classList.remove("case-op0-5");
        document.querySelector("#case-12M").classList.remove("case-op0-5");
        document.querySelector("#case-12P").classList.remove("case-op0-5");

        document.querySelectorAll("#ch-exte-niv-2").forEach(choix=>{
            choix.classList.add("none");
        });
        document.querySelector("#ch-douz-niv-3").classList.remove("none");

        niv = 3;
    }
    if (choixparis=="paris colonne"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelector("#case-colonne1").classList.remove("case-op0-5");
        document.querySelector("#case-colonne2").classList.remove("case-op0-5");
        document.querySelector("#case-colonne3").classList.remove("case-op0-5");

        document.querySelectorAll("#ch-exte-niv-2").forEach(choix=>{
            choix.classList.add("none");
        });
        document.querySelector("#ch-col-niv-3").classList.remove("none");

        niv = 3;
    }
}

document.querySelector("#paris-interieurs").addEventListener("click", ()=>{
    document.querySelector(".info-mises").classList.add("none");
    choixparis="paris interieurs";
    typeparis();
})
document.querySelector("#paris-exterieurs").addEventListener("click", ()=>{
    document.querySelector(".info-mises").classList.add("none");
    choixparis="paris exterieurs";
    typeparis();
})

document.querySelector("#paris-douzaine").addEventListener("click", ()=>{
    choixparis="paris douzaine";
    typeparis();
})
document.querySelector("#paris-colonne").addEventListener("click", ()=>{
    choixparis="paris colonne";
    typeparis();
})


let choixjeton = "";
function typejeton(){
    document.querySelectorAll(".jeton").forEach(otherJeton => {
        otherJeton.classList.remove("jeton-clic");
    });
    document.querySelectorAll(".targetjeton").forEach(jetons=>{
        jetons.classList.add("op0");
    });
    document.querySelectorAll(".choix").forEach(cases=>{
        cases.classList.add("case-op0-5");
    });
    if (choixjeton=="en plein"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".en-plein").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="a cheval v"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".a-chev-V").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="a cheval h"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".a-chev-H").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="transversale pleine"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".transversale-pleine").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="en carre"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".en-carre").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="en sixain"){
        document.querySelectorAll(".case-interieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".en-sixain").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }


    if (choixjeton=="couleur"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelector(".couleur-rouge").classList.remove("op0");
        document.querySelector(".couleur-noire").classList.remove("op0");
    }
    if (choixjeton=="pair impair"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelector(".jeton-impair").classList.remove("op0");
        document.querySelector(".jeton-pair").classList.remove("op0");
    }
    if (choixjeton=="manque passe"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelector(".jeton-manque").classList.remove("op0");
        document.querySelector(".jeton-passe").classList.remove("op0");
    }


    if (choixjeton=="douzaine simple"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".douzaine-simple").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="deux douzaines"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".deux-douzaines").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="colonne simple"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".colonne-simple").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
    if (choixjeton=="deux colonnes"){
        document.querySelectorAll(".case-exterieure").forEach(caseinte=>{
            caseinte.classList.remove("case-op0-5");
        })
        document.querySelectorAll(".deux-colonnes").forEach(jeton=>{
            jeton.classList.remove("op0");
        })
    }
}

document.querySelector("#paris-en-plein").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-en-plein").style.background="rgb(145, 148, 161)";

    choixjeton="en plein";
    typejeton();
})
document.querySelector("#paris-a-chevalV").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-a-chevalV").style.background="rgb(145, 148, 161)";

    choixjeton="a cheval v";
    typejeton();
})
document.querySelector("#paris-a-chevalH").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-a-chevalH").style.background="rgb(145, 148, 161)";

    choixjeton="a cheval h";
    typejeton();
})
document.querySelector("#paris-en-transversale-pleine").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-en-transversale-pleine").style.background="rgb(145, 148, 161)";

    choixjeton="transversale pleine";
    typejeton();
})
document.querySelector("#paris-en-carre").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-en-carre").style.background="rgb(145, 148, 161)";

    choixjeton="en carre";
    typejeton();
})
document.querySelector("#paris-en-sixain").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-en-sixain").style.background="rgb(145, 148, 161)";

    choixjeton="en sixain";
    typejeton();
})

document.querySelector("#paris-couleur").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-couleur").style.background="rgb(145, 148, 161)";

    choixjeton="couleur";
    typejeton();
})
document.querySelector("#paris-pair-impair").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-pair-impair").style.background="rgb(145, 148, 161)";

    choixjeton="pair impair";
    typejeton();
})
document.querySelector("#paris-manque-passe").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-manque-passe").style.background="rgb(145, 148, 161)";

    choixjeton="manque passe";
    typejeton();
})

document.querySelector("#paris-douzaine-simple").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-douzaine-simple").style.background="rgb(145, 148, 161)";

    choixjeton="douzaine simple";
    typejeton();
})
document.querySelector("#paris-deux-douzaines").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-deux-douzaines").style.background="rgb(145, 148, 161)";

    choixjeton="deux douzaines";
    typejeton();
})
document.querySelector("#paris-colonne-simple").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-colonne-simple").style.background="rgb(145, 148, 161)";

    choixjeton="colonne simple";
    typejeton();
})
document.querySelector("#paris-deux-colonnes").addEventListener("click", ()=>{
    document.querySelectorAll(".texte-paris").forEach(element=>{
        element.style.background="";
    })
    document.querySelector("#paris-deux-colonnes").style.background="rgb(145, 148, 161)";
    choixjeton="deux colonnes";
    typejeton();
})

