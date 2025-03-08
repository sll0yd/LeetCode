/**
 * @param {number} n - La valeur initiale du compteur
 * @return {Function} - Retourne une fonction compteur
 */

const createCounter = function(n) {
    // Initialise une variable pour stocker la valeur actuelle du compteur
    // Cette variable persistera entre les appels de fonction grâce à la fermeture (closure)
    let currentValue = n;
    
    // Retourne une fonction anonyme (fermeture) qui va:
    // 1. Retourner la valeur actuelle
    // 2. Incrémenter la valeur pour le prochain appel
    return function() {
        // L'opérateur de post-incrémentation (currentValue++) retourne la valeur actuelle
        // AVANT de l'incrémenter pour le prochain appel de fonction
        return currentValue++;
        
        // Ceci est équivalent à:
        // const valueToReturn = currentValue;
        // currentValue = currentValue + 1;
        // return valueToReturn;
    };
};

/* 
 * Exemple d'utilisation:
 * const counter = createCounter(10)
 * counter() // 10 - Retourne la valeur initiale
 * counter() // 11 - Retourne la valeur incrémentée
 * counter() // 12 - Retourne la valeur incrémentée à nouveau
 *
 * Comment fonctionne la fermeture (closure) ici:
 * - Quand createCounter(n) est appelé, il crée un nouveau contexte d'exécution avec sa propre variable currentValue
 * - La fonction retournée maintient une référence à ce contexte (fermeture)
 * - Chaque fois que la fonction retournée est appelée, elle accède et modifie la même variable currentValue
 * - C'est pourquoi la valeur persiste entre les appels de fonction
 */