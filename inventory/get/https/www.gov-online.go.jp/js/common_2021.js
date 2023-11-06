// 別ウィンドウのa要素内を<span class="tBlank_inner">で囲む
$(function () {
  $('a[target="_blank"]').wrapInner('<span class="tBlank_inner"></span>');
});
// 別ウィンドウのa要素内emの直前にアイコンとalt情報を機械的に設置する
$(function () {
  $('a[target="_blank"] .tBlank_inner').after(
    '<img src="/module/common/images/mark008.svg" class="tBlank" alt="別ウインドウで開きます">'
  );
});
