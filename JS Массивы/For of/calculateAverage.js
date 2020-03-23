const temperatures1 = [];
const calculateAverage = (arr) => {

    let sumElements = 0,
        amount = 0;

    for (let elem of arr) {
        sumElements += elem;
        amount += 1;
    }

    return amount == 0 ? null : sumElements / amount;
}

console.log(calculateAverage(temperatures1));