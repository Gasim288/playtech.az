"use strict";
var item1=document.getElementById("b1")
var item2=document.getElementById("b2")
var item3=document.getElementById("b3")
var item4=document.getElementById("b4")
var item5=document.getElementById("b5")
var myImage=document.querySelector(".carousel-img img")
item1.onclick=function(){
    myImage.src=item1.src;
}
item2.onclick=function(){
    myImage.src=item2.src;
}
item3.onclick=function(){
    myImage.src=item3.src;
}
item4.onclick=function(){
    myImage.src=item4.src;
}

item5.onclick=function(){
    myImage.src=item4.src;
}




$(".sLider-img").slick(
    {
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
      });

      $(".tabMenu button").click(function () {
        let btnIndex=$(this).index();
        $(".tabMenu .tab-item").stop().slideUp();
          $(".tabMenu .tab-item").eq(btnIndex).stop().slideDown();
      });
      


      $(function () {
        $('.text-3').textillate({
            loop: true,
            minDisplayTime: 5000,
            delayScale: 1.5,
        });
    });