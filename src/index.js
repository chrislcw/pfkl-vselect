import $ from "jquery";
import './js/vSelect';

$(function () {
  console.log("Ready");

  $('#my-select').vSelect({
    checkAllLabel: 'Select all',
  });
  $('#your-select').vSelect({
    multiSelect: false,
    display: 'values',
  });

  $('#btn1').on('click', function(){
    console.log('v', $('#my-select').val());;
  });

  $('#btn2').on('click', function(){
    console.log('v', $('#your-select').val());;
  });
});
