

const openingSymbols = ['(', '[', '{', '<'];
const closingSymbols = [')', ']', '}', '>'];

const isBracketStructureBalanced = (str) => {
    const stack = [];
    let lastIndexs = [];
    let last;
    for (const symbol of str) {
        if (openingSymbols.includes(symbol)) {
            lastIndexs.push(openingSymbols.indexOf(symbol));
            stack.push(symbol);
        } else if (closingSymbols.includes(symbol)) {
            let index = closingSymbols.indexOf(symbol);
            last = lastIndexs.length - 1;
            if (lastIndexs[last] === index) {
                lastIndexs.pop();
                if (!stack.pop()) {
                    return false;
                }
            } else {
                stack.push(symbol);
            }
        }
    }
    

    return stack.length === 0;

}

// решение учителя 

// BEGIN
const isOpeningSymbol = (symbol) => openingSymbols.includes(symbol);
const getClosingSymbolFor = (symbol) => closingSymbols[openingSymbols.indexOf(symbol)];

export default (str) => {
  const stack = [];
  for (const symbol of str) {
    if (isOpeningSymbol(symbol)) {
      const closingSymbol = getClosingSymbolFor(symbol);
      stack.push(closingSymbol);
    } else {
      const lastSavedSymbol = stack.pop();
      if (symbol !== lastSavedSymbol) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
// END

console.log(isBracketStructureBalanced('()))'));

