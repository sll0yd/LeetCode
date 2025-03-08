/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */

const reduce = function(nums, fn, init) {
    // Si le tableau est vide, retourner la valeur initiale
    if (nums.length === 0) {
        return init;
    }
    
    // Commencer avec la valeur initiale comme accumulateur
    let accum = init;
    
    // Parcourir chaque élément du tableau
    for (let i = 0; i < nums.length; i++) {
        // Appliquer la fonction de réduction et mettre à jour l'accumulateur
        accum = fn(accum, nums[i]);
    }
    
    // Retourner la valeur finale accumulée
    return accum;
};