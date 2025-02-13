
let numerogagnant = null;



let tour0 = 0;

let targettabl = [];

let activerprison = null;

let gainspartage = 0;

let tousparisprison = [];
let gains = null;

let fermermenu = false

const element = document.querySelectorAll(".jeton");
for (let i = 0; i<document.querySelectorAll(".jeton").length; i++){
    targettabl.push(element[i].id)
}

let miseprison = null

document.querySelector(".btn-valider-toutes-mises").addEventListener("click", ()=>{
    let tableaumises = [];
    let tabmises = [];
    gains = null;
    let misegagnante = null;
    miseprison = null
    tousparisprison = [];

    
    
    if (listemise.childElementCount!=0){
        setTimeout(() => {

            document.querySelector(".numero-tire").textContent=0;
            
            document.querySelector(".annonce-resultat").textContent = document.querySelector(".resultat-roue").textContent; 
            numerogagnant=document.querySelector(".numero-tire").textContent;

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
                    
                    chiffre.push(document.querySelector(`#${tabmises[i]}`).children[0].textContent);


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
                    chiffre.push(document.querySelector(`#${tabmises[i]}`).children[0].textContent)

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
                            
                        } else {
                            let idcase = chiffre[4].split('');
                            var indextiret = idcase.indexOf('-')
                            idcase = idcase.slice(indextiret);
                            idcase = idcase.join('');
                            idcase = 'case' + idcase;
    
                            
                            const choix = document.querySelector(`#${idcase}`);
                            console.log(choix)
                            for (let i = 0 ; i<choix.childElementCount ; i++){
                                if (choix.children[i].classList.contains("chaine") && tour0==0){
                                    caseprison = 'prison';
                                } 
                            }
                        }
                        
                        chiffre[2] = caseprison;
                    }
                
                
                
                tableaumises.push(chiffre);
                
            }
            
            console.log("mises : ",tableaumises)

            
            let gagner = [];
            let miseprisonperdus = [];
            for (let i = 0; i<tableaumises.length ; i++){
                if (tableaumises[i][2]=='pas-prison'){
                    for (let j = 5; j<tableaumises[i].length; j++){
                        if (numerogagnant==tableaumises[i][j]){
                            let ensemblemise = [];
                            ensemblemise.push(tableaumises[i][0])
                            ensemblemise.push(tableaumises[i][1])
                            ensemblemise.push(tableaumises[i][2])
                            ensemblemise.push(tableaumises[i][3])
    
                            if (tableaumises[i][4]=='plein' || tableaumises[i][4]=='chev' || tableaumises[i][4]=='transP' || tableaumises[i][4]=='carre' || tableaumises[i][4]=='sixain'){
                                let idmise = tableaumises[i];
                                idmise = idmise.slice(4);
                                idmise = idmise.map((valeur, index) => (index === 0 ? `${valeur}` : `-${valeur}`)).join('');
                                ensemblemise.push(idmise);
                            } else {
                                ensemblemise.push(tableaumises[i][4]);
                            }
                            
                            gagner.push(ensemblemise)
                            
                        }
                    }
                }
                 else {
                    if (tableaumises[i][2]=='prison'){
                        let pasgagner = null;
                        for (let j = 5; j<tableaumises[i].length; j++){
                            if (numerogagnant==tableaumises[i][j]){
                                let ensemblemise = [];
                                ensemblemise.push(tableaumises[i][0])
                                ensemblemise.push(tableaumises[i][1])
                                ensemblemise.push(tableaumises[i][2])
                                ensemblemise.push(tableaumises[i][3])
                                ensemblemise.push(tableaumises[i][4]);
                                gagner.push(ensemblemise)
                                
                            } else {
                                pasgagner = false;
                                
                            }
                        }
                        if (!pasgagner){
                            miseprisonperdus.push(parseInt(tableaumises[i][1]))
                        }
                    }
                    console.log("miseprisonperdus", miseprisonperdus);
                    if (miseprisonperdus.length!=0){
                        if (numerogagnant!=0 && tour0<3){
                            gains = (miseprisonperdus.reduce((acc, valeur) => acc + valeur, 0))/2;
                        } else if (tour0==3){
                            gains = (miseprisonperdus.reduce((acc, valeur) => acc + valeur, 0))/2;
                        }
                    }
                }
                
            }
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
                    }
                }
                let plusGrandeValeur = Math.max(...mises);
                
                
                if (parisprison.length!=0){
                    sommeparisprison = parisprison.reduce((acc, valeur) => acc + valeur, 0);
                    tousparisprison = sommeparisprison;
                }

                for (let i = 0; i<gagner.length; i++){
                    if (gagner[i][2]=='pas-prison'){
                        if (plusGrandeValeur==gagner[i][0]){
                            gains = gagner[i][0] * parseInt(gagner[i][1]);
                            
                            for (let i = 0 ; i<tableaumises.length ; i++){
                                if (tableaumises[i][2]=='prison'){
                                    tousparisprison.push(parseInt(tableaumises[i][1]))
                                }
                            }
                            tousparisprison = tousparisprison.reduce((acc, valeur) => acc + valeur, 0);
                            misegagnante = gagner[i];
                            
                            
                        }
                    } 
                    
                }
                document.querySelector("#multiplicateur").textContent=misegagnante[0];
                if (!isNaN(tousparisprison)){
                    document.querySelector("#gains-prison").textContent=tousparisprison;
                    document.querySelector(".gains-prison").classList.remove("none");
                    document.querySelector("#nbr-mise-gagnante").textContent=gains + tousparisprison;
                } else {
                    document.querySelector("#nbr-mise-gagnante").textContent=gains;
                }

                
  
                
            }
            console.log("mise gagnante",gains, misegagnante);
            const enfantmisegagnante = document.createElement('div');
            enfantmisegagnante.classList.add("li-listes");

            if (misegagnante==null){
                const enfantmisegagnante = document.createElement('div');
                enfantmisegagnante.classList.add("li-listes");
                enfantmisegagnante.textContent="Pas de mise gagnante";
                document.querySelector('#liste-mise-gagnante').appendChild(enfantmisegagnante)
            }

            if (misegagnante!=null){
                let idgagnante = misegagnante[misegagnante.length - 1].split('');
                var indextiretidgagnante = idgagnante.indexOf('-');
                let typeidgagnante = idgagnante.slice(0, indextiretidgagnante);
                let numidgagnante = [];
                for (let i = 0; i < idgagnante.length; i++) {
                    // Vérifiez si le caractère est un chiffre
                    if (!isNaN(idgagnante[i]) && isNaN(idgagnante[i+1]) ) {
                        // Ajoutez le chiffre au tableau "numero"
                        numidgagnante.push(Number(idgagnante[i]));
                    }
                    else if (!isNaN(idgagnante[i]) && !isNaN(idgagnante[i+1])) {
                        // Ajoutez le chiffre au tableau "numero"
                        numidgagnante.push(Number(idgagnante[i] + idgagnante[i+1]));
                        i=i+1;
                    }
                    
                }
                typeidgagnante = typeidgagnante.join('');
                console.log("typeidgagnante", typeidgagnante, "numidgagnante : ", numidgagnante)
                let resultatgagnante = null;
                if (typeidgagnante=='plein'){
                    resultatgagnante='Mise en plein sur le numéro ' + numidgagnante + ' : ' + misegagnante[1] + ' unités';
                }
                if (typeidgagnante=='chev'){
                    resultatgagnante='Mise à cheval sur les numéros ' + numidgagnante + ' : ' + misegagnante[1] + ' unités';
                }
                if (typeidgagnante=='transP'){
                    resultatgagnante='Mise en transversale pleine sur les numéros ' + numidgagnante + ' : ' + misegagnante[1] + ' unités';
                }
                if (typeidgagnante=='carre'){
                    resultatgagnante='Mise en carré sur les numéros ' + numidgagnante + ' : ' + misegagnante[1] + ' unités';
                }
                if (typeidgagnante=='sixain'){
                    resultatgagnante='Mise en sixain sur les numéros ' + numidgagnante + ' : ' + misegagnante[1] + ' unités';
                }

                if (misegagnante[misegagnante.length - 1]=='couleur-rouge'){
                    resultatgagnante='Mise sur les numéros rouges : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='couleur-noire'){
                    resultatgagnante='Mise sur les numéros noirs : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='jeton-passe'){
                    resultatgagnante='Mise sur passe : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='jeton-manque'){
                    resultatgagnante='Mise sur manque : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='jeton-pair'){
                    resultatgagnante='Mise sur les numéros pairs : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='jeton-impair'){
                    resultatgagnante='Mise sur les numéros impairs : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='colSimple-1'){
                    resultatgagnante='Mise sur la colonne 1 : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='colSimple-2'){
                    resultatgagnante='Mise sur la colonne 2 : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='colSimple-3'){
                    resultatgagnante='Mise sur la colonne 3 : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='deuxCol-1-2'){
                    resultatgagnante='Mise sur les colonnes 1 et 2 : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='deuxCol-2-3'){
                    resultatgagnante='Mise sur les colonnes 1 et 2 : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='douzSimple-P'){
                    resultatgagnante='Mise sur la douzaine P : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='douzSimple-M'){
                    resultatgagnante='Mise sur la douzaine M : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='douzSimple-D'){
                    resultatgagnante='Mise sur la douzaine D : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='deuxDouz-P-M'){
                    resultatgagnante='Mise sur les douzaines P et M : ' + misegagnante[1] + ' unités';
                }
                if (misegagnante[misegagnante.length - 1]=='deuxDouz-M-D'){
                    resultatgagnante='Mise sur les douzaines M et D : ' + misegagnante[1] + ' unités';
                }

                enfantmisegagnante.textContent=resultatgagnante;

                document.querySelector('.info-croupier-9').textContent=resultatgagnante;
                
                document.querySelector('#liste-mise-gagnante').appendChild(enfantmisegagnante)
            }
            

            


            let miseperdantes = tableaumises.filter(tableau => !sontTableauxIdentiques(tableau, misegagnante, 4));
            console.log("miseperdantes", miseperdantes)

            if (miseperdantes==null){
                const enfantmiseperdante = document.createElement('div');
                enfantmiseperdante.classList.add("li-listes");
                enfantmiseperdante.textContent="Pas de mises perdantes";
                document.querySelector('#liste-mise-perdante').appendChild(enfantmiseperdante)
            }
            
            for (let i = 0 ; i<miseperdantes.length ; i++){
                const enfantmiseperdante = document.createElement('div');
                enfantmiseperdante.classList.add("li-listes");
                let idcomplet = null;

                if (
                    miseperdantes[i][4]=='plein' || 
                    miseperdantes[i][4]=='chev' || 
                    miseperdantes[i][4]=='transP' || 
                    miseperdantes[i][4]=='carre' || 
                    miseperdantes[i][4]=='sixain'
                ){
                    idcomplet = miseperdantes[i].slice(5);
                    if (miseperdantes[i][4]=='plein'){
                        idcomplet = 'Mise en plein sur le numéro ' + idcomplet + ' : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='chev'){
                        idcomplet = 'Mise à cheval sur les numéros ' + idcomplet + ' : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='transP'){
                        idcomplet = 'Mise en transversale pleine sur les numéros ' + idcomplet + ' : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='carre'){
                        idcomplet = 'Mise en carré sur les numéros ' + idcomplet + ' : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='sixain'){
                        idcomplet = 'Mise en sixain sur les numéros ' + idcomplet + ' : ' + miseperdantes[i][1] + ' unités';
                    }
                } else {
                    if (miseperdantes[i][4]=='couleur-rouge'){
                        idcomplet = 'Mise sur les numéros rouges : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='couleur-noire'){
                        idcomplet = 'Mise sur les numéros noirs : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='jeton-passe'){
                        idcomplet = 'Mise sur passe : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='jeton-manque'){
                        idcomplet = 'Mise sur manque : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='jeton-pair'){
                        idcomplet = 'Mise sur les numéros pairs : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='jeton-impair'){
                        idcomplet = 'Mise sur les numéros impairs : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='colSimple-1'){
                        idcomplet = 'Mise sur la colonne 1 : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='colSimple-2'){
                        idcomplet = 'Mise sur la colonne 2 : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='colSimple-3'){
                        idcomplet = 'Mise sur la colonne 3 : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='deuxCol-1-2'){
                        idcomplet = 'Mise sur les colonnes 1 et 2 : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='deuxCol-2-3'){
                        idcomplet = 'Mise sur les colonnes 2 et 3 : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='douzSimple-P'){
                        idcomplet = 'Mise sur la douzaine P : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='douzSimple-M'){
                        idcomplet = 'Mise sur la douzaine M : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='douzSimple-D'){
                        idcomplet = 'Mise sur la douzaine D : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='deuxDouz-P-M'){
                        idcomplet = 'Mise sur les douzaines P et M : ' + miseperdantes[i][1] + ' unités';
                    }
                    if (miseperdantes[i][4]=='deuxDouz-M-D'){
                        idcomplet = 'Mise sur les douzaines M et D : ' + miseperdantes[i][1] + ' unités';
                    }
                    
                }
                enfantmiseperdante.textContent=idcomplet;
                document.querySelector('#liste-mise-perdante').appendChild(enfantmiseperdante)
                

            }

            console.log("mises perdantes",gains, miseperdantes)


            

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
            
            

  
            if (gagner.length==0 && numerogagnant==0){
                if (tour0<3){
                    
                    let idprison = null;
                    if (tour0==0){
                        for (let i = 0 ; i<tableaumises.length; i++){
                            if (tableaumises[i][2]=='pas-prison' && tableaumises[i][3]=='paris-exte'){
                                tableaumises[i][2]='prison';
                                console.log(tableaumises[i][4], "id jeton")
                                idprison = tableaumises[i][4];
                            }
                        }
                    }
                    
                    tour0++;
                    console.log(idprison)
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

            
            if (tour0<3 && gagner.length==0){
                for (let i = 0; i < tableaumises.length; i++) {
                    if (tableaumises[i][2]=='prison' && tableaumises[i][3]=='paris-exte'){
                        miseprison=tableaumises[i];
                        console.log("Prison ! ", miseprison)
                    }
                    
                  }
            }
            if (miseprison!=null){
                console.log("miseprison!=null ")
                const enfantmiseprison = document.createElement('div');
                enfantmiseprison.classList.add("li-listes");
                if (miseprison[4]=='douzSimple-P'){
                    enfantmiseprison.textContent='Mise sur la douzaine P : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='douzSimple-M'){
                    enfantmiseprison.textContent='Mise sur la douzaine M : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='deuxDouz-P-M'){
                    enfantmiseprison.textContent='Mise sur les douzaines P et M : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='couleur-rouge'){
                    enfantmiseprison.textContent='Mise sur les numéros rouges : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='couleur-noire'){
                    enfantmiseprison.textContent='Mise sur les numéros noires : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='jeton-pair'){
                    enfantmiseprison.textContent='Mise sur les numéros pairs : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='jeton-impair'){
                    enfantmiseprison.textContent='Mise sur les numéros impairs : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='jeton-passe'){
                    enfantmiseprison.textContent='Mise sur passe : ' + miseprison[1] + ' unités';
                }
                if (miseprison[4]=='jeton-manque'){
                    enfantmiseprison.textContent='Mise sur manque : ' + miseprison[1] + ' unités';
                }

                document.querySelector("#liste-mise-regle-0").appendChild(enfantmiseprison);
                enfantmiseprison.classList.replace("li-listes", "mises");
                enfantmiseprison.classList.add("prison");
                document.querySelector(".liste-mises").appendChild(enfantmiseprison);
                document.querySelector(`#${miseprison[4]}`).classList.add("mise-prison");
                nbrmise=1;
            }
            if (tour0<3 && gagner.length==0){
                tableaumises = tableaumises.filter(tableau => !sontTableauxIdentiques(tableau, miseprison, 4));
            }
            if (tour0==3){
                tour0=0;
            }
            console.log("mise prison",miseprison)
            console.log("supprimer",tableaumises)
            console.log("tour0",tour0)
            

            
            

        }, 28*1000);

        setTimeout(() => {
            console.log("numerogagnant",numerogagnant);
            document.querySelector('.info-gains-1').classList.remove("none");
            

            setTimeout(() => {
                if (document.querySelector('#liste-mise-perdante').childElementCount!=0){
                    setTimeout(() => {
                        document.querySelector('.info-croupier-4').classList.remove("none");
                    }, 2*1000);
                    setTimeout(() => {
                        document.querySelector('#liste-mise-perdante').classList.remove("none");
                    }, 4*1000);
                }
    
                if (document.querySelector('#liste-mise-gagnante').childElementCount!=0){
                    setTimeout(() => {
                        document.querySelector('.info-croupier-5').classList.remove("none");
                    }, 6*1000);
                    setTimeout(() => {
                        document.querySelector('#liste-mise-gagnante').classList.remove("none");
                    }, 8*1000);
                }
                
                if (document.querySelector('#liste-mise-regle-0').childElementCount!=0){
                    setTimeout(() => {
                        document.querySelector('#ens-regle-0').classList.remove("none");
                        document.querySelector('.info-croupier-6').classList.remove("none");
                    }, 10*1000);
                    setTimeout(() => {
                        document.querySelector('#liste-mise-regle-0').classList.remove("none");
                    }, 12*1000);
                    setTimeout(() => {
                        document.querySelector('.info-croupier-7').classList.remove("none");
                        document.querySelector('.regle-zero').classList.remove("none");
                    }, 14*1000);
                } else {
                    setTimeout(() => {
                        if (document.querySelector('#liste-mise-gagnante').childElementCount!=0){
                            document.querySelector('.info-gains-1').classList.add("none");
                            document.querySelector('.info-gains-2').classList.remove("none");
                            setTimeout(() => {
                                document.querySelector('.info-croupier-8').classList.remove("none");
                            }, 2*1000);
                            setTimeout(() => {
                                document.querySelector('.info-croupier-9').classList.remove("none");
                            }, 4*1000);
                            setTimeout(() => {
                                document.querySelector('.info-croupier-10').classList.remove("none");
                            }, 6*1000);
                            setTimeout(() => {
                                document.querySelector('.info-croupier-11').classList.remove("none");
                            }, 8*1000);
                            setTimeout(() => {
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
                                setTimeout(() => {
                                    document.querySelector(".info-roue").style.left="0%";
                                    document.querySelector(".info-grille").style.left="0%";
                                    document.querySelector(".info-gains").style.left="0%";
                                    document.querySelector(".info-gain-1").classList.add("none");
                                    document.querySelector(".info-gain-2").classList.add("none");
                                }, 3050);
                            }, 12*1000);
                        } else {
                            
                        }
                        
                        
                    }, 12*1000);
                }
            }, 4*1000);
            
            

        }, 32*1000);
    }
});

