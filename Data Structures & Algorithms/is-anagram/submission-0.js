class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const x = [...s].sort();
        const y = [...t].sort();
        if(x.join() == y.join()) return true
        return false
    }
}
