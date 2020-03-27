const prettify = (doc) => {

    const divs = document.querySelectorAll('div');
    divs.forEach(el => el.childNodes.forEach(e => {
      if (e.nodeType === 3 && e.textContent.trim().length > 0) {
        const pEl = document.createElement('p');
        e.replaceWith(pEl);
        pEl.append(e);    
      }
    }));
  

  }
  export default prettify;


// BEGIN
export default (document) => {
    const divs = document.getElementsByTagName('div');
    divs.forEach((div) => {
      const textNodes = [...div.childNodes]
        .filter((child) => child instanceof Text)
        .filter((child) => child.textContent.trim() !== '');
      textNodes.forEach((node) => {
        const p = document.createElement('p');
        p.textContent = node.textContent;
        node.replaceWith(p);
      });
    });
  };
  // END