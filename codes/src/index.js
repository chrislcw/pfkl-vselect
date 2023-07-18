import $ from "jquery";
import './js/vSelect';

$(function () {
  console.log("Ready");

  $('#database-country').vSelect({
    trayHeight: '500px',
    multiSelect: false,
    display: 'values',
    search: true,
    searchPosition: -1
  });
});
