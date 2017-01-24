$(document).ready(function(){


  // load all svg
  $("#scene01").load("img/scene01.svg", function() {
    // animation();
  });

  $("#scene02").load("img/scene02.svg", function() {
    // animation();
  });

  $("#scene03").load("img/scene03.svg", function() {
    // animation();
  });

  $("#scene04").load("img/scene04.svg", function() {
    // animation();
  });

  $("#scene05").load("img/scene05.svg", function() {
    // animation();
  });

  $("#scene06").load("img/scene06.svg", function() {
    // animation();
  });

  $("#scene07").load("img/scene07.svg", function() {
    // animation();
  });

  $("#scene08").load("img/scene08.svg", function() {
    // animation();
  });

  $("#scene09").load("img/scene09.svg", function() {
    // animation();
  });


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
      '中國v.s.日本',
      '大車拼',
      '中國選擇購物，日本選擇住宿；你怎麼看？'
    ]
  });

  function animation() {
    alert("test");
  }

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