const bubbleSort = (arr) => {
    let size = arr.length;

    let swap;

    do {
        swap = false;
        for (let j = 0; j < size; j++) {
            if (arr[j] > arr[j + 1]) {
                let rev = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = rev;
                swap = true;
                
            }
            
        }
        size--;
    } while(swap);
    return arr;
}

let arr = [3, 10, 4, 3];
console.log(bubbleSort(arr));
