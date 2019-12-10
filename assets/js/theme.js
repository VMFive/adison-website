// Custome theme code

if ($('.clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn'});
}

if ($('.clean-product').length > 0) {
    $(window).on("load",function() {
        $('.sp-wrap').smoothproducts();
    });
}

let demoMapping = {
  // "Flyout-Ads":{title:"從天而降廣告 Flyout Ads",subtitle:"驚喜從天而降視不可擋",description:"置底廣告破格從螢幕上方出現，瞬間抓住用戶目光至置底浮出版位，品牌可發揮無限創意，打造出專屬廣告視覺。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Flyout-Ads.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_flyout-1.png",},
  // "Tetris-Ads":{title:"俄羅斯方塊廣告 Tetris Ads",subtitle:"拼湊玩味廣告視覺印象",description:"經典遊戲動態效果，從螢幕上方掉下的各式方塊吸引用戶目光，快速拼揍出廣告完整畫面，強化廣告視覺印象。",url:"https://adison.com.tw/wp-content/uploads/2019/12/Tetris-Ads-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_tetris.png",},
  // "Zoom-Ads":{title:"步進式廣告 Zoom Ads",subtitle:"指尖互動廣告更具趣味",description:"用戶透過指尖輕鬆滑動讓廣告產生對應動態換場效果，增加用戶與廣告發生互動，進而提升廣告關注度。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Zoom-Ads-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_zoom.png",},
  // "Conveyor-Ads":{title:"輸送式廣告 Conveyor Ads",subtitle:"多元廣告訊息輪番上陣",description:"透過如行李輸送帶般的動態效果/互動模組，讓觀看者更清楚各商品圖文或影音內容，非常適合推出系列化商品的品牌採用。",url:"https://adison.com.tw/wp-content/uploads/2019/12/Conveyor-Ads-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_conveyor.png",},
  // "Sticky-Video":{title:"置底影音 Sticky Video",subtitle:"置底版面動靜開展超吸睛",description:"廣告影片plus主視覺圖片，動靜素材/廣告訊息一次給足，有效吸引用戶點擊擴張至全版版面，觀看大版面廣告內容。",url:"https://adison.com.tw/wp-content/uploads/2019/12/Sticky-Video-Ads-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_sticky_video.png",},
  // "Spin-Cubic-Ads":{title:"旋轉方塊廣告 Spin Cubic Ads",subtitle:"廣告輪番轉動眼球注意力",description:"置底立方體版位，廣告版面一舉以4倍數垂直延伸，豐富訊息不再受限置底版位大小，自動（或手動）轉出廣告大視野。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Spin-Cubic-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/adison_officalsite_icon_spin_cubic.png",},
  // "Marquee-Ads":{title:"跑馬燈廣告 Marquee Ads",subtitle:"水平延伸動態視覺更生動",description:"置底廣告版面水平延伸，廣告圖片文字跑起來！有效吸引用戶眼光，擴張品牌廣告黏著度，達到傳達訊息效果。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Marquee-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_marquee.png",},
  // "Panorama-Ads":{title:"全景串接廣告 Panorama Ads",subtitle:"版面跨篇幅創意不受限",description:"具備 180 度環景廣告效果，當用戶滑動時即可將廣告展示範圍進一步水平延展成三倍大版面，進而展示更多廣告訊息。",url:"https://adison.com.tw/wp-content/uploads/2019/12/Paonrama-Ads-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_panorama.png",},
  // "Native-Flip-Ads":{title:"原生翻轉廣告 Native Flip Ads",subtitle:"翻轉出場瞬間吸引目光",description:"原生廣告自然的融入在網頁的靜態文章段落中，當廣告經滑動至螢幕中央時，即以翻轉的展演形式吸引用戶注目。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Native-Flip-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_native_flip.png",},
  // "Dynamic-In-Read-Ads":{title:"動態文中廣告 Dynamic-In-Read Ads",subtitle:"個人化互動式廣告內容",description:"原生廣告結合如：天氣（溫度、濕度、PM2.5）、時間、地理位置資訊，讓廣告訊息個人化且更容易抓住目光。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Dynamic-In-Read-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/adison_officalsite_icon_native_dynamic.png",},
  // "Dynamic-Carousel-Ads":{title:"動態輪播廣告 Dynamic + Carousel Ads",subtitle:"廣告訊息發揮淋漓盡致",description:"集結影音、靜態多元素材，讓廣告主充分利用一則廣告傳遞豐富訊息，搭配動態 LBS 行動定位服務 O2O 整合行銷增加用戶互動(除地理位置外，還可客製天氣、時間資訊)。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Carousel-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/adison_officalsite_icon_carousel_dynamic.png",},
  // "Native-Ads":{title:"原生廣告 Native Ads",subtitle:"極佳的觀看體驗與成效",description:"廣告自然的融入在網頁的靜態文章段落中或文末，因閱讀過程比較不會打擾用戶，所以觀看率 (VTR) 極高。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Native-Ads-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_native.png",},
  // "Impressive-Ads":{title:"滾動式蓋版廣告 Impressive Ads",subtitle:"吸睛低干擾大版位廣告",description:"廣告位於內文中，隨用戶滑動慢慢出現至全版（影音可鑲於上方、中間或下方，搭配靜態 banner），用戶更專注在廣告內容。",url:"https://adison.com.tw/wp-content/uploads/2019/11/Impressive-Ads-Demo.mp4",icon:"https://adison.com.tw/wp-content/uploads/2019/11/format_icon_impressive.png",},
}

let adsIconContainer = document.querySelector('.block-demo .siema')

Object.keys(demoMapping).forEach((key) => {
  let item = demoMapping[key]

  // <div class="block-demo-show" data-key="Interstitial-Ads"> <img class="img-fluid" src="https://adison.com.tw/wp-content/uploads/2018/12/Interstitial-Ads-01.jpg" alt=""> </div>
  let div = document.createElement('div')
  div.classList.add('block-demo-show')
  div.setAttribute('data-key', key)
  let img = document.createElement('img')
  img.classList.add('img-fluid')
  img.src = item.icon
  img.alt = item.title

  div.appendChild(img)
  // slideDemo.append(div)
  adsIconContainer.appendChild(div)
})

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

$(".block-demo-show").on('click', e => {
  let data = demoMapping[e.currentTarget.dataset.key]
  $('video.ee-video-player__source').attr('src', data.url)
  $('.block-demo .title').html(data.title)
  $('.block-demo .subtitle').html(data.subtitle)
  $('.block-demo .description').html(data.description)

})
