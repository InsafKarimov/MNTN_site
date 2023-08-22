document.querySelector('.nav__item').onclick = function(){
    document.querySelector('.nav__holder--visible').style.display = "";
};
document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
    /* document.querySelector('.nav__list-holder').style.display = "block"; */
    document.querySelector('.nav__holder').classList.toggle('nav__holder--visible');
};
