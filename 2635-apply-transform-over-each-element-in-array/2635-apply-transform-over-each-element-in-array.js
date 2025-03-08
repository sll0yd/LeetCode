/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

function map(arr, fn) {
    
    // Créer un nouveau tableau pour stocker les résultats
    const transformedArray = [];
    
    // Parcourir chaque élément du tableau d'entrée
    for (let i = 0; i < arr.length; i++) {
        // Appliquer la fonction de transformation et stocker le résultat
        transformedArray[i] = fn(arr[i], i);
    }
    
    // Retourner le tableau transformé
    return transformedArray;
}
