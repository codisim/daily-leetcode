/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    function toBe(innerVal) {
        if (val === innerVal) return true;
        else throw new Error("Not Equal")
    }

    function notToBe(innerVal) {
        if (val !== innerVal) return true;
        else throw new Error("Equal");
    }

    return {
        toBe,
        notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */