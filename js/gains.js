


let numerogagnant = null;



let tour0 = 0;

let targettabl = [];




let objetObservé = new Proxy({ fermermenu: false }, {
    set: function(target, key, value) {
      if (key === "fermermenu" && value === true) {
        actionLorsqueTrue();
        // Effectuez votre action ici
        // Remettez la propriété à false après l'action
        target[key] = false;
      } else {
        target[key] = value;
      }
      return true;
    }
  });



// Créez une fonction qui sera appelée lorsque la propriété change
function actionLorsqueTrue() {
    console.log("La propriété maVariable est maintenant à true");
    
    var listemiseenfant = document.querySelectorAll('.mises');

    // Parcourir tous les éléments et les supprimer
    listemiseenfant.forEach(function(listemiseenfant) {
        if (!listemiseenfant.classList.contains("liste-prison")){
            listemiseenfant.remove();
        }
    });
    if (document.querySelector("#mise-prison").textContent!=""){
        const enfmises = document.createElement('div');
        enfmises.classList.add("mises");
        enfmises.classList.add("liste-prison");
        enfmises.textContent=document.querySelector("#mise-prison").textContent;
        listemise.appendChild(enfmises);
    }

    document.querySelectorAll('.mise').forEach(miseenfants=>{
        console.log(miseenfants.parentElement)
        if (!miseenfants.parentElement.classList.contains("prison")){
            miseenfants.style.transition="1s";
            miseenfants.style.opacity="0";
            miseenfants.parentElement.style.transition="1s";
            miseenfants.parentElement.style.opacity="0";
            setTimeout(() => {
                miseenfants.remove();
                miseenfants.style.transition="";
                miseenfants.style.opacity="";
            }, 1001);
        }
    });
    document.querySelectorAll(".jeton").forEach(element=>{
        if (!element.classList.contains("prison")){
            setTimeout(() => {
                element.style.transition="";
                element.style.opacity="";
                element.classList.add("targetjeton");
                element.classList.add("op0");
            }, 1001);
        }
    })

    
        setTimeout(() => {
            document.querySelector(".info-roue").style.left="100%";
            document.querySelector(".info-grille").style.left="100%";
            document.querySelector(".info-gains").style.left="100%";
            
            }, 2000);
            setTimeout(() => {
                document.querySelector(".info-roue").classList.add("none");
                document.querySelector(".info-grille").classList.remove("none");
                document.querySelector(".info-gains").classList.add("none");
      
                
                
                
            }, 3000);
        if (nbrjetontotal!=0){
            if (!actionEffectuee){
                setTimeout(() => {
                    document.querySelector(".info-roue").style.left="0%";
                    document.querySelector(".info-grille").style.left="0%";
                    document.querySelector(".info-gains").style.left="0%";
            
                    document.querySelectorAll("#info-gain").forEach(info=>{
                        if (!info.classList.contains("none")){
                            info.classList.add("none")
                        }
                    })
                    document.querySelector(".gains-gagnantes").classList.remove("none");
            
                    
                    setTimeout(() => {
                        document.querySelector(".instructions-croupier-1").textContent="Nouveau tour !";
                        document.querySelector(".instructions-croupier-1").classList.remove("none");
                        setTimeout(() => {
                            tours();
                        }, 1000);
                        setTimeout(() => {
                            document.querySelector(".instructions-croupier-1").textContent="Faites vos jeux !";
                        }, 2*1000);
            
                        setTimeout(() => {
                            document.querySelector(".instructions-croupier-2").classList.remove("none");
                            document.querySelector("#ch-niv-1").classList.remove("none");
                            document.querySelector(".info-mises").classList.remove("none");
            
                        }, 3*1000);
                        
                    }, 2*1000);
                    
                }, 3050);
            } else {
                console.log("FIN DE LA PARTIE")
                fini=true;
            }
        } else {
            console.log("FIN DE LA PARTIE")
            fini=true;
        }
    
    

      
  }

let gainsPrison = [];
let gains = 0;

const element = document.querySelectorAll(".jeton");
for (let i = 0; i<document.querySelectorAll(".jeton").length; i++){
    targettabl.push(element[i].id)
}
let misegagnante = [];
let miseprison = [];
let miseprisongagnante = null;

let gaintotaux = 0;


