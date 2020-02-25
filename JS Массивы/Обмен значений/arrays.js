const names = ['john', 'smith', 'karl'];
const swap = (arr, index) => {
    let indexMax = arr.length - 1;
    for (let j = 0; j < arr.length; j++) {
        if (index == 0 || index >= indexMax) {
            return arr;
        } else if (j === index && index < indexMax) {
            const oldValue = arr[j -1];
            arr[j - 1] = arr[j + 1];
            arr[j + 1] = oldValue;
            j += 2;
        }
    }
    return arr;
}

console.log(swap(names, 0));

// решение учителя

// BEGIN
const swap = (coll, center) => {
    const lastIndex = coll.length - 1;
    const isSwappable = (center > 0) && (center < lastIndex);
  
    if (!isSwappable) {
      return coll;
    }
  
    const prevIndex = center - 1;
    const nextIndex = center + 1;
  
    const temp = coll[prevIndex];
    coll[prevIndex] = coll[nextIndex];
    coll[nextIndex] = temp;
  
    return coll;
  };
  
  export default swap;
  // END
