import $ from 'jquery';
import LazyLoad from 'vanilla-lazyload';
import Animate from './modules/_animation';
import Header from './modules/_header';
import Home from './modules/_home';
import Partners from './modules/_partners';
import Slider from './modules/_slider';
import Plp from './modules/_plp';

const slider = new Slider()

$(document).ready(() => {
    new LazyLoad()
    new Header()
    new Home()
    new Partners()
    new Plp()

    //Sliders
    slider.initAboutSlider()
    slider.initRelatedSlider()

    new Animate('.fade-on-load', {
        animateClassName: 'animate',
        offset: 0,
    });

    new Animate('.animate-on-scroll', {
        animateClassName: 'animate',
        offset: 50,
    });

    new Animate('.animate-right', {
        animateClassName: 'animate',
        offset: 50,
    });

    new Animate('.animate-left', {
        animateClassName: 'animate',
        offset: 50,
    });

    //Tab - change content
    $('.tab--button').on('click', function (e) {
        $('.tab--content').hide();
        $($(this).attr('href')).show();
        $(this).addClass('tab--active')
        $(this).siblings().removeClass('tab--active')
        e.preventDefault()
    })
});
