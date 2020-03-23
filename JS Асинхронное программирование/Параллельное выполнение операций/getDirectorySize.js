const fs = require('fs');
const async = require('async');


const getDirectorySize = (dir, cb) => {
    fs.readdir(dir, (err, files) => {
        if (err) {
            return;
        }
        async.map([files], fs.stat, (err1, result) => {
            if (err1) {
                return;
            }
            console.log(result);

        });
    });
}

getDirectorySize('c:\Users\Dmitry\Desktop\new Hexlet\JS Асинхронное программирование\Параллельное выполнение операций\getDirectorySize.js', (err, size) => {
    console.log(size);
});