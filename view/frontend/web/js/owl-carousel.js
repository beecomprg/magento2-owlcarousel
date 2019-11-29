
define([
    "jquery",
    "Beecom_OwlCarousel/js/owl.carousel.min"
], function($){
    return function (config, element) {
        config.onInitialized = callback;
        config.navText = ['<i class="material-icons v-icon">keyboard_arrow_left</i>','<i class="material-icons v-icon">keyboard_arrow_right</i>'];
        return $(element).owlCarousel(config);
    };

    function callback(data) {
       let target = data.currentTarget;
       let carousel = $(target).closest('.carousel');
       $('.loader', carousel).hide();
    }
});
