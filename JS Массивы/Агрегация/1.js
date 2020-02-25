arr = [];
const calculateSum = (arr) => {
    let sum = 0;
    if (arr.length === 0) {
        return null;
    }
    for (let elem of arr) {
        if (elem % 3 == 0) {
            sum += elem;
        }
    }
    return sum;
}

console.log(calculateSum(arr));