//! Le input pour afficher le résultat
let resultat = document.querySelector("input");

//! Pour stocker tout les buttons
let lesButtons = document.querySelectorAll(".buttonCalculatrice");

let calcule = ""; //! Une varible vide pour afficher toutes les opérations en cours

lesButtons.forEach((element) => {
  element.addEventListener("click", () => {
    //! Le input afficher le text du button cliqué
    resultat.value = element.innerText;

    //! On fait les deux conditions dans le cas où l'utilisateur souhaite supprimer ou afficher le résultat
    switch (element.innerText) {
      case "C":
        calcule = ""; //! Dans le cas où on click sur le 'C', l'opération en cours sera supprimer et avec le 'break', ca casse la boucle
        break;
      case "=":
        //! Avec le '=' , l'input afficher le résultat de l'opération
        try {
          resultat.value = eval(calcule); //! Eval() => prend toute la chaine de caractère et l'excecute, exemple "2+5-150" , 'resultat.value' prend le résultat de eval()
        } catch (error) {
                resultat.value = ""
        }
        calcule = resultat.value; //! 'Calcule est remplacer avec le 'Value' du resultat et break
        break;
      default:
        calcule += element.innerText; //! Sert a afficher toutes les opérations en cours en les stockant
    }
    resultat.value = calcule; //! Affiche le résultat dans le resultat.value
  });
});
