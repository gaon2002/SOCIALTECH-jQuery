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
    $('#top').css('visibility', 'visible');
  } else {
    $('#top').css('visibility', 'hidden');
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
  let scrollTop = $(window).scrollTop()  //現在のスクロール位置を取得
  let windowHeight = $(window).height()  //現在のブラウザウィンドウの高さ（ピクセル単位）を取得
  let aboutTop = $('#about').offset().top //#aboutセクションの上部までの位置を取得
  // 現在のスクロール位置とブラウザウィンドウの高さの合計がaboutセクションまでスクロールされたら
  if (scrollTop + windowHeight >= aboutTop - windowHeight / 2) {
      //クラスを追加する　.sectionとする.sectionというclassを削除します
      $('#about').addClass('active'); 
  };
});

// スクロールしたときにセクションをフェードインさせる(works)
$(window).on('scroll', function(){
  let scrollTop = $(window).scrollTop()  //現在のスクロール位置を取得
  let windowHeight = $(window).height()  //現在のブラウザウィンドウの高さ（ピクセル単位）を取得
  let worksTop = $('#works').offset().top //#worksセクションの上部までの位置を取得
  // 現在のスクロール位置とブラウザウィンドウの高さの合計がworksセクションまでスクロールされたら
  if (scrollTop >= worksTop - windowHeight) {
      //クラスを追加する　.sectionとすると.sectionというclassを削除します
      $('#works').addClass('active'); 
  };
});

// Worksの画像をクリックしたときにモーダルで拡大表示する
// 通常動作をキャンセル
$(document).on('click','.worksImg img', function(e) {
  e.preventDefault();
  // attr()メソッドを使い、クリックされた画像のsrc属性の値を取得する
  let worksPic = $(this).attr('src');  //クリックされたリンクのsrc属性値を取得
  console.log(worksPic);
  $('.worksMimg').attr('src', worksPic); //モーダルの画像部分（img要素）のsrc属性に取得した値を追加する
  $('.worksMordal').css('display', 'inline'); //クリックしたら画像拡大

});

// ✕ボタンを押したら画面を閉じる
$(document).on('click','.closeButton', function() {
  // ✕ボタンのクリックを検知しているか確認するために、コンソールにメッセージを出力
  console.log("Close button clicked");
  //worksMordalを非表示にする。　なお、closeButtonのクリックにデフォルト動作がないのでe.preventDefault()は不要
  $('.worksMordal').css('display', 'none'); //クリックしたら非表示にする
});

});