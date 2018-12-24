var rightSlider = document.getElementsByClassName('rightSlider')[0];
var burgerMenu = document.getElementsByClassName('burgerMenu')[0];

var swch =0;
burgerMenu.addEventListener('click',function(){
  swch++;
  console.log(swch%2)
  if(swch%2 === 1){
    rightSlider.style.width = '100vw';
  }
  else{
    rightSlider.style.width = '4.296vw';
  }
});
