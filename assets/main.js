document.addEventListener('DOMContentLoaded',function(){
  var t=document.querySelector('.navtoggle');
  var n=document.querySelector('.navlinks');
  if(t&&n){t.addEventListener('click',function(){n.classList.toggle('open');});}
});
