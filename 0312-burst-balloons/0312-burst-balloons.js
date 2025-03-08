/**
 * Cette fonction calcule le nombre maximal de pièces que l'on peut obtenir
 * en éclatant tous les ballons de manière optimale.
 * 
 * Nous utilisons la programmation dynamique pour résoudre ce problème:
 * dp[i][j] représente le nombre maximal de pièces obtenues en éclatant tous
 * les ballons entre les indices i et j (inclus).
 * 
 * L'idée clé est de considérer le dernier ballon à éclater dans la plage [i,j],
 * plutôt que le premier - cela simplifie le calcul des sous-problèmes.
 */
function maxCoins(nums) {
    // Ajouter des 1 aux extrémités pour gérer les cas limites
    const n = nums.length;
    const balloons = [1, ...nums, 1];
    
    // Créer une matrice dp de taille (n+2) x (n+2)
    const dp = Array(n + 2).fill().map(() => Array(n + 2).fill(0));
    
    // Parcourir toutes les longueurs possibles de sous-tableaux
    for (let len = 1; len <= n; len++) {
        // Parcourir tous les débuts possibles de sous-tableaux de longueur 'len'
        for (let left = 1; left <= n - len + 1; left++) {
            const right = left + len - 1;
            
            // Essayer chaque ballon comme dernier ballon à éclater dans la plage [left, right]
            for (let k = left; k <= right; k++) {
                // Si k est le dernier ballon éclaté, alors:
                // - Les ballons à gauche de k (de left à k-1) ont déjà été éclatés
                // - Les ballons à droite de k (de k+1 à right) ont déjà été éclatés
                // - Quand k éclate, il est multiplié par left-1 et right+1 qui existent encore
                dp[left][right] = Math.max(
                    dp[left][right],
                    dp[left][k-1] + balloons[left-1] * balloons[k] * balloons[right+1] + dp[k+1][right]
                );
            }
        }
    }
    
    // Le résultat final est dans dp[1][n], qui représente la solution pour l'ensemble du tableau
    return dp[1][n];
}