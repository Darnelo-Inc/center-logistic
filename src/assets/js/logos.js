
const logos =  document.getElementById('logos');

window.addEventListener('resize', function () {
  if (window.innerWidth <= 770 && !(logos.contains('slider__logo'))) {
      logos.classList.add('slider__logo');
      console.log('add');
  } else {
      logos.classList.remove('slider__logo');
      console.log('remove');
  }
});