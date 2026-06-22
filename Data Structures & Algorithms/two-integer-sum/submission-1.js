class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const cache = {}; // Objeto plano en lugar de Map
    
    for (let i = 0; i < nums.length; i++) {
        const val = target - nums[i];
        
        // Verificamos si la propiedad existe y no es undefined
        if (cache[val] !== undefined) {
            return [cache[val], i]; // Retorna ordenado [menor_indice, mayor_indice]
        }
        
        // Guardamos el número como clave y su índice como valor
        cache[nums[i]] = i;
    }
    
    return [];
    }
}
