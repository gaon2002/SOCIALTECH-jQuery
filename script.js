$(function(){
  // 「もっとみる」ボタンの上にマウスを置くと、画像が20px右に動き、半透明になる。
  $('.button-more').on('mouseover', function(){ //　()=>では有効にならない？
    $(this).animate({  //$(this)は何を指す？　".button-more"オブジェクト？
      opacity: 0.5,
      marginLeft: 20,
    }, 100);
  });

  // 「もっとみる」ボタンの上からマウスを離すと、右に動いた画像と透明度が戻る。
  $('.button-more').on('mouseout', function(){ //　()=>では有効にならない？
    $(this).animate({  //$(this)は何を指す？　".button-more"オブジェクト？
      opacity: 1,
      marginLeft: 0,
      }, 100);
    });

  // カルーセルを設定する
  $('.carousel').slick({  //カルーセル処理したいブロック<div>等を指定
    autoplay: true, //自動的に切り替えるか
    dots: true,     //表示する
    infinite: true, //ループさせるか
    autoplayspeed: 5000,  //次の画像に切り替えるまでの待ち時間　(5000ms)
    arrows: false, //画像を手動で切り替えるための矢印ボタンを表示するかどうか
  });

});