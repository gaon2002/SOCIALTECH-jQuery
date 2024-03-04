$(function () {
  // slickを利用してカルーセルを実装する
  $('.slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    speed: 1500,
    pauseOnHover: false
  });

  // リンクのホバー時に不透明度をアニメーションで変更する
  $('a').hover(
    function () {
      $(this).animate({ 'opacity': 0.6 }, 300);
    },
    function () {
      $(this).animate({ 'opacity': 1.0 }, 300);
    }
  );

  // 100pxを境にTOPに戻るボタンの表示・非表示を切り替える  
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('#page-top').fadeIn();
    } else {
      $('#page-top').fadeOut();
    }
  });

  // ページ内リンクのスクロールをなめらかにする（スムーズスクロール）
  $('a[href^="#"]').click(function () {
    const speed = 500;
    const href = $(this).attr('href');
    let $target;
    if (href == '#') {
      $target = $('html');
    }
    else {
      $target = $(href);
    }
    const position = $target.offset().top;
    $('html, body').animate({ 'scrollTop': position }, speed, 'swing');
    return false;
  });

  // スクロールしたときにセクションをフェードインさせる
  $(window).scroll(function () {
    const scrollAmount = $(window).scrollTop();
    const windowHeight = $(window).height();
    $('section').each(function () {
      const position = $(this).offset().top;
      if (scrollAmount > position - windowHeight + 100) {
        $(this).addClass('fade-in');
      }
    });
  });

  // Worksの画像をクリックしたときにモーダルで拡大表示する
  $('.works img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
    return false
  });
});