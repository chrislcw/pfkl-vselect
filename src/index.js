import $ from "jquery";
import './js/vSelect';

$(function () {
  console.log("Ready");

  $('#my-select').vSelect({
    checkAllLabel: 'Select all',
    display: 'values',
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
    multiSelect: false,
    display: 'values',
    dropdown: false,
        'onChange': function(values, options) { 
      console.log('onChange values', values);
      console.log('onChange options', options);
    }
  });
});
