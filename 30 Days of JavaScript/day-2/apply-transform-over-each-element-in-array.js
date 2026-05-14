/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

let newArr = [];

var map = function (arr, fn) {

      arr.forEach((a, i) => {
        newArr[i] = fn(a, i);
    });

    return newArr;

    for (let i = 0; i < arr.length; ++i) {
        arr[i] = fn(arr[i], i);
    }
    return arr;
};