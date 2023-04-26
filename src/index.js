import $ from "jquery";
import './js/vSelect';

$(function () {
  console.log("Ready");

  $('#my-select').vSelect({
    'onChange': function(option) { 
    }
  });
});
