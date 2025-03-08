/**
 * Cette fonction crée un outil de test simple qui prend une valeur et 
 * renvoie un objet avec deux méthodes pour vérifier l'égalité.
 */
function expect(val) {
  return {
    // Cette méthode vérifie si la valeur est strictement égale (===) à celle attendue
    // Si elles sont égales, elle renvoie true
    // Sinon, elle lance une erreur "Not Equal"
    toBe: function(expected) {
      if (val === expected) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    
    // Cette méthode vérifie si la valeur est strictement différente (!==) de celle attendue
    // Si elles sont différentes, elle renvoie true
    // Sinon, elle lance une erreur "Equal"
    notToBe: function(expected) {
      if (val !== expected) {
        return true;
      } else {
        throw "Equal";
      }
    }
  };
}
