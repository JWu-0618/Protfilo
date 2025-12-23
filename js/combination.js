$(document).ready(function () {
  $("#banner_title").animate(
    {
      bottom: "50",
      opacity: 1,
    },
    1500
  );
  //$("#subnav").slideDown("fast",function(){
  //		$("#subnav").fadeToggle(3000);
  //})
  var scroH = $(document).scrollTop(); //滚动高度
  var viewH = $(window).height(); //可见高度
  if (scroH > viewH) {
    $("#nav").fadeIn(800);
    $("#banner").css("opacity", 0);
  }
  $(document).scroll(function () {
    var scroH = $(document).scrollTop(); //滚动高度
    var viewH = $(window).height(); //可见高度
    var contentH = $(document).height(); //内容高度

    // console.log(scroH)
    var a = (scroH / 1000) * 2;
    var b = 1 - a;

    if (b > 1) {
      b = 1;
    } else if (b < 0) {
      b = 0;
    }
    $("#banner").css("opacity", b);
    // console.log(viewH)
    // console.log($("#main_1").css('height').slice(0,-2))
    if (scroH > viewH) {
      //距离顶部大于100px时
      //$("#nav").animate({opacity:1},1500)
      $("#nav").fadeIn(500);
    } else {
      $("#nav").fadeOut(500);
    }
    // if(scroH >500){  //距离顶部大于100px时
    //  	$("#main_1_title").animate({opacity:1},1800)
    // }
    // if(scroH >400 + parseInt($("#main_1").css('height').slice(0,-2))){  //距离顶部大于100px时
    //  	$("#main_2").animate({opacity:1},1500)
    // }
    // if(scroH >500 + parseInt($("#main_1").css('height').slice(0,-2))){  //距离顶部大于100px时
    //  	$("#main_2_title").animate({opacity:1},1800)
    // }
    // if(scroH >400 + parseInt($("#main_1").css('height').slice(0,-2)) + parseInt($("#main_2").css('height').slice(0,-2))){  //距离顶部大于100px时
    //  	$("#main_3").animate({opacity:1},1500)
    // }
  });
});

function homepage() {
  window.location.href = "../index.html";
}
