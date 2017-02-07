$(document).ready(function(){

  // Elements to inject
  var mySVGsToInject = document.querySelectorAll('img.inject-me');

  // Options
  var injectorOptions = {
    evalScripts: 'once',
    pngFallback: 'assets/png',
    each: function (svg) {
      // Callback after each SVG is injected
      console.log('SVG injected: ' + svg.getAttribute('id'));
    }
  };

  // Trigger the injection
  SVGInjector(mySVGsToInject, injectorOptions, function (totalSVGsInjected) {
    // Callback after all SVGs are injected
    console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
    main();
  });


  function main() {

    //.....................svg01.....................
      var $svg01 = $('#svg01'),
          $svg01Character01 = $('#svg01Character01'),
          $svg01Character02 = $('#svg01Character02'),
          $svg01Character03 = $('#svg01Character03'),
          $svg01Character04 = $('#svg01Character04'),
          $svg01Character05 = $('#svg01Character05'),
          $svg01Character06 = $('#svg01Character06'),
          $svg01Character07 = $('#svg01Character07'),
          $svg01WholeCharacter = $('#svg01WholeCharacter'),

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

          $svg04BottomText = $('#svg04BottomText'),

    //.....................svg05.....................

          $svg05topLine = $('#svg05topLine'),
          $svg05bottomLine = $('#svg05bottomLine'),

          $svg05Heading = $('#svg05Heading'),
          $svg05subHeading = $('#svg05subHeading'),
          $svg05LittleText = $('#svg05LittleText'),

          $svg05BannerLong = $('#svg05BannerLong'),
          $svg05BannerChina = $('#svg05BannerChina'),
          $svg05BannerJapan = $('#svg05BannerJapan'),

          $svg05Lamp01 = $('#svg05Lamp01'),
          $svg05Lamp02 = $('#svg05Lamp02'),

          $svg05Floor01 = $('#svg05Floor01'),
          $svg05Floor02 = $('#svg05Floor02'),
          $svg05Floor03 = $('#svg05Floor03'),
          $svg05Floor04 = $('#svg05Floor04'),
          $svg05Floor05 = $('#svg05Floor05'),

          $svg05Floor01People = $('#svg05Floor01People'),
          $svg05Floor02People = $('#svg05Floor02People'),
          $svg05Floor03People = $('#svg05Floor03People'),
          $svg05Floor04People = $('#svg05Floor04People'),
          $svg05Floor05People = $('#svg05Floor05People'),

          $svg05Floor01LeftBar = $('#svg05Floor01LeftBar'),
          $svg05Floor02LeftBar = $('#svg05Floor02LeftBar'),
          $svg05Floor03LeftBar = $('#svg05Floor03LeftBar'),
          $svg05Floor04LeftBar = $('#svg05Floor04LeftBar'),
          $svg05Floor05LeftBar = $('#svg05Floor05LeftBar'),

          $svg05Floor01LeftNumber = $('#svg05Floor01LeftNumber'),
          $svg05Floor02LeftNumber = $('#svg05Floor02LeftNumber'),
          $svg05Floor03LeftNumber = $('#svg05Floor03LeftNumber'),
          $svg05Floor04LeftNumber = $('#svg05Floor04LeftNumber'),
          $svg05Floor05LeftNumber = $('#svg05Floor05LeftNumber'),

          $svg05Floor01RightBar = $('#svg05Floor01RightBar'),
          $svg05Floor02RightBar = $('#svg05Floor02RightBar'),
          $svg05Floor03RightBar = $('#svg05Floor03RightBar'),
          $svg05Floor04RightBar = $('#svg05Floor04RightBar'),
          $svg05Floor05RightBar = $('#svg05Floor05RightBar'),

          $svg05Floor01RightNumber = $('#svg05Floor01RightNumber'),
          $svg05Floor02RightNumber = $('#svg05Floor02RightNumber'),
          $svg05Floor03RightNumber = $('#svg05Floor03RightNumber'),
          $svg05Floor04RightNumber = $('#svg05Floor04RightNumber'),
          $svg05Floor05RightNumber = $('#svg05Floor05RightNumber'),

          $svg05Floor05LeftClothes = $('#svg05Floor05LeftClothes'),
          $svg05Floor03RightPineapple = $('#svg05Floor03RightPineapple'),

          $svg05LeftGirl = $('#svg05LeftGirl'),
          $svg05RightGirl = $('#svg05RightGirl'),

          $svg05LeftCar = $('#svg05LeftCar'),
          $svg05RightCar = $('#svg05RightCar'),

          $svg05Floor05Clothes = $('#svg05Floor05Clothes'),
          $svg05Floor04Ruby = $('#svg05Floor04Ruby'),
          $svg05Floor03Pineapple = $('#svg05Floor03Pineapple'),
          $svg05Floor02Tea = $('#svg05Floor02Tea'),
          $svg05Floor01Perfume = $('#svg05Floor01Perfume'),

          $svg05BottomText = $('#svg05BottomText'),

    //.....................svg06.....................

          $svg06topLine01 = $('#svg06topLine01'),
          $svg06bottomLine01 = $('#svg06bottomLine01'),

          $svg06topLine02 = $('#svg06topLine02'),
          $svg06bottomLine02 = $('#svg06bottomLine02'),

          $svg06Heading01 = $('#svg06Heading01'),
          $svg06Heading02 = $('#svg06Heading02'),
          $svg06subHeading01 = $('#svg06subHeading01'),
          $svg06subHeading02 = $('#svg06subHeading02'),
          $svg06subHeading03 = $('#svg06subHeading03'),

          $svg06Ground = $('#svg06Ground'),

          $svg06HotelLeft = $('#svg06HotelLeft'),
          $svg06HotelRight = $('#svg06HotelRight'),

          $svg06Bling01 = $('#svg06Bling01'),
          $svg06Bling02 = $('#svg06Bling02'),
          $svg06Bling03 = $('#svg06Bling03'),

          $svg06CarLeft = $('#svg06CarLeft'),
          $svg06CarRight = $('#svg06CarRight'),

          $svg06MoneyLeft = $('#svg06MoneyLeft'),
          $svg06MoneyRight = $('#svg06MoneyRight'),

          $svg06HotelLeftNumber = $('#svg06HotelLeftNumber'),
          $svg06HotelRightNumber = $('#svg06HotelRightNumber'),

          $svg06GirlLeft = $('#svg06GirlLeft'),
          $svg06GirlRight = $('#svg06GirlRight'),

          $svg06TextChina = $('#svg06TextChina'),
          $svg06TextJapan = $('#svg06TextJapan'),

          $svg06LineChina = $('#svg06LineChina'),
          $svg06LineJapan = $('#svg06LineJapan'),

          $svg06TextTourist = $('#svg06TextTourist'),
          $svg06TextTouristLeft = $('#svg06TextTouristLeft'),
          $svg06TextTouristRight = $('#svg06TextTouristRight'),

          $svg06TextInternationalHotel = $('#svg06TextInternationalHotel'),
          $svg06TextInternationalHotelLeft = $('#svg06TextInternationalHotelLeft'),
          $svg06TextInternationalHotelRight = $('#svg06TextInternationalHotelRight'),

          $svg06TextGeneralHotel = $('#svg06TextGeneralHotel'),
          $svg06TextGeneralHotelLeft = $('#svg06TextGeneralHotelLeft'),
          $svg06TextGeneralHotelRight = $('#svg06TextGeneralHotelRight'),

    //.....................svg07.....................

          $svg07topLine = $('#svg07topLine'),
          $svg07bottomLine = $('#svg07bottomLine'),

          $svg07Heading = $('#svg07Heading'),
          $svg07subHeading = $('#svg07subHeading'),

          $svg07LittleHotel = $('#svg07LittleHotel'),
          $svg07PeopleRight = $('#svg07PeopleRight'),

          $svg07BrownBar = $('#svg07BrownBar'),
          $svg07TextChinaLeft = $('#svg07TextChinaLeft'),
          $svg07TextJapanRight = $('#svg07TextJapanRight'),
          $svg07FlagChina = $('#svg07FlagChina'),
          $svg07FlagJapan = $('#svg07FlagJapan'),

          $svg07Taiwan = $('#svg07Taiwan'),

          $svg07RedTaipei = $('#svg07RedTaipei'),
          $svg07RedTaoyuan = $('#svg07RedTaoyuan'),
          $svg07RedTaitung = $('#svg07RedTaitung'),
          $svg07RedKaohsiung = $('#svg07RedKaohsiung'),

          $svg07RedTaipeiTooltipLeft = $('#svg07RedTaipeiTooltipLeft'),
          $svg07RedTaipeiTooltipRight = $('#svg07RedTaipeiTooltipRight'),
          $svg07RedTaoyuanTooltip = $('#svg07RedTaoyuanTooltip'),
          $svg07RedTaitungTooltip = $('#svg07RedTaitungTooltip'),
          $svg07RedKaohsiungTooltip = $('#svg07RedKaohsiungTooltip'),

          $svg07Map = $('#svg07Map'),

          $svg07BottomText = $('#svg07BottomText'),

    //.....................svg08.....................

          $svg08topLine = $('#svg08topLine'),
          $svg08bottomLine = $('#svg08bottomLine'),

          $svg08Heading = $('#svg08Heading'),

          $svg08FlagChina = $('#svg08FlagChina'),
          $svg08FlagJapan = $('#svg08FlagJapan'),

          $svg08TextChina = $('#svg08TextChina'),
          $svg08TextJapan = $('#svg08TextJapan'),

          $svg08Buddha = $('#svg08Buddha'),
          $svg08GirlLeft = $('#svg08GirlLeft'),

          $svg08GirlRight = $('#svg08GirlRight'),
          $svg08Lamp01 = $('#svg08Lamp01'),
          $svg08Lamp02 = $('#svg08Lamp02'),
          $svg08Lamp03 = $('#svg08Lamp03'),
          $svg08Lamp04 = $('#svg08Lamp04'),

          $svg08Plane = $('#svg08Plane'),
          $svg08Runway = $('#svg08Runway'),

          $svg08Text01 = $('#svg08Text01'),
          $svg08Text02 = $('#svg08Text02'),
          $svg08Text03 = $('#svg08Text03'),
          $svg08Text04 = $('#svg08Text04'),
          $svg08Text05 = $('#svg08Text05'),
          $svg08Text06 = $('#svg08Text06'),
          $svg08Text07 = $('#svg08Text07'),
          $svg08Text08 = $('#svg08Text08'),
          $svg08Text09 = $('#svg08Text09'),

          $svg08Text01Left = $('#svg08Text01Left'),
          $svg08Text02Left = $('#svg08Text02Left'),
          $svg08Text03Left = $('#svg08Text03Left'),
          $svg08Text04Left = $('#svg08Text04Left'),
          $svg08Text05Left = $('#svg08Text05Left'),
          $svg08Text06Left = $('#svg08Text06Left'),
          $svg08Text07Left = $('#svg08Text07Left'),
          $svg08Text08Left = $('#svg08Text08Left'),
          $svg08Text09Left = $('#svg08Text09Left'),

          $svg08Text01Right = $('#svg08Text01Right'),
          $svg08Text02Right = $('#svg08Text02Right'),
          $svg08Text03Right = $('#svg08Text03Right'),
          $svg08Text04Right = $('#svg08Text04Right'),
          $svg08Text05Right = $('#svg08Text05Right'),
          $svg08Text06Right = $('#svg08Text06Right'),
          $svg08Text07Right = $('#svg08Text07Right'),
          $svg08Text08Right = $('#svg08Text08Right'),
          $svg08Text09Right = $('#svg08Text09Right'),

          $svg08Text01Win = $('#svg08Text01Win'),
          $svg08Text02Win = $('#svg08Text02Win'),
          $svg08Text03Win = $('#svg08Text03Win'),
          $svg08Text04Win = $('#svg08Text04Win'),
          $svg08Text05Win = $('#svg08Text05Win'),
          $svg08Text07Win = $('#svg08Text07Win'),
          $svg08Text08Win = $('#svg08Text08Win'),

          $svg08Divider = $('#svg08Divider'),

    //.....................svg09.....................

          $svg09topLine = $('#svg09topLine'),
          $svg09bottomLine = $('#svg09bottomLine'),

          $svg09Heading = $('#svg09Heading'),
          $svg09subHeading = $('#svg09subHeading'),

          $svg09Earth = $('#svg09Earth'),

          $svg09BubbleLeft = $('#svg09BubbleLeft'),
          $svg09BubbleRight = $('#svg09BubbleRight'),

          $svg09Light = $('#svg09Light'),

          $svg09TextSource = $('#svg09TextSource'),

          $svg09Footer = $('#svg09Footer');












      var tlScene01 = new TimelineMax({paused: true , onComplete: function() {
          tlScrollDown.play(0);
      }}),
          tlScene02 = new TimelineMax({paused: true }),
          tlScene03 = new TimelineMax({paused: true }),
          tlScene04 = new TimelineMax({paused: true }),
          tlScene05 = new TimelineMax({paused: true }),
          tlScene06 = new TimelineMax({paused: true }),
          tlScene07 = new TimelineMax({paused: true }),
          tlScene08 = new TimelineMax({paused: true }),
          tlScene09 = new TimelineMax({paused: true }),
          tlScrollDown = new TimelineMax({paused: true , yoyo: true, repeat: -1});





          var topLineParameter = {x: -200, opacity: 0, ease: Power1.easeOut},
              bottomLineParameter = {x: 200, opacity: 0, ease: Power1.easeOut},
              HeadingParameter = {x: -100, opacity: 0, ease: Power1.easeOut},
              subHeadingParameter = {x: 10, opacity: 0, ease: Power1.easeOut},
              BottomTextParameter = {x: -50, opacity: 0, ease: Power1.easeOut};


          function animateNumberIncreasing(targetText, animateToNumber) {

               // how many decimal places allows
               var decimal_places = 1;
               var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

               $(targetText)
                 .animateNumber(
                   {
                     number: animateToNumber * decimal_factor,

                     numberStep: function(now, tween) {
                       var floored_number = Math.floor(now) / decimal_factor,
                           target = $(tween.elem);

                       if (decimal_places > 0) {
                         // force decimal places even if they are 0
                         floored_number = floored_number.toFixed(decimal_places);

                         // replace '.' separator with ','
                         floored_number = floored_number.toString();
                       }

                       target.text(floored_number + ' %');
                     }
                   },
                   1000  //millieseconds
                 );
          }















      tlScrollDown.to($svg01ScrollDown, 0.7, {y: 10, ease: Power1.easeOut});

      tlScene01.set($svg01, {opacity: 1})
               .from($svg01Cloud01, 0.6, {y: 100, opacity: 0}, 0.3)
               .from($svg01Cloud02, 0.6, {y: 100, opacity: 0}, 0.6)
               .from($svg01Cloud03, 0.6, {y: 100, opacity: 0}, 0.9)
               .from($svg01Cloud04, 0.6, {y: 100, opacity: 0}, 1.1)
               .from($svg01Cloud05, 0.6, {y: 100, opacity: 0}, 1.3)
               .fromTo($svg01Plane, 4, {x: -2500, y: 1000, scale: 2}, {x: 2500, y:-1500, scale: 0.2}, 0.9)
               .to([$svg01Cloud01,
                    $svg01Cloud02,
                    $svg01Cloud03,
                    $svg01Cloud04,
                    $svg01Cloud05], 0.8, {y: -1500, opacity: 0, ease: Back.easeIn.config(1.7)}, 2.8)


               .from($svg01Character01, 0.7, {y: -100, opacity: 0, scale: 3, ease: Power1.easeOut}, 3.6)
               .from($svg01Character02, 0.7, {y: -100, opacity: 0, scale: 3, ease: Power1.easeOut}, 3.8)
               .from($svg01Character03, 0.7, {y: -100, opacity: 0, scale: 3, ease: Power1.easeOut}, 4)
               .from($svg01Character04, 0.7, {y: -100, opacity: 0, scale: 3, ease: Power1.easeOut}, 4.2)
               .from($svg01Character05, 0.7, {y: -100, opacity: 0, scale: 3, ease: Power1.easeOut}, 4.4)
               .from($svg01Character06, 0.7, {y: -100, opacity: 0, scale: 3, ease: Power1.easeOut}, 4.6)
               .from($svg01Character07, 0.7, {y: -100, opacity: 0, scale: 3, ease: Power1.easeOut}, 4.8)
               .to($svg01WholeCharacter, 0.8, {y: -300, scale: 0.5, transformOrigin: '50% 50%', ease: Power1.easeOut}, 5.4)


               .from($svg01ChinaVsJapan, 1, {y: -100, opacity: 0}, 6.1)

               .from($svg01Door, 0.4, {y: -100, opacity: 0}, 6.2)

               .from($svg01Bg, 0.4, {y: -100, opacity: 0}, 6.3)

               .from($svg01People01, 0.4, {x: -100, opacity: 0}, 6.4)
               .from($svg01People02, 0.4, {x: -100, opacity: 0}, 6.5)
               .from($svg01People03, 0.4, {x: -100, opacity: 0}, 6.6)
               .from($svg01People04, 0.4, {x: -100, opacity: 0}, 6.7)
               .from($svg01People05, 0.4, {x: 100, opacity: 0}, 6.8)
               .from($svg01People06, 0.4, {x: 100, opacity: 0}, 6.9)
               .from($svg01People07, 0.4, {x: 100, opacity: 0}, 7)

               .from($svg01BottomText, 0.4, BottomTextParameter, 7.1)

               .from($svg01ScrollDown, 0.4, {y: 10, opacity: 0}, 7.4);










      tlScene02.from($svg02topLine, 0.6, topLineParameter, 0.5)
               .from($svg02bottomLine, 0.5, bottomLineParameter, 0.6)
               .from($svg02Heading, 0.3, HeadingParameter, 0.7)
               .from($svg02subHeading, 0.4, subHeadingParameter, 0.8)


               .from($svg02Bg, 0.4, {y: -100, opacity: 0}, 0.9)
               .from($svg02Door, 0.4, {y: -100, opacity: 0}, 1)
//---------------------------港澳
               .to($svg02PeopleHongKongAndMacao, 0.7, {y: 270, opacity: 1, ease: Power1.easeIn}, 1.4)
               .to($svg02PeopleHongKongAndMacao, 0.7, {x: -355, ease: Power1.easeOut}, 2.1)

               .from($svg02BubbleHongKongAndMacao, 0.6, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 2.8)
               .from($svg02LineHongKongAndMacao, 0.1, {y: 3, opacity: 0}, 2.9)
               .from($svg02TextHongKongAndMacao, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 3)

               .from($svg02FlagHongKong, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 3.1)
               .from($svg02FlagMacao, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 3.2)

               .call(animateNumberIncreasing, [$svg02NumberHongKongAndMacao, 14.5])   //14.5 %

               .from($svg02NumberHongKongAndMacao, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 3.5)
//---------------------------中國
               .to($svg02PeopleChina, 0.7, {y: 270, opacity: 1, ease: Power1.easeIn}, 1.9)
               .to($svg02PeopleChina, 0.7, {x: -90, ease: Power1.easeOut}, 2.6)

               .from($svg02BubbleChina, 0.6, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 3.3)
               .from($svg02LineChina, 0.1, {y: 3, opacity: 0}, 3.4)
               .from($svg02TextChina, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 3.5)
               .from($svg02FlagChina, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 3.6)

               .call(animateNumberIncreasing, [$svg02NumberChina, 40.1])   //40.1 %

               .from($svg02NumberChina, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 3.9)
//---------------------------日本
               .to($svg02PeopleJapan, 0.7, {y: 270, opacity: 1, ease: Power1.easeIn}, 2.4)
               .to($svg02PeopleJapan, 0.7, {x: 180, ease: Power1.easeOut}, 3.1)

               .from($svg02BubbleJapan, 0.6, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 3.8)
               .from($svg02LineJapan, 0.1, {y: 3, opacity: 0}, 3.9)
               .from($svg02TextJapan, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 4)
               .from($svg02FlagJapan, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 4.1)

               .call(animateNumberIncreasing, [$svg02NumberJapan, 15.6])   //15.6 %
               
               .from($svg02NumberJapan, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 4.4)
//---------------------------東南亞
               .to($svg02PeopleSoutheastAsia, 0.7, {y: 270, opacity: 1, ease: Power1.easeIn}, 2.9)
               .to($svg02PeopleSoutheastAsia, 0.7, {x: 390, ease: Power1.easeOut}, 3.6)

               .from($svg02BubbleSoutheastAsia, 0.6, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 4.3)
               .from($svg02LineSoutheastAsia, 0.1, {y: 3, opacity: 0}, 4.4)
               .from($svg02TextSoutheastAsia, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 4.5)
               .from($svg02FlagSingapore, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 4.6)
               .from($svg02FlagThai, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 4.7)
               .from($svg02FlagMalaysia, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 4.8)
               .from($svg02FlagPhilippines, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 4.9)
               .from($svg02FlagVietnam, 0.4, {scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 5)

               .call(animateNumberIncreasing, [$svg02NumberSoutheastAsia, 13.7])   //13.7 %

               .from($svg02NumberSoutheastAsia, 0.4, {scale: 0, transformOrigin: '50% 50%'}, 5.3)







               .from($svg02BottomText, 0.4, BottomTextParameter, 5.2);





      tlScene03.from($svg03topLine, 0.6, topLineParameter, 0.5)
               .from($svg03bottomLine, 0.5, bottomLineParameter, 0.6)
               .from($svg03Heading, 0.3, HeadingParameter, 0.7)

               .from($svg03BusLeft, 0.8, {scale:0, transformOrigin: '100% 0%'}, 0.8)
               .from($svg03BusRight, 0.8, {scale:0}, 0.8)

               .from($svg03Sign, 0.7, {y: 20, opacity: 0}, 1.3)

               .from($svg03PeopleLeft01, 0.4, {x: -20, opacity: 0}, 1.2)
               .from($svg03PeopleRight01, 0.4, {x: 20, opacity: 0}, 1.3)
               .from($svg03PeopleLeft02, 0.4, {x: -20, opacity: 0}, 1.4)
               .from($svg03PeopleRight02, 0.4, {x: 20, opacity: 0}, 1.5)
               .from($svg03PeopleLeft03, 0.4, {x: -20, opacity: 0}, 1.6)
               .from($svg03PeopleLeft04, 0.4, {x: -20, opacity: 0}, 1.7)

               .to($svg03Bg, 1, {opacity: 0.3}, 1)

               .from($svg03GirlLeft, 0.5, {x: -30, opacity: 0}, 2.2)
               .from($svg03GirlRight, 0.5, {x: 30, opacity: 0}, 2.2)

               .from($svg03PieLeft, 1, {rotation: 360, opacity:0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 2.7)
               .from($svg03PieRight, 1, {rotation: 360, opacity:0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7)}, 2.7)

               .from($svg03TextLeft, 0.3, {x: -10, opacity: 0}, 3.1)
               .from($svg03TextRight, 0.3, {x: 10, opacity: 0}, 3.1)

               .from($svg03FlagChina, 0.2, {x: -10, opacity: 0}, 3.2)
               .from($svg03FlagJapan, 0.2, {x: 10, opacity: 0}, 3.2)

               .from($svg03NumberLeft, 0.4, {x: -10, opacity: 0}, 3.3)
               .from($svg03NumberRight, 0.4, {x: 10, opacity: 0}, 3.3)



               .from($svg03BottomText, 0.4, BottomTextParameter, 3.5);




      tlScene04.from($svg04topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
               .from($svg04bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
               .from($svg04Heading, 0.4, {x: -100, opacity: 0})

               .to($svg04Plane, 4, {scale: 10, x: 2200, y: -100, opacity: 1})
               .from($svg04subHeading, 0.4, {x: -100, opacity: 0}, '-=3')

               .from($svg04Cloud01, 0.3, {x: 20, opacity: 0}, '-=3')
               .from($svg04Cloud02, 0.3, {x: -20, opacity: 0}, '-=2.9')
               .from($svg04Cloud03, 0.3, {x: 20, opacity: 0}, '-=2.8')
               .from($svg04Cloud04, 0.3, {x: -20, opacity: 0}, '-=2.7')
               .from($svg04Balloon, 0.3, {x: 20, opacity: 0}, '-=2.6')

               .from($svg04Ground, 0.4, {scale: 0, opacity: 0, transformOrigin: '50% 50%'}, '-=2.5')

               .from($svg04Floor01, 1.8, {y: -500, opacity: 0, ease: Bounce.easeOut}, '-=1.8')
               .from($svg04Floor02, 1.7, {y: -500, opacity: 0, ease: Bounce.easeOut}, '-=1.6')
               .from($svg04Floor03, 1.6, {y: -500, opacity: 0, ease: Bounce.easeOut}, '-=1.4')
               .from($svg04Floor04, 1.5, {y: -500, opacity: 0, ease: Bounce.easeOut}, '-=1.2')
               .from($svg04Floor05, 1.4, {y: -500, opacity: 0, ease: Bounce.easeOut}, '-=1')
               .from($svg04Floor06, 1.3, {y: -500, opacity: 0, ease: Bounce.easeOut}, '-=0.8')

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


      tlScene05.from($svg05topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
               .from($svg05bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
               .from($svg05Heading, 0.4, {x: -100, opacity: 0})
               .from($svg05subHeading, 0.4, {x: -100, opacity: 0})

               .from($svg05BannerLong, 0.4, {y: -100, opacity: 0})
               .from($svg05BannerChina, 0.4, {y: -50, opacity: 0})
               .from($svg05BannerJapan, 0.4, {y: -50, opacity: 0}, '-=0.4')

               .from($svg05Lamp01, 0.3, {y: -50, opacity: 0}, '-=0.2')
               .from($svg05Lamp02, 0.3, {y: -50, opacity: 0}, '-=0.15')

               .from($svg05Floor01, 0.4, {y: -100, opacity: 0, rotation: 15})
               .from($svg05Floor02, 0.4, {y: -100, opacity: 0, rotation: -15}, '-=0.35')
               .from($svg05Floor03, 0.4, {y: -100, opacity: 0, rotation: 15}, '-=0.35')
               .from($svg05Floor04, 0.4, {y: -100, opacity: 0, rotation: -15}, '-=0.35')
               .from($svg05Floor05, 0.4, {y: -100, opacity: 0, rotation: 15}, '-=0.35')

               .from($svg05Floor01People, 0.4, {x: -50, opacity: 0})
               .from($svg05Floor02People, 0.4, {x: 50, opacity: 0}, '-=0.35')
               .from($svg05Floor03People, 0.4, {x: -50, opacity: 0}, '-=0.35')
               .from($svg05Floor04People, 0.4, {x: 50, opacity: 0}, '-=0.35')
               .from($svg05Floor05People, 0.4, {x: -50, opacity: 0}, '-=0.35')

               .from($svg05LeftCar, 0.5, {scale: 0})
               .from($svg05RightCar, 0.5, {scale: 0}, '-=0.5')

               .to($svg05LeftCar, 4, {y: 800})
               .to($svg05RightCar, 4, {y: 800}, '-=4')
               .from($svg05LittleText, 0.4, {y: -20, opacity: 0}, '-=4.7')
    //----------------------------05 animated bar
               .from($svg05Floor05LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'}, '-=4.3')
               .from($svg05Floor05RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=4.3')

               .from($svg05Floor05LeftNumber, 0.2, {y: -10, opacity: 0}, '-=3.9')
               .from($svg05Floor05RightNumber, 0.2, {y: -10, opacity: 0}, '-=3.9')
    //----------------------------04 animated bar
               .from($svg05Floor04LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'}, '-=4')
               .from($svg05Floor04RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=4')

               .from($svg05Floor04LeftNumber, 0.2, {y: -10, opacity: 0}, '-=3.6')
               .from($svg05Floor04RightNumber, 0.2, {y: -10, opacity: 0}, '-=3.6')
    //----------------------------03 animated bar
               .from($svg05Floor03LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'}, '-=3.7')
               .from($svg05Floor03RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=3.7')

               .from($svg05Floor03LeftNumber, 0.2, {y: -10, opacity: 0}, '-=3.3')
               .from($svg05Floor03RightNumber, 0.2, {y: -10, opacity: 0}, '-=3.3')
    //----------------------------02 animated bar
               .from($svg05Floor02LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'}, '-=3.6')
               .from($svg05Floor02RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=3.6')

               .from($svg05Floor02LeftNumber, 0.2, {y: -10, opacity: 0}, '-=3.2')
               .from($svg05Floor02RightNumber, 0.2, {y: -10, opacity: 0}, '-=3.2')
    //----------------------------01 animated bar
               .from($svg05Floor01LeftBar, 0.4, {scale: 0, transformOrigin: '100% 50%'}, '-=3.5')
               .from($svg05Floor01RightBar, 0.4, {scale: 0, transformOrigin: '0% 50%'}, '-=3.5')

               .from($svg05Floor01LeftNumber, 0.2, {y: -10, opacity: 0}, '-=3.1')
               .from($svg05Floor01RightNumber, 0.2, {y: -10, opacity: 0}, '-=3.1')

               .from($svg05Floor05LeftClothes, 0.4, {y: -200, opacity: 0}, '-=2')
               .from($svg05Floor03RightPineapple, 0.4, {y: -200, opacity: 0}, '-=2')

               .from($svg05LeftGirl, 0.4, {x: -20, opacity: 0}, '-=1.5')
               .from($svg05RightGirl, 0.4, {x: 200, opacity: 0}, '-=1.5')

               .from($svg05BottomText, 0.4, {y: 50, opacity: 0}, '-=1');



      tlScene06.from($svg06topLine01, 0.1, {x: -100, opacity: 0}, '+=0.5')
               .from($svg06bottomLine01, 0.1, {x: -100, opacity: 0}, '-=0.1')
               .from($svg06Heading01, 0.4, {x: -100, opacity: 0})
               .from($svg06subHeading01, 0.4, {x: -100, opacity: 0})

               .from($svg06Ground, 0.4, {scale: 0, transformOrigin: '50% 50%'})

               .from($svg06HotelLeft, 0.4, {scale: 0, transformOrigin: '50% 100%'})
               .from($svg06HotelRight, 0.4, {scale: 0, transformOrigin: '50% 100%'}, '-=0.4')

               .from($svg06CarLeft, 1, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg06CarRight, 1, {scale: 0, transformOrigin: '50% 50%'}, '-=1')

               .to($svg06CarLeft, 1, {x: 200})
               .to($svg06CarRight, 1, {x: -200}, '-=1')

               .from($svg06MoneyLeft, 0.4, {scale: 0, transformOrigin: '50% 100%'})
               .from($svg06MoneyRight, 0.4, {scale: 0, transformOrigin: '50% 100%'}, '-=0.4')

               .from($svg06HotelLeftNumber, 0.4, {y: 50, opacity: 0})
               .from($svg06HotelRightNumber, 0.4, {y: 50, opacity: 0}, '-=0.4')

               .from($svg06subHeading02, 0.4, {x: -100, opacity: 0})

               .from($svg06topLine02, 0.1, {x: -100, opacity: 0})
               .from($svg06bottomLine02, 0.1, {x: -100, opacity: 0}, '-=0.1')
               .from($svg06Heading02, 0.4, {x: -100, opacity: 0})

               .from($svg06GirlLeft, 0.8, {x: -200, opacity: 0})
               .from($svg06GirlRight, 0.8, {x: 200, opacity: 0}, '-=0.8')

               .from($svg06TextChina, 0.4, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg06TextJapan, 0.4, {scale: 0, transformOrigin: '50% 50%'}, '-=0.4')

               .from($svg06LineChina, 0.1, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg06LineJapan, 0.1, {scale: 0, transformOrigin: '50% 50%'}, '-=0.1')

               .from($svg06TextTourist, 0.4, {y: -20, opacity: 0})
               .from($svg06TextTouristLeft, 0.4, {y: -20, opacity: 0})
               .from($svg06TextTouristRight, 0.4, {y: -20, opacity: 0}, '-=0.4')

               .from($svg06TextInternationalHotel, 0.4, {y: -20, opacity: 0})
               .from($svg06TextInternationalHotelLeft, 0.4, {y: -20, opacity: 0})
               .from($svg06TextInternationalHotelRight, 0.4, {y: -20, opacity: 0}, '-=0.4')

               .from($svg06TextGeneralHotel, 0.4, {y: -20, opacity: 0})
               .from($svg06TextGeneralHotelLeft, 0.4, {y: -20, opacity: 0})
               .from($svg06TextGeneralHotelRight, 0.4, {y: -20, opacity: 0}, '-=0.4')

               .from($svg06subHeading03, 0.4, {y: 50, opacity: 0});





      tlScene07.from($svg07topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
               .from($svg07bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
               .from($svg07Heading, 0.4, {x: -100, opacity: 0})
               .from($svg07subHeading, 0.4, {x: -100, opacity: 0})

               .from($svg07LittleHotel, 0.4, {x: -20, opacity: 0})

               .from($svg07Map, 0.7, {scale: 0, transformOrigin: '50% 50%'})
               .to($svg07Map, 0.5, {opacity: 0.14})

               .from($svg07Taiwan, 0.4, {scale: 0, transformOrigin: '50% 50%'})

               .from($svg07BrownBar, 0.2, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg07TextChinaLeft, 0.2, {y: -20})
               .from($svg07TextJapanRight, 0.2, {y: -20}, '-=0.2')

               .from($svg07FlagChina, 0.3, {y: -50, rotation: -15, opacity: 0})
               .from($svg07FlagJapan, 0.3, {y: -50, rotation: -15, opacity: 0}, '-=0.3')

               .from($svg07PeopleRight, 0.4, {x: 50, opacity: 0})

               .from($svg07RedTaipei, 0.3, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg07RedTaipeiTooltipLeft, 0.3, {scale: 0, transformOrigin: '100% 0%'})
               .from($svg07RedTaipeiTooltipRight, 0.3, {scale: 0}, '-=0.3')

               .from($svg07RedTaoyuan, 0.3, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg07RedTaoyuanTooltip, 0.3, {scale: 0, transformOrigin: '100% 0%'})

               .from($svg07RedTaitung, 0.3, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg07RedTaitungTooltip, 0.3, {scale: 0, transformOrigin: '100% 0%'})

               .from($svg07RedKaohsiung, 0.3, {scale: 0, transformOrigin: '50% 50%'})
               .from($svg07RedKaohsiungTooltip, 0.3, {scale: 0, transformOrigin: '100% 0%'})

               .from($svg07BottomText, 0.4, {y: 50, opacity: 0}, '-=1');


      tlScene08.from($svg08topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
               .from($svg08bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
               .from($svg08Heading, 0.4, {x: -100, opacity: 0})


               .from($svg08Buddha, 0.2, {y: -10, opacity: 0})
               .from($svg08GirlLeft, 0.2, {x: 10, opacity: 0})
               .from($svg08GirlRight, 0.2, {x: 10, opacity: 0})
               .from($svg08Lamp01, 0.1, {y: 10, opacity: 0})
               .from($svg08Lamp02, 0.1, {y: 10, opacity: 0})
               .from($svg08Lamp03, 0.1, {y: 10, opacity: 0})
               .from($svg08Lamp04, 0.1, {y: 10, opacity: 0})

               .from($svg08FlagChina, 0.4, {x: 100, opacity: 0, rotation: 20})
               .from($svg08FlagJapan, 0.4, {x: 100, opacity: 0, rotation: 20}, '-=0.4')

               .from($svg08TextChina, 0.4, {y: -10, opacity: 0}, '-=0.2')
               .from($svg08TextJapan, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Runway, 4, {y: 950})
               .from($svg08Plane, 4, {y: -1825}, '-=3.8')


               .from($svg08Text01, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.9')
               .from($svg08Text02, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.8')
               .from($svg08Text03, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.7')
               .from($svg08Text04, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.6')
               .from($svg08Text05, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.5')
               .from($svg08Text06, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.4')
               .from($svg08Text07, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.3')
               .from($svg08Text08, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.2')
               .from($svg08Text09, 0.4, {opacity: 0, rotation: 30, transformOrigin: '50% 50%'}, '-=2.1')

               .from($svg08Divider, 0.2, {x: -10, opacity: 0})

               .from($svg08Text01Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text01Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text02Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text02Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text03Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text03Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text04Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text04Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text05Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text05Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text06Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text06Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text07Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text07Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text08Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text08Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text09Left, 0.4, {y: -10, opacity: 0})
               .from($svg08Text09Right, 0.4, {y: -10, opacity: 0}, '-=0.4')

               .from($svg08Text01Win, 0.3, {y: -100, opacity: 0, scale: 2})
               .from($svg08Text02Win, 0.3, {y: -100, opacity: 0, scale: 2})
               .from($svg08Text03Win, 0.3, {y: -100, opacity: 0, scale: 2})
               .from($svg08Text04Win, 0.3, {y: -100, opacity: 0, scale: 2})
               .from($svg08Text05Win, 0.3, {y: -100, opacity: 0, scale: 2})
               .from($svg08Text07Win, 0.3, {y: -100, opacity: 0, scale: 2})
               .from($svg08Text08Win, 0.3, {y: -100, opacity: 0, scale: 2});









      tlScene09.from($svg09topLine, 0.1, {x: -100, opacity: 0}, '+=0.5')
               .from($svg09bottomLine, 0.1, {x: -100, opacity: 0}, '-=0.1')
               .from($svg09Heading, 0.4, {x: -100, opacity: 0})
               .from($svg09subHeading, 0.4, {x: -100, opacity: 0})

               // .from($svg09Earth, 3, {rotation: 180, opacity: 0, transformOrigin: '50% 59.35%'})
               .from($svg09Earth, 3, {rotation: 180, transformOrigin: '50% 100%'})

               .from($svg09BubbleLeft, 0.4, {opacity: 0})
               .from($svg09BubbleRight, 0.4, {opacity: 0}, '-=0.4')

               .from($svg09Light, 0.4, {scale: 0, transformOrigin: '0% 100%'}, '-=0.4')

               .from($svg09TextSource, 0.3, {opacity: 0})

               .from($svg09Footer, 0.5, {y: 50}, '-=0.4');












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
          TweenMax.set(['#wrapper', '#fp-nav'], {opacity: 1});
        tlScene01.play(0);
      },
      onLeave: function(index, nextIndex, direction) {
        switch (index) {
            case 1:
                tlScene01.pause();
                tlScrollDown.pause();
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
                tlScene06.pause();
                break;
            case 7:
                tlScene07.pause();
                break;
            case 8:
                tlScene08.pause();
                break;
            case 9:
                tlScene09.pause();
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
                tlScene06.play(0);
                break;
            case 7:
                tlScene07.play(0);
                break;
            case 8:
                tlScene08.play(0);
                break;
            case 9:
                tlScene09.play(0);
                break;



        }
      }

    });   //fullpage.js Init
  }



});