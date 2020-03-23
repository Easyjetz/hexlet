cities = ['moscow', 'london', 'berlin', 'porto'];

const get = (arr, index, defaultValue = null) => {
    if (arr[index] === undefined) {
        return defaultValue;
    } else {
        return arr[index];
    }
}

console.log(get(cities, 5, false));

