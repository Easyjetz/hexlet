const run = (text) => {
    // BEGIN (write your solution here)
    const takeLast = (text, n) => {
      let size = text.length;
      let result = '';
      if (size === 0 || size < n) {
        return null;
      }
      for (; n != 0; n -= 1) {
        result += text[size - 1];
        size -= 1;
      }
      return console.log(result);
    }
    // END
  
    return takeLast(text, 4);
  };


  run('kids');
  run('power'); // telx

  // BEGIN решение учителя
  const takeLast = (str, length) => {
    if (str.length < length) {
      return null;
    }

    const result = [];
    for (let i = str.length - 1; result.length < length; i -= 1) {
      result.push(str[i]);
    }

    return result.join('');
  };
  // END