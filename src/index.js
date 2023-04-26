import $ from "jquery";
import './js/vSelect';

$(function () {
  console.log("Ready");

  $('#my-select').vSelect({
    checkAllLabel: 'Select all',
  });
  $('#your-select').vSelect({
    multiSelect: false,
  });

});
