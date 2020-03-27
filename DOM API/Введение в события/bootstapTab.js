export default () => {
  // BEGIN (write your solution here)
  const a = document.querySelectorAll('a[data-toggle]');
  const aArray = [...a];
  aArray.filter((aElement) => {

    aElement.addEventListener('click', (e) => {

      const currentNav = aElement.closest('.nav');
      
      const currentActiveElement = currentNav.querySelector('.active');
      const currentDivId = currentActiveElement.hash
      const currentDiv = document.querySelector(currentDivId);

      currentActiveElement.classList.remove('active');
      currentDiv.classList.remove('active');


      // добавляем класс active
      const id = aElement.hash;
      const div = document.querySelector(id);

      aElement.classList.add('active');
      div.classList.add('active');
    })
  });
  // END
}; 
  
  
  // BEGIN
  const handle = ({ target }) => {
    const nav = target.closest('.nav');
    const current = nav.querySelector('a.active');
    current.classList.remove('active');
    const currentTabContentId = current.hash.slice(1);
    const currentTabContent = document.getElementById(currentTabContentId);
    currentTabContent.classList.remove('active');

    target.classList.add('active');
    const nextTabContentId = target.hash.slice(1);
    const nextTabContent = document.getElementById(nextTabContentId);
    nextTabContent.classList.add('active');
  };

  const links = document.querySelectorAll('a[data-toggle]');
  links.forEach((element) => {
    element.addEventListener('click', handle);
  });
  // END