const bandebille = document.querySelector(".ens-bille");
const bille = document.querySelector(".bille");


r = 120;
b = 15;
function reinitialiser(){
    
    r = 120;
    b = 15;
    bandebille.style.transform = "rotate(" + r + "deg)";
    bille.style.bottom= b + "%";
}
reinitialiser();

function rotatation(){
    bandebille.style.transform = "rotate(" + r + "deg)";
}
function bottom(){
    bille.style.bottom= b + "%";
}

rot = 1;

let mouvbilleboucle;

function mouvbille(){
        if (rot == 1){
            if (r>-70){
                rotatation()
                r--;
            }
            if (r>60){
                if (b >3.8){
                    bottom()
                    b=b-.2
                } 
            }
            if (r<=60 && r >-50){
                if (b < 20){
                    bottom()
                    b=b+.2
                } 
            }
            if (r<=-50 && r>-70){
                if (b > 18){
                    bottom()
                    b=b-.1
                } 
            }
    
            if (r==-70){
                setTimeout(() => {
                    rot = 2;
                }, 1000);
            }
        }
        if (rot == 2){
            if (b>10){
                bottom()
                b=b-.09
            }
            if (r<50){
                rotatation()
                r++;
            }
            if (r==50){
                setTimeout(() => {
                    rot = 3;
                }, 500);
            }
        }
        if (rot == 3){
            if (r>30){
                rotatation()
                r=r-.2
                if (b>3.8){
                    bottom()
                    b=b-.07
                }
            }
    
            if (Math.round(r)==30){
                setTimeout(() => {
                    rot = 4
                }, 50);
            }
        }
        if (rot == 4){
            if (r<60){
                rotatation()
                r=r+.5
                if (b<15){
                    bottom()
                    b=b+.5
                }
            }
            setTimeout(() => {
                rot = 5
            }, 500);
        }
        if (rot == 5){
            if (r<73){
                rotatation()
                r=r+.2
                if (b>0){
                    bottom()
                    b=b-.15
                }
            }
            
        }
    
        mouvbilleboucle = setTimeout(() => {
            mouvbille()
        }, 15);
    }




col = 0;
var targetDiv2 =""

function collisiondiv() {
  if (col == 0) {
    function getCenterPagePosition(el) {
      const rect = el.getBoundingClientRect();
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      const centerX = rect.left + scrollLeft + rect.width / 2;
      const centerY = rect.top + scrollTop + rect.height / 2;

      return { x: centerX, y: centerY };
    }

    function getDistance(point1, point2) {
      const dx = point2.x - point1.x;
      const dy = point2.y - point1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function areCirclesColliding(center1, radius1, center2, radius2) {
      const distance = getDistance(center1, center2);
      const sumOfRadii = radius1 + radius2;
      return distance < sumOfRadii;
    }

    // Récupération des coordonnées du centre et du rayon du cercle 1
    const targetDiv1 = document.querySelector(".bille");
    const center1 = getCenterPagePosition(targetDiv1);
    const radius1 = targetDiv1.offsetWidth / 2;

    // Récupération des coordonnées du centre et du rayon du cercle 2
    
    const center2 = getCenterPagePosition(targetDiv2);
    const radius2 = targetDiv2.offsetWidth / 2;

    // Vérification de la collision entre les deux cercles
    const collision = areCirclesColliding(center1, radius1, center2, radius2);



    if (collision) {
      col = 1;
      nombre = id
      bille.style.display="none";
      const billenum = document.createElement("div");
      billenum.classList.add("bille-num")
      targetDiv2.appendChild(billenum);
      setTimeout(() => {
        document.querySelector(".numero-tire").textContent=nombre;
      }, 7*1000);
    } 
    col = 0;


  }
}
let colnumeroboucle;

function colnumero(){
    const roue = document.querySelector(".structure-roue")
    for (let i = 1; i<=37 ; i++){
        const numero = roue.querySelector(`.numero:nth-child(${i})`)
        id = i-1;
        targetDiv2 = numero.querySelector(".petit-numero");
        collisiondiv()
    }
    if (col==0){
        colnumeroboucle = setTimeout(() => {
            colnumero()
        }, .5);
    }
}




const main = document.querySelector(".main");
main.style.top="-55%";
const billemain = document.querySelector(".bille-main");
billemain.style.top="52%";
bille.classList.add("none");
billemain.classList.remove("none");
document.querySelector(".btn-valider-toutes-mises").addEventListener("click", () => {
    if (document.querySelector(".liste-mises").childElementCount!=0){
        const billesurnum = document.querySelector(".bille-num");
        if (billesurnum){
            billesurnum.remove();
        }
        const main = document.querySelector(".main");
        main.style.top="-55%";
        const billemain = document.querySelector(".bille-main");
        billemain.style.top="52%";
        bille.classList.add("none");
        billemain.classList.remove("none");
        setTimeout(() => {
            main.style.top="-10%";
            setTimeout(() => {
                billemain.style.top="-11%"
            }, 600);
            setTimeout(() => {
                billemain.classList.add("none");
                bille.classList.remove("none");
                billemain.style.top="52%";
                
                setTimeout(() => {
                    main.style.top="-55%";
                }, 300);

                clearTimeout(mouvbilleboucle);
                clearTimeout(colnumeroboucle);
                mouvbilleboucle = null;
                colnumeroboucle = null;

                rot = 1;
                col==0;
                targetDiv2 ="";
                bille.style.display="block";
                // Sélectionnez tous les éléments avec la classe "bille-num"
                var elements = document.getElementsByClassName("bille-num");

                // Vérifiez s'il y a des éléments à supprimer
                if (elements.length > 0) {
                    // Supprimez le premier élément avec la classe "bille-num" du DOM
                    elements[0].parentNode.removeChild(elements[0]);
                }
                reinitialiser();

                setTimeout(() => {
                    mouvbilleTimeout = setTimeout(() => {
                        mouvbille();
                    }, 1);
                    colnumeroTimeout = setTimeout(() => {
                        colnumero();
                    }, 10 * 1000);
                }, 1);
            }, 600+800);
        }, 7*1000);
    }
    
})