function textmises(tableau, idparent){
    if (tableau.length!=0){
        
        const parent = document.querySelector(`#${idparent}`);
    

        if (idparent=='mises-gagnantes'){
            for (let i = 0 ; i<tableau.length ; i++){
                let idtype = tableau[i][4];
                let idnum = tableau[i].slice(5);
                let texte = null;

                if (idtype=='plein'){
                    texte = 'Mise en plein sur le numéro ' + idnum + ' : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='chev'){
                    texte = 'Mise à cheval sur les numéros ' + idnum + ' : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='transP'){
                    texte = 'Mise en transversale pleine sur les numéros ' + idnum + ' : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='carre'){
                    texte = 'Mise en carré sur les numéros ' + idnum + ' : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='sixain'){
                    texte = 'Mise en sixain sur les numéros ' + idnum + ' : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='couleur-rouge'){
                    texte = 'Mise sur les numéros rouges : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='couleur-noire'){
                    texte = 'Mise sur les numéros noirs : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='jeton-pair'){
                    texte = 'Mise sur les numéros pairs : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='jeton-impair'){
                    texte = 'Mise sur les numéros impairs : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='jeton-passe'){
                    texte = 'Mise sur passe : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='jeton-manque'){
                    texte = 'Mise sur manque : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='colSimple-1'){
                    texte = 'Mise sur la colonne 1 : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='colSimple-2'){
                    texte = 'Mise sur la colonne 2 : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='colSimple-3'){
                    texte = 'Mise sur la colonne 3 : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='deuxCol-1-2'){
                    texte = 'Mise sur les colonnes 1 et 2 : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='deuxCol-2-3'){
                    texte = 'Mise sur les colonnes 2 et 3 : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='douzSimple-P'){
                    texte = 'Mise sur la douzaine P : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='douzSimple-M'){
                    texte = 'Mise sur la douzaine M : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='douzSimple-D'){
                    texte = 'Mise sur la douzaine D : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='deuxDouz-P-M'){
                    texte = 'Mise sur les douzaines P et M : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }
                if (idtype=='deuxDouz-M-D'){
                    texte = 'Mise sur les douzaines M et D : ' + tableau[i][1] + ' unités ; Gains : ' + tableau[i][0] + ':1';
                }

                
                const enfant = document.createElement('div');
                enfant.classList.add("mises-gag");
                enfant.textContent=texte;
                parent.appendChild(enfant);
            }
        } else {
            let idtype = tableau[4];
            let idnum = tableau.slice(5);
            let texte = null;

            if (idtype=='plein'){
                texte = 'Mise en plein sur le numéro ' + idnum + ' : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='chev'){
                texte = 'Mise à cheval sur les numéros ' + idnum + ' : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='transP'){
                texte = 'Mise en transversale pleine sur les numéros ' + idnum + ' : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='carre'){
                texte = 'Mise en carré sur les numéros ' + idnum + ' : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='sixain'){
                texte = 'Mise en sixain sur les numéros ' + idnum + ' : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='couleur-rouge'){
                texte = 'Mise sur les numéros rouges : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='couleur-noire'){
                texte = 'Mise sur les numéros noirs : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='jeton-pair'){
                texte = 'Mise sur les numéros pairs : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='jeton-impair'){
                texte = 'Mise sur les numéros impairs : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='jeton-passe'){
                texte = 'Mise sur passe : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='jeton-manque'){
                texte = 'Mise sur manque : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='colSimple-1'){
                texte = 'Mise sur la colonne 1 : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='colSimple-2'){
                texte = 'Mise sur la colonne 2 : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='colSimple-3'){
                texte = 'Mise sur la colonne 3 : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='deuxCol-1-2'){
                texte = 'Mise sur les colonnes 1 et 2 : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='deuxCol-2-3'){
                texte = 'Mise sur les colonnes 2 et 3 : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='douzSimple-P'){
                texte = 'Mise sur la douzaine P : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='douzSimple-M'){
                texte = 'Mise sur la douzaine M : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='douzSimple-D'){
                texte = 'Mise sur la douzaine D : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='deuxDouz-P-M'){
                texte = 'Mise sur les douzaines P et M : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            if (idtype=='deuxDouz-M-D'){
                texte = 'Mise sur les douzaines M et D : ' + tableau[1] + ' unités ; Gains : ' + tableau[0] + ':1';
            }
            parent.textContent=texte;
        }
        
    } 
}
function textgains(tableaugagnant){
    if (tableaugagnant.length!=0){
        document.querySelector("#multiplicateur").textContent=tableaugagnant[0];
        document.querySelector("#unites").textContent=tableaugagnant[1];
        document.querySelector("#gains-totaux").textContent=parseInt(tableaugagnant[0]) * parseInt(tableaugagnant[1]);
        gaintotaux=parseInt(document.querySelector("#gains-totaux").textContent)
    } 
}



let gagner = [];

document.querySelector(".btn-valider-toutes-mises").addEventListener("click", ()=>{
    document.querySelector("#mise-prison-gains").textContent="";
    document.querySelector("#mise-prison").textContent="";
    document.querySelector("#mise-gagnante").textContent="";
    const enfmisegag = document.querySelectorAll(".mises-gag");
    if (enfmisegag){
        enfmisegag.forEach(enf=>{
            enf.remove();
        })
    }
    let tableaumises = [];
    let tabmises = [];
    gains = 0;
    misegagnante = [];
    miseprison = [];
    gainsPrison = [];
    gagner = [];
    miseprisongagnante = null
    gaintotaux = 0;

    
    
    if (listemise.childElementCount!=0){
        setTimeout(() => {

            // document.querySelector(".numero-tire").textContent=20;
            
             
            numerogagnant=document.querySelector(".numero-tire").textContent;
            setTimeout(() => {
                document.querySelector(".annonce-resultat").textContent = document.querySelector(".resultat-roue").textContent;
            }, 1);
            

            for (let i = 0 ; i<targettabl.length ; i++){
                const jeton = document.querySelector(`#${targettabl[i]}`);
                if (jeton.childElementCount!=0){
                    tabmises.push(targettabl[i]);
                }
            }
            
            

            for (let i = 0; i<tabmises.length;i++){
                let chiffre = [];
                let splitid = tabmises[i].split('');
                let typemise=tabmises[i];
                var startIndex = typemise.indexOf('-');
                typemise = typemise.split('');
                typemise.splice(startIndex);
                typemise = typemise.join('');

                if (typemise == 'plein' || typemise == 'chev' || typemise == 'carre' || typemise == 'transP' || typemise == 'sixain') {

                    
                    if (typemise=='plein'){
                        chiffre.push(36)
                    } else if (typemise=='chev'){
                        chiffre.push(17)
                    } else if (typemise=='transP'){
                        chiffre.push(11)
                    } else if (typemise=='carre'){
                        chiffre.push(8)
                    } else if (typemise=='sixain'){
                        chiffre.push(5)
                    }
                    
                    chiffre.push(document.querySelector(`#${tabmises[i]}`).children[0].getAttribute("data-content"));


                    chiffre.push('pas-prison')


                    chiffre.push('paris-inte')
                    chiffre.push(typemise)
                    
                    for (let i = 0; i < splitid.length; i++) {
                        // Vérifiez si le caractère est un chiffre
                        if (!isNaN(splitid[i]) && isNaN(splitid[i + 1])) {
                            chiffre.push(Number(splitid[i]));
                        } else if (!isNaN(splitid[i]) && !isNaN(splitid[i + 1])) {
                            chiffre.push(Number(splitid[i] + splitid[i + 1]));
                            i = i + 1;
                        }
                        
                    }

                    

                } else {
                    
                    if (typemise=='colSimple'){
                        chiffre.push(2)
                    } else if (typemise=='deuxCol'){
                        chiffre.push(0.5)
                    } else if (typemise=='douzSimple'){
                        chiffre.push(2)
                    } else if (typemise=='deuxDouz'){
                        chiffre.push(0.5)
                    } else if (typemise=='couleur'){
                        chiffre.push(1)
                    } else if (typemise=='jeton'){
                        chiffre.push(1)
                    }
                    chiffre.push(document.querySelector(`#${tabmises[i]}`).children[0].getAttribute("data-content"))

                    chiffre.push('pas-prison')

                    chiffre.push('paris-exte')
                    chiffre.push(tabmises[i])
                    if (tabmises[i]=='colSimple-1'){
                        chiffre.push(0);
                        for (let i = 1; i<=34 ; i=i+3){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='colSimple-2'){
                        chiffre.push(0);
                        for (let i = 2; i<=35 ; i=i+3){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='colSimple-3'){
                        chiffre.push(0);
                        for (let i = 3; i<=36 ; i=i+3){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='deuxCol-1-2'){
                        chiffre.push(0);
                        for (let i = 1; i<=34 ; i=i+3){
                            chiffre.push(i);
                        }
                        for (let i = 2; i<=35 ; i=i+3){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='deuxCol-2-3'){
                        chiffre.push(0);
                        for (let i = 2; i<=35 ; i=i+3){
                            chiffre.push(i);
                        }
                        for (let i = 3; i<=36 ; i=i+3){
                            chiffre.push(i);
                        }
                    }

                    if (tabmises[i]=='douzSimple-P'){
                        for (let i = 1; i<=12 ; i++){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='douzSimple-M'){
                        for (let i = 13; i<=24 ; i++){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='douzSimple-D'){
                        chiffre.push(0);
                        for (let i = 25; i<=36 ; i++){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='deuxDouz-P-M'){
                        for (let i = 1; i<=24 ; i++){
                            chiffre.push(i)
                        }
                    }
                    if (tabmises[i]=='deuxDouz-M-D'){
                        chiffre.push(0);
                        for (let i = 13; i<=36 ; i++){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='couleur-rouge'){
                        for (let i = 1; i<=36 ; i++){
                            if (i==1 || i==3 || i==5 || i==7 || i==9 || i==12 || i==14 || i==16 || i==18 || i==19 || i==21 || i==23 || i==25 || i==27 || i==30 || i==32 || i==34 || i==36){
                                chiffre.push(i);
                            }
                        }
                    }
                    if (tabmises[i]=='couleur-noire'){
                        for (let i = 1; i<=36 ; i++){
                            if (i==2 || i==4 || i==6 || i==8 || i==10 || i==11 || i==13 || i==15 || i==17 || i==20 || i==22 || i==24 || i==26 || i==28 || i==29 || i==31 || i==33 || i==35){
                                chiffre.push(i);
                            }
                        }
                    }
                    
                    if (tabmises[i]=='jeton-manque'){
                        for (let i = 1; i<=18 ; i++){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='jeton-passe'){
                        for (let i = 19; i<=36 ; i++){
                            chiffre.push(i);
                        }
                    }
                    if (tabmises[i]=='jeton-pair'){
                        for (let i = 1; i<=36 ; i++){
                            if (i % 2 === 0) {
                                chiffre.push(i);
                            }
                        }
                    }
                    if (tabmises[i]=='jeton-impair'){
                        for (let i = 1; i<=36 ; i++){
                            if (i % 2 !== 0) {
                                chiffre.push(i);
                            }
                        }
                    }

                    
                }


                    if (chiffre[3]=='paris-exte'){
                        let caseprison = 'pas-prison';
                        if (chiffre[4]=='douzSimple-P' || chiffre[4]=='douzSimple-M' || chiffre[4]=='deuxDouz-P-M'){
                            if (chiffre[4]=='douzSimple-P' || chiffre[4]=='douzSimple-M'){
                                let idcase = chiffre[4].split('');
                                idcase = idcase[idcase.length - 1];
                                idcase = 'case-12' + idcase;
    
                                const choix = document.querySelector(`#${idcase}`);
                                console.log(idcase)
                                for (let i = 0 ; i<choix.childElementCount ; i++){
                                    if (choix.children[i].classList.contains("chaine") && tour0==0){
                                        caseprison = 'prison';
                                    } 
                                }
                            }
                            if (chiffre[4]=='deuxDouz-P-M'){
                                let idcase1 = chiffre[4].split('');
                                idcase1 = idcase1[idcase1.length - 3];
                                idcase1 = 'case-12' + idcase1;
    
                                const choix1 = document.querySelector(`#${idcase1}`);
                                console.log(choix1)
                                for (let i = 0 ; i<choix1.childElementCount ; i++){
                                    if (choix1.children[i].classList.contains("chaine") && tour0==0){
                                        caseprison = 'prison';
                                    } 
                                }
    
                                let idcase2 = chiffre[4].split('');
                                idcase2 = idcase2[idcase2.length - 1];
                                idcase2 = 'case-12' + idcase2;
    
                                const choix2 = document.querySelector(`#${idcase2}`);
                                console.log(choix2)
                                for (let i = 0 ; i<choix2.childElementCount ; i++){
                                    if (choix2.children[i].classList.contains("chaine") && tour0==0){
                                        caseprison = 'prison';
                                    } 
                                }
                            }
                            
                        } else if (chiffre[4]=='jeton-passe' || chiffre[4]=='jeton-manque' || chiffre[4]=='jeton-pair' || chiffre[4]=='jeton-impair' || chiffre[4]=='couleur-rouge' || chiffre[4]=='couleur-noire'){
                            let idcase = chiffre[4].split('');
                            var indextiret = idcase.indexOf('-')
                            idcase = idcase.slice(indextiret);
                            idcase = idcase.join('');
                            idcase = 'case' + idcase;
    
                            
                            const choix = document.querySelector(`#${idcase}`);
                            console.log(choix)
                            for (let i = 0 ; i<choix.childElementCount ; i++){
                                if (choix.children[i].classList.contains("chaine")){
                                    caseprison = 'prison';
                                    console.log("caseprison", caseprison)
                                } 
                                console.log("choix.children[i]", choix.children[i], i)
                            }
                            console.log("choix.childElementCount", choix.childElementCount)
                        }
                        console.log("caseprison", caseprison)
                        chiffre[2] = caseprison;
                    }
                
                
                
                tableaumises.push(chiffre);
                
            }
            
            console.log("mises : ",tableaumises)
            nbrmisetotal = nbrmisetotal + tableaumises.length;
            
            
            let miseprisonperdus = [];
            for (let i = 0; i<tableaumises.length ; i++){
                if (tableaumises[i][2]=='pas-prison'){
                    for (let j = 5; j<tableaumises[i].length; j++){
                        if (numerogagnant==tableaumises[i][j]){
                            
                            gagner.push(tableaumises[i])
                            
                        }
                    }
                }
                 else {
                    let pasgagner = false;
                    if (tableaumises[i][2]=='prison'){
                        
                        for (let j = 5; j<tableaumises[i].length; j++){
                            if (numerogagnant==tableaumises[i][j]){
                                gagner.push(tableaumises[i])
                                pasgagner = true;
                                
                            }
                        }
                        
                    }
                    if (!pasgagner){
                        miseprisonperdus = tableaumises[i]
                    } else {
                        miseprisonperdus = [];
                    }
                    console.log("miseprisonperdus", miseprisonperdus, "pasgagner : ", pasgagner);
                    if (miseprisonperdus.length!=0){
                        if (numerogagnant!=0){
                            gainsPrison = Math.round(parseInt(miseprisonperdus[1])/2);
                            
                        } else if (tour0==2 && numerogagnant==0){
                            gainsPrison = Math.round(parseInt(miseprisonperdus[1])/2);
                        }
                    }
                }
                
            }
            
            if (typeof gainsPrison === 'number'){
                textmises(miseprisonperdus, 'mise-prison-gains');
                document.querySelector("#unite-prison").textContent=gainsPrison;
            }
            console.log("gainsPrison", gainsPrison);
            console.log("gagner", gagner);

            if (gagner.length!=0){
                
                let mises = [];
                let parisprison = [];
                let sommeparisprison = 0;
                
                for (let i = 0; i<gagner.length; i++){
                    if (gagner[i][2]=='pas-prison'){
                        mises.push(gagner[i][0])
                    } else if (gagner[i][2]=='prison'){
                        parisprison.push(parseInt(gagner[i][1]))
                        mises.push(gagner[i][0])
                    }
                }
                let plusGrandeValeur = Math.max(...mises);
                
                
                if (parisprison.length!=0){
                    sommeparisprison = parisprison.reduce((acc, valeur) => acc + valeur, 0);
                    gainsPrison = sommeparisprison;
                }

                for (let i = 0; i<gagner.length; i++){
                    if (gagner[i][2]=='pas-prison'){
                        if (plusGrandeValeur==gagner[i][0]){
                            gains = parseInt(gagner[i][0] * parseInt(gagner[i][1]));
                            
                            for (let i = 0 ; i<tableaumises.length ; i++){
                                if (tableaumises[i][2]=='prison'){
                                    miseprisongagnante = tableaumises[i];
                                }
                            }
                            if (miseprisongagnante!=null){
                                gainsPrison = parseInt(miseprisongagnante[1]);
                            }
                            
                            misegagnante = gagner[i];
                            
                            
                        }
                    } 
                    if (gagner[i][2]=='prison'){
                        if (plusGrandeValeur==gagner[i][0]){
                            misegagnante = gagner[i];
                            gainsPrison = parseInt(gagner[i][1]);
                        }
                    }

                    
                }
                console.log("gainsPrison", gainsPrison)
                


                
  
                
            }
            if (typeof gainsPrison === 'number' && miseprisongagnante!=null){
                console.log("gainsPrison = nombre")
                textmises(miseprisongagnante, 'mise-prison-gains');
                document.querySelector("#unite-prison").textContent=gainsPrison;
            }
            if (typeof gainsPrison === 'number' && misegagnante[2]=='prison'){
                console.log("gainsPrison = nombre")
                textmises(misegagnante, 'mise-prison-gains');
                document.querySelector("#unite-prison").textContent=gainsPrison;
            }
            console.log("mise gagnante",gains, misegagnante);


            

            
            

            


            let miseperdantes = tableaumises.filter(tableau => !sontTableauxIdentiques(tableau, misegagnante, 4));
            console.log("miseperdantes", miseperdantes);

            nbrmiseperdante=nbrmiseperdante+miseperdantes.length;

            

           


            

            // Fonction pour comparer deux tableaux
            function sontTableauxIdentiques(tableau1, tableau2, n) {
                // Vérifier si les tableaux sont null
                if (tableau1 === null || tableau2 === null) {
                  return false;
                }
              
                // Comparer les premières n valeurs des deux tableaux
                for (let i = 0; i < n; i++) {
                  // Vérifier si les éléments sont undefined
                  if (tableau1[i] === undefined || tableau2[i] === undefined) {
                    return false;
                  }
              
                  if (tableau1[i] !== tableau2[i]) {
                    return false;
                  }
                }
              
                return true;
              }
            
            

  
            let idprison = null;
            if (gagner.length==0 && numerogagnant==0){
                if (tour0<2){
                    
                    
                    if (tour0==0){
                        for (let i = 0 ; i<tableaumises.length; i++){
                            if (tableaumises[i][2]=='pas-prison' && tableaumises[i][3]=='paris-exte'){
                                tableaumises[i][2]='prison';
                                console.log(tableaumises[i][4], "id jeton")
                                idprison = tableaumises[i][4];
                            }
                        }
                    }
                    
                    
                    console.log(idprison)
                    if (idprison!=null){
                        document.querySelector(`#${idprison}`).classList.add("prison")
                    }
                    if (
                        idprison=='douzSimple-P' || idprison=='douzSimple-M' || idprison=='deuxDouz-P-M'
                    ){
                        let lettre = null;
                        let typemiseid = idprison.split('');
                        let indextiret = idprison.indexOf('-');
                        typemiseid = typemiseid.slice(0, indextiret);
                        typemiseid = typemiseid.join('');
                        
                        if (typemiseid=='douzSimple'){
                            lettre = idprison.split('')[idprison.length - 1];
                            idprison='case-12' + lettre;

                            const caseprison = document.querySelector(`#${idprison}`);
                            const prison = document.createElement('div');
                            prison.classList.add('chaine');
                            caseprison.appendChild(prison);
                        } 
                        if (typemiseid=='deuxDouz'){
                            let lettre1 = idprison.split('')[idprison.length - 3];
                            let idprison1='case-12' + lettre1;
                            console.log(idprison1)
                            const caseprison1 = document.querySelector(`#${idprison1}`);
                            const prison1 = document.createElement('div');
                            prison1.classList.add('chaine');
                            caseprison1.appendChild(prison1);

                            let lettre2 = idprison.split('')[idprison.length - 1];
                            let idprison2='case-12' + lettre2;
                            console.log(idprison2)

                            const caseprison2 = document.querySelector(`#${idprison2}`);
                            const prison2 = document.createElement('div');
                            prison2.classList.add('chaine');
                            caseprison2.appendChild(prison2);

                            


                        } 
                        
                    } else if (
                        idprison=='couleur-rouge' || idprison=='couleur-noire' || idprison=='jeton-passe' ||
                        idprison=='jeton-manque' ||
                        idprison=='jeton-pair' ||
                        idprison=='jeton-impair' 
                    ){
                        let indextiret = idprison.indexOf('-');
                        idprison = idprison.split('');
                        idprison = idprison.slice(indextiret)
                        idprison = idprison.join('');
                        idprison= 'case' + idprison;

                        const caseprison = document.querySelector(`#${idprison}`);
                        const prison = document.createElement('div');
                        prison.classList.add('chaine');
                        caseprison.appendChild(prison);

                    }

                    
                    
                }
                
            } 

            
            if (tour0<2 && gagner.length==0){
                for (let i = 0; i < tableaumises.length; i++) {
                    if (tableaumises[i][2]=='prison' && tableaumises[i][3]=='paris-exte'){
                        miseprison=tableaumises[i];
                        console.log("Prison ! ", miseprison)
                    }
                    
                  }
            }
            
            if (tour0<2 && gagner.length==0){
                tableaumises = tableaumises.filter(tableau => !sontTableauxIdentiques(tableau, miseprison, 4));
            }
            if (tour0<3 && miseprison.length!=0){
                tour0++;
            } else {
                tour0=0;
            }
            if (tour0==3){
                tour0=0;
            }
            
            console.log("mise prison",miseprison)
            console.log("supprimer",tableaumises)
            console.log("tour0",tour0)
            
            if (gainsPrison!=0 && gainsPrison!=[]){
                document.querySelector("#unite-prison").textContent=gainsPrison;
            }

            textmises(gagner, 'mises-gagnantes');
            if (document.querySelector("#mises-gagnantes").childElementCount==0){
                const enfant = document.createElement('div');
                enfant.classList.add("mises-gag");
                enfant.textContent="Pas de mise gagnante :'(";
                document.querySelector("#mises-gagnantes").appendChild(enfant)
            }
            textmises(misegagnante, 'mise-gagnante');
            if (misegagnante[2]=='pas-prison'){
                textgains(misegagnante);
            }
            
            

            
            

            if (tour0==1){
                textmises(miseprison, 'mise-prison');
            }
            
            

            
            if (misegagnante.length!=0){
                if (misegagnante[2]=='pas-prison'){
                    setTimeout(() => {
                        
                        document.querySelector(".gains").classList.remove("none");

                        setTimeout(() => {
                            nbrjetontotal=nbrjetontotal+parseInt(document.querySelector("#gains-totaux").textContent)
                            nbrjeton=nbrjetontotal;
                            document.querySelector(".nombre-unite").textContent=nbrjeton;

                            document.querySelector(".addi-soustra").textContent="- "+parseInt(document.querySelector("#gains-totaux").textContent);
                            adsous('plus');

                            
                        }, 1000);
                        if (misegagnante.length!=0){
                            let tabmisegagetgains = []
                            tabmisegagetgains.push(document.querySelector("#mise-gagnante").textContent)
                            tabmisegagetgains.push(gaintotaux)
                            meilleurmisegagnante.push(tabmisegagetgains);
                            nbrmisegagnante++;
                        }
                        
                    }, 4*1000);
                    setTimeout(() => {
                        objetObservé.fermermenu = true;
                    }, 8*1000);
                }
                

                if (document.querySelector("#mise-prison").textContent!=""){
                    setTimeout(() => {
                        document.querySelector(".mises-prison").classList.remove("none");
                        document.querySelector(".ens-regle-0").classList.remove("none");
                    }, 8*1000);
                }
                if (document.querySelector("#mise-prison-gains").textContent!=""){
                    setTimeout(() => {
                        document.querySelector(".mises-prison").classList.remove("none");
                        document.querySelector(".gains-regle-zero").classList.remove("none");
                        document.querySelector(".chaine").remove();
                        document.querySelector(".prison").classList.remove("prison");
                        document.querySelector(".liste-prison").classList.remove("liste-prison");
                        document.querySelector(".mise-prison").textContent="";

                        setTimeout(() => {
                            nbrjetontotal=nbrjetontotal+parseInt(document.querySelector("#unite-prison").textContent)
                            nbrjeton=nbrjetontotal;
                            document.querySelector(".nombre-unite").textContent=nbrjeton;

                            document.querySelector(".addi-soustra").textContent="- "+parseInt(document.querySelector("#unite-prison").textContent);
                            adsous('plus');
                        }, 1000);
                    }, 8*1000);
                    setTimeout(() => {
                        objetObservé.fermermenu = true;
                    }, 12*1000);
                }
                if (misegagnante[2]=='prison'){
                    setTimeout(() => {
                        document.querySelector(".mises-prison").classList.remove("none");
                        document.querySelector(".gains-regle-zero").classList.remove("none");
                        document.querySelector(".chaine").remove();
                        document.querySelector(".prison").classList.remove("prison");
                        document.querySelector(".liste-prison").classList.remove("liste-prison");
                        document.querySelector(".mise-prison").textContent="";

                        setTimeout(() => {
                            nbrjetontotal=nbrjetontotal+parseInt(document.querySelector("#unite-prison").textContent)
                            nbrjeton=nbrjetontotal;
                            document.querySelector(".nombre-unite").textContent=nbrjeton;

                            document.querySelector(".addi-soustra").textContent="- "+parseInt(document.querySelector("#unite-prison").textContent);
                            adsous('plus');
                        }, 1000);

                        
                    }, 8*1000);
                    setTimeout(() => {
                        objetObservé.fermermenu = true;
                    }, 12*1000);
                }
            } else {
                if (document.querySelector("#mise-prison").textContent!=""){
                    setTimeout(() => {
                        document.querySelector(".mises-prison").classList.remove("none");
                        document.querySelector(".ens-regle-0").classList.remove("none");
                    }, 8*1000);
                } else if (document.querySelector("#mise-prison-gains").textContent!=""){
                    setTimeout(() => {
                        document.querySelector(".mises-prison").classList.remove("none");
                        document.querySelector(".gains-regle-zero").classList.remove("none");
                        document.querySelector(".chaine").remove();
                        document.querySelector(".prison").classList.remove("prison");
                        document.querySelector(".liste-prison").classList.remove("liste-prison");
                        document.querySelector(".mise-prison").textContent="";

                        setTimeout(() => {
                            nbrjetontotal=nbrjetontotal+parseInt(document.querySelector("#unite-prison").textContent)
                            nbrjeton=nbrjetontotal;
                            document.querySelector(".nombre-unite").textContent=nbrjeton;

                            document.querySelector(".addi-soustra").textContent="- "+parseInt(document.querySelector("#unite-prison").textContent);
                            adsous('plus');
                        }, 1000);
                    }, 6*1000);
                    setTimeout(() => {
                        objetObservé.fermermenu = true;
                    }, 10*1000);
                } else {
                    setTimeout(() => {
                        objetObservé.fermermenu = true;
                    }, 8*1000);
                }
                
            }
            

            

            
            
            

            
            

        }, 28*1000);

        setTimeout(() => {
            console.log("numerogagnant",numerogagnant);

            
            
            

        }, 32*1000);
    }
});




document.querySelector("#regle-partage").addEventListener("click", ()=>{
    document.querySelector(".chaine").remove();
    document.querySelector(".prison").classList.remove("prison");
    const lipris = document.querySelector(".liste-prison");
    if (lipris){
        document.querySelector(".liste-prison").classList.remove("liste-prison");
    }
    
    document.querySelector(".mise-prison").textContent="";
    gainsPrison=Math.round(parseInt(miseprison[1])/2)
    textmises(miseprison, 'mise-prison-gains');
    document.querySelector("#unite-prison").textContent=gainsPrison;
    document.querySelector(".info-croupier-6").textContent='Récupération de la mise avec la règle de "La Partage"';
    setTimeout(() => {
        nbrjetontotal=nbrjetontotal+parseInt(document.querySelector("#unite-prison").textContent)
        nbrjeton=nbrjetontotal;
        document.querySelector(".nombre-unite").textContent=nbrjeton;

        document.querySelector(".addi-soustra").textContent="- "+parseInt(document.querySelector("#unite-prison").textContent);
        adsous('plus');
    }, 1000);
    document.querySelector(".ens-regle-0").classList.add("none");
    document.querySelector(".mises-prison").classList.remove("none");
    document.querySelector(".gains-regle-zero").classList.remove("none");
    tour0=0;
    setTimeout(() => {
        objetObservé.fermermenu = true;
    }, 4*1000);
    
})

document.querySelector("#regle-prison").addEventListener("click", ()=>{
    document.querySelector(".mises-prison").classList.add("none");
    document.querySelector(".gains-gagnantes").classList.add("none");
    objetObservé.fermermenu = true;
    nbrmiseprison++;
})
    




