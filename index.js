
//メニュークリックで該当セクションまでスクロール
$(function(){
    // #で始まるアンカーをクリックした時の処理
    $('a[href^=#]').click(function() {
       // スクロールの速度
       var speed = 400; // ミリ秒
       // アンカーの値を取得
       var href= $(this).attr("href");
       // 移動先を取得
       var target = $(href == "#" || href == "" ? 'html' : href);
       // 移動先を数値で取得
       var position = target.offset().top;
       // スムーススクロール
       $('body,html').animate({scrollTop:position}, speed, 'swing');
       return false;
    });
 });
