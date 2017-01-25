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
      $svg02FlagVietnam = $('#svg02FlagVietnam'),

//.....................svg03.....................

      $svg03topLine = $('#svg03topLine'),
      $svg03bottomLine = $('#svg03bottomLine'),

      $svg03Heading = $('#svg03Heading'),

      $svg03Sign = $('#svg03Sign'),

      $svg03Bg = $('#svg03Bg'),

      $svg03BusLeft = $('#svg03BusLeft'),
      $svg03BusRight = $('#svg03BusRight'),

      $svg03PeopleLeft01 = $('#svg03PeopleLeft01'),
      $svg03PeopleLeft02 = $('#svg03PeopleLeft02'),
      $svg03PeopleLeft03 = $('#svg03PeopleLeft03'),
      $svg03PeopleLeft04 = $('#svg03PeopleLeft04'),
      $svg03PeopleRight01 = $('#svg03PeopleRight01'),
      $svg03PeopleRight02 = $('#svg03PeopleRight02'),

      $svg03GirlLeft = $('#svg03GirlLeft'),
      $svg03GirlRight = $('#svg03GirlRight'),

      $svg03PieLeft = $('#svg03PieLeft'),
      $svg03PieRight = $('#svg03PieRight'),

      $svg03TextLeft = $('#svg03TextLeft'),
      $svg03TextRight = $('#svg03TextRight'),

      $svg03NumberLeft = $('#svg03NumberLeft'),
      $svg03NumberRight = $('#svg03NumberRight'),

      $svg03FlagChina = $('#svg03FlagChina'),
      $svg03FlagJapan = $('#svg03FlagJapan'),

      $svg03BottomText = $('#svg03BottomText'),

