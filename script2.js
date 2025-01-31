// constante operateur et événement (egal et reset)
const egal = document.getElementById("égal");

egal.addEventListener("click", () => {
    calcul();
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", ()=> {
    result2.textContent = "";
    affichage.textContent = "";
})

// constante affichage et result
const result2 = document.getElementById("result");
const affichage = document.getElementById("affichage");

// constante bouton valeure et événement
let listBtn= document.getElementsByClassName("btn");
function fnctEventBtn(){
    for (let btn of listBtn){
        btn.addEventListener("click", () => {
            fnctAffichage(btn);
        })
    };
};

// fonction calcul et gestion erreur

function calcul(){    
    try{
        a = affichage.textContent;
        let resultat2 = math.evaluate(a);
        result2.textContent = resultat2;
        throw new Error("Votre calcul est impossible!")
    }
    catch(err){
        if(err instanceof SyntaxError){
            console.log("Votre calcul est impossible!")
        }
    }
    finally{
        affichage.textContent = "Calcul impossible!";
    }
}



// fonction affichage
function fnctAffichage(btn){
    let btnVal = btn.value;
    affichage.textContent += btnVal;


}


fnctEventBtn();