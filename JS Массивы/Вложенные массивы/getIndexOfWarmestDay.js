const getIndexOfWarmestDay = (arr) => {
    if (arr[0] == '' || arr == '') {return null;}

    let maxTemperature = arr[0][0],
        index = 0;

    for (const element of arr) {
        for (let j = 0; j < arr.length; j++) {
            if (maxTemperature <= element[j]) {
                maxTemperature = element[j];
                index = arr.indexOf(element);
            }
        }
    }
    return index;
}



console.log(getIndexOfWarmestDay([]));