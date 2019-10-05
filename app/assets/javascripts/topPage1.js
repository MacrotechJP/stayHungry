$(function(){
  //ログクリック時目次表示
  $("#topMenu_image").on("click",function(){
    if ($("#topMenu_check:checked").val()) {
      $(this).css('width','17%');
      $(this).css('transition','1s');
      $(this).css('animation','rotate_anime_left 2s');
      $('input[id="topMenu_check"]').prop("checked",false);
    } else {
      $(this).css('width','19%');
      $(this).css('transition','1s');
      $(this).css('animation','rotate_anime_right 2s');
      $('input[id="topMenu_check"]').prop("checked",true);
    }
  })
})