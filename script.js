$(function(){
  // 「もっとみる」ボタンの上にマウスを置くと、画像が20px右に動き、半透明になる。
  $('.button-more').on('mouseover', function(){ //　()=>では有効にならない？
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });
});