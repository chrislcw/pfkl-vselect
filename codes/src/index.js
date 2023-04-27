import $ from "jquery";
import './js/vSelect';

$(function () {
  console.log("Ready");

  $('#my-select').vSelect({
    checkAllLabel: 'Select all',
    display: 'sum',
    'onChange': function(values, options) { 
      console.log('onChange values', values);
      console.log('onChange options', options);
    }
  });

  $('#your-select').vSelect({
    multiSelect: false,
    display: 'values',
        'onChange': function(values, options) { 
      console.log('onChange values', values);
      console.log('onChange options', options);
    }
  });
  
  $('#they-select').vSelect({
    trayHeight: 'auto',
  });
});