//.....................svg04.....................

      $svg04topLine = $('#svg04topLine'),
      $svg04bottomLine = $('#svg04bottomLine'),

      $svg04Heading = $('#svg04Heading'),
      $svg04subHeading = $('#svg04subHeading'),
      $svg04LittleText = $('#svg04LittleText'),

      $svg04Plane = $('#svg04Plane'),

      $svg04Cloud01 = $('#svg04Cloud01'),
      $svg04Cloud02 = $('#svg04Cloud02'),
      $svg04Cloud03 = $('#svg04Cloud03'),
      $svg04Cloud04 = $('#svg04Cloud04'),
      $svg04Balloon = $('#svg04Balloon'),

      $svg04BannerLong = $('#svg04BannerLong'),
      $svg04BannerChina = $('#svg04BannerChina'),
      $svg04BannerJapan = $('#svg04BannerJapan'),

      $svg04Floor01 = $('#svg04Floor01'),
      $svg04Floor02 = $('#svg04Floor02'),
      $svg04Floor03 = $('#svg04Floor03'),
      $svg04Floor04 = $('#svg04Floor04'),
      $svg04Floor05 = $('#svg04Floor05'),
      $svg04Floor06 = $('#svg04Floor06'),

      $svg04Ground = $('#svg04Ground'),

      $svg04Floor01LeftBar = $('#svg04Floor01LeftBar'),
      $svg04Floor02LeftBar = $('#svg04Floor02LeftBar'),
      $svg04Floor03LeftBar = $('#svg04Floor03LeftBar'),
      $svg04Floor04LeftBar = $('#svg04Floor04LeftBar'),
      $svg04Floor05LeftBar = $('#svg04Floor05LeftBar'),

      $svg04Floor01LeftNumber = $('#svg04Floor01LeftNumber'),
      $svg04Floor02LeftNumber = $('#svg04Floor02LeftNumber'),
      $svg04Floor03LeftNumber = $('#svg04Floor03LeftNumber'),
      $svg04Floor04LeftNumber = $('#svg04Floor04LeftNumber'),
      $svg04Floor05LeftNumber = $('#svg04Floor05LeftNumber'),

      $svg04Floor01RightBar = $('#svg04Floor01RightBar'),
      $svg04Floor02RightBar = $('#svg04Floor02RightBar'),
      $svg04Floor03RightBar = $('#svg04Floor03RightBar'),
      $svg04Floor04RightBar = $('#svg04Floor04RightBar'),
      $svg04Floor05RightBar = $('#svg04Floor05RightBar'),

      $svg04Floor01RightNumber = $('#svg04Floor01RightNumber'),
      $svg04Floor02RightNumber = $('#svg04Floor02RightNumber'),
      $svg04Floor03RightNumber = $('#svg04Floor03RightNumber'),
      $svg04Floor04RightNumber = $('#svg04Floor04RightNumber'),
      $svg04Floor05RightNumber = $('#svg04Floor05RightNumber'),

      $svg04BottomText = $('#svg04BottomText');

  var tlScene01 = new TimelineMax({paused: true }),
      tlScene02 = new TimelineMax({paused: true }),
      tlScene03 = new TimelineMax({paused: true }),
      tlScene04 = new TimelineMax({paused: true });





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

           .from($svg01BottomText, 0.4, {y: 50, opacity: 0}, '-=0.2')

           .from($svg01ScrollDown, 0.4, {x: 100, opacity: 0});









  tlScene02.from($svg02topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
           .from($svg02bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
           .from($svg02Heading, 0.4, {x: -100, opacity: 0})
           .from($svg02subHeading, 0.4, {x: -100, opacity: 0})
           .from($svg02Bg, 0.4, {y: -100, opacity: 0})
           .from($svg02Door, 0.4, {y: -100, opacity: 0}, '-=0.2')
           .to($svg02PeopleHongKongAndMacao, 0.7, {y: 270, opacity: 1})
           .to($svg02PeopleHongKongAndMacao, 0.7, {x: -355})

           .to($svg02PeopleChina, 0.7, {y: 270, opacity: 1})
           .to($svg02PeopleChina, 0.7, {x: -90})

           .to($svg02PeopleJapan, 0.7, {y: 270, opacity: 1})
           .to($svg02PeopleJapan, 0.7, {x: 180})

           .to($svg02PeopleSoutheastAsia, 0.7, {y: 270, opacity: 1})
           .to($svg02PeopleSoutheastAsia, 0.7, {x: 390})

           .from($svg02BubbleHongKongAndMacao, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02LineHongKongAndMacao, 0.1, {y: 3, opacity: 0})
           .from($svg02TextHongKongAndMacao, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagHongKong, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagMacao, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02NumberHongKongAndMacao, 0.4, {scale: 0, transformOrigin: '50% 50%'})

           .from($svg02BubbleChina, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02LineChina, 0.1, {y: 3, opacity: 0})
           .from($svg02TextChina, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagChina, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02NumberChina, 0.4, {scale: 0, transformOrigin: '50% 50%'})

           .from($svg02BubbleJapan, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02LineJapan, 0.1, {y: 3, opacity: 0})
           .from($svg02TextJapan, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagJapan, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02NumberJapan, 0.4, {scale: 0, transformOrigin: '50% 50%'})

           .from($svg02BubbleSoutheastAsia, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02LineSoutheastAsia, 0.1, {y: 3, opacity: 0})
           .from($svg02TextSoutheastAsia, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagSingapore, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagThai, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagMalaysia, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagPhilippines, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02FlagVietnam, 0.4, {scale: 0, transformOrigin: '50% 50%'})
           .from($svg02NumberSoutheastAsia, 0.4, {scale: 0, transformOrigin: '50% 50%'})

           .from($svg02BottomText, 0.4, {y: 50, opacity: 0});





  tlScene03.from($svg03topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
           .from($svg03bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
           .from($svg03Heading, 0.4, {x: -100, opacity: 0})

           .from($svg03BusLeft, 1, {scale:0, transformOrigin: '100% 0%'})
           .from($svg03BusRight, 1, {scale:0}, '-=1')

           .from($svg03PeopleLeft01, 0.4, {x: -20, opacity: 0})
           .from($svg03PeopleRight01, 0.4, {x: 20, opacity: 0}, '-=0.2')
           .from($svg03PeopleLeft02, 0.4, {x: -20, opacity: 0}, '-=0.2')
           .from($svg03PeopleRight02, 0.4, {x: 20, opacity: 0}, '-=0.2')
           .from($svg03PeopleLeft03, 0.4, {x: -20, opacity: 0}, '-=0.2')
           .from($svg03PeopleLeft04, 0.4, {x: -20, opacity: 0}, '-=0.2')

           .to($svg03Bg, 1, {opacity: 0.3})

           .from($svg03Sign, 0.4, {y: -20, opacity: 0})

           .from($svg03GirlLeft, 1, {x: -30, opacity: 0})
           .from($svg03GirlRight, 1, {x: 30, opacity: 0}, '-=1')

           .from($svg03TextLeft, 0.4, {x: -30, opacity: 0})
           .from($svg03TextRight, 0.4, {x: 30, opacity: 0}, '-=0.4')

           .from($svg03FlagChina, 0.4, {x: -30, opacity: 0})
           .from($svg03FlagJapan, 0.4, {x: 30, opacity: 0}, '-=0.4')

           .from($svg03NumberLeft, 0.4, {x: -30, opacity: 0})
           .from($svg03NumberRight, 0.4, {x: 30, opacity: 0}, '-=0.4')

           .from($svg03PieLeft, 1, {rotation: 360, opacity:0, transformOrigin: '50% 50%'})
           .from($svg03PieRight, 1, {rotation: 360, opacity:0, transformOrigin: '50% 50%'}, '-=1')

           .from($svg03BottomText, 0.4, {y: 50, opacity: 0});

  tlScene04.from($svg04topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
           .from($svg04bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
           .from($svg04Heading, 0.4, {x: -100, opacity: 0})

           .to($svg04Plane, 4, {scale: 10, x: 2200, y: -100, opacity: 1})
           .from($svg04subHeading, 0.4, {x: -100, opacity: 0}, '-=3')

           .from($svg04Cloud01, 0.3, {x: 20, opacity: 0})
           .from($svg04Cloud02, 0.3, {x: -20, opacity: 0}, '-=0.15')
           .from($svg04Cloud03, 0.3, {x: 20, opacity: 0}, '-=0.15')
           .from($svg04Cloud04, 0.3, {x: -20, opacity: 0}, '-=0.15')
           .from($svg04Balloon, 0.3, {x: 20, opacity: 0}, '-=0.15')

           .from($svg04Ground, 0.4, {scale: 0, opacity: 0, transformOrigin: '50% 50%'})

           .from($svg04Floor01, 1, {y: -500, opacity: 0})
           .from($svg04Floor02, 0.9, {y: -500, opacity: 0}, '-=0.4')
           .from($svg04Floor03, 0.8, {y: -500, opacity: 0}, '-=0.4')
           .from($svg04Floor04, 0.7, {y: -500, opacity: 0}, '-=0.4')
           .from($svg04Floor05, 0.6, {y: -500, opacity: 0}, '-=0.4')
           .from($svg04Floor06, 0.5, {y: -500, opacity: 0}, '-=0.4')

           .from($svg04BannerLong, 0.4, {y: -20, opacity: 0})
           .from($svg04BannerChina, 0.4, {y: -20, opacity: 0}, '-=0.2')
           .from($svg04BannerJapan, 0.4, {y: -20, opacity: 0}, '-=0.2')
           .from($svg04LittleText, 0.4, {y: -20, opacity: 0}, '-=0.2')
//----------------------------05 animated bar
           .from($svg04Floor05LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'})
           .from($svg04Floor05RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=0.4')

           .from($svg04Floor05LeftNumber, 0.2, {y: -10, opacity: 0})
           .from($svg04Floor05RightNumber, 0.2, {y: -10, opacity: 0})
//----------------------------04 animated bar
           .from($svg04Floor04LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'})
           .from($svg04Floor04RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=0.4')

           .from($svg04Floor04LeftNumber, 0.2, {y: -10, opacity: 0})
           .from($svg04Floor04RightNumber, 0.2, {y: -10, opacity: 0})
//----------------------------03 animated bar
           .from($svg04Floor03LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'})
           .from($svg04Floor03RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=0.4')

           .from($svg04Floor03LeftNumber, 0.2, {y: -10, opacity: 0})
           .from($svg04Floor03RightNumber, 0.2, {y: -10, opacity: 0})
//----------------------------02 animated bar
           .from($svg04Floor02LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'})
           .from($svg04Floor02RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=0.4')

           .from($svg04Floor02LeftNumber, 0.2, {y: -10, opacity: 0})
           .from($svg04Floor02RightNumber, 0.2, {y: -10, opacity: 0})
//----------------------------01 animated bar
           .from($svg04Floor01LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'})
           .from($svg04Floor01RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=0.4')

           .from($svg04Floor01LeftNumber, 0.2, {y: -10, opacity: 0})
           .from($svg04Floor01RightNumber, 0.2, {y: -10, opacity: 0})

           .from($svg04BottomText, 0.4, {y: 50, opacity: 0});














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
    // afterLoad: function(anchorLink, index) {
    //   switch (index) {
    //       case 1:
    //           tlScene01.play();
    //           break;
    //       case 2:
    //           tlScene02.play();
    //           break;
    //       case 3:
    //           tlScene03.play();
    //           break;
    //       case 4:
    //           tlScene04.play();
    //           break;
    //       case 5:
    //           // tlScene05.play(0);
    //           break;
    //       case 6:
    //           // tlScene06.play(0);
    //           break;
    //   }
    // },
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
              // tlScene05.play(0);
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
              // tlScene05.play(0);
              break;
          case 6:
              // tlScene06.play(0);
              break;
      }
    }

  });   //fullpage.js Init


});