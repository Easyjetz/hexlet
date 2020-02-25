const pick = (obj, arr) => {
    const result = {};

    for (const key of arr) {
        if (obj.hasOwnProperty(key)) {
            result[key] = obj[key];
        }
    }

    return result;
    
}

const data = {
    user: 'ubuntu',
    cores: 4,
    os: 'linux',
    person: {
        name: 'dmitry',
        age: 19,
    },
};

console.log(pick(data, ['person']));

