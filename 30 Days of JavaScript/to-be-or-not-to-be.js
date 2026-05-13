/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    function toBe(val) {
        innerVal = val;
        if (innerVal === val && innerVal !== null) return true;
        throw new Error("Not Equal")
    }

    function notToBe(val) {
        innerVal = val;
        if (innerVal === val) return true;
        throw new Error("Equal");
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