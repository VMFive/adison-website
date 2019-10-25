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
  "Motion-Ads":{title:"軸感互動廣告 Motion Ads",subtitle:"滿足品牌訴求的互動體驗",description:"集結移動感測、搖晃感測、上仰感測、旋轉感測、傾倒感測、手勢感測等多種“好玩”的廣告體驗方式。",url:"https://adison.com.tw/wp-content/uploads/2018/12/1.軸感互動（食品）：麥當勞搖搖雞球_edit改.mp4",},
  "Dynamic-In-Read-Ads":{title:"動態文中廣告 Dynamic In-Read Ads",subtitle:"透過互動個人化廣告內容",description:"原生廣告結合如：天氣（溫度、濕度、PM2.5）、時間、地理位置資訊，讓廣告訊息個人化且更容易抓住目光。",url:"https://adison.com.tw/wp-content/uploads/2018/12/3.動態文中：Swift_edit改.mp4",},
  "Dynamic-Interstitial":{title:"動態蓋版廣告 Dynamic Interstitial Ad",subtitle:"透過互動個人化廣告內容",description:"蓋版廣告結合如：天氣（溫度、濕度、PM2.5）、時間、地理位置資訊，讓廣告訊息個人化且更容易抓住目光。",url:"https://adison.com.tw/wp-content/uploads/2018/12/2.動態蓋板（食品）：肯德基_edit改.mp4",},
  "Carousel-Ads":{title:"輪播式廣告 Carousel Ads",subtitle:"廣告訊息發揮淋漓盡致",description:"集結影音、靜態等多元素材（最多5種），讓廣告主充分利用一則廣告傳遞完整訊息，提高廣告的投資報酬率。",url:"https://adison.com.tw/wp-content/uploads/2018/12/4.輪播式（車）：Mazda_edit改.mp4",},
  "Impressive-Ads":{title:"滾動式廣告 Impressive Ads",subtitle:"吸睛低干擾的大版位廣告",description:"廣告位於內文中，隨用戶滑動慢慢出現至全版<br />（影音鑲於中間，上下靜態 banner），讓用戶更專注在廣告內容上。",url:"https://adison.com.tw/wp-content/uploads/2018/12/5.滾動式：溫徹斯特鬼屋_edit改.mp4",},
  "Vertical-Ads":{title:"直立式廣告 Vertical Ads",subtitle:"更符合行動用戶觀看體驗",description:"以蓋版形式覆蓋在網頁上，提供用戶符合行動裝置觀看的精彩視覺體驗，點擊右上方 X 鍵即可關閉廣告。",url:"https://adison.com.tw/wp-content/uploads/2018/12/6.直立式（車）：Lexus_edit改.mp4",},
  "Interstitial-Ads":{title:"蓋版廣告 Interstitial Ads",subtitle:"大氣勢大版位行動廣告",description:"覆蓋於網頁上方，動態影音加上靜態 banner 設計，<br />可以更完整在畫面上展演廣告訴求，點擊右上方 X 鍵即可關閉廣告。",url:"https://adison.com.tw/wp-content/uploads/2018/12/7.蓋版（車）：瑪莎拉蒂_edit改.mp4",},
  "Native-Flip-Ads":{title:"原生翻轉廣告 Native Flip Ads",subtitle:"翻轉出場瞬間吸引目光",description:"原生廣告自然的融入在網頁的靜態文章段落中，當廣告經滑動至螢幕中央時，即以翻轉的展演形式吸引用戶注目。",url:"https://adison.com.tw/wp-content/uploads/2018/12/8.原生翻轉Banner（電影）：分秒幣爭_edit改.mp4",},
  "Native-Ads":{title:"原生廣告 Native Ads",subtitle:"極佳的觀看體驗與成效",description:"廣告自然的融入在網頁的靜態文章段落中或文末，<br />因閱讀過程比較不會打擾用戶，所以觀看率 (VTR) 極高。",url:"https://adison.com.tw/wp-content/uploads/2018/12/9.原生：Uniqlo_edit改.mp4",},
  "Top-Ads":{title:"原生置頂廣告 Top View Ads",subtitle:"第一屏快速抓住眼球",description:"影音廣告位於靜態文章的最上方，動態的內容讓用戶在進入到網頁時的第一眼就能看到，不易略過您的廣告。",url:"https://adison.com.tw/wp-content/uploads/2018/12/10.原生Top（音樂）：環球泰勒絲_edit改.mp4",},
}

$(".block-demo-show").on('click', e => {
  let data = demoMapping[e.currentTarget.dataset.key]
  $('video.ee-video-player__source').attr('src', data.url)
  $('.block-demo .title').html(data.title)
  $('.block-demo .subtitle').html(data.subtitle)
  $('.block-demo .description').html(data.description)

})
