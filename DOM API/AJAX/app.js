// @ts-check

import 'whatwg-fetch';

export default () => {
    const input = document.querySelectorAll('input');

    const  autocomplete = async (e) => {
      e.preventDefault();
      const link = e.target.getAttribute('data-autocomplete');
      
      const url = new URL(link, window.location.origin);
      url.searchParams.append('term', e.target.value);
      const response = await fetch(url);
      const result = await response.json();
  
      const autoCompleteName = e.target.getAttribute('data-autocomplete-name');
      const ul = document.querySelector(`ul[data-autocomplete-name =${autoCompleteName}]`);

      if (result.length > 0) {
        const li = ul.querySelectorAll('li');
        const arr = [...li];
        
        const res = arr.map((e) => {
            e.remove();
        }); 
  
        result.map((e) => {
          const newLi = document.createElement('li');
          newLi.textContent = e;
          ul.append(newLi);
        })    
      }
      else {
        ul.innerHTML = `<li>Nothing</li>`;
      }
    }

    console.log(input);
    input.forEach(e => e.addEventListener('input', autocomplete));
    // END
};
 
 
 
 // BEGIN
  const autocompleteElements = document.querySelectorAll('input[data-autocomplete]');
  autocompleteElements.forEach((el) => {
    const route = el.dataset.autocomplete;
    const dataAutocompleteName = el.dataset.autocompleteName;
    el.addEventListener('input', async (e) => {
      const list = document.querySelector(`ul[data-autocomplete-name="${dataAutocompleteName}"]`);
      const url = new URL(route, window.location.origin);
      url.searchParams.append('term', e.target.value);
      const response = await fetch(url);
      const items = await response.json();
      const options = items.length === 0 ? ['Nothing'] : items;
      const listHTML = options.map((item) => `<li>${item}</li>`).join('\n');
      list.innerHTML = listHTML;
    });
  });
  // END


