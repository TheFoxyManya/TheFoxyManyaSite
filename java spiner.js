window.onload = () => {
  setTimeout(() => {
    document.querySelector("body").classList.add("display");
  }, 4000);
};
$(function(){
  setTimeout(function(){
    $('html, body')
    .css({
      'overflow': 'auto'
    })
    .animate({
      scrollTop: $('.myDiv').offset().top
    }, 2000);
  }, 2000);
});
