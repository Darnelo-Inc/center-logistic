
const logos =  document.getElementById('logos');
console.log('go')

window.addEventListener('resize', function () {
  if (window.innerWidth <= 770) {
      logos.classList.add('slider__logo');
      logos.classList.add('slick-slider');
      logos.classList.add('slick-initialized');
      console.log('add');
  } else {
      logos.classList.remove('slider__logo');
      logos.classList.remove('slick-slider');
      logos.classList.remove('slick-initialized');
      console.log('remove');
  }
});
