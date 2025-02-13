id = null;
let lengthid = "";

function recuperation() {
    numero = [];
    for (let i = 0; i < id.length; i++) {
        // Vérifiez si le caractère est un chiffre
        if (!isNaN(id[i]) && isNaN(id[i+1]) ) {
            // Ajoutez le chiffre au tableau "numero"
            numero.push(Number(id[i]));
        }
        else if (!isNaN(id[i]) && !isNaN(id[i+1])) {
            // Ajoutez le chiffre au tableau "numero"
            numero.push(Number(id[i] + id[i+1]));
            i=i+1;
        }
        
    }
    lenghtnumero = numero.length;
    for (let i = 0; i<lenghtnumero; i++){
        document.querySelector(`#case-num${numero[i]}`).classList.remove("case-op0-5")
    }
    

    

}


document.querySelectorAll(".jeton-inte").forEach(jeton => {
    jeton.addEventListener("click", () => {
        if (jeton.classList.contains("targetjeton")){
            document.querySelectorAll(".choix").forEach(choix=>{
                choix.classList.add("case-op0-5");
            })
            id = jeton.id;
            recuperation();
        }
    });  
});


id_jetonexte = null;
function parisexterieurs(){
    if (id_jetonexte=="couleur-rouge"){
        document.querySelector(`#case-rouge`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            const casenum = document.querySelector(`#case-num${i}`);
            if (casenum.classList.contains("case-couleur-rouge")){
                casenum.classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="couleur-noire"){
        document.querySelector(`#case-noire`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            const casenum = document.querySelector(`#case-num${i}`);
            if (!casenum.classList.contains("case-couleur-rouge")){
                casenum.classList.remove("case-op0-5");
            }
        }
    }

    if (id_jetonexte=="colSimple-1"){
        document.querySelector(`#case-colonne1`).classList.remove("case-op0-5");
        document.querySelector(`#case-num0`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id==1 || id==4 || id==7 || id==10 || id==13 || id==16 || id==19 || id==22 || id==25 || id==28 || id==31 || id==34){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="colSimple-2"){
        document.querySelector(`#case-colonne2`).classList.remove("case-op0-5");
        document.querySelector(`#case-num0`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id==2 || id==5 || id==8 || id==11 || id==14 || id==17 || id==20 || id==23 || id==26 || id==29 || id==32 || id==35){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="colSimple-3"){
        document.querySelector(`#case-colonne3`).classList.remove("case-op0-5");
        document.querySelector(`#case-num0`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id==3 || id==6 || id==9 || id==12 || id==15 || id==18 || id==21 || id==24 || id==27 || id==30 || id==33 || id==36){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }

    if (id_jetonexte=="deuxCol-1-2"){
        document.querySelector(`#case-colonne1`).classList.remove("case-op0-5");
        document.querySelector(`#case-colonne2`).classList.remove("case-op0-5");
        document.querySelector(`#case-num0`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id==1 || id==4 || id==7 || id==10 || id==13 || id==16 || id==19 || id==22 || id==25 || id==28 || id==31 || id==34 || id==2 || id==5 || id==8 || id==11 || id==14 || id==17 || id==20 || id==23 || id==26 || id==29 || id==32 || id==35){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="deuxCol-2-3"){
        document.querySelector(`#case-colonne2`).classList.remove("case-op0-5");
        document.querySelector(`#case-colonne3`).classList.remove("case-op0-5");
        document.querySelector(`#case-num0`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id==2 || id==5 || id==8 || id==11 || id==14 || id==17 || id==20 || id==23 || id==26 || id==29 || id==32 || id==35 || id==3 || id==6 || id==9 || id==12 || id==15 || id==18 || id==21 || id==24 || id==27 || id==30 || id==33 || id==36){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }

    if (id_jetonexte=="douzSimple-P"){
        document.querySelector(`#case-12P`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id<=12){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="douzSimple-M"){
        document.querySelector(`#case-12M`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id>12 && id<=24){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="douzSimple-D"){
        document.querySelector(`#case-12D`).classList.remove("case-op0-5");
        document.querySelector(`#case-num0`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id>24){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }

    if (id_jetonexte=="deuxDouz-P-M"){
        document.querySelector(`#case-12P`).classList.remove("case-op0-5");
        document.querySelector(`#case-12M`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id<=24){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="deuxDouz-M-D"){
        document.querySelector(`#case-12M`).classList.remove("case-op0-5");
        document.querySelector(`#case-12D`).classList.remove("case-op0-5");
        document.querySelector(`#case-num0`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id>12){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }

    if (id_jetonexte=="jeton-pair"){
        document.querySelector(`#case-pair`).classList.remove("case-op0-5");
        let numero = [];
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            numero.push(+id);
        }
        for (let i = 0; i<numero.length ; i++){
            if (numero[i] % 2 === 0) {
                document.querySelector(`#case-num${i+1}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="jeton-impair"){
        document.querySelector(`#case-impair`).classList.remove("case-op0-5");
        let numero = [];
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            numero.push(+id);
        }
        for (let i = 0; i<numero.length ; i++){
            if (numero[i] % 2 !== 0) {
                document.querySelector(`#case-num${i+1}`).classList.remove("case-op0-5");
            }
        }
    }

    if (id_jetonexte=="jeton-manque"){
        document.querySelector(`#case-manque`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id<=18){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
    if (id_jetonexte=="jeton-passe"){
        document.querySelector(`#case-passe`).classList.remove("case-op0-5");
        for (let i = 1; i<=36 ; i++){
            let id = document.querySelector(`#case-num${i}`).id;
            id = id.slice(8);
            if (id>18){
                document.querySelector(`#case-num${i}`).classList.remove("case-op0-5");
            }
        }
    }
}


document.querySelectorAll(".jeton-exte").forEach(jeton => {
    jeton.addEventListener("click", () => {
        if (jeton.classList.contains("targetjeton")){
            document.querySelectorAll(".choix").forEach(choix=>{
                choix.classList.add("case-op0-5");
            });
            id_jetonexte = jeton.id;
            parisexterieurs();
        }
    });  
});


