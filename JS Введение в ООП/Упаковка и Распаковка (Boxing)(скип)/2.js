const magic1 = (...param) => {

    let result = 0;

    for ( const number of param) {
        result += number;
    }

    console.log(param);
    console.log(result);
    
    const iter = (...arg) => {
        console.log(arg);
        for (const number of arg) {
            result += number;
        }
        return magic1(result);


    }
    return iter;
}

// хз что тут делать
// я не знаю как вывести сумму и с помощью reduce все посчитать хорошенько.

const m = (...p) => iter(...p);
const iter = (...p) => {
    const result = p.reduce(((acc, p) => {
        console.log(p);
        acc + p;
    }), 0);
}


  
m(1, 2)(3, 4, 5)(6)(7, 10);

