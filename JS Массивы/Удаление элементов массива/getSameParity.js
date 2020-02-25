const array = [2, 1, 4, 8, 3];
const getSameParity = (arr) => {
    const parity = arr[0] % 2;
    let result = [];
    for (const element of arr) {
        if (arr.length === 0) {return arr;}

        else if (element % 2 === parity) {
            result.push(element);
        }
    }
    return result;
}

console.log(getSameParity(array));

