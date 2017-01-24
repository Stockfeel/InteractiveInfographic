$(document).ready(function(){

  $("#scene01").load(".img/scene01.svg", function() {
    animation();  //動畫開始
  });



  //init fullpage.js
  $('#wrapper').fullpage({
    navigation: true
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