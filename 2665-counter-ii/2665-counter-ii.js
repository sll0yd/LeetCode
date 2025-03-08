

/**
 * Cette fonction crée un compteur avec trois méthodes: increment, decrement et reset.
 * @param {number} init - La valeur initiale du compteur
 * @return {Object} Un objet avec trois méthodes qui manipulent le compteur
 */
function createCounter(init) {
    // Variable qui stocke la valeur courante du compteur
    let currentValue = init;
    
    return {
        // Augmente la valeur courante de 1 et la retourne
        increment: function() {
            return ++currentValue;
        },
        
        // Diminue la valeur courante de 1 et la retourne
        decrement: function() {
            return --currentValue;
        },
        
        // Réinitialise la valeur courante à la valeur initiale et la retourne
        reset: function() {
            currentValue = init;
            return currentValue;
        }
    };
}