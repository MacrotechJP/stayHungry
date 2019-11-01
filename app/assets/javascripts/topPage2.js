$(function(){
  //スムーススクロール(上から下へ)
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

  //ロケーション画像変更
  $(".fa-arrow-alt-circle-right").on("click",function(){  //右向き矢印クリック時
    $(".location_main_left iframe").hide();               //Google map非表示
    $(".fa-arrow-alt-circle-right").hide();               //右矢印アイコン非表示
    $(".location_main_left img").fadeIn(1000);            //店頭画像表示
    $(".fa-arrow-alt-circle-left").show();                //左矢印アイコン表示
  })
  $(".fa-arrow-alt-circle-left").on("click",function(){  //左向き矢印クリック時
    $(".location_main_left img").hide();                 //店頭画像非表示
    $(".fa-arrow-alt-circle-left").hide();               //左矢印アイコン非表示
    $(".location_main_left iframe").fadeIn(1000);        //Google map表示
    $(".fa-arrow-alt-circle-right").show();              //右矢印アイコン表示
  })

  //トップ画像入れ替え（2枚以上時表示）
  // var rimokon;
  // var topimage_flg = 0;
  // var hover_flg = 0;
  // $("#topimage2").hide();
  // function loop(){
  //   if(topimage_flg == 0 && hover_flg == 0){
  //     $("#topimage1").fadeOut(2500);
  //     $("#topimage2").fadeIn(2500);
  //     console.log("上");
  //     topimage_flg = 1
  //   }else if(topimage_flg == 1 && hover_flg == 0){
  //     $("#topimage2").fadeOut(2500);
  //     $("#topimage1").fadeIn(2500);
  //     console.log("下");
  //     topimage_flg = 0
  //   }
  //   $('.header_top_right').hover(function() {
  //     hover_flg = 1
  //   }, function() {
  //     hover_flg = 0
  //   });
  //   rimokon = setTimeout(loop,5000)
  // }
  // loop();

  //Photo自動スクロール
  $(function(){
		$('.photo_main_scroll1').infiniteslide({
			'speed': 30, //speed this is px/min
			'direction': 'left', //choose  up/down/left/right
			'pauseonhover': true, //if true,stop onmouseover
			'responsive': false, //width/height recalculation on window resize. child element's width/height define %/vw/vh,this set true.
			'clone': 1 //if child elements are too few (elements can't "infinite"), set 2 or over.
    });
    $('.photo_main_scroll2').infiniteslide({
			'speed': 30, //speed this is px/min
			'direction': 'right', //choose  up/down/left/right
			'pauseonhover': true, //if true,stop onmouseover
			'responsive': false, //width/height recalculation on window resize. child element's width/height define %/vw/vh,this set true.
			'clone': 1 //if child elements are too few (elements can't "infinite"), set 2 or over.
		});
  });
  
  //flashメッセージ自動非表示
  $(function(){
    setTimeout("$('.notifications').fadeOut('slow')", 3000) 
  })
});