'use strict';



const icon=document.querySelector(".nav-icon")
const burger=document.querySelector(".header-burger")
icon.onclick=function(){
    icon.querySelector("i").classList.toggle("fa-times")
    burger.classList.toggle("burger-active")
}




// $('.mySlider').slick({
//   dots: true,
//   infinite: true,
//   autoplaySpeed: 3000,
//   autoplay: true,
//   fade: true,
//   cssEase: 'linear'
  
// });

// $(".item-text h3").textillate({
//   // autoplaySpeed: 3000,

// })




// const icon=document.querySelector(".nav-icon")
// const burger=document.querySelector(".header-burger")
// icon.onclick=function(){
//     icon.querySelector("i").classList.toggle("fa-times")
//     burger.classList.toggle("burger-active")
// }







// $(".menu-top i").on("click",function(){
//   $(".menu").removeClass("menu-active")

// })


// const scrollTop = document.querySelector(".scroll-top");


// window.addEventListener("scroll", function(){


//   if(this.scrollY > 100){


//       scrollTop.classList.add("active")
//   }else{

//       scrollTop.classList.remove("active")
//   }
// })


// scrollTop.addEventListener("click", function(){


//   scrollTo(0,0);

 
// })

window.onload=function(){
    setTimeout(() =>{
        document.querySelector(".preloader").remove()
    }, 2000)
}

    $(function () {
        $('.text-3').textillate({
            loop: true,
            minDisplayTime: 1000,
            delayScale: 1.5,
        });
    });


    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay:true,
        arrows:true,
        loops:true
            
      });

    


      var proSingle=document.querySelector(".pro-single")
      var proList=document.querySelector(".pro-l")
      var productItem=document.querySelectorAll(".watch-img")
      proSingle.onclick=function(){
          for(var i=0;i<productItem.length;i++){
              productItem[i].parentNode.className="col-lg-6";
              productItem[i].classList.add("d-flex")
      
          }
      }
      
      proList.onclick=function(){
          for(var i=0;i<productItem.length;i++){
              productItem[i].parentNode.className="col-lg-3";
              productItem[i].classList.remove("d-flex")
      
          }
      }




    