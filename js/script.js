$(document).ready(function(){


  var $svg01 = $('#svg01'),
      $svg01Character01 = $('#svg01Character01'),
      $svg01Character02 = $('#svg01Character02'),
      $svg01Character03 = $('#svg01Character03'),
      $svg01Character04 = $('#svg01Character04'),
      $svg01Character05 = $('#svg01Character05'),
      $svg01Character06 = $('#svg01Character06'),
      $svg01Character07 = $('#svg01Character07'),

      $svg02 = $('#svg02'),
      $svg02topLine = $('#svg02topLine'),
      $svg02bottomLine = $('#svg02bottomLine');

  var tlScene01 = new TimelineMax({paused: true }),
      tlScene02 = new TimelineMax({paused: true });


  tlScene01.from($svg01Character01, 0.4, {y: -100, opacity: 0, scale: 2}, '+=0.5')
           .from($svg01Character02, 0.4, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character03, 0.4, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character04, 0.4, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character05, 0.4, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character06, 0.4, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character07, 0.4, {y: -100, opacity: 0, scale: 2});

  tlScene02.from($svg02topLine, 0.4, {y: -100, opacity: 0, scale: 2}, '+=0.5')
           .from($svg02bottomLine, 0.4, {y: -100, opacity: 0, scale: 2});


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
    afterLoad: function(anchorLink, index) {
      switch (index) {
          case 1:
              tlScene01.play();
              break;
          case 2:
              tlScene02.play();
              break;
          case 3:
              // tlScene03.play(0);
              break;
          case 4:
              // tlScene04.play(0);
              break;
          case 5:
              // tlScene05.play(0);
              break;
          case 6:
              // tlScene06.play(0);
              break;
      }
    },
    onLeave: function(index, nextIndex, direction) {
      switch (index) {
          case 1:
              tlScene01.pause(0);
              break;
          case 2:
              tlScene02.pause(0);
              break;
          case 3:
              // tlScene03.play(0);
              break;
          case 4:
              // tlScene04.play(0);
              break;
          case 5:
              // tlScene05.play(0);
              break;
          case 6:
              // tlScene06.play(0);
              break;
      }
    }

  });   //fullpage.js Init







  // function animation() {
  //   alert("test");
  // }

  // var $section_scene1 = $('#scene1'),
  //     $main_title = $('#scene1 .main-title'),
  //     $twVsJp = $('#twVsJp'),
  //     $toTaiwanPeople = $('#toTaiwanPeople'),
  //     $section_scene1_paragraph = $('#scene1 p');

  // var tlScene1 = new TimelineMax();

  // tlScene1.from($section_scene1, 0.4, {y: -100, opacity: 0})
  //         .from($main_title, 0.4, {y: -100, opacity: 0}, 0.1)
  //         .from($twVsJp, 0.4, {y: -100, opacity: 0}, 0.2)
  //         .from($toTaiwanPeople, 0.4, {y: -100, opacity: 0}, 0.3)
  //         .from($section_scene1_paragraph, 0.4, {y: -100, opacity: 0}, 0.4);


});