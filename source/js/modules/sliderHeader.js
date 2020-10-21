const sliderHeader = () => {

  let headerSlider = new Swiper('.slider__container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
    loop: true,
  });
};

export {sliderHeader};
