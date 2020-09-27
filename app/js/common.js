(function () {
  // Custom JS
  window.addEventListener('load', function () {
    // ----------------------------------------------
    //		common functions
    // ----------------------------------------------
    function getEl(className) {
      return document.querySelector(className);
    }

    function getAllEl(className) {
      return document.querySelectorAll(className);
    }

    function createEl(type) {
      return document.createElement(type);
    }

    // ----------------------------------------------
    //		section twitter slider
    // ----------------------------------------------
    // add nav dots
    function addNavDots(itemClass, containerClass) {
      const count = getAllEl(itemClass).length;
      const container = getEl(containerClass);

      for (let i = 0; i < count; i++) {
        let dot = createEl('div');
        dot.className = `${containerClass.slice(1)}__dot`;
        container.appendChild(dot);
      }
    }

    addNavDots('.slider-item', '.twitter-nav-container');

    // add slider
    const pricingSlider = tns({
      container: '.twitter-slider',
      items: 1,
      slideBy: 'page',
      speed: 400,
      mouseDrag: true,
      controls: false,
      nav: true,
      navPosition: 'bottom',
      navContainer: '.twitter-nav-container',
      // controlsContainer: '.pricing-controls-btns',
      // prevButton: '.pricing-controls-btns__prev',
      // nextButton: '.pricing-controls-btns__next',
    });
  });
})();
