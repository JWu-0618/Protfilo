$(document).ready(function () {
  var scrollTop = false;
  //$("#subnav").hide();
  //$("#subnav").slideDown("slow");
  $("#subnav").animate({ bottom: "75", opacity: 1 }, 2000);
  $("html").animate({ scrollTop: 0 }, 500, function () {
    scrollTop = true;
  });
  //				 $("#subnav").slideDown("fast",function(){
  //				 	$("#subnav").fadeToggle(3000);
  //	            })
  $(document).scroll(function () {
    var scroH = $(document).scrollTop(); //滚动高度
    var viewH = $(window).height(); //可见高度
    var contentH = $(document).height(); //内容高度
    // console.log(scroH)
    // // console.log(contentH)
    // console.log($("#main_1").css('height').slice(0,-2))
    if (scrollTop) {
      if (scroH > 400 + viewH) {
        //距离顶部大于100px时
        $("#main_1").animate({ opacity: 1 }, 1500);
      }
      if (scroH > 500 + viewH) {
        //距离顶部大于100px时
        $("#main_1_title").animate({ opacity: 1 }, 1800);
      }
      if (
        scroH >
        400 + viewH + parseInt($("#main_1").css("height").slice(0, -2))
      ) {
        //距离顶部大于100px时
        $("#main_2").animate({ opacity: 1 }, 1500);
      }
      if (
        scroH >
        500 + viewH + parseInt($("#main_1").css("height").slice(0, -2))
      ) {
        //距离顶部大于100px时
        $("#main_2_title").animate({ opacity: 1 }, 1800);
      }
      if (
        scroH >
        400 +
          viewH +
          parseInt($("#main_1").css("height").slice(0, -2)) +
          parseInt($("#main_2").css("height").slice(0, -2))
      ) {
        //距离顶部大于100px时
        $("#main_3").animate({ opacity: 1 }, 1500);
      }
    }
    //			        if (contentH - (scroH + viewH) <= 100){  //距离底部高度小于100px
    //			             console.log("距离底部高度小于100px")
    //			        }
    //			        if (contentH = (scroH + viewH)){  //滚动条滑到底部啦
    //			             console.log("滚动条滑到底部啦")
    //			        }
  });
  //			var sideBar_1 = document.getElementById('sideBar_1');
  //			var click;
  //			 sideBar_1.onmouseover = function() {
  //			  	console.log("aaaa");
  //			  	click = true;
  //			  	if(click){
  //			 	$("#innersideBar_1").animate({opacity:1},500);
  //				 }else{
  //				 	$("#innersideBar_1").animate({opacity:0},500);
  //				 }
  //			 };
  //			 sideBar_1.onmouseout = function() {
  //			  	console.log("aaaa");
  //			  	click = false;
  //			  	if(click){
  //			 	$("#innersideBar_1").animate({opacity:1},500);
  //				}else{
  //				 $("#innersideBar_1").animate({opacity:0},500);
  //				}
  //			 };
  //			  $("#innersideBar_1").on({
  //		          mouseover : function(){
  //					console.log()
  //		            $("#innersideBar_1").animate({opacity:1},500);
  //		          } ,
  //		          mouseout : function(){
  //		            $("#innersideBar_1").animate({opacity:0},500);
  //		          }
  //		      }) ;
});

function homepage() {
  window.location.href = "index.html";
}

function Album_openbox(id) {
  $("#pop" + id).fadeIn(800);
  $("#pop_bg").fadeIn(800);
}
function Album_closebox(id) {
  $("#pop" + id).fadeOut(800);
  $("#pop_bg").fadeOut(800);
}
