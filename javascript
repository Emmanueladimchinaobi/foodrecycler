const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");


btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  spaceBetween: 2,
  loop:true,
  
  autoplay:{
    delay:2000,
    disableoninteraction:false,
  },


});
const swiper1 = new Swiper('.mySwiper1', {
  slidesPerView: 3,
  spaceBetween: 5,
  loop:true,
  
  autoplay:{
    delay:2000,
    disableoninteraction:false,
  },


});
const swiper2 = new Swiper('.mySwiper2', {
  slidesPerView: 2,
  spaceBetween:2,
  
  loop:true,
  
  autoplay:{
    delay:2000,
    disableoninteraction:false,
  },


});
