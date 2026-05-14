/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {

    let temp = init;

    function increment() {
        temp = temp + 1;
        return temp;
    }

    function reset() {
        temp = init;
        return init;
    }

    function decrement() {
        temp = temp - 1;
        return temp;
    }

    return {
        increment,
        reset,
        decrement
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */