const fs = require('fs');
const watch = (filepath, period , cb) => {
    let start = Date.now();
    const id = setInterval(() => {
        fs.stat(filepath, (err, result) => {
            if (err) {
              clearInterval(id);
              cb(err);
            }
            else if (result.mtimeMs >= start) {
                cb(null);
        
            }
            start = Date.now();
        });
    }, period);
    return id; 
}

// "/home/dmitry/Рабочий стол/Hexlet/JS Асинхронное программирование/Таймеры/1.js"

let filepath = "/home/dmitry/Рабочий стол/Hexlet/JS Асинхронное программирование/Таймеры/1.js";
const id = watch(filepath, 500, (err) => {
    console.log('wow');
    
});
console.log(setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700));

// BEGIN
export default (filepath, period, cb) => {
    let lastCheckTime = Date.now();
  
    const check = (timerId) => {
      fs.stat(filepath, (err, stats) => {
        if (err) {
          clearInterval(timerId);
          cb(err);
          return;
        }
        const { mtimeMs } = stats;
        if (mtimeMs > lastCheckTime) {
          cb(null);
          lastCheckTime = mtimeMs;
        }
      });
    };
  
    const timerId = setInterval(() => check(timerId), period);
    return timerId;
  };
// END
