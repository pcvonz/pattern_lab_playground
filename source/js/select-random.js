"use strict"
window.onload = function(){
  var elements = document.getElementsByClassName("thumbnail-blue");

  for (var i = 0; i < elements.length; i++) {
      $(elements[i]).data('transition', 'yes');
      elements[i].addEventListener( 'transitionend',
              function(event) {
                 elements = document.getElementsByClassName("thumbnail-blue");
                 setTimeout(function(){
                   select_random()}, 100);
              }, false);
  }

  function select_random() {
      console.log("my elements: " + elements[0]);
      
      //reassign css class

      var rand_int = getRandomInt(0, elements.length-1)
      var selected = elements[rand_int];

      $(selected).data("transition", "no");
      selected.className  = "thumbnail thumbnail-selected";
  };

  function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
  }


  setTimeout(function() {select_random()}, 100);
}
