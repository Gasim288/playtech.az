var proSingle=document.querySelector(".pro-single")
var proList=document.querySelector(".pro-l")
var productItem=document.querySelectorAll(".all2-Watch")
proSingle.onclick=function(){
    for(var i=0;i<productItem.length;i++){
        productItem[i].parentNode.className="col-lg-12";
        productItem[i].classList.add("d-flex")
        productItem[i].querySelector(".watch-text2").classList.add("px-5")

    }
}

proList.onclick=function(){
    for(var i=0;i<productItem.length;i++){
        productItem[i].parentNode.className="col-lg-3";
        productItem[i].classList.remove("d-flex")
        productItem[i].querySelector(".watch-text2").classList.remove("px-5")
    }
}


$(".tabMenu button").click(function () {
    let btnIndex=$(this).index();
    $(".tabMenu .tab-item").stop().slideUp();
      $(".tabMenu .tab-item").eq(btnIndex).stop().slideDown();
  });
  