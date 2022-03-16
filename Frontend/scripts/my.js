const up = document.querySelector('#up');
window.addEventListener('scroll', () => {
    if(window.pageYOffset > 94){
      up.style.opacity = 1;
      up.style.pointerEvents = 'auto';
    }else{
      up.style.opacity = 0;
      up.style.pointerEvents = 'none';
    }
 })