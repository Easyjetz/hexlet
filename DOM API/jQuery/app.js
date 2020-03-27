  // BEGIN
  const carousels = $('[data-ride="carousel"]');
  carousels.each((_index, carousel) => {
    const root = $(carousel);
    const slides = root.find('.carousel-item');
    const maxIndex = slides.length - 1;
    let currentIndex = slides.filter('.active').index();
    const handlerGenerator = (next) => () => {
      const newCurrentIndex = next(currentIndex);
      slides.removeClass('active');
      slides.filter((id) => id === newCurrentIndex).addClass('active');
      currentIndex = newCurrentIndex;
    };
    const prev = root.find('[data-slide="prev"]');
    prev.click(handlerGenerator((i) => (i === 0 ? maxIndex : i - 1)));
    const next = root.find('[data-slide="next"]');
    next.click(handlerGenerator((i) => (maxIndex === i ? 0 : i + 1)));
  });
  // END

  export default () => {
    // BEGIN (write your solution here)
    const buttons = document.querySelectorAll('[data-slide]');
    const slide = (e) => {
      const button = e.target.closest('[data-slide]');
      const dataSlideName = button.dataset.slide;
  
      const carouselBlock = e.target.closest('[data-ride]');
      const items = carouselBlock.querySelectorAll('.carousel-item');
      const arr = [...items];
      
      const active = carouselBlock.querySelector('.active');
  
      const index = arr.indexOf(active);
      const size = arr.length - 1;
  
      const classChange = (currentIndex) => {
        arr[index].classList.remove('active');
        arr[currentIndex].classList.add('active');
      }
  
      
      if (dataSlideName === 'next') {
        const currentIndex = index === size ? 0 : index + 1;
        classChange(currentIndex);
      } else {
        const currentIndex = index === 0 ? size : index - 1;
        classChange(currentIndex);
      }
      
    }
    buttons.forEach(button => button.addEventListener('click', slide));
    // END
  };