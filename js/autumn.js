$(() => {
  // 标题淡出
  $("#banner_title").animate(
    {
      bottom: "150",
      opacity: 1,
    },
    1500
  );
  //$("#subnav").slideDown("fast",function(){
  //		$("#subnav").fadeToggle(3000);
  //})
  let scroH = $(document).scrollTop(); //滚动高度
  let viewH = $(window).height(); //可见高度
  if (scroH > viewH) {
    $("#nav").fadeIn(800);
  }
  $(document).scroll(() => {
    let scroH = $(document).scrollTop(); //滚动高度
    let viewH = $(window).height(); //可见高度
    // 三元
    scroH > viewH ? $("#nav").fadeIn(500) : $("#nav").fadeOut(500);
    // let contentH = $(document).height(); //内容高度
    //console.log(scroH)
    // console.log(viewH)
    // console.log($("#main_1").css('height').slice(0,-2))

    // if (scroH > viewH) { //距离顶部大于100px时
    // 	//$("#nav").animate({opacity:1},1500)
    // 	$('#nav').fadeIn(500)
    // } else {
    // 	$('#nav').fadeOut(500)
    // }
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
  // 跳转首页
  $("#LOGO").click(() => {
    window.location.href = "../index.html";
  });

  // 小专辑
  const $box = $(".Album_box");
  const $pop = $(".pop");
  const $exit = $("#exit");
  // console.log($pop)
  $box.each((index, item) => {
    $(item).click(() => {
      $("#pop_bg").fadeIn(800);
      $pop.eq(index).fadeIn(800);
    });
  });

  $exit.each((index, item) => {
    $(item).click(() => {
      $("#pop_bg").fadeOut(800);
      $pop.fadeOut(800);
    });
  });

  // 轮播动画
  let timer = null;
  const $img = $("#img");

  function scrollLeft() {
    /*先向左移动一个图片的宽度  移动后在末尾追加第一个元素 然后将第一个元素移除 */
    $img
      .animate(
        {
          left: -320,
        },
        1000,
        () => {
          $img.append($("#img li:first").clone());
          $("#img li:first").remove();
        }
      )
      .animate(
        {
          /*将left值置为0*/
          left: 0,
        },
        0
      );
  }

  function auto() {
    timer = setInterval(scrollLeft, 3000);
  }
  // 主动执行
  auto();
  // 停止和恢复
  $img.on({
    mouseenter: () => {
      clearInterval(timer);
    },
    mouseleave: auto,
  });
});
