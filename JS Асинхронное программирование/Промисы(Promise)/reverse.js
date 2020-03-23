const reverse = (filepath) => {
    // по идее то же самое +-. из плохого, я почему-то методы использовал ни в 1 строчку.. это прям плохо.
    const f = (content) => {
      const arr = content.split('\n');
  
      const arrReversed = arr.reverse();
      const str = arrReversed.join('\n');
      return str;
    }
    return fs.readFile(filepath, 'utf-8').then((content) => f(content)).then((str) => fs.writeFile(filepath, str));
}

// BEGIN
export const reverse = (filepath) => fs.readFile(filepath, 'utf-8')
  .then((data) => {
    const preparedData = data.split('\n').reverse().join('\n');
    return fs.writeFile(filepath, preparedData);
  });
// END