/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

const filter = function(arr, fn) {
   // Créer un tableau vide pour stocker les résultats filtrés
   const filteredArr = [];
   
   // Parcourir chaque élément du tableau d'entrée
   for (let i = 0; i < arr.length; i++) {
       // Appliquer la fonction de test et vérifier si elle renvoie une valeur "truthy"
       if (fn(arr[i], i)) {
           // Si c'est le cas, ajouter l'élément au tableau filtré
           filteredArr.push(arr[i]);
       }
   }
   
   // Retourner le nouveau tableau contenant uniquement les éléments filtrés
   return filteredArr;
};