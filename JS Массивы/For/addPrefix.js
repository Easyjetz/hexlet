const names = ['john', 'smith', 'karl'];

const addPrefix = (arr, prefix) => {
    let namesWithPrefix = [];
    for (let j = 0; j < arr.length; j += 1) {
        namesWithPrefix[j] = `${prefix} ${arr[j]}`;
    }
    return namesWithPrefix;
}

console.log(addPrefix(names, 'Mrs'));