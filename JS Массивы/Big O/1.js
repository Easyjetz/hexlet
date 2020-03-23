const getIntersectionOfSortedArrays = (arr1, arr2) => {
    let result = [];
    let indexFirst = 0,
        indexSecond = 0;
    
    const leastSize = Math.min(arr1.length, arr2.length);

    for (; indexFirst < leastSize;) {
        if (arr1[indexFirst] === arr2[indexSecond]) {
            result.push(arr1[indexFirst]);
            indexFirst++;
            indexSecond++;
        } else if (arr1[indexFirst] > arr2[indexSecond]) {
            indexSecond++;
        } else {
            indexFirst++;
        }
    }
    return result; 
}
const arr1 = [];
const arr2 = [12];

console.log(getIntersectionOfSortedArrays(arr1, arr2));
