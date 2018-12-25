var rightSlider = document.getElementsByClassName('rightSlider')[0];
var burgerMenu = document.getElementsByClassName('burgerMenu')[0];
var burgerOne = document.getElementsByClassName('burgerOne')[0];
var burgerTwo = document.getElementsByClassName('burgerOne')[1];
var burgerThree = document.getElementsByClassName('burgerOne')[2];
var girlSunPhoto = document.getElementsByClassName('girlSunPhoto')[0];
var aboutMeBox = document.getElementsByClassName('aboutMeBox')[0];


var swch =0;
burgerMenu.addEventListener('click',function(){
  swch++;
  console.log(swch%2)
  if(swch%2 === 1){
    rightSlider.style.width = '100vw';
    burgerOne.style.transform = 'rotateZ(-45deg)';
    burgerThree.style.transform = 'rotateZ(45deg)';
    burgerOne.style.marginTop = '0.37vw';
    burgerThree.style.marginTop = '0.37vw';
    burgerTwo.style.opacity = '0'
  }
  else{
    rightSlider.style.width = '4.296vw';
    burgerOne.style.transform = 'rotateZ(0deg)';
    burgerThree.style.transform = 'rotateZ(0deg)';
    burgerOne.style.marginTop = 'calc(6px + 0.74vw)';
    burgerThree.style.marginTop = '0vw';
    burgerTwo.style.opacity = '1'
  }
});

//scroll litener
var i=0;
window.addEventListener("scroll", function(evt){
  if((window.innerHeight /100)* 150  < window.scrollY + window.innerHeight && i!==1){
    i=0;
    console.log(window.scrollY + window.innerHeight);
    console.log(window.scrollY);
    girlSunPhoto.className += ' girlSunPhotoAnimClass';
    aboutMeBox.className += ' aboutMeBoxAnimClass';
  }
});
