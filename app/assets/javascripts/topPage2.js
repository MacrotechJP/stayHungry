$(function(){
  //スムーススクロール
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
});