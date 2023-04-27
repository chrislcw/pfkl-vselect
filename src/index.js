import $ from "jquery";
import './js/vSelect';

$(function () {
  console.log("Ready");

  $('#my-select').vSelect({
    checkAllLabel: 'Select all',
    display: 'values',
  });
  $('#your-select').vSelect({
    multiSelect: false,
    display: 'values',
  });
  $('#they-select').vSelect({
    multiSelect: false,
    display: 'values',
    dropdown: false,
  });
});
