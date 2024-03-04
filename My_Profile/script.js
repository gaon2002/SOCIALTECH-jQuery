$(function(){

// メインビジュアルをカルーセルにする
$('.mainVisual').slick({
  autoplay: true,
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});

// リンクのホバー時に不透明度をアニメーションで変更する
//$(document).on('click, blur’, ’HTML要素, HTML要素’, function(){ 関数 })
$(document).on('mouseenter', 'a', function() {  //on()だとhover関数が効かない？
  $(this).css('opacity', '0.5'); //$(this)は特定のイベントハンドラ内で使用され、クリックされた要素を指す。
}).on('mouseleave', 'a', function() {
  $(this).css('opacity', '1'); //元に戻す
});

// スクロールしたときにTOPに戻るボタンを表示させる

$(window).on('scroll', function(){
  if ($(window).scrollTop() >= 100) { //$(window).scrollTop()現在のスクロール位置を取得
    $('#top').css('visiblity', 'visible');
  } else {
    $('#top').css('visiblity', 'hidden');
  }
});

// ページ内リンクのスクロールをなめらかにする
$(document).on('click','a[href^="#"]', function(e) { //'#'のある<a>要素をクリックしたときに発生するイベント
  e.preventDefault();                 //通常クリックしたら発生するリンクつなぎをキャンセル
  let target = $(this).attr('href');  //ページ内リンクを取得：a[href^="#"]のhref属性値(=リンク先)を取得している


  //html 要素と body 要素をアニメーションでスクロールするイベント関数
  $('html, body').animate({
  //scrollTop: 垂直方向でどこまでスクロールするのか位置を指定。
  //$(element).offset().top: $(element)要素の上部が画面上部に来るようにする。  要素の縁の位置を取得するメソッド。     
    scrollTop: $(target).offset().top 
  }, 1000);
})

// スクロールしたときにセクションをフェードインさせる(about)
$(window).on('scroll', function(){
  // 現在のスクロール位置とブラウザウィンドウの高さの合計
  if ($(window).scrollTop()         //現在のスクロール位置を取得
   + $(window).height()             //現在のブラウザウィンドウの高さ（ピクセル単位）を取得
   >= $('#about').offset().top){    //スクロール量が#aboutセクションの上部までの量を越えたら

    $('#about').addClass('active');  //クラスを追加する　.sectionとする.sectionというclassを削除します
  };
});

// スクロールしたときにセクションをフェードインさせる(works)




// Worksの画像をクリックしたときにモーダルで拡大表示する
$(document).on('click','a[src]', function(e) {
  e.preventDefault();
  let target = $(this).attr('href');  //クリックされたリンクのhref属性値を取得
  $('html, body').animate({           //html 要素と body 要素をアニメーションでスクロール
    scrollTop: $(target).offset().top //offset().topと記述することで、上からの位置を取得できる
  }, 1000);
})


});