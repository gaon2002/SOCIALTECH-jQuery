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
    autoplaySpeed: 5000,  //次の画像に切り替えるまでの待ち時間　(5000ms)
    arrows: false, //画像を手動で切り替えるための矢印ボタンを表示するかどうか
  });


  // 送信ボタンクリック時の処理
  $('#submit').on('click', function(event){
    // functionの引数(event)の中にはクリックした送信ボタン（#submit）に関する情報（オブジェクト）が入っている。

    // formタグによる送信を拒否
    event.preventDefault();
    // 入力チェックをした結果、エラーがあるかないか判定
    let result = inputCheck();

    // エラー判定とメッセージを取得 (resultオブジェクトを判定結果に出力しているので、その結果を取得している)
    let error = result.error;
    let message = result.message;

    // エラーがなかったら、フォームを送信する
    if (error == false) {
      // フォーム送信は行わず、送信成功メッセージのみ表示する
      alert('お問い合わせを送信しました。')
    } else {
      // エラーメッセージを表示する
      alert(message);
    }


    // フォーカスが外れたとき(blur)にフォームの入力チェックをする
    // on('blur', ()=>) ではない？？？
    $('#name').blur(function(){
      inputCheck();
    });
    $('#furigana').blur(function(){
      inputCheck();
    });
    $('#email').blur(function(){
      inputCheck();
    });
    $('#tel').blur(function(){
      inputCheck();
    });
    $('#message').blur(function(){
      inputCheck();
    });
    // clickしたときにフォームの入力チェックをする
    $('#agree').click(function(){
      inputCheck();
    });

  });


  // お問い合わせフォームの入力チェック ※これはjQueryではなく、JS？
  function inputCheck(){
    // エラーのチェック結果 (インプット内容が変わるから変数)
    let result;

    // エラーメッセージのテキスト
    let message ='';

    // エラーがなければfalse、エラーがあればtrue
    let error = false;

    // お名前チェック
    if ($('#name').val() == '') {
      // エラーあり
      // 「お名前」のフォームを赤色に変更する
      $('#name').css('background-color', '#f79999');
      // エラーにtrueを代入する
      error = true;
      // エラーメッセージを表示する
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    };

    // フリガナチェック
    if ($('#furigana').val() == '') {
      // エラーあり
      // 「お名前」のフォームを赤色に変更する
      $('#furigana').css('background-color', '#f79999');
      // エラーにtrueを代入する
      error = true;
      // エラーメッセージを表示する
      message += 'フリガナを入力してください。\n';
    } else {
      // エラーなし
      $('#furigana').css('background-color', '#fafafa');
    };

    // お問い合わせチェック
    if ($('#message').val() == '') {
      // エラーあり
      // 「お名前」のフォームを赤色に変更する
      $('#message').css('background-color', '#f79999');
      // エラーにtrueを代入する
      error = true;
      // エラーメッセージを表示する
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    };

    // e-mailチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1 ) {
      // エラーあり
      // 「お名前」のフォームを赤色に変更する
      $('#email').css('background-color', '#f79999');
      // エラーにtrueを代入する
      error = true;
      // エラーメッセージを表示する
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません。\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    };

    // 電話番号チェック
    // 未入力の場合はハイフンがなくてもOKという条件式にする
    // 条件式：　!=ブランクでない　かつ、ハイフンが含まれていない
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1) {
      // エラーあり
      // 「お名前」のフォームを赤色に変更する
      $('#tel').css('background-color', '#f79999');
      // エラーにtrueを代入する
      error = true;
      // エラーメッセージを表示する
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      // エラーなし
      $('#tel').css('background-color', '#fafafa');
    };

    // お住まいの都道府県入力チェック
    if ($('#prefecture').val() == '') {
      // エラーあり
      // 「」のフォームを赤色に変更する
      $('#prefecture').css('background-color', '#f79999');
      // エラーにtrueを代入する
      error = true;
      // エラーメッセージを表示する
      message += '都道府県を選択してください。\n';
    } else {
      // エラーなし
      $('#prefecture').css('background-color', '#fafafa');
    };


    // 個人情報チェックボックスのチェック
    if ($('#agree').prop('checked') == false) {
      // エラーにtrueを代入する
      error = true;
      // エラーメッセージを表示する
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    };

    // 全ての項目にエラー(true)があるかどうか
    if (error == true) {
      // グレーのボタンを表示　(送信不可)
      $('#submit').attr('src', 'images/button-submit.png');
    } else {
      // ブルーのボタンを表示　(送信可能)
      $('#submit').attr('src', 'images/button-submit-blue.png');
    };

    // 関数の戻り値として、複数の値を返す場合はオブジェクト{}でエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    };

    // 戻り値としてエラーがあるかどうかを返す
    return result;

  };
});