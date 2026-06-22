class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
          // 1. Desigualdad estricta (Buena práctica)
    if (s.length !== t.length) return false; 
    
    const map = new Map();
    
    // 2. Sumamos para 's' y restamos para 't'
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) ?? 0) + 1);
        map.set(t[i], (map.get(t[i]) ?? 0) - 1);
    }
    console.log(map)
    
    // 3. El bucle final ahora solo verifica que todo haya vuelto a 0
    for (const value of map.values()) {
        if (value !== 0) return false; 
    }
    
    return true;
    }
}
