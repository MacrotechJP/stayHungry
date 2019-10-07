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
});