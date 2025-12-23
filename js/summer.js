$(document).ready(function () {
  $("#banner_title").animate(
    {
      bottom: "200",
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
  }
  $(document).scroll(function () {
    var scroH = $(document).scrollTop(); //滚动高度
    var viewH = $(window).height(); //可见高度
    var contentH = $(document).height(); //内容高度
    //console.log(scroH)
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
// $("#LOGO").click(function(){
// 	console.log("跳转");
// })

function homepage() {
  window.location.href = "../index.html";
}

function Album_openbox(id) {
  $("#pop" + id).fadeIn(800);
  $("#pop_bg").fadeIn(800);
}
function Album_closebox(id) {
  $("#pop" + id).fadeOut(800);
  $("#pop_bg").fadeOut(800);
}
