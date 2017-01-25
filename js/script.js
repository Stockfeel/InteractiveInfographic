$(document).ready(function(){


//.....................svg01.....................
  var $svg01 = $('#svg01'),
      $svg01Character01 = $('#svg01Character01'),
      $svg01Character02 = $('#svg01Character02'),
      $svg01Character03 = $('#svg01Character03'),
      $svg01Character04 = $('#svg01Character04'),
      $svg01Character05 = $('#svg01Character05'),
      $svg01Character06 = $('#svg01Character06'),
      $svg01Character07 = $('#svg01Character07'),

      $svg01People01 = $('#svg01People01'),
      $svg01People02 = $('#svg01People02'),
      $svg01People03 = $('#svg01People03'),
      $svg01People04 = $('#svg01People04'),
      $svg01People05 = $('#svg01People05'),
      $svg01People06 = $('#svg01People06'),
      $svg01People07 = $('#svg01People07'),

      $svg01Cloud01 = $('#svg01Cloud01'),
      $svg01Cloud02 = $('#svg01Cloud02'),
      $svg01Cloud03 = $('#svg01Cloud03'),
      $svg01Cloud04 = $('#svg01Cloud04'),
      $svg01Cloud05 = $('#svg01Cloud05'),
      $svg01Plane = $('#svg01Plane'),

      $svg01ChinaVsJapan = $('#svg01ChinaVsJapan'),

      $svg01ScrollDown = $('#svg01ScrollDown'),

      $svg01BottomText = $('#svg01BottomText'),

      $svg01Door = $('#svg01Door'),

      $svg01Bg = $('#svg01Bg'),

//.....................svg02.....................

      $svg02 = $('#svg02'),
      $svg02topLine = $('#svg02topLine'),
      $svg02bottomLine = $('#svg02bottomLine'),

      $svg02Heading = $('#svg02Heading'),
      $svg02subHeading = $('#svg02subHeading'),

      $svg02Door = $('#svg02Door'),
      $svg02Bg = $('#svg02Bg'),

      $svg02BottomText = $('#svg02BottomText'),

      $svg02TextHongKongAndMacao = $('#svg02TextHongKongAndMacao'),
      $svg02NumberHongKongAndMacao = $('#svg02NumberHongKongAndMacao'),
      $svg02LineHongKongAndMacao = $('#svg02LineHongKongAndMacao'),
      $svg02BubbleHongKongAndMacao = $('#svg02BubbleHongKongAndMacao'),
      $svg02PeopleHongKongAndMacao = $('#svg02PeopleHongKongAndMacao'),
      $svg02FlagHongKong = $('#svg02FlagHongKong'),
      $svg02FlagMacao = $('#svg02FlagMacao'),

      $svg02TextChina = $('#svg02TextChina'),
      $svg02NumberChina = $('#svg02NumberChina'),
      $svg02LineChina = $('#svg02LineChina'),
      $svg02BubbleChina = $('#svg02BubbleChina'),
      $svg02PeopleChina = $('#svg02PeopleChina'),
      $svg02FlagChina = $('#svg02FlagChina'),

      $svg02TextJapan = $('#svg02TextJapan'),
      $svg02NumberJapan = $('#svg02NumberJapan'),
      $svg02LineJapan = $('#svg02LineJapan'),
      $svg02BubbleJapan = $('#svg02BubbleJapan'),
      $svg02PeopleJapan = $('#svg02PeopleJapan'),
      $svg02FlagJapan = $('#svg02FlagJapan'),

      $svg02TextSoutheastAsia = $('#svg02TextSoutheastAsia'),
      $svg02NumberSoutheastAsia = $('#svg02NumberSoutheastAsia'),
      $svg02LineSoutheastAsia = $('#svg02LineSoutheastAsia'),
      $svg02BubbleSoutheastAsia = $('#svg02BubbleSoutheastAsia'),
      $svg02PeopleSoutheastAsia = $('#svg02PeopleSoutheastAsia'),
      $svg02FlagSingapore = $('#svg02FlagSingapore'),
      $svg02FlagThai = $('#svg02FlagThai'),
      $svg02FlagMalaysia = $('#svg02FlagMalaysia'),
      $svg02FlagPhilippines = $('#svg02FlagPhilippines'),
      $svg02FlagVietnam = $('#svg02FlagVietnam');



  var tlScene01 = new TimelineMax({paused: true }),
      tlScene02 = new TimelineMax({paused: true });





  tlScene01.from($svg01Cloud01, 0.6, {y: 100, opacity: 0}, '+=0.5')
           .from($svg01Cloud02, 0.6, {y: 100, opacity: 0}, '-=0.4')
           .from($svg01Cloud03, 0.6, {y: 100, opacity: 0}, '-=0.4')
           .from($svg01Cloud04, 0.6, {y: 100, opacity: 0}, '-=0.4')
           .from($svg01Cloud05, 0.6, {y: 100, opacity: 0}, '-=0.4')
           .fromTo($svg01Plane, 4, {x: -2500, y: 1000, scale: 2}, {x: 2500, y:-1500, scale: 0.2}, '-=1')
           .to($svg01Cloud01, 0.3, {opacity: 0}, '-=1')
           .to($svg01Cloud02, 0.3, {opacity: 0}, '-=1.2')
           .to($svg01Cloud03, 0.3, {opacity: 0}, '-=1.4')
           .to($svg01Cloud04, 0.3, {opacity: 0}, '-=1.6')
           .to($svg01Cloud05, 0.3, {opacity: 0}, '-=1.8')

           .from($svg01Character01, 0.3, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character02, 0.3, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character03, 0.3, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character04, 0.3, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character05, 0.3, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character06, 0.3, {y: -100, opacity: 0, scale: 2})
           .from($svg01Character07, 0.3, {y: -100, opacity: 0, scale: 2})

           .from($svg01ChinaVsJapan, 1, {y: -100, opacity: 0})

           .from($svg01Door, 0.4, {y: -100, opacity: 0})

           .from($svg01Bg, 0.4, {y: -100, opacity: 0})

           .from($svg01People01, 0.4, {x: -100, opacity: 0})
           .from($svg01People02, 0.4, {x: -100, opacity: 0}, '-=0.2')
           .from($svg01People03, 0.4, {x: -100, opacity: 0}, '-=0.2')
           .from($svg01People04, 0.4, {x: -100, opacity: 0}, '-=0.2')
           .from($svg01People05, 0.4, {x: 100, opacity: 0}, '-=0.2')
           .from($svg01People06, 0.4, {x: 100, opacity: 0}, '-=0.2')
           .from($svg01People07, 0.4, {x: 100, opacity: 0}, '-=0.2')

           .from($svg01BottomText, 0.4, {x: 100, opacity: 0}, '-=0.2')

           .from($svg01ScrollDown, 0.4, {x: 100, opacity: 0});









  tlScene02.from($svg02topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
           .from($svg02bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
           .from($svg02Heading, 0.4, {x: 100, opacity: 0}, '-=0.2')



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