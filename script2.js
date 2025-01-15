// constante operateur et événement
const egal = document.getElementById("égal");
egal.addEventListener("click", () => {
    calcul();
});
const plus2 = document.getElementById("plus2");
plus.addEventListener("click", () => {
    fnctAffichage(plus2);
});

// constante affichage et result
const result2 = document.getElementById("result2");
const affichage = document.getElementById("affichage");

// constante bouton valeure
let listBtn= document.getElementsByClassName("btn");
console.log(listBtn);
function fnctEventBtn(){
    for (let btn of listBtn){
        btn.addEventListener("click", () => {
            fnctAffichage(btn);
        })
    };
};

// fonction calcul
function calcul(){    
    a = affichage.textContent;
    const resultat2 = math.evaluate(a);
    result2.textContent = resultat2;
}

// fonction affichage
function fnctAffichage(btn){
    let btnVal = btn.value;
    affichage.textContent += btnVal;
}

fnctEventBtn();