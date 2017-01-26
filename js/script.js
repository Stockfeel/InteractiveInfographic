$(document).ready(function(){









  //init fullpage.js
  $('#wrapper').fullpage({
    navigation: true,
    navigationTooltips: [
      '來台旅客大車拚',
      '旅客都從哪裡來？',
      '他們都來做什麼？',
      '消費習慣的差異',
      '中國團客v.s.日本團客：掃些什麼貨？',
      '中國v.s.日本：喜歡住哪裡？',
      '聚焦觀光旅館',
      '中國v.s.日本 大車拼',
      '中國選擇購物，日本選擇住宿'
    ],
    afterRender: function(){
      tlScene01.play();
    },
    onLeave: function(index, nextIndex, direction) {
      switch (index) {
          case 1:
              tlScene01.pause();
              break;
          case 2:
              tlScene02.pause();
              break;
          case 3:
              tlScene03.pause();
              break;
          case 4:
              tlScene04.pause();
              break;
          case 5:
              tlScene05.pause();
              break;
          case 6:
              // tlScene06.play(0);
              break;
      }
      switch (nextIndex) {
          case 1:
              tlScene01.play(0);
              break;
          case 2:
              tlScene02.play(0);
              break;
          case 3:
              tlScene03.play(0);
              break;
          case 4:
              tlScene04.play(0);
              break;
          case 5:
              tlScene05.play(0);
              break;
          case 6:
              // tlScene06.play(0);
              break;
      }
    }

  });   //fullpage.js Init


});