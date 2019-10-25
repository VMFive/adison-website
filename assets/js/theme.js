// Custome theme code

if ($('.clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn'});
}

if ($('.clean-product').length > 0) {
    $(window).on("load",function() {
        $('.sp-wrap').smoothproducts();
    });
}

var slideDemo = new Siema({
  selector: '.siema',
  duration: 200,
  easing: 'ease-out',
  perPage: 3,
  startIndex: 0,
  draggable: true,
  multipleDrag: true,
  threshold: 20,
  loop: true,
  rtl: false,
  onInit: () => {},
  onChange: () => {},
});

let demoMapping = {
  "Motion-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/1.軸感互動（食品）：麥當勞搖搖雞球_edit改.mp4",
  "Dynamic-Interstitial":"https://adison.com.tw/wp-content/uploads/2018/12/2.動態蓋板（食品）：肯德基_edit改.mp4",
  "Dynamic-In-Read-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/3.動態文中：Swift_edit改.mp4",
  "Carousel-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/4.輪播式（車）：Mazda_edit改.mp4",
  "Impressive-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/5.滾動式：溫徹斯特鬼屋_edit改.mp4",
  "Vertical-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/6.直立式（車）：Lexus_edit改.mp4",
  "Interstitial-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/7.蓋版（車）：瑪莎拉蒂_edit改.mp4",
  "Native-Flip-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/8.原生翻轉Banner（電影）：分秒幣爭_edit改.mp4",
  "Native-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/9.原生：Uniqlo_edit改.mp4",
  "Top-Ads":"https://adison.com.tw/wp-content/uploads/2018/12/10.原生Top（音樂）：環球泰勒絲_edit改.mp4",
}

$(".block-demo-show").on('click', e => {
  $('video.ee-video-player__source').attr('src', demoMapping[e.currentTarget.dataset.key])
})
