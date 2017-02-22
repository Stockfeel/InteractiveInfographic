$(document).ready(function() {

  var ratio = window.devicePixelRatio || 1;
  var w = screen.width * ratio;
  var h = screen.height * ratio;


  if (w / h < 1) {
    //手機版動畫載入
    loadPhoneSceneSvgs();
  } else {
    //電腦平板版載入
    loadWebSceneSvgs();
  }


  function loadPhoneSceneSvgs() {
    var $wrapper = $('#wrapper');
    for (var i = 1; i <= 10; i++) {
      var section = document.createElement("section");
      section.className = "section";

      var div = document.createElement("div");
      div.id = "scene" + ('0' + i).slice(-2);
      div.className = "sceneContainer";

      var img = document.createElement("img");
      img.className = "inject-me";
      img.src = "./img/phoneScene/scene" + ('0' + i).slice(-2) + ".svg";

      section.appendChild(div);
      div.appendChild(img);

      $wrapper.append(section);
    }

    injectSvgs("phoneScene");
  }



  function loadWebSceneSvgs() {
    var $wrapper = $('#wrapper');
    for (var i = 1; i <= 9; i++) {
      var section = document.createElement("section");
      section.className = "section";

      var div = document.createElement("div");
      div.id = "scene" + ('0' + i).slice(-2);
      div.className = "sceneContainer";

      var img = document.createElement("img");
      img.className = "inject-me";
      img.src = "./img/webScene/scene" + ('0' + i).slice(-2) + ".svg";

      section.appendChild(div);
      div.appendChild(img);

      $wrapper.append(section);
    }

    injectSvgs("webScene");


  }


  function injectSvgs(screen) {

    // Elements to inject
    var mySVGsToInject = document.querySelectorAll('img.inject-me');

    // Options
    var injectorOptions = {
      evalScripts: 'once',
      pngFallback: 'assets/png',
      each: function(svg) {
        // Callback after each SVG is injected
        // console.log('SVG injected: ' + svg.getAttribute('id'));
      }
    };

    // Trigger the injection
    SVGInjector(mySVGsToInject, injectorOptions, function(totalSVGsInjected) {
      // Callback after all SVGs are injected
      // console.log('We injected ' + totalSVGsInjected + ' SVG(s)!');
      if (screen == "webScene") {
        webAnimation();
      } else if (screen == "phoneScene") {
        phoneAnimation();
      }

    });
  }




  function phoneAnimation() {

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
      $svg02InnerNumberHongKongAndMacao = $('#svg02NumberHongKongAndMacao text'),


      $svg02LineHongKongAndMacao = $('#svg02LineHongKongAndMacao'),
      $svg02BubbleHongKongAndMacao = $('#svg02BubbleHongKongAndMacao'),
      $svg02PeopleHongKongAndMacao = $('#svg02PeopleHongKongAndMacao'),
      $svg02FlagHongKong = $('#svg02FlagHongKong'),
      $svg02FlagMacao = $('#svg02FlagMacao'),

      $svg02TextChina = $('#svg02TextChina'),
      $svg02NumberChina = $('#svg02NumberChina'),
      $svg02InnerNumberChina = $('#svg02NumberChina text'),


      $svg02LineChina = $('#svg02LineChina'),
      $svg02BubbleChina = $('#svg02BubbleChina'),
      $svg02PeopleChina = $('#svg02PeopleChina'),
      $svg02FlagChina = $('#svg02FlagChina'),

      $svg02TextJapan = $('#svg02TextJapan'),
      $svg02NumberJapan = $('#svg02NumberJapan'),
      $svg02InnerNumberJapan = $('#svg02NumberJapan text'),


      $svg02LineJapan = $('#svg02LineJapan'),
      $svg02BubbleJapan = $('#svg02BubbleJapan'),
      $svg02PeopleJapan = $('#svg02PeopleJapan'),
      $svg02FlagJapan = $('#svg02FlagJapan'),

      $svg02TextSoutheastAsia = $('#svg02TextSoutheastAsia'),
      $svg02NumberSoutheastAsia = $('#svg02NumberSoutheastAsia'),
      $svg02InnerNumberSoutheastAsia = $('#svg02NumberSoutheastAsia text'),


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


      $svg06Heading01 = $('#svg06Heading01'),
      $svg06subHeading01 = $('#svg06subHeading01'),
      $svg06subHeading02 = $('#svg06subHeading02'),

      $svg06GroundLeft = $('#svg06GroundLeft'),
      $svg06GroundRight = $('#svg06GroundRight'),

      $svg06HotelLeft = $('#svg06HotelLeft'),
      $svg06HotelRight = $('#svg06HotelRight'),

      $svg06Bling01 = $('#svg06Bling01'),
      $svg06Bling02 = $('#svg06Bling02'),
      $svg06Bling03 = $('#svg06Bling03'),

      $svg06CarLeft = $('#svg06CarLeft'),
      $svg06CarRight = $('#svg06CarRight'),

      $svg06MoneyLeft = $('#svg06MoneyLeft'),
      $svg06MoneyRight = $('#svg06MoneyRight'),

      $svg06HotelLeftText = $('#svg06HotelLeftText'),
      $svg06HotelRightText = $('#svg06HotelRightText'),

      $svg06HotelLeftNumber = $('#svg06HotelLeftNumber'),
      $svg06HotelRightNumber = $('#svg06HotelRightNumber'),

      //.....................svg07.....................


      $svg07topLine = $('#svg07topLine'),
      $svg07bottomLine = $('#svg07bottomLine'),
      $svg07Heading = $('#svg07Heading'),
      $svg07subHeading = $('#svg07subHeading'),

      $svg07GirlLeft = $('#svg07GirlLeft'),
      $svg07GirlRight = $('#svg07GirlRight'),

      $svg07TextChina = $('#svg07TextChina'),
      $svg07TextJapan = $('#svg07TextJapan'),

      $svg07LineChina = $('#svg07LineChina'),
      $svg07LineJapan = $('#svg07LineJapan'),

      $svg07TextLittleLeft = $('#svg07TextLittleLeft'),
      $svg07TextLittleRight = $('#svg07TextLittleRight'),



      $svg07TextTourist = $('#svg07TextTourist'),
      $svg07TextTouristLeft = $('#svg07TextTouristLeft'),
      $svg07TextTouristRight = $('#svg07TextTouristRight'),


      $svg07TextInternationalHotel = $('#svg07TextInternationalHotel'),
      $svg07TextInternationalHotelLeft = $('#svg07TextInternationalHotelLeft'),
      $svg07TextInternationalHotelRight = $('#svg07TextInternationalHotelRight'),

      $svg07TextGeneralHotel = $('#svg07TextGeneralHotel'),
      $svg07TextGeneralHotelLeft = $('#svg07TextGeneralHotelLeft'),
      $svg07TextGeneralHotelRight = $('#svg07TextGeneralHotelRight'),





      $svg07NumberTouristLeft = $('#svg07TextTouristLeft text'),
      $svg07NumberTouristRight = $('#svg07TextTouristRight text'),


      $svg07NumberInternationalHotelLeft = $('#svg07TextInternationalHotelLeft text'),
      $svg07NumberInternationalHotelRight = $('#svg07TextInternationalHotelRight text'),

      $svg07NumberGeneralHotelLeft = $('#svg07TextGeneralHotelLeft text'),
      $svg07NumberGeneralHotelRight = $('#svg07TextGeneralHotelRight text'),





      // .....................svg08.....................

      $svg08topLine = $('#svg08topLine'),
      $svg08bottomLine = $('#svg08bottomLine'),

      $svg08Heading = $('#svg08Heading'),

      $svg08PeopleLeft = $('#svg08PeopleLeft'),

      $svg08TextChinaLeft = $('#svg08TextChinaLeft text'),
      $svg08TextJapanRight = $('#svg08TextJapanRight text'),
      $svg08FlagChina = $('#svg08FlagChina'),
      $svg08FlagJapan = $('#svg08FlagJapan'),

      $svg08Taiwan = $('#svg08Taiwan'),

      $svg08BrownTaipei = $('#svg08BrownTaipei'),
      $svg08BrownTaoyuan = $('#svg08BrownTaoyuan'),
      $svg08BrownTaitung = $('#svg08BrownTaitung'),
      $svg08BrownKaohsiung = $('#svg08BrownKaohsiung'),

      $svg08BrownTaipeiTooltipChina = $('#svg08BrownTaipeiTooltipChina'),
      $svg08BrownTaipeiTooltipJapan = $('#svg08BrownTaipeiTooltipJapan'),
      $svg08BrownTaoyuanTooltip = $('#svg08BrownTaoyuanTooltip'),
      $svg08BrownTaitungTooltip = $('#svg08BrownTaitungTooltip'),
      $svg08BrownKaohsiungTooltip = $('#svg08BrownKaohsiungTooltip'),

      $svg08LineTaipeiTooltipChina = $('#svg08LineTaipeiTooltipChina'),
      $svg08LineTaipeiTooltipJapan = $('#svg08LineTaipeiTooltipJapan'),
      $svg08LineTaoyuanTooltip = $('#svg08LineTaoyuanTooltip'),
      $svg08LineTaitungTooltip = $('#svg08LineTaitungTooltip'),
      $svg08LineKaohsiungTooltip = $('#svg08LineKaohsiungTooltip'),


      $svg08NumberChina4 = $('#svg08NumberChina4'),
      $svg08NumberChina3 = $('#svg08NumberChina3'),
      $svg08NumberChina1 = $('#svg08NumberChina1'),
      $svg08NumberChina2 = $('#svg08NumberChina2'),
      $svg08NumberChina5 = $('#svg08NumberChina5'),
      $svg08NumberJapan1 = $('#svg08NumberJapan1'),
      $svg08NumberJapan2 = $('#svg08NumberJapan2'),
      $svg08NumberJapan3 = $('#svg08NumberJapan3'),
      $svg08NumberJapan4 = $('#svg08NumberJapan4'),
      $svg08NumberJapan5 = $('#svg08NumberJapan5'),

      $svg08ButtonChina = $('#svg08ButtonChina'),
      $svg08ButtonJapan = $('#svg08ButtonJapan'),

      $svg08ButtonChinafaceUp = $('#svg08ButtonChinafaceUp'),
      $svg08ButtonChinafaceDown = $('#svg08ButtonChinafaceDown'),


      $svg08ButtonJapanfaceUp = $('#svg08ButtonJapanfaceUp'),
      $svg08ButtonJapanfaceDown = $('#svg08ButtonJapanfaceDown'),

      $svg08BottomText = $('#svg08BottomText'),

      //.....................svg09.....................

      $svg09topLine = $('#svg09topLine'),
      $svg09bottomLine = $('#svg09bottomLine'),

      $svg09Heading = $('#svg09Heading'),

      $svg09FlagChina = $('#svg09FlagChina'),
      $svg09FlagJapan = $('#svg09FlagJapan'),

      $svg09TextChina = $('#svg09TextChina'),
      $svg09TextJapan = $('#svg09TextJapan'),


      $svg09Plane = $('#svg09Plane'),
      $svg09Runway = $('#svg09Runway'),

      $svg09Text01 = $('#svg09Text01'),
      $svg09Text02 = $('#svg09Text02'),
      $svg09Text03 = $('#svg09Text03'),
      $svg09Text04 = $('#svg09Text04'),
      $svg09Text05 = $('#svg09Text05'),
      $svg09Text06 = $('#svg09Text06'),
      $svg09Text07 = $('#svg09Text07'),
      $svg09Text08 = $('#svg09Text08'),
      $svg09Text09 = $('#svg09Text09'),

      $svg09Text01Left = $('#svg09Text01Left'),
      $svg09Text02Left = $('#svg09Text02Left'),
      $svg09Text03Left = $('#svg09Text03Left'),
      $svg09Text04Left = $('#svg09Text04Left'),
      $svg09Text05Left = $('#svg09Text05Left'),
      $svg09Text06Left = $('#svg09Text06Left'),
      $svg09Text07Left = $('#svg09Text07Left'),
      $svg09Text08Left = $('#svg09Text08Left'),
      $svg09Text09Left = $('#svg09Text09Left'),


      $svg09Text01Right = $('#svg09Text01Right'),
      $svg09Text02Right = $('#svg09Text02Right'),
      $svg09Text03Right = $('#svg09Text03Right'),
      $svg09Text04Right = $('#svg09Text04Right'),
      $svg09Text05Right = $('#svg09Text05Right'),
      $svg09Text06Right = $('#svg09Text06Right'),
      $svg09Text07Right = $('#svg09Text07Right'),
      $svg09Text08Right = $('#svg09Text08Right'),
      $svg09Text09Right = $('#svg09Text09Right'),




      $svg09Text01LeftNumber = $('#svg09Text01Left text'),
      $svg09Text02LeftNumber = $('#svg09Text02Left text'),
      $svg09Text03LeftNumber = $('#svg09Text03Left text'),
      $svg09Text04LeftNumber = $('#svg09Text04Left text'),
      $svg09Text05LeftNumber = $('#svg09Text05Left text'),

      $svg09Text07LeftNumber = $('#svg09Text07Left text'),
      $svg09Text08LeftNumber = $('#svg09Text08Left text'),
      $svg09Text09LeftNumber = $('#svg09Text09Left text'),

      $svg09Text01RightNumber = $('#svg09Text01Right text'),
      $svg09Text02RightNumber = $('#svg09Text02Right text'),
      $svg09Text03RightNumber = $('#svg09Text03Right text'),
      $svg09Text04RightNumber = $('#svg09Text04Right text'),
      $svg09Text05RightNumber = $('#svg09Text05Right text'),

      $svg09Text07RightNumber = $('#svg09Text07Right text'),
      $svg09Text08RightNumber = $('#svg09Text08Right text'),






      $svg09Text01Win = $('#svg09Text01Win'),
      $svg09Text02Win = $('#svg09Text02Win'),
      $svg09Text03Win = $('#svg09Text03Win'),
      $svg09Text04Win = $('#svg09Text04Win'),
      $svg09Text05Win = $('#svg09Text05Win'),
      $svg09Text07Win = $('#svg09Text07Win'),
      $svg09Text08Win = $('#svg09Text08Win'),

      $svg09Divider = $('#svg09Divider'),





      //.....................svg10.....................

      $svg10topLine = $('#svg10topLine'),
      $svg10bottomLine = $('#svg10bottomLine'),

      $svg10Heading = $('#svg10Heading'),
      $svg10subHeading = $('#svg10subHeading'),

      $svg10Earth = $('#svg10Earth'),

      $svg10Ground01 = $('#svg10Ground01'),

      $svg10BubbleLeft = $('#svg10BubbleLeft'),
      $svg10BubbleRight = $('#svg10BubbleRight'),

      $svg10Light = $('#svg10Light'),

      $svg10TextSource = $('#svg10TextSource'),

      $svg10Footer = $('#svg10Footer');












    var tlScene01 = new TimelineMax({
        paused: true,
        onComplete: function() {
          tlScrollDown.play(0);
        }
      }),
      tlScene02 = new TimelineMax({ paused: true }),
      tlScene03 = new TimelineMax({ paused: true }),
      tlScene04 = new TimelineMax({ paused: true }),
      tlScene05 = new TimelineMax({ paused: true }),
      tlScene06 = new TimelineMax({ paused: true }),
      tlScene07 = new TimelineMax({ paused: true }),

      tlScene08 = new TimelineMax({ paused: true }),
      tlScene08heading = new TimelineMax({ paused: true }),
      tlScene08china = new TimelineMax({ paused: true }),
      tlScene08bottomText = new TimelineMax({ paused: true }),
      tlScene08japan = new TimelineMax({ paused: true }),

      tlScene09 = new TimelineMax({ paused: true }),
      tlScene10 = new TimelineMax({ paused: true }),
      tlScrollDown = new TimelineMax({ paused: true, yoyo: true, repeat: -1 });



    // tlScene08.add(tlScene08heading);
    // tlScene08.add(tlScene08china, 1.6);   //左按鈕的動畫
    // tlScene08.add(tlScene08bottomText, 2.2);
    // tlScene08.add(tlScene08japan);   //右按鈕的動畫




    var topLineParameter = { scaleX: 0, ease: Power1.easeOut },
      bottomLineParameter = { scaleX: 0, opacity: 0, ease: Power1.easeOut, transformOrigin: '100% 50%' },
      HeadingParameter = { x: -100, opacity: 0, ease: Power1.easeOut },
      subHeadingParameter = { x: -20, opacity: 0, ease: Power1.easeOut },
      BottomTextParameter = { x: -50, opacity: 0, ease: Power1.easeOut };


    function animateNumberIncreasing(targetText, animateToNumber, decimalPlaces, type) {

      // how many decimal places allows
      var decimal_places = decimalPlaces;
      var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

      $(targetText)
        .animateNumber({
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

              if (type == 'percent') {
                target.text(floored_number + ' %');
              } else if (type == 'dollar') {
                target.text('$' + floored_number);
              } else if (type == 'ntd') {
                floored_number = floored_number.toString().replace('.', ',');
                target.text(floored_number + 'NTD');
              } else if (type == 'number') {
                target.text(floored_number);
              } else if (type == 'numberWithComma') {
                floored_number = floored_number.toString().replace('.', ',');
                target.text(floored_number);
              }

            }
          },
          1000 //millieseconds
        );
    }















    tlScrollDown.to($svg01ScrollDown, 0.7, { y: 10, ease: Power1.easeOut });








    tlScene01.from($svg01Cloud01, 0.6, { y: 100, opacity: 0 }, 0.3)
             .from($svg01Cloud02, 0.6, { y: 100, opacity: 0 }, 0.6)
             .from($svg01Cloud03, 0.6, { y: 100, opacity: 0 }, 0.9)
             .from($svg01Cloud04, 0.6, { y: 100, opacity: 0 }, 1.1)
             .from($svg01Cloud05, 0.6, { y: 100, opacity: 0 }, 1.3)
             .fromTo($svg01Plane, 4, { x: -1500, y: 500, scale: 2 }, { x: 1500, y: -500, scale: 0.2 }, 0.9)
             .to([$svg01Cloud01,
                  $svg01Cloud02,
                  $svg01Cloud03,
                  $svg01Cloud04,
                  $svg01Cloud05
                  ], 0.8, { y: -1500, opacity: 0, ease: Back.easeIn.config(1.7) }, 2.8)


             .from($svg01Character01, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.6)
             .from($svg01Character02, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.8)
             .from($svg01Character03, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4)
             .from($svg01Character04, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.2)
             .from($svg01Character05, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.4)
             .from($svg01Character06, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.6)
             .from($svg01Character07, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.8)
             .to($svg01WholeCharacter, 0.8, { y: -240, scale: 0.8, transformOrigin: '50% 50%', ease: Power1.easeOut }, 5.4)


             .from($svg01ChinaVsJapan, 1, { y: -100, opacity: 0 }, 6.1)

             .from($svg01Door, 0.4, { y: -100, opacity: 0 }, 6.2)

             .from($svg01Bg, 0.4, { y: -100, opacity: 0 }, 6.3)

             .from($svg01People01, 0.4, { x: -100, opacity: 0 }, 6.4)
             .from($svg01People02, 0.4, { x: -100, opacity: 0 }, 6.5)
             .from($svg01People03, 0.4, { x: -100, opacity: 0 }, 6.6)
             .from($svg01People04, 0.4, { x: -100, opacity: 0 }, 6.7)
             .from($svg01People05, 0.4, { x: 100, opacity: 0 }, 6.8)
             .from($svg01People06, 0.4, { x: 100, opacity: 0 }, 6.9)
             .from($svg01People07, 0.4, { x: 100, opacity: 0 }, 7)

             .from($svg01BottomText, 0.4, BottomTextParameter, 7.1)

             .from($svg01ScrollDown, 0.4, { y: 10, opacity: 0 }, 7.4);
































    tlScene02.from($svg02topLine, 0.6, topLineParameter, 0.5)
             .from($svg02bottomLine, 0.6, bottomLineParameter, 0.5)
             .from($svg02Heading, 0.3, HeadingParameter, 0.7)
             .from($svg02subHeading, 0.4, subHeadingParameter, 0.8)


             .from($svg02Bg, 0.4, { y: -100, opacity: 0 }, 0.9)
             .from($svg02Door, 0.4, { y: -100, opacity: 0 }, 1)
    //---------------------------港澳
             .to($svg02PeopleHongKongAndMacao, 0.7, { y: 190, opacity: 1, ease: Power1.easeIn }, 1.4)
             .to($svg02PeopleHongKongAndMacao, 0.7, { x: -90, ease: Power1.easeOut }, 2.1)

             .from($svg02BubbleHongKongAndMacao, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.8)
             .from($svg02LineHongKongAndMacao, 0.1, { y: 3, opacity: 0 }, 2.9)
             .from($svg02TextHongKongAndMacao, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3)

             .from($svg02FlagHongKong, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.1)
             .from($svg02FlagMacao, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.2)

             .call(animateNumberIncreasing, [$svg02InnerNumberHongKongAndMacao, 14.5, 1, 'percent']) //14.5 %

             .from($svg02NumberHongKongAndMacao, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)
    //---------------------------中國
             .to($svg02PeopleChina, 0.7, { y: 70, opacity: 1, ease: Power1.easeIn }, 1.9)
             .to($svg02PeopleChina, 0.7, { x: -140, ease: Power1.easeOut }, 2.6)

             .from($svg02BubbleChina, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.3)
             .from($svg02LineChina, 0.1, { y: 3, opacity: 0 }, 3.4)
             .from($svg02TextChina, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)
             .from($svg02FlagChina, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.6)

             .call(animateNumberIncreasing, [$svg02InnerNumberChina, 40.1, 1, 'percent']) //40.1 %

             .from($svg02NumberChina, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.9)
    //---------------------------日本
             .to($svg02PeopleJapan, 0.7, { y: 80, opacity: 1, ease: Power1.easeIn }, 2.4)
             .to($svg02PeopleJapan, 0.7, { x: 130, ease: Power1.easeOut }, 3.1)

             .from($svg02BubbleJapan, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.8)
             .from($svg02LineJapan, 0.1, { y: 3, opacity: 0 }, 3.9)
             .from($svg02TextJapan, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4)
             .from($svg02FlagJapan, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.1)

             .call(animateNumberIncreasing, [$svg02InnerNumberJapan, 15.6, 1, 'percent']) //15.6 %

             .from($svg02NumberJapan, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.4)
    //---------------------------東南亞
             .to($svg02PeopleSoutheastAsia, 0.7, { y: 200, opacity: 1, ease: Power1.easeIn }, 2.9)
             .to($svg02PeopleSoutheastAsia, 0.7, { x: 115, ease: Power1.easeOut }, 3.6)

             .from($svg02BubbleSoutheastAsia, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.3)
             .from($svg02LineSoutheastAsia, 0.1, { y: 3, opacity: 0 }, 4.4)
             .from($svg02TextSoutheastAsia, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.5)
             .from($svg02FlagSingapore, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.6)
             .from($svg02FlagThai, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.7)
             .from($svg02FlagMalaysia, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.8)
             .from($svg02FlagPhilippines, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.9)
             .from($svg02FlagVietnam, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 5)

             .call(animateNumberIncreasing, [$svg02InnerNumberSoutheastAsia, 13.7, 1, 'percent']) //13.7 %

             .from($svg02NumberSoutheastAsia, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 5.3)


             .from($svg02BottomText, 0.4, BottomTextParameter, 5.2);











































    tlScene03.from($svg03topLine, 0.6, topLineParameter, 0.5)
      .from($svg03bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg03Heading, 0.3, HeadingParameter, 0.7)

    .from($svg03BusLeft, 0.8, { scale: 0, transformOrigin: '100% 0%' }, 0.8)
      .from($svg03BusRight, 0.8, { scale: 0 }, 0.8)

    .from($svg03Sign, 0.7, { y: 20, opacity: 0 }, 1.3)

    .from($svg03PeopleLeft01, 0.4, { x: -20, opacity: 0 }, 1.2)
      .from($svg03PeopleRight01, 0.4, { x: 20, opacity: 0 }, 1.3)
      .from($svg03PeopleLeft02, 0.4, { x: -20, opacity: 0 }, 1.4)
      .from($svg03PeopleRight02, 0.4, { x: 20, opacity: 0 }, 1.5)
      .from($svg03PeopleLeft03, 0.4, { x: -20, opacity: 0 }, 1.6)
      .from($svg03PeopleLeft04, 0.4, { x: -20, opacity: 0 }, 1.7)

    .to($svg03Bg, 1, { opacity: 0.3 }, 1)

    .from($svg03GirlLeft, 0.5, { x: -30, opacity: 0 }, 2.2)
      .from($svg03GirlRight, 0.5, { x: 30, opacity: 0 }, 2.2)

    .from($svg03PieLeft, 1, { rotation: 360, opacity: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.7)
      .from($svg03PieRight, 1, { rotation: 360, opacity: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.7)

    .from($svg03TextLeft, 0.3, { x: -10, opacity: 0 }, 3.1)
      .from($svg03TextRight, 0.3, { x: 10, opacity: 0 }, 3.1)

    .from($svg03FlagChina, 0.2, { x: -10, opacity: 0 }, 3.2)
      .from($svg03FlagJapan, 0.2, { x: 10, opacity: 0 }, 3.2)

    .from($svg03NumberLeft, 0.4, { x: -10, opacity: 0 }, 3.3)
      .from($svg03NumberRight, 0.4, { x: 10, opacity: 0 }, 3.3)



    .from($svg03BottomText, 0.4, BottomTextParameter, 3.5);

































    tlScene04.from($svg04topLine, 0.6, topLineParameter, 0.5)
             .from($svg04bottomLine, 0.6, bottomLineParameter, 0.5)
             .from($svg04Heading, 0.3, HeadingParameter, 0.7)

             .to($svg04Plane, 4, { scale: 7, x: 1900, y: 0, opacity: 1 }, 0.5)
             .from($svg04subHeading, 1, { x: -300, opacity: 0 }, 1.4)

             .from($svg04Cloud01, 0.3, { x: 20, opacity: 0 }, 1.9)
             .from($svg04Cloud02, 0.3, { x: -20, opacity: 0 }, 2)
             .from($svg04Cloud03, 0.3, { x: 20, opacity: 0 }, 2.1)
             .from($svg04Cloud04, 0.3, { x: -20, opacity: 0 }, 2.2)
             .from($svg04Balloon, 0.3, { x: 20, opacity: 0 }, 2.3)

             .from($svg04Ground, 0.4, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 2.3)

             .from($svg04Floor01, 1.2, { y: -500, opacity: 0, ease: Power4.easeOut }, 2.5)
             .from($svg04Floor02, 1, { y: -500, opacity: 0, ease: Power4.easeOut }, 2.8)
             .from($svg04Floor03, 0.9, { y: -500, opacity: 0, ease: Power4.easeOut }, 3)
             .from($svg04Floor04, 0.8, { y: -400, opacity: 0, ease: Power4.easeOut }, 3.2)
             .from($svg04Floor05, 0.7, { y: -300, opacity: 0, ease: Power4.easeOut }, 3.4)
             .from($svg04Floor06, 0.6, { y: -200, opacity: 0, ease: Power4.easeOut }, 3.5)

             .from($svg04BannerLong, 0.4, { y: -20, opacity: 0 }, 3.6)
             .from($svg04BannerChina, 0.4, { y: -20, opacity: 0 }, 3.7)
             .from($svg04BannerJapan, 0.4, { y: -20, opacity: 0 }, 3.7)
             .from($svg04LittleText, 0.4, { opacity: 0 }, 3.8)

    //----------------------------05 animated bar
             .from($svg04Floor05LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.4)
             .from($svg04Floor05RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.4)

             .call(animateNumberIncreasing, [$svg04Floor05LeftNumber, 120, 0, 'dollar'], null, 3.4)
             .call(animateNumberIncreasing, [$svg04Floor05RightNumber, 41, 0, 'dollar'], null, 3.4)

             .from($svg04Floor05LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
             .from($svg04Floor05RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
    //----------------------------04 animated bar
             .from($svg04Floor04LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.5)
             .from($svg04Floor04RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.5)

             .call(animateNumberIncreasing, [$svg04Floor04LeftNumber, 43, 0, 'dollar'], null, 3.5)
             .call(animateNumberIncreasing, [$svg04Floor04RightNumber, 97, 0, 'dollar'], null, 3.5)

             .from($svg04Floor04LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.9)
             .from($svg04Floor04RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.9)
    //----------------------------03 animated bar
             .from($svg04Floor03LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.6)
             .from($svg04Floor03RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.6)

             .call(animateNumberIncreasing, [$svg04Floor03LeftNumber, 27, 0, 'dollar'], null, 3.6)
             .call(animateNumberIncreasing, [$svg04Floor03RightNumber, 39, 0, 'dollar'], null, 3.6)

             .from($svg04Floor03LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4)
             .from($svg04Floor03RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4)
    //----------------------------02 animated bar
             .from($svg04Floor02LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.7)
             .from($svg04Floor02RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.7)

             .call(animateNumberIncreasing, [$svg04Floor02LeftNumber, 29, 0, 'dollar'], null, 3.7)
             .call(animateNumberIncreasing, [$svg04Floor02RightNumber, 35, 0, 'dollar'], null, 3.7)

             .from($svg04Floor02LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.1)
             .from($svg04Floor02RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.1)
    //----------------------------01 animated bar
             .from($svg04Floor01LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.8)
             .from($svg04Floor01RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.8)

             .call(animateNumberIncreasing, [$svg04Floor01LeftNumber, 227, 0, 'dollar'], null, 3.8)
             .call(animateNumberIncreasing, [$svg04Floor01RightNumber, 227, 0, 'dollar'], null, 3.8)

             .from($svg04Floor01LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.2)
             .from($svg04Floor01RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.2)

             .from($svg04BottomText, 0.4, BottomTextParameter);



























    tlScene05.from($svg05topLine, 0.6, topLineParameter, 0.5)
             .from($svg05bottomLine, 0.6, bottomLineParameter, 0.5)
             .from($svg05Heading, 0.3, HeadingParameter, 0.7)
             .from($svg05subHeading, 0.4, subHeadingParameter, 0.8)


             .from($svg05BannerLong, 0.4, { y: 50, opacity: 0 }, 1)
             .from($svg05BannerChina, 0.4, { opacity: 0 }, 1.3)
             .from($svg05BannerJapan, 0.4, { opacity: 0 }, 1.3)

             .from($svg05LittleText, 0.4, { opacity: 0 }, 1.4)

             .from($svg05Lamp01, 0.3, { y: -50, opacity: 0 }, 1.4)
             .from($svg05Lamp02, 0.3, { y: -50, opacity: 0 }, 1.5)

             .from($svg05Floor01, 0.5, { opacity: 0, y: 40 }, 1.8)
             .from($svg05Floor02, 0.5, { opacity: 0, y: 40 }, 1.8)
             .from($svg05Floor03, 0.5, { opacity: 0, y: 40 }, 1.8)
             .from($svg05Floor04, 0.5, { opacity: 0, y: 40 }, 1.8)
             .from($svg05Floor05, 0.5, { opacity: 0, y: 40 }, 1.8)

             .from($svg05Floor01People, 0.8, { y: 50, opacity: 0 }, 2.1)
             .from($svg05Floor02People, 0.8, { y: 50, opacity: 0 }, 2.1)
             .from($svg05Floor03People, 0.8, { y: 50, opacity: 0 }, 2.1)
             .from($svg05Floor04People, 0.8, { y: 50, opacity: 0 }, 2.1)
             .from($svg05Floor05People, 0.8, { y: 50, opacity: 0 }, 2.1)

             .from($svg05LeftCar, 0.5, { scale: 0, transformOrigin: '50% 50%' }, 2.8)
             .from($svg05RightCar, 0.5, { scale: 0, transformOrigin: '50% 50%' }, 2.8)

             .to($svg05LeftCar, 2.5, { y: 600, ease: Power1.easeIn }, 2.8)
             .to($svg05RightCar, 2.5, { y: 600, ease: Power1.easeIn }, 2.8)


    //----------------------------05 animated bar
             .from($svg05Floor05LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.2)
             .from($svg05Floor05RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.2)

             .call(animateNumberIncreasing, [$svg05Floor05LeftNumber, 47.58, 2, 'dollar'], null, 3.2)
             .call(animateNumberIncreasing, [$svg05Floor05RightNumber, 16.57, 2, 'dollar'], null, 3.2)

             .from($svg05Floor05LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.6)
             .from($svg05Floor05RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.6)

             .from($svg05Floor05LeftClothes, 0.4, { y: -200, opacity: 0 }, 3.8)
    //----------------------------04 animated bar
             .from($svg05Floor04LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.4)
             .from($svg05Floor04RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.4)

             .call(animateNumberIncreasing, [$svg05Floor04LeftNumber, 30.75, 2, 'dollar'], null, 3.4)
             .call(animateNumberIncreasing, [$svg05Floor04RightNumber, 2.01, 2, 'dollar'], null, 3.4)

             .from($svg05Floor04LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
             .from($svg05Floor04RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
    //----------------------------03 animated bar
             .from($svg05Floor03LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.9)
             .from($svg05Floor03RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.9)

             .call(animateNumberIncreasing, [$svg05Floor03LeftNumber, 34.79, 2, 'dollar'], null, 3.9)
             .call(animateNumberIncreasing, [$svg05Floor03RightNumber, 38.70, 2, 'dollar'], null, 3.9)

             .from($svg05Floor03LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.3)
             .from($svg05Floor03RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.3)

             .from($svg05Floor03RightPineapple, 0.4, { y: -200, opacity: 0 }, 4.4)
    //----------------------------02 animated bar
             .from($svg05Floor02LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 4.2)
             .from($svg05Floor02RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 4.2)

             .call(animateNumberIncreasing, [$svg05Floor02LeftNumber, 8.17, 2, 'dollar'], null, 4.2)
             .call(animateNumberIncreasing, [$svg05Floor02RightNumber, 7.33, 2, 'dollar'], null, 4.2)

             .from($svg05Floor02LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.6)
             .from($svg05Floor02RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.6)
    //----------------------------01 animated bar
             .from($svg05Floor01LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 4.5)
             .from($svg05Floor01RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 4.5)

             .call(animateNumberIncreasing, [$svg05Floor01LeftNumber, 16.57, 2, 'dollar'], null, 4.5)
             .call(animateNumberIncreasing, [$svg05Floor01RightNumber, 1.91, 2, 'dollar'], null, 4.5)

             .from($svg05Floor01LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.9)
             .from($svg05Floor01RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.9)




             .from($svg05LeftGirl, 0.4, { x: -20, opacity: 0 }, 4.5)
             .from($svg05RightGirl, 0.4, { x: 200, opacity: 0 }, 4.6)

             .from($svg05BottomText, 0.4, BottomTextParameter, 5.1);








































    tlScene06.from($svg06topLine01, 0.6, topLineParameter, 0.5)
             .from($svg06bottomLine01, 0.6, bottomLineParameter, 0.5)
             .from($svg06Heading01, 0.3, HeadingParameter, 0.7)
             .from($svg06subHeading01, 0.4, subHeadingParameter, 0.8)

             .from($svg06GroundLeft, 0.5, { scaleX: 0, transformOrigin: '0% 50%', ease: Power1.easeInOut }, 0.9)
             .from($svg06GroundRight, 0.5, { scaleX: 0, transformOrigin: '100% 50%', ease: Power1.easeInOut }, 0.9)

             .from([$svg06HotelLeft, $svg06HotelRight], 0.5, { y: -40, opacity: 0, transformOrigin: '50% 100%' }, 1.3)


             .from($svg06CarLeft, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 1.8)
             .from($svg06CarRight, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 1.8)

             .to($svg06CarLeft, 1.2, { x: 180, ease: Power1.easeInOut }, 1.9)
             .to($svg06CarRight, 1.2, { x: -180, ease: Power1.easeInOut }, 1.9)

             .from($svg06MoneyLeft, 0.4, { scaleY: 0, transformOrigin: '50% 100%' }, 3.1)
             .from($svg06MoneyRight, 0.4, { scaleY: 0, transformOrigin: '50% 100%' }, 3.1)

             .call(animateNumberIncreasing, [$svg06HotelLeftNumber, 3.981, 3, 'ntd'], null, 3.2)
             .call(animateNumberIncreasing, [$svg06HotelRightNumber, 3.060, 3, 'ntd'], null, 3.2)

             .from($svg06HotelLeftText, 0.4, { y: 50, opacity: 0 }, 3.5)
             .from($svg06HotelRightText, 0.4, { y: 50, opacity: 0 }, 3.5)

             .from($svg06subHeading02, 0.4, subHeadingParameter, 3.9);



















    tlScene07.from($svg07topLine, 0.6, topLineParameter, 0.5)
             .from($svg07bottomLine, 0.6, bottomLineParameter, 0.5)
             .from($svg07Heading, 0.3, HeadingParameter, 0.7)


             .from($svg07GirlLeft, 0.6, { x: -200, opacity: 0 }, 1)
             .from($svg07GirlRight, 0.6, { x: 200, opacity: 0 }, 1)

             .from([$svg07TextChina, $svg07TextJapan], 0.4, { opacity: 0, y: 20 }, 1.6)

             .from([$svg07LineChina, $svg07LineJapan], 0.1, { scale: 0, transformOrigin: '50% 50%' }, 2)



             .from([$svg07TextTourist, $svg07TextTouristLeft, $svg07TextTouristRight, $svg07TextLittleLeft, $svg07TextLittleRight], 0.4, { y: 20, opacity: 0 }, 2.1)
             .from([$svg07TextInternationalHotel, $svg07TextInternationalHotelLeft, $svg07TextInternationalHotelRight], 0.4, { y: 20, opacity: 0 }, 2.2)
             .from([$svg07TextGeneralHotel, $svg07TextGeneralHotelLeft, $svg07TextGeneralHotelRight], 0.4, { y: 20, opacity: 0 }, 2.3)



             .call(animateNumberIncreasing, [$svg07NumberTouristLeft, 418.4, 1, 'number'], null, 2.2)
             .call(animateNumberIncreasing, [$svg07NumberTouristRight, 162.7, 1, 'number'], null, 2.2)

             .call(animateNumberIncreasing, [$svg07NumberInternationalHotelLeft, 0.4261, 4, 'number'], null, 2.3)
             .call(animateNumberIncreasing, [$svg07NumberInternationalHotelRight, 0.88, 2, 'number'], null, 2.3)

             .call(animateNumberIncreasing, [$svg07NumberGeneralHotelLeft, 0.1512, 4, 'number'], null, 2.4)
             .call(animateNumberIncreasing, [$svg07NumberGeneralHotelRight, 0.2237, 4, 'number'], null, 2.4)

             .from($svg07subHeading, 0.4, BottomTextParameter);




















        // tlScene08.from($svg08topLine, 0.6, topLineParameter, 0.5)
        //          .from($svg08bottomLine, 0.6, bottomLineParameter, 0.5)
        //          .from($svg08Heading, 0.3, HeadingParameter, 0.7)
        //          .from([$svg08ButtonChina, $svg08ButtonJapan], 0.4, {opacity: 0, y: 30}, 0.8)
        //          .from($svg08Taiwan, 0.4, {opacity: 0, y: 30}, 1)
        //          .from($svg08PeopleLeft, 0.4, {opacity: 0, x: -20}, 1.2)

        //          .from($svg08BrownTaipei, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 1.3)
        //          .from($svg08LineTaipeiTooltipChina, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 1.4)
        //          .from($svg08BrownTaipeiTooltipChina, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 1.5)
        //          .call(animateNumberIncreasing, [$svg08NumberChina4, 4.259, 3, 'numberWithComma'], null, 1.6)
        //          .call(animateNumberIncreasing, [$svg08NumberChina3, 3.068, 3, 'numberWithComma'], null, 1.6)

        //          .from($svg08BrownTaoyuan, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 1.4)
        //          .from($svg08LineTaoyuanTooltip, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 1.5)
        //          .from($svg08BrownTaoyuanTooltip, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 1.6)
        //          .call(animateNumberIncreasing, [$svg08NumberChina1, 1.644, 3, 'numberWithComma'], null, 1.7)
        
        //          .from($svg08BrownTaitung, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 1.5)
        //          .from($svg08LineTaitungTooltip, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 1.6)
        //          .from($svg08BrownTaitungTooltip, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 1.7)
        //          .call(animateNumberIncreasing, [$svg08NumberChina2, 3.704, 3, 'numberWithComma'], null, 1.8)
        
        //          .from($svg08BrownKaohsiung, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 1.6)
        //          .from($svg08LineKaohsiungTooltip, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 1.7)
        //          .from($svg08BrownKaohsiungTooltip, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 1.8)
        //          .call(animateNumberIncreasing, [$svg08NumberChina5, 2.169, 3, 'numberWithComma'], null, 1.9)
        //          .from($svg08BottomText, 0.4, BottomTextParameter);




    tlScene08.call(function() {tlScene08heading.play(0);}, null, null, 0)
             .call(function() {tlScene08china.pause(0);}, null, null, 0)
             .call(function() {tlScene08bottomText.pause(0);}, null, null, 0)
             .call(function() {tlScene08japan.pause(0);}, null, null, 0)

             .call(function() {tlScene08china.play(0);}, null, null, 1.5)
             .call(function() {tlScene08bottomText.play(0);}, null, null, 2.5);




    tlScene08heading.from($svg08topLine, 0.6, topLineParameter, 0.5)
                    .from($svg08bottomLine, 0.6, bottomLineParameter, 0.5)
                    .from($svg08Heading, 0.3, HeadingParameter, 0.7)
                    .from([$svg08ButtonChina, $svg08ButtonJapan], 0.4, {opacity: 0, y: 30}, 0.8)
                    .from($svg08Taiwan, 0.4, {opacity: 0, y: 30}, 1)
                    .from($svg08PeopleLeft, 0.4, {opacity: 0, x: -20}, 1.2);

    tlScene08china.from($svg08BrownTaipei, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) })
                  .from($svg08LineTaipeiTooltipChina, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.1)
                  .from($svg08BrownTaipeiTooltipChina, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.2)
                  .call(animateNumberIncreasing, [$svg08NumberChina4, 4.259, 3, 'numberWithComma'], null, 0.3)
                  .call(animateNumberIncreasing, [$svg08NumberChina3, 3.068, 3, 'numberWithComma'], null, 0.3)
    
                  .from($svg08BrownTaoyuan, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 0.2)
                  .from($svg08LineTaoyuanTooltip, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.3)
                  .from($svg08BrownTaoyuanTooltip, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.4)
                  .call(animateNumberIncreasing, [$svg08NumberChina1, 1.644, 3, 'numberWithComma'], null, 0.5)
    
                  .from($svg08BrownTaitung, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 0.3)
                  .from($svg08LineTaitungTooltip, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.4)
                  .from($svg08BrownTaitungTooltip, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.5)
                  .call(animateNumberIncreasing, [$svg08NumberChina2, 3.704, 3, 'numberWithComma'], null, 0.6)
    
                  .from($svg08BrownKaohsiung, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 0.4)
                  .from($svg08LineKaohsiungTooltip, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.5)
                  .from($svg08BrownKaohsiungTooltip, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.6)
                  .call(animateNumberIncreasing, [$svg08NumberChina5, 2.169, 3, 'numberWithComma'], null, 0.7);


    tlScene08japan.from($svg08BrownTaipei, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) })
                  .from($svg08LineTaipeiTooltipJapan, 0.3, { scaleX: 0, ease: Back.easeOut.config(1.7) }, 0.1)
                  .from($svg08BrownTaipeiTooltipJapan, 0.3, { scale: 0, transformOrigin: '0% 50%' }, 0.2)
                  .call(animateNumberIncreasing, [$svg08NumberJapan1, 3.722, 3, 'numberWithComma'], null, 0.3)
                  .call(animateNumberIncreasing, [$svg08NumberJapan2, 3.917, 3, 'numberWithComma'], null, 0.3)
                  .call(animateNumberIncreasing, [$svg08NumberJapan3, 2.660, 3, 'numberWithComma'], null, 0.3)
                  .call(animateNumberIncreasing, [$svg08NumberJapan4, 5.732, 3, 'numberWithComma'], null, 0.3)
                  .call(animateNumberIncreasing, [$svg08NumberJapan5, 3.286, 3, 'numberWithComma'], null, 0.3);

    tlScene08bottomText.from($svg08BottomText, 0.4, BottomTextParameter);



    var scene08State = "changing";



    $svg08ButtonChina.on('click', function(e){
     if(scene08State == "chinaComplete") {

     } else if (scene08State == "japanComplete") {

      scene08State = "changing";

      //change button color
      chinaClickedButtonColorChange();
      //change button color

        tlScene08japan.reverse();
        TweenMax.delayedCall(0.4, function() {
          tlScene08china.play(0);
          scene08State = "chinaComplete";
        }); //play tlScene08china

     }
    });


    $svg08ButtonJapan.on('click', function(e){



     if(scene08State == "chinaComplete") {
      scene08State = "changing";

      //change button color
      japanClickedButtonColorChange();
      //change button color
      //
      tlScene08china.reverse();
      TweenMax.delayedCall(0.8, function() {
        tlScene08japan.play(0);
        scene08State = "japanComplete";
      });  //play tlScene08japan

     } else if (scene08State == "japanComplete") {

     }
    });

function chinaClickedButtonColorChange() {
  TweenMax.to($svg08ButtonJapanfaceUp, 0.3, {fill: '#ffffff'});
  TweenMax.to($svg08ButtonJapanfaceDown, 0.3, {fill: '#eeeeee'});
  TweenMax.to($svg08TextJapanRight, 0.3, {fill: '#000000'});
  TweenMax.to($svg08ButtonChinafaceUp, 0.3, {fill: '#E74631'});
  TweenMax.to($svg08ButtonChinafaceDown, 0.3, {fill: '#C63228'});
  TweenMax.to($svg08TextChinaLeft, 0.3, {fill: '#ffffff'});
}

function japanClickedButtonColorChange() {
  TweenMax.to($svg08ButtonChinafaceUp, 0.3, {fill: '#ffffff'});
  TweenMax.to($svg08ButtonChinafaceDown, 0.3, {fill: '#eeeeee'});
  TweenMax.to($svg08TextChinaLeft, 0.3, {fill: '#000000'});
  TweenMax.to($svg08ButtonJapanfaceUp, 0.3, {fill: '#E74631'});
  TweenMax.to($svg08ButtonJapanfaceDown, 0.3, {fill: '#C63228'});
  TweenMax.to($svg08TextJapanRight, 0.3, {fill: '#ffffff'});
}









    tlScene09.from($svg09topLine, 0.6, topLineParameter, 0.5)
      .from($svg09bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg09Heading, 0.3, HeadingParameter, 0.7)

    .from([$svg09FlagChina, $svg09FlagJapan], 0.4, { y: -20, opacity: 0 }, 1)

    .from([$svg09TextChina, $svg09TextJapan], 0.4, { y: -10, opacity: 0 }, 1.1)

    .from($svg09Plane, 4, { y: -1200 }, 1.2)
      .from($svg09Runway, 3.2, { y: 600 }, 1.6)


    .from($svg09Text01, 0.4, { opacity: 0, y: -30 }, 2.4)
      .from($svg09Text02, 0.4, { opacity: 0, y: -30 }, 2.5)
      .from($svg09Text03, 0.4, { opacity: 0, y: -30 }, 2.6)
      .from($svg09Text04, 0.4, { opacity: 0, y: -30 }, 2.7)
      .from($svg09Text05, 0.4, { opacity: 0, y: -30 }, 2.8)
      .from($svg09Text06, 0.4, { opacity: 0, y: -30 }, 2.9)
      .from($svg09Text07, 0.4, { opacity: 0, y: -30 }, 3)
      .from($svg09Text08, 0.4, { opacity: 0, y: -30 }, 3.1)
      .from($svg09Text09, 0.4, { opacity: 0, y: -30 }, 3.2)

    .from($svg09Divider, 0.4, { scaleX: 0, opacity: 0 }, 3.2)



    .from([$svg09Text01Left, $svg09Text01Right], 0.4, { y: -10, opacity: 0 }, 2.5)
      .from([$svg09Text02Left, $svg09Text02Right], 0.4, { y: -10, opacity: 0 }, 2.6)
      .from([$svg09Text03Left, $svg09Text03Right], 0.4, { y: -10, opacity: 0 }, 2.7)
      .from([$svg09Text04Left, $svg09Text04Right], 0.4, { y: -10, opacity: 0 }, 2.8)
      .from([$svg09Text05Left, $svg09Text05Right], 0.4, { y: -10, opacity: 0 }, 2.9)
      .from([$svg09Text06Left, $svg09Text06Right], 0.4, { y: -10, opacity: 0 }, 3)
      .from([$svg09Text07Left, $svg09Text07Right], 0.4, { y: -10, opacity: 0 }, 3.1)
      .from([$svg09Text08Left, $svg09Text08Right], 0.4, { y: -10, opacity: 0 }, 3.2)
      .from([$svg09Text09Left, $svg09Text09Right], 0.4, { y: -10, opacity: 0 }, 3.3)


    .call(animateNumberIncreasing, [$svg09Text01LeftNumber, 40.1, 1, 'percent'], null, 2.5)
      .call(animateNumberIncreasing, [$svg09Text01RightNumber, 15.6, 1, 'percent'], null, 2.5)
      .call(animateNumberIncreasing, [$svg09Text02LeftNumber, 82, 0, 'percent'], null, 2.6)
      .call(animateNumberIncreasing, [$svg09Text02RightNumber, 73, 0, 'percent'], null, 2.6)
      .call(animateNumberIncreasing, [$svg09Text03LeftNumber, 227.58, 2, 'dollar'], null, 2.7)
      .call(animateNumberIncreasing, [$svg09Text03RightNumber, 227.59, 2, 'dollar'], null, 2.7)
      .call(animateNumberIncreasing, [$svg09Text04LeftNumber, 52.74, 2, 'percent'], null, 2.8)
      .call(animateNumberIncreasing, [$svg09Text04RightNumber, 18.32, 2, 'percent'], null, 2.8)
      .call(animateNumberIncreasing, [$svg09Text05LeftNumber, 157.42, 2, 'dollar'], null, 2.9)
      .call(animateNumberIncreasing, [$svg09Text05RightNumber, 73.40, 1, 'dollar'], null, 2.9)

    .call(animateNumberIncreasing, [$svg09Text07LeftNumber, 19.19, 2, 'percent'], null, 3)
      .call(animateNumberIncreasing, [$svg09Text07RightNumber, 42.76, 2, 'percent'], null, 3)
      .call(animateNumberIncreasing, [$svg09Text08LeftNumber, 0.43, 2, 'number'], null, 3.1)
      .call(animateNumberIncreasing, [$svg09Text08RightNumber, 0.88, 2, 'number'], null, 3.1)





    .from($svg09Text01Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4)
      .from($svg09Text02Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.2)
      .from($svg09Text03Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.4)
      .from($svg09Text04Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.6)
      .from($svg09Text05Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.8)
      .from($svg09Text07Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 5)
      .from($svg09Text08Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 5.2);










































    tlScene10.from($svg10topLine, 0.6, topLineParameter, 0.5)
      .from($svg10bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg10Heading, 0.3, HeadingParameter, 0.7)
      .from($svg10subHeading, 0.4, subHeadingParameter, 0.8)

    // .to($svg10Ground01, 2.8, {rotation: -180, transformOrigin: '50% 0%'}, 0.9)
    .from($svg10Earth, 4, { rotation: 180, transformOrigin: '50% 100%', ease: CustomEase.create("custom", "M0,0,C0.128,0.572,0.257,0.954,0.512,1.028,0.672,1.074,0.838,1,1,1") }, 1.3)

    .from($svg10BubbleLeft, 0.4, { opacity: 0 }, 3.6)
      .from($svg10BubbleRight, 0.4, { opacity: 0 }, 3.7)

    .from($svg10Light, 0.4, { scale: 0, transformOrigin: '0% 100%' }, 3.7)

    .from($svg10TextSource, 0.3, { opacity: 0 }, 3.7)

    .from($svg10Footer, 0.5, { y: 200 }, 3.8);











































    //init fullpage.js
    $('#wrapper').fullpage({
      navigation: true,
      navigationTooltips: [
        '來台旅客大車拚',
        '旅客都從哪裡來？',
        '他們都來做什麼？',
        '消費習慣的差異',
        '掃些什麼貨？',
        '喜歡住哪裡？',
        '住客國籍統計',
        '聚焦觀光旅館',
        '中國v.s.日本 大車拼',
        '中國選擇購物，日本選擇住宿'
      ],
      afterRender: function() {
        TweenMax.to('.spinner', 1, { autoAlpha: 0 });
        TweenMax.set(['#wrapper', '#fp-nav'], { opacity: 1 });

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
            tlScene08heading.pause();
            tlScene08china.pause();
            tlScene08bottomText.pause();
            tlScene08japan.pause();
            tlScene08.pause();
            scene08State = "chinaComplete";
            chinaClickedButtonColorChange();
            break;
          case 9:
            tlScene09.pause();
            break;
          case 10:
            tlScene10.pause();
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
          scene08State = "changing";
            tlScene08.play(0);
            TweenMax.delayedCall(2.7, function() {
              scene08State = "chinaComplete";
            });
            break;
          case 9:
            tlScene09.play(0);
            break;
          case 10:
            tlScene10.play(0);
            break;


        }
      }

    }); //fullpage.js Init
  }












































































































































































































































































































































































































































































































































































































































































































































  function webAnimation() {

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

      $svg06HotelLeftText = $('#svg06HotelLeftText'),
      $svg06HotelRightText = $('#svg06HotelRightText'),

      $svg06HotelLeftNumber = $('#svg06HotelLeftNumber'),
      $svg06HotelRightNumber = $('#svg06HotelRightNumber'),

      $svg06GirlLeft = $('#svg06GirlLeft'),
      $svg06GirlRight = $('#svg06GirlRight'),

      $svg06TextChina = $('#svg06TextChina'),
      $svg06TextJapan = $('#svg06TextJapan'),

      $svg06LineChina = $('#svg06LineChina'),
      $svg06LineJapan = $('#svg06LineJapan'),

      $svg06TextLittleLeft = $('#svg06TextLittleLeft'),
      $svg06TextLittleRight = $('#svg06TextLittleRight'),



      $svg06TextTourist = $('#svg06TextTourist'),
      $svg06TextTouristLeft = $('#svg06TextTouristLeft'),
      $svg06TextTouristRight = $('#svg06TextTouristRight'),


      $svg06TextInternationalHotel = $('#svg06TextInternationalHotel'),
      $svg06TextInternationalHotelLeft = $('#svg06TextInternationalHotelLeft'),
      $svg06TextInternationalHotelRight = $('#svg06TextInternationalHotelRight'),

      $svg06TextGeneralHotel = $('#svg06TextGeneralHotel'),
      $svg06TextGeneralHotelLeft = $('#svg06TextGeneralHotelLeft'),
      $svg06TextGeneralHotelRight = $('#svg06TextGeneralHotelRight'),





      $svg06NumberTouristLeft = $('#svg06TextTouristLeft text'),
      $svg06NumberTouristRight = $('#svg06TextTouristRight text'),


      $svg06NumberInternationalHotelLeft = $('#svg06TextInternationalHotelLeft text'),
      $svg06NumberInternationalHotelRight = $('#svg06TextInternationalHotelRight text'),

      $svg06NumberGeneralHotelLeft = $('#svg06TextGeneralHotelLeft text'),
      $svg06NumberGeneralHotelRight = $('#svg06TextGeneralHotelRight text'),





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


      $svg07NumberLeft4 = $('#svg07NumberLeft4'),
      $svg07NumberLeft3 = $('#svg07NumberLeft3'),
      $svg07NumberLeft1 = $('#svg07NumberLeft1'),
      $svg07NumberLeft2 = $('#svg07NumberLeft2'),
      $svg07NumberLeft5 = $('#svg07NumberLeft5'),
      $svg07NumberRight1 = $('#svg07NumberRight1'),
      $svg07NumberRight2 = $('#svg07NumberRight2'),
      $svg07NumberRight3 = $('#svg07NumberRight3'),
      $svg07NumberRight4 = $('#svg07NumberRight4'),
      $svg07NumberRight5 = $('#svg07NumberRight5'),


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




      $svg08Text01LeftNumber = $('#svg08Text01Left text'),
      $svg08Text02LeftNumber = $('#svg08Text02Left text'),
      $svg08Text03LeftNumber = $('#svg08Text03Left text'),
      $svg08Text04LeftNumber = $('#svg08Text04Left text'),
      $svg08Text05LeftNumber = $('#svg08Text05Left text'),

      $svg08Text07LeftNumber = $('#svg08Text07Left text'),
      $svg08Text08LeftNumber = $('#svg08Text08Left text'),
      $svg08Text09LeftNumber = $('#svg08Text09Left text'),

      $svg08Text01RightNumber = $('#svg08Text01Right text'),
      $svg08Text02RightNumber = $('#svg08Text02Right text'),
      $svg08Text03RightNumber = $('#svg08Text03Right text'),
      $svg08Text04RightNumber = $('#svg08Text04Right text'),
      $svg08Text05RightNumber = $('#svg08Text05Right text'),

      $svg08Text07RightNumber = $('#svg08Text07Right text'),
      $svg08Text08RightNumber = $('#svg08Text08Right text'),






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

      $svg09Ground01 = $('#svg09Ground01'),

      $svg09BubbleLeft = $('#svg09BubbleLeft'),
      $svg09BubbleRight = $('#svg09BubbleRight'),

      $svg09Light = $('#svg09Light'),

      $svg09TextSource = $('#svg09TextSource'),

      $svg09Footer = $('#svg09Footer');












    var tlScene01 = new TimelineMax({
        paused: true,
        onComplete: function() {
          tlScrollDown.play(0);
        }
      }),
      tlScene02 = new TimelineMax({ paused: true }),
      tlScene03 = new TimelineMax({ paused: true }),
      tlScene04 = new TimelineMax({ paused: true }),
      tlScene05 = new TimelineMax({ paused: true }),
      tlScene06 = new TimelineMax({ paused: true }),
      tlScene07 = new TimelineMax({ paused: true }),
      tlScene08 = new TimelineMax({ paused: true }),
      tlScene09 = new TimelineMax({ paused: true }),
      tlScrollDown = new TimelineMax({ paused: true, yoyo: true, repeat: -1 });






    var topLineParameter = { scaleX: 0, ease: Power1.easeOut },
      bottomLineParameter = { scaleX: 0, opacity: 0, ease: Power1.easeOut, transformOrigin: '100% 50%' },
      HeadingParameter = { x: -100, opacity: 0, ease: Power1.easeOut },
      subHeadingParameter = { x: -20, opacity: 0, ease: Power1.easeOut },
      BottomTextParameter = { x: -50, opacity: 0, ease: Power1.easeOut };


    function animateNumberIncreasing(targetText, animateToNumber, decimalPlaces, type) {

      // how many decimal places allows
      var decimal_places = decimalPlaces;
      var decimal_factor = decimal_places === 0 ? 1 : Math.pow(10, decimal_places);

      $(targetText)
        .animateNumber({
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

              if (type == 'percent') {
                target.text(floored_number + ' %');
              } else if (type == 'dollar') {
                target.text('$' + floored_number);
              } else if (type == 'ntd') {
                floored_number = floored_number.toString().replace('.', ',');
                target.text(floored_number + 'NTD');
              } else if (type == 'number') {
                target.text(floored_number);
              } else if (type == 'numberWithComma') {
                floored_number = floored_number.toString().replace('.', ',');
                target.text(floored_number);
              }

            }
          },
          1000 //millieseconds
        );
    }















    tlScrollDown.to($svg01ScrollDown, 0.7, { y: 10, ease: Power1.easeOut });








    tlScene01.from($svg01Cloud01, 0.6, { y: 100, opacity: 0 }, 0.3)
      .from($svg01Cloud02, 0.6, { y: 100, opacity: 0 }, 0.6)
      .from($svg01Cloud03, 0.6, { y: 100, opacity: 0 }, 0.9)
      .from($svg01Cloud04, 0.6, { y: 100, opacity: 0 }, 1.1)
      .from($svg01Cloud05, 0.6, { y: 100, opacity: 0 }, 1.3)
      .fromTo($svg01Plane, 4, { x: -2500, y: 1000, scale: 2 }, { x: 2500, y: -1500, scale: 0.2 }, 0.9)
      .to([$svg01Cloud01,
        $svg01Cloud02,
        $svg01Cloud03,
        $svg01Cloud04,
        $svg01Cloud05
      ], 0.8, { y: -1500, opacity: 0, ease: Back.easeIn.config(1.7) }, 2.8)


    .from($svg01Character01, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.6)
      .from($svg01Character02, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 3.8)
      .from($svg01Character03, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4)
      .from($svg01Character04, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.2)
      .from($svg01Character05, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.4)
      .from($svg01Character06, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.6)
      .from($svg01Character07, 0.7, { y: -100, opacity: 0, scale: 3, ease: Power1.easeOut }, 4.8)
      .to($svg01WholeCharacter, 0.8, { y: -300, scale: 0.5, transformOrigin: '50% 50%', ease: Power1.easeOut }, 5.4)


    .from($svg01ChinaVsJapan, 1, { y: -100, opacity: 0 }, 6.1)

    .from($svg01Door, 0.4, { y: -100, opacity: 0 }, 6.2)

    .from($svg01Bg, 0.4, { y: -100, opacity: 0 }, 6.3)

    .from($svg01People01, 0.4, { x: -100, opacity: 0 }, 6.4)
      .from($svg01People02, 0.4, { x: -100, opacity: 0 }, 6.5)
      .from($svg01People03, 0.4, { x: -100, opacity: 0 }, 6.6)
      .from($svg01People04, 0.4, { x: -100, opacity: 0 }, 6.7)
      .from($svg01People05, 0.4, { x: 100, opacity: 0 }, 6.8)
      .from($svg01People06, 0.4, { x: 100, opacity: 0 }, 6.9)
      .from($svg01People07, 0.4, { x: 100, opacity: 0 }, 7)

    .from($svg01BottomText, 0.4, BottomTextParameter, 7.1)

    .from($svg01ScrollDown, 0.4, { y: 10, opacity: 0 }, 7.4);
































    tlScene02.from($svg02topLine, 0.6, topLineParameter, 0.5)
      .from($svg02bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg02Heading, 0.3, HeadingParameter, 0.7)
      .from($svg02subHeading, 0.4, subHeadingParameter, 0.8)


    .from($svg02Bg, 0.4, { y: -100, opacity: 0 }, 0.9)
      .from($svg02Door, 0.4, { y: -100, opacity: 0 }, 1)
      //---------------------------港澳
      .to($svg02PeopleHongKongAndMacao, 0.7, { y: 270, opacity: 1, ease: Power1.easeIn }, 1.4)
      .to($svg02PeopleHongKongAndMacao, 0.7, { x: -355, ease: Power1.easeOut }, 2.1)

    .from($svg02BubbleHongKongAndMacao, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.8)
      .from($svg02LineHongKongAndMacao, 0.1, { y: 3, opacity: 0 }, 2.9)
      .from($svg02TextHongKongAndMacao, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3)

    .from($svg02FlagHongKong, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.1)
      .from($svg02FlagMacao, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.2)

    .call(animateNumberIncreasing, [$svg02NumberHongKongAndMacao, 14.5, 1, 'percent']) //14.5 %

    .from($svg02NumberHongKongAndMacao, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)
      //---------------------------中國
      .to($svg02PeopleChina, 0.7, { y: 270, opacity: 1, ease: Power1.easeIn }, 1.9)
      .to($svg02PeopleChina, 0.7, { x: -90, ease: Power1.easeOut }, 2.6)

    .from($svg02BubbleChina, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.3)
      .from($svg02LineChina, 0.1, { y: 3, opacity: 0 }, 3.4)
      .from($svg02TextChina, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.5)
      .from($svg02FlagChina, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.6)

    .call(animateNumberIncreasing, [$svg02NumberChina, 40.1, 1, 'percent']) //40.1 %

    .from($svg02NumberChina, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 3.9)
      //---------------------------日本
      .to($svg02PeopleJapan, 0.7, { y: 270, opacity: 1, ease: Power1.easeIn }, 2.4)
      .to($svg02PeopleJapan, 0.7, { x: 180, ease: Power1.easeOut }, 3.1)

    .from($svg02BubbleJapan, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 3.8)
      .from($svg02LineJapan, 0.1, { y: 3, opacity: 0 }, 3.9)
      .from($svg02TextJapan, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4)
      .from($svg02FlagJapan, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.1)

    .call(animateNumberIncreasing, [$svg02NumberJapan, 15.6, 1, 'percent']) //15.6 %

    .from($svg02NumberJapan, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.4)
      //---------------------------東南亞
      .to($svg02PeopleSoutheastAsia, 0.7, { y: 270, opacity: 1, ease: Power1.easeIn }, 2.9)
      .to($svg02PeopleSoutheastAsia, 0.7, { x: 390, ease: Power1.easeOut }, 3.6)

    .from($svg02BubbleSoutheastAsia, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.3)
      .from($svg02LineSoutheastAsia, 0.1, { y: 3, opacity: 0 }, 4.4)
      .from($svg02TextSoutheastAsia, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 4.5)
      .from($svg02FlagSingapore, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.6)
      .from($svg02FlagThai, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.7)
      .from($svg02FlagMalaysia, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.8)
      .from($svg02FlagPhilippines, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 4.9)
      .from($svg02FlagVietnam, 0.4, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 5)

    .call(animateNumberIncreasing, [$svg02NumberSoutheastAsia, 13.7, 1, 'percent']) //13.7 %

    .from($svg02NumberSoutheastAsia, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 5.3)


    .from($svg02BottomText, 0.4, BottomTextParameter, 5.2);











































    tlScene03.from($svg03topLine, 0.6, topLineParameter, 0.5)
      .from($svg03bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg03Heading, 0.3, HeadingParameter, 0.7)

    .from($svg03BusLeft, 0.8, { scale: 0, transformOrigin: '100% 0%' }, 0.8)
      .from($svg03BusRight, 0.8, { scale: 0 }, 0.8)

    .from($svg03Sign, 0.7, { y: 20, opacity: 0 }, 1.3)

    .from($svg03PeopleLeft01, 0.4, { x: -20, opacity: 0 }, 1.2)
      .from($svg03PeopleRight01, 0.4, { x: 20, opacity: 0 }, 1.3)
      .from($svg03PeopleLeft02, 0.4, { x: -20, opacity: 0 }, 1.4)
      .from($svg03PeopleRight02, 0.4, { x: 20, opacity: 0 }, 1.5)
      .from($svg03PeopleLeft03, 0.4, { x: -20, opacity: 0 }, 1.6)
      .from($svg03PeopleLeft04, 0.4, { x: -20, opacity: 0 }, 1.7)

    .to($svg03Bg, 1, { opacity: 0.3 }, 1)

    .from($svg03GirlLeft, 0.5, { x: -30, opacity: 0 }, 2.2)
      .from($svg03GirlRight, 0.5, { x: 30, opacity: 0 }, 2.2)

    .from($svg03PieLeft, 1, { rotation: 360, opacity: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.7)
      .from($svg03PieRight, 1, { rotation: 360, opacity: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.7)

    .from($svg03TextLeft, 0.3, { x: -10, opacity: 0 }, 3.1)
      .from($svg03TextRight, 0.3, { x: 10, opacity: 0 }, 3.1)

    .from($svg03FlagChina, 0.2, { x: -10, opacity: 0 }, 3.2)
      .from($svg03FlagJapan, 0.2, { x: 10, opacity: 0 }, 3.2)

    .from($svg03NumberLeft, 0.4, { x: -10, opacity: 0 }, 3.3)
      .from($svg03NumberRight, 0.4, { x: 10, opacity: 0 }, 3.3)



    .from($svg03BottomText, 0.4, BottomTextParameter, 3.5);

































    tlScene04.from($svg04topLine, 0.6, topLineParameter, 0.5)
      .from($svg04bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg04Heading, 0.3, HeadingParameter, 0.7)

    .to($svg04Plane, 4, { scale: 10, x: 2200, y: -200, opacity: 1 }, 0.5)
      .from($svg04subHeading, 1, { x: -300, opacity: 0 }, 1.4)

    .from($svg04Cloud01, 0.3, { x: 20, opacity: 0 }, 1.9)
      .from($svg04Cloud02, 0.3, { x: -20, opacity: 0 }, 2)
      .from($svg04Cloud03, 0.3, { x: 20, opacity: 0 }, 2.1)
      .from($svg04Cloud04, 0.3, { x: -20, opacity: 0 }, 2.2)
      .from($svg04Balloon, 0.3, { x: 20, opacity: 0 }, 2.3)

    .from($svg04Ground, 0.4, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 2.3)

    .from($svg04Floor01, 1.2, { y: -500, opacity: 0, ease: Power4.easeOut }, 2.5)
      .from($svg04Floor02, 1, { y: -500, opacity: 0, ease: Power4.easeOut }, 2.8)
      .from($svg04Floor03, 0.9, { y: -500, opacity: 0, ease: Power4.easeOut }, 3)
      .from($svg04Floor04, 0.8, { y: -400, opacity: 0, ease: Power4.easeOut }, 3.2)
      .from($svg04Floor05, 0.7, { y: -300, opacity: 0, ease: Power4.easeOut }, 3.4)
      .from($svg04Floor06, 0.6, { y: -200, opacity: 0, ease: Power4.easeOut }, 3.5)

    .from($svg04BannerLong, 0.4, { y: -20, opacity: 0 }, 3.6)
      .from($svg04BannerChina, 0.4, { y: -20, opacity: 0 }, 3.7)
      .from($svg04BannerJapan, 0.4, { y: -20, opacity: 0 }, 3.7)
      .from($svg04LittleText, 0.4, { opacity: 0 }, 3.8)

    //----------------------------05 animated bar
    .from($svg04Floor05LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.4)
      .from($svg04Floor05RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.4)

    .call(animateNumberIncreasing, [$svg04Floor05LeftNumber, 120, 0, 'dollar'], null, 3.4)
      .call(animateNumberIncreasing, [$svg04Floor05RightNumber, 41, 0, 'dollar'], null, 3.4)

    .from($svg04Floor05LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
      .from($svg04Floor05RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
      //----------------------------04 animated bar
      .from($svg04Floor04LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.5)
      .from($svg04Floor04RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.5)

    .call(animateNumberIncreasing, [$svg04Floor04LeftNumber, 43, 0, 'dollar'], null, 3.5)
      .call(animateNumberIncreasing, [$svg04Floor04RightNumber, 97, 0, 'dollar'], null, 3.5)

    .from($svg04Floor04LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.9)
      .from($svg04Floor04RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.9)
      //----------------------------03 animated bar
      .from($svg04Floor03LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.6)
      .from($svg04Floor03RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.6)

    .call(animateNumberIncreasing, [$svg04Floor03LeftNumber, 27, 0, 'dollar'], null, 3.6)
      .call(animateNumberIncreasing, [$svg04Floor03RightNumber, 39, 0, 'dollar'], null, 3.6)

    .from($svg04Floor03LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4)
      .from($svg04Floor03RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4)
      //----------------------------02 animated bar
      .from($svg04Floor02LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.7)
      .from($svg04Floor02RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.7)

    .call(animateNumberIncreasing, [$svg04Floor02LeftNumber, 29, 0, 'dollar'], null, 3.7)
      .call(animateNumberIncreasing, [$svg04Floor02RightNumber, 35, 0, 'dollar'], null, 3.7)

    .from($svg04Floor02LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.1)
      .from($svg04Floor02RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.1)
      //----------------------------01 animated bar
      .from($svg04Floor01LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.8)
      .from($svg04Floor01RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.8)

    .call(animateNumberIncreasing, [$svg04Floor01LeftNumber, 227, 0, 'dollar'], null, 3.8)
      .call(animateNumberIncreasing, [$svg04Floor01RightNumber, 227, 0, 'dollar'], null, 3.8)

    .from($svg04Floor01LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.2)
      .from($svg04Floor01RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.2)

    .from($svg04BottomText, 0.4, BottomTextParameter);



























    tlScene05.from($svg05topLine, 0.6, topLineParameter, 0.5)
      .from($svg05bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg05Heading, 0.3, HeadingParameter, 0.7)
      .from($svg05subHeading, 0.4, subHeadingParameter, 0.8)


    .from($svg05BannerLong, 0.4, { y: 50, opacity: 0 }, 1)
      .from($svg05BannerChina, 0.4, { opacity: 0 }, 1.3)
      .from($svg05BannerJapan, 0.4, { opacity: 0 }, 1.3)

    .from($svg05LittleText, 0.4, { opacity: 0 }, 1.4)

    .from($svg05Lamp01, 0.3, { y: -50, opacity: 0 }, 1.4)
      .from($svg05Lamp02, 0.3, { y: -50, opacity: 0 }, 1.5)

    .from($svg05Floor01, 0.5, { opacity: 0, y: 40 }, 1.9)
      .from($svg05Floor02, 0.5, { opacity: 0, y: 40 }, 1.9)
      .from($svg05Floor03, 0.5, { opacity: 0, y: 40 }, 1.9)
      .from($svg05Floor04, 0.5, { opacity: 0, y: 40 }, 1.9)
      .from($svg05Floor05, 0.5, { opacity: 0, y: 40 }, 1.9)

    .from($svg05Floor01People, 0.8, { y: 50, opacity: 0 }, 2.3)
      .from($svg05Floor02People, 0.8, { y: 50, opacity: 0 }, 2.3)
      .from($svg05Floor03People, 0.8, { y: 50, opacity: 0 }, 2.3)
      .from($svg05Floor04People, 0.8, { y: 50, opacity: 0 }, 2.3)
      .from($svg05Floor05People, 0.8, { y: 50, opacity: 0 }, 2.3)

    .from($svg05LeftCar, 0.5, { scale: 0, transformOrigin: '50% 50%' }, 2.8)
      .from($svg05RightCar, 0.5, { scale: 0, transformOrigin: '50% 50%' }, 2.8)

    .to($svg05LeftCar, 2.5, { y: 800, ease: Power1.easeIn }, 2.8)
      .to($svg05RightCar, 2.5, { y: 800, ease: Power1.easeIn }, 2.8)


    //----------------------------05 animated bar
    .from($svg05Floor05LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.2)
      .from($svg05Floor05RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.2)

    .call(animateNumberIncreasing, [$svg05Floor05LeftNumber, 47.58, 2, 'dollar'], null, 3.2)
      .call(animateNumberIncreasing, [$svg05Floor05RightNumber, 16.57, 2, 'dollar'], null, 3.2)

    .from($svg05Floor05LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.6)
      .from($svg05Floor05RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.6)

    .from($svg05Floor05LeftClothes, 0.4, { y: -200, opacity: 0 }, 3.8)
      //----------------------------04 animated bar
      .from($svg05Floor04LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.4)
      .from($svg05Floor04RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.4)

    .call(animateNumberIncreasing, [$svg05Floor04LeftNumber, 30.75, 2, 'dollar'], null, 3.4)
      .call(animateNumberIncreasing, [$svg05Floor04RightNumber, 2.01, 2, 'dollar'], null, 3.4)

    .from($svg05Floor04LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
      .from($svg05Floor04RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 3.8)
      //----------------------------03 animated bar
      .from($svg05Floor03LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 3.9)
      .from($svg05Floor03RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 3.9)

    .call(animateNumberIncreasing, [$svg05Floor03LeftNumber, 34.79, 2, 'dollar'], null, 3.9)
      .call(animateNumberIncreasing, [$svg05Floor03RightNumber, 38.70, 2, 'dollar'], null, 3.9)

    .from($svg05Floor03LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.3)
      .from($svg05Floor03RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.3)

    .from($svg05Floor03RightPineapple, 0.4, { y: -200, opacity: 0 }, 4.4)
      //----------------------------02 animated bar
      .from($svg05Floor02LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 4.2)
      .from($svg05Floor02RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 4.2)

    .call(animateNumberIncreasing, [$svg05Floor02LeftNumber, 8.17, 2, 'dollar'], null, 4.2)
      .call(animateNumberIncreasing, [$svg05Floor02RightNumber, 7.33, 2, 'dollar'], null, 4.2)

    .from($svg05Floor02LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.6)
      .from($svg05Floor02RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.6)
      //----------------------------01 animated bar
      .from($svg05Floor01LeftBar, 0.4, { scaleX: 0, transformOrigin: '100% 50%' }, 4.5)
      .from($svg05Floor01RightBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 4.5)

    .call(animateNumberIncreasing, [$svg05Floor01LeftNumber, 16.57, 2, 'dollar'], null, 4.5)
      .call(animateNumberIncreasing, [$svg05Floor01RightNumber, 1.91, 2, 'dollar'], null, 4.5)

    .from($svg05Floor01LeftNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.9)
      .from($svg05Floor01RightNumber, 0.2, { scale: 0, opacity: 0, transformOrigin: '50% 50%' }, 4.9)




    .from($svg05LeftGirl, 0.4, { x: -20, opacity: 0 }, 4.5)
      .from($svg05RightGirl, 0.4, { x: 200, opacity: 0 }, 4.6)

    .from($svg05BottomText, 0.4, BottomTextParameter, 5.1);








































    tlScene06.from($svg06topLine01, 0.6, topLineParameter, 0.5)
      .from($svg06bottomLine01, 0.6, bottomLineParameter, 0.5)
      .from($svg06Heading01, 0.3, HeadingParameter, 0.7)
      .from($svg06subHeading01, 0.4, subHeadingParameter, 0.8)

    .from($svg06Ground, 0.5, { scaleX: 0, transformOrigin: '0% 50%', ease: Power1.easeInOut }, 0.9)

    .from([$svg06HotelLeft, $svg06HotelRight], 0.5, { y: -40, opacity: 0, transformOrigin: '50% 100%' }, 1.3)


    .from($svg06CarLeft, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 1.8)
      .from($svg06CarRight, 0.4, { scale: 0, transformOrigin: '50% 50%' }, 1.8)

    .to($svg06CarLeft, 1.2, { x: 300, ease: Power1.easeInOut }, 1.9)
      .to($svg06CarRight, 1.2, { x: -300, ease: Power1.easeInOut }, 1.9)

    .from($svg06MoneyLeft, 0.4, { scaleY: 0, transformOrigin: '50% 100%' }, 3.1)
      .from($svg06MoneyRight, 0.4, { scaleY: 0, transformOrigin: '50% 100%' }, 3.1)

    .call(animateNumberIncreasing, [$svg06HotelLeftNumber, 3.981, 3, 'ntd'], null, 3.2)
      .call(animateNumberIncreasing, [$svg06HotelRightNumber, 3.060, 3, 'ntd'], null, 3.2)

    .from($svg06HotelLeftText, 0.4, { y: 50, opacity: 0 }, 3.5)
      .from($svg06HotelRightText, 0.4, { y: 50, opacity: 0 }, 3.5)

    .from($svg06subHeading02, 0.4, subHeadingParameter, 3.9)

    .from($svg06topLine02, 0.6, topLineParameter, 4.3)
      .from($svg06bottomLine02, 0.6, bottomLineParameter, 4.3)
      .from($svg06Heading02, 0.3, HeadingParameter, 4.5)



    .from($svg06GirlLeft, 0.6, { x: -200, opacity: 0 }, 4.8)
      .from($svg06GirlRight, 0.6, { x: 200, opacity: 0 }, 4.8)

    .from([$svg06TextChina, $svg06TextJapan], 0.4, { opacity: 0, y: 20 }, 5.4)

    .from([$svg06LineChina, $svg06LineJapan], 0.1, { scale: 0, transformOrigin: '50% 50%' }, 5.8)



    .from([$svg06TextTourist, $svg06TextTouristLeft, $svg06TextTouristRight, $svg06TextLittleLeft, $svg06TextLittleRight], 0.4, { y: 20, opacity: 0 }, 5.9)
      .from([$svg06TextInternationalHotel, $svg06TextInternationalHotelLeft, $svg06TextInternationalHotelRight], 0.4, { y: 20, opacity: 0 }, 6)
      .from([$svg06TextGeneralHotel, $svg06TextGeneralHotelLeft, $svg06TextGeneralHotelRight], 0.4, { y: 20, opacity: 0 }, 6.1)



    .call(animateNumberIncreasing, [$svg06NumberTouristLeft, 418.4, 1, 'number'], null, 6)
      .call(animateNumberIncreasing, [$svg06NumberTouristRight, 162.7, 1, 'number'], null, 6)

    .call(animateNumberIncreasing, [$svg06NumberInternationalHotelLeft, 0.4261, 4, 'number'], null, 6.1)
      .call(animateNumberIncreasing, [$svg06NumberInternationalHotelRight, 0.88, 2, 'number'], null, 6.1)

    .call(animateNumberIncreasing, [$svg06NumberGeneralHotelLeft, 0.1512, 4, 'number'], null, 6.2)
      .call(animateNumberIncreasing, [$svg06NumberGeneralHotelRight, 0.2237, 4, 'number'], null, 6.2)








    .from($svg06subHeading03, 0.4, BottomTextParameter);






































    tlScene07.from($svg07topLine, 0.6, topLineParameter, 0.5)
      .from($svg07bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg07Heading, 0.3, HeadingParameter, 0.7)
      .from([$svg07subHeading, $svg07LittleHotel], 0.4, subHeadingParameter, 0.8)


    .from($svg07Map, 0.7, { scale: 0, transformOrigin: '50% 50%' }, 1.2)
      .to($svg07Map, 0.5, { opacity: 0.14 }, 1.3)

    .from($svg07Taiwan, 0.6, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 1.4)

    .from($svg07BrownBar, 0.4, { scaleX: 0, transformOrigin: '0% 50%' }, 2)

    .from([$svg07TextChinaLeft, $svg07TextJapanRight], 0.3, { x: -20, opacity: 0 }, 2.4)
      .from([$svg07FlagChina, $svg07FlagJapan], 0.3, { x: -20, opacity: 0 }, 2.6)



    .from($svg07RedTaipei, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.3)
      .from($svg07RedTaoyuan, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.4)
      .from($svg07RedTaitung, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.5)
      .from($svg07RedKaohsiung, 0.3, { scale: 0, transformOrigin: '50% 50%', ease: Back.easeOut.config(1.7) }, 2.6)


    .from($svg07RedTaipeiTooltipLeft, 0.3, { scale: 0, transformOrigin: '100% 0%' }, 2.9)
      .from($svg07RedTaipeiTooltipRight, 0.3, { scale: 0 }, 3)
      .from($svg07RedTaoyuanTooltip, 0.3, { scale: 0, transformOrigin: '100% 0%' }, 3.1)
      .from($svg07RedTaitungTooltip, 0.3, { scale: 0, transformOrigin: '100% 0%' }, 3.2)
      .from($svg07RedKaohsiungTooltip, 0.3, { scale: 0, transformOrigin: '100% 0%' }, 3.3)

    .call(animateNumberIncreasing, [$svg07NumberLeft4, 4.259, 3, 'numberWithComma'], null, 3)
      .call(animateNumberIncreasing, [$svg07NumberLeft3, 3.068, 3, 'numberWithComma'], null, 3)
      .call(animateNumberIncreasing, [$svg07NumberLeft1, 1.644, 3, 'numberWithComma'], null, 3.2)
      .call(animateNumberIncreasing, [$svg07NumberLeft2, 3.704, 3, 'numberWithComma'], null, 3.3)
      .call(animateNumberIncreasing, [$svg07NumberLeft5, 2.169, 3, 'numberWithComma'], null, 3.4)
      .call(animateNumberIncreasing, [$svg07NumberRight1, 3.722, 3, 'numberWithComma'], null, 3.1)
      .call(animateNumberIncreasing, [$svg07NumberRight2, 3.917, 3, 'numberWithComma'], null, 3.1)
      .call(animateNumberIncreasing, [$svg07NumberRight3, 2.660, 3, 'numberWithComma'], null, 3.1)
      .call(animateNumberIncreasing, [$svg07NumberRight4, 5.732, 3, 'numberWithComma'], null, 3.1)
      .call(animateNumberIncreasing, [$svg07NumberRight5, 3.286, 3, 'numberWithComma'], null, 3.1)

    .from($svg07PeopleRight, 0.4, { x: 50, opacity: 0 }, 3.4)

    .from($svg07BottomText, 0.4, BottomTextParameter);





























    tlScene08.from($svg08topLine, 0.6, topLineParameter, 0.5)
      .from($svg08bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg08Heading, 0.3, HeadingParameter, 0.7)


    .from($svg08Buddha, 0.4, { y: -10, opacity: 0 }, 1)
      .from($svg08GirlLeft, 0.4, { x: 10, opacity: 0 }, 1.1)
      .from($svg08GirlRight, 0.4, { x: 10, opacity: 0 }, 1)
      .from($svg08Lamp01, 0.4, { y: 10, opacity: 0 }, 1.1)
      .from($svg08Lamp02, 0.4, { y: 10, opacity: 0 }, 1.2)
      .from($svg08Lamp03, 0.4, { y: 10, opacity: 0 }, 1.3)
      .from($svg08Lamp04, 0.4, { y: 10, opacity: 0 }, 1.4)

    .from([$svg08FlagChina, $svg08FlagJapan], 0.4, { y: -20, opacity: 0 }, 1)

    .from([$svg08TextChina, $svg08TextJapan], 0.4, { y: -10, opacity: 0 }, 1.1)

    .from($svg08Plane, 4, { y: -1825 }, 1.4)
      .from($svg08Runway, 3.2, { y: 950 }, 1.6)


    .from($svg08Text01, 0.4, { opacity: 0, y: -30 }, 2.4)
      .from($svg08Text02, 0.4, { opacity: 0, y: -30 }, 2.5)
      .from($svg08Text03, 0.4, { opacity: 0, y: -30 }, 2.6)
      .from($svg08Text04, 0.4, { opacity: 0, y: -30 }, 2.7)
      .from($svg08Text05, 0.4, { opacity: 0, y: -30 }, 2.8)
      .from($svg08Text06, 0.4, { opacity: 0, y: -30 }, 2.9)
      .from($svg08Text07, 0.4, { opacity: 0, y: -30 }, 3)
      .from($svg08Text08, 0.4, { opacity: 0, y: -30 }, 3.1)
      .from($svg08Text09, 0.4, { opacity: 0, y: -30 }, 3.2)

    .from($svg08Divider, 0.4, { scaleX: 0, opacity: 0 }, 3.2)



    .from([$svg08Text01Left, $svg08Text01Right], 0.4, { y: -10, opacity: 0 }, 2.5)
      .from([$svg08Text02Left, $svg08Text02Right], 0.4, { y: -10, opacity: 0 }, 2.6)
      .from([$svg08Text03Left, $svg08Text03Right], 0.4, { y: -10, opacity: 0 }, 2.7)
      .from([$svg08Text04Left, $svg08Text04Right], 0.4, { y: -10, opacity: 0 }, 2.8)
      .from([$svg08Text05Left, $svg08Text05Right], 0.4, { y: -10, opacity: 0 }, 2.9)
      .from([$svg08Text06Left, $svg08Text06Right], 0.4, { y: -10, opacity: 0 }, 3)
      .from([$svg08Text07Left, $svg08Text07Right], 0.4, { y: -10, opacity: 0 }, 3.1)
      .from([$svg08Text08Left, $svg08Text08Right], 0.4, { y: -10, opacity: 0 }, 3.2)
      .from([$svg08Text09Left, $svg08Text09Right], 0.4, { y: -10, opacity: 0 }, 3.3)


    .call(animateNumberIncreasing, [$svg08Text01LeftNumber, 40.1, 1, 'percent'], null, 2.5)
      .call(animateNumberIncreasing, [$svg08Text01RightNumber, 15.6, 1, 'percent'], null, 2.5)
      .call(animateNumberIncreasing, [$svg08Text02LeftNumber, 82, 0, 'percent'], null, 2.6)
      .call(animateNumberIncreasing, [$svg08Text02RightNumber, 73, 0, 'percent'], null, 2.6)
      .call(animateNumberIncreasing, [$svg08Text03LeftNumber, 227.58, 2, 'dollar'], null, 2.7)
      .call(animateNumberIncreasing, [$svg08Text03RightNumber, 227.59, 2, 'dollar'], null, 2.7)
      .call(animateNumberIncreasing, [$svg08Text04LeftNumber, 52.74, 2, 'percent'], null, 2.8)
      .call(animateNumberIncreasing, [$svg08Text04RightNumber, 18.32, 2, 'percent'], null, 2.8)
      .call(animateNumberIncreasing, [$svg08Text05LeftNumber, 157.42, 2, 'dollar'], null, 2.9)
      .call(animateNumberIncreasing, [$svg08Text05RightNumber, 73.40, 1, 'dollar'], null, 2.9)

    .call(animateNumberIncreasing, [$svg08Text07LeftNumber, 19.19, 2, 'percent'], null, 3)
      .call(animateNumberIncreasing, [$svg08Text07RightNumber, 42.76, 2, 'percent'], null, 3)
      .call(animateNumberIncreasing, [$svg08Text08LeftNumber, 0.43, 2, 'number'], null, 3.1)
      .call(animateNumberIncreasing, [$svg08Text08RightNumber, 0.88, 2, 'number'], null, 3.1)





    .from($svg08Text01Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4)
      .from($svg08Text02Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.2)
      .from($svg08Text03Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.4)
      .from($svg08Text04Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.6)
      .from($svg08Text05Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 4.8)
      .from($svg08Text07Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 5)
      .from($svg08Text08Win, 0.3, { y: -100, opacity: 0, scale: 3, transformOrigin: '50% 50%' }, 5.2);










































    tlScene09.from($svg09topLine, 0.6, topLineParameter, 0.5)
      .from($svg09bottomLine, 0.6, bottomLineParameter, 0.5)
      .from($svg09Heading, 0.3, HeadingParameter, 0.7)
      .from($svg09subHeading, 0.4, subHeadingParameter, 0.8)

    // .to($svg09Ground01, 2.8, {rotation: -180, transformOrigin: '50% 0%'}, 0.9)
    .from($svg09Earth, 4, { rotation: 180, transformOrigin: '50% 100%', ease: CustomEase.create("custom", "M0,0,C0.128,0.572,0.257,0.954,0.512,1.028,0.672,1.074,0.838,1,1,1") }, 1.3)

    .from($svg09BubbleLeft, 0.4, { opacity: 0 }, 3.6)
      .from($svg09BubbleRight, 0.4, { opacity: 0 }, 3.7)

    .from($svg09Light, 0.4, { scale: 0, transformOrigin: '0% 100%' }, 3.7)

    .from($svg09TextSource, 0.3, { opacity: 0 }, 3.7)

    .from($svg09Footer, 0.5, { y: 200 }, 3.8);











































    //init fullpage.js
    $('#wrapper').fullpage({
      navigation: true,
      navigationTooltips: [
        '來台旅客大車拚',
        '旅客都從哪裡來？',
        '他們都來做什麼？',
        '消費習慣的差異',
        '中國團客v.s.日本團客：掃些什麼貨',
        '中國v.s.日本：喜歡住哪裡？',
        '聚焦觀光旅館',
        '中國v.s.日本 大車拼',
        '中國選擇購物，日本選擇住宿'
      ],
      afterRender: function() {
        TweenMax.to('.spinner', 1, { autoAlpha: 0 });
        TweenMax.set(['#wrapper', '#fp-nav'], { opacity: 1 });

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

    }); //fullpage.js Init
  }



}); // document ready