document.querySelector("#regle-partage").addEventListener("click", ()=>{
    nbrjetontotal = nbrjetontotal + parseInt(miseprison[1])/2;
    document.querySelector(".chaine").remove();
    document.querySelector(".mise-prison").classList.remove('mise-prison');
    document.querySelector(".prison").classList.remove('prison');
    if (document.querySelector('#liste-mise-gagnante').childElementCount!=0){
        document.querySelector('.info-gains-1').classList.add("none");
        document.querySelector('.info-gains-2').classList.remove("none");
        setTimeout(() => {
            document.querySelector('.info-croupier-8').classList.remove("none");
        }, 2*1000);
        setTimeout(() => {
            document.querySelector('.info-croupier-9').classList.remove("none");
        }, 4*1000);
        setTimeout(() => {
            document.querySelector('.info-croupier-10').classList.remove("none");
        }, 6*1000);
        setTimeout(() => {
            document.querySelector('.info-croupier-11').classList.remove("none");
        }, 8*1000);
        setTimeout(() => {
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
            setTimeout(() => {
                document.querySelector(".info-roue").style.left="0%";
                document.querySelector(".info-grille").style.left="0%";
                document.querySelector(".info-gains").style.left="0%";
                document.querySelector(".info-gain-1").classList.add("none");
                document.querySelector(".info-gain-2").classList.add("none");
            }, 3050);
        }, 12*1000);
    }

})

document.querySelector("#regle-prison").addEventListener("click", ()=>{
    if (document.querySelector('#liste-mise-gagnante').childElementCount!=0){
        document.querySelector('.info-gains-1').classList.add("none");
        document.querySelector('.info-gains-2').classList.remove("none");
        setTimeout(() => {
            document.querySelector('.info-croupier-8').classList.remove("none");
        }, 2*1000);
        setTimeout(() => {
            document.querySelector('.info-croupier-9').classList.remove("none");
        }, 4*1000);
        setTimeout(() => {
            document.querySelector('.info-croupier-10').classList.remove("none");
        }, 6*1000);
        setTimeout(() => {
            document.querySelector('.info-croupier-11').classList.remove("none");
        }, 8*1000);
        setTimeout(() => {
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
            setTimeout(() => {
                document.querySelector(".info-roue").style.left="0%";
                document.querySelector(".info-grille").style.left="0%";
                document.querySelector(".info-gains").style.left="0%";
                document.querySelector(".info-gain-1").classList.add("none");
                document.querySelector(".info-gain-2").classList.add("none");
            }, 3050);
        }, 12*1000);
    }

})