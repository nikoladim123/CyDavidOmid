var rightSlider = document.getElementsByClassName('rightSlider')[0];
var burgerMenu = document.getElementsByClassName('burgerMenu')[0];
var burgerOne = document.getElementsByClassName('burgerOne')[0];
var burgerTwo = document.getElementsByClassName('burgerOne')[1];
var burgerThree = document.getElementsByClassName('burgerOne')[2];
var girlSunPhoto = document.getElementsByClassName('girlSunPhoto')[0];
var aboutMeBox = document.getElementsByClassName('aboutMeBox')[0];
//slideshow divs
var picOne = document.getElementsByClassName('picOne')[0];
var picTwo = document.getElementsByClassName('picTwo')[0];
var picThree = document.getElementsByClassName('picThree')[0];
//doubleOverlay
var doubleOverlay = document.getElementsByClassName('doubleOverlay')[0];
window.onload = setTimeout(function(){
  doubleOverlay.style.display ='none';
  console.log('i run');
},2000);
//carousel slideshow logic
// var swchCarousel = 0;
// setInterval(function(){
//   console.log(swchCarousel%3)
//   if(swchCarousel%3 === 0){
//     picTwo.style.width = '100%';
//     picOne.style.width = '0%';
//     picThree.style.width = '0%';
//     picOne.style.left = '100%';
//     setTimeout(function(){
//       picOne.style.left = '0%';
//     },1000)
//   }
//   else if(swchCarousel%3 === 1){
//     picThree.style.width = '100%';
//     picOne.style.width = '0%';
//     picTwo.style.width = '0%';
//     picTwo.style.left = '100%';
//     setTimeout(function(){
//       picTwo.style.left = '0%';
//     },1000)
//   }
//   else if(swchCarousel%3 === 2){
//     picOne.style.width = '100%';
//     picTwo.style.width = '0%';
//     picThree.style.width = '0%';
//     picThree.style.left = '100%';
//     setTimeout(function(){
//       picThree.style.left = '0%';
//     },1000)
//   }
//   swchCarousel++;
// },5000);
/*White flash show*/
var swchCarousel = 0;
setInterval(function(){
  if(swchCarousel%3 === 0){
    picOne.style.display = 'block';
    picTwo.style.display = 'none';
    picThree.style.display = 'none';
    console.log(swchCarousel%3);
  }
  else if(swchCarousel%3 === 1){
    picOne.style.display = 'none';
    picTwo.style.display = 'block';
    picThree.style.display = 'none';
    console.log(swchCarousel%3);
  }
  else if(swchCarousel%3 === 2){
    picOne.style.display = 'none';
    picTwo.style.display = 'none';
    picThree.style.display = 'block';
    console.log(swchCarousel%3);
  }
  swchCarousel++;
},5000)

//burger/slider logic
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
    i=1;
    console.log(window.scrollY + window.innerHeight);
    console.log(window.scrollY);
    girlSunPhoto.className += " girlSunPhotoAnim";
    aboutMeBox.className += " aboutMeBoxAnim";
  }
});
