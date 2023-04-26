import $ from "jquery";

$.fn.vSelect = function(s) {
  console.log('vSelect');

  // Default settings
  let settings = {
    multiSelect: false,
    placeholder: 'Please select',
    checkAll: true,
    checkAllLabel: 'All',
    expanded: true,
  };

  let checkAllElm;

  // Process user's settings
  if (s !== null) {
    $.each(s, function( key, value ) {
      settings[key] = value;
    });
  }

  // Original select element
  const selectElm = $(this);
  // Create a random id
  const randomId = '-' + Math.floor(Math.random() * 1000) + '-' + Math.floor(Math.random() * 1000);

  let options = [];

  // Process and store all options
  selectElm.children().each(function(index) {
    const elm = $(this);

    if (elm[0].nodeName === 'OPTION') {
      options.push({
        type: 'option',
        value: elm.val(),
        label: elm.text(),
        checked: false
      });
    } else if (elm[0].nodeName === 'OPTGROUP') {
      let temp = [];

      elm.children().each(function(index) {
        const cElm = $(this);

        temp.push({
          type: 'option',
          value: cElm.val(),
          label: cElm.text(),
          checked: false
        })
      });

      options.push({
        type: 'optgroup',
        value: 0,
        label: elm.attr('label'),
        options: temp,
        checked: false
      });
    }
  });

  console.log('options', options);

  // Create vSelect element
  const vSelectElm = $('<div></div>').insertAfter(selectElm);
  // Add a container class
  vSelectElm.addClass('vselect-container');
  // Add a random id
  vSelectElm.attr('id', 'vselect'+randomId);
  // Append a div to display selected options
  const vSelectDisplay = $('<div class="vselect-selected-display"><span class="vselect-placeholder">'+settings.placeholder+'</span></div>');
  vSelectElm.append(vSelectDisplay);

  const vSelectTray = $('<div class="vselect-tray-container"><div class="vselect-tray"></div></div>');

  // Append options tray
  vSelectElm.append(vSelectTray);

  if (settings.checkAll) {
    checkAllElm = $('<div class="vselect-global"><input type="checkbox" id="vselect-global'+randomId+'" data-type="all"><label for="vselect-global'+randomId+'" class="" for="vselect-global">'+settings.checkAllLabel+'</label></div>');
    // Append Global checkbox (select all)
    vSelectTray.append(checkAllElm);

    checkAllElm.find('input[type=checkbox]').on('change', function() {
      const elm = $(this);
      const checked = elm.is(":checked");

      $('.vselect-option input[type=checkbox]').prop('checked', checked);
      selectElm.find('option').prop("selected", checked);
    });
  }

  // Append checkbox for option or child option of an optgroup
  function addOption(item, index, idx = null, group = false) {
    const optElm = $('<div><input type="checkbox" id="vselect-option-'+(group ? group+'-'+(idx === null ? index : index+'-'+idx) : index+randomId)+'" value="'+item.value+'" data-index="'+(idx === null ? index : index+'-'+idx)+'"><label for="vselect-option-'+(group ? group+'-'+(idx === null ? index : index+'-'+idx) : index+randomId)+'">'+item.label+'</label></div>');
    
    vSelectTray.append(optElm);

    optElm.addClass('vselect-option');
    optElm.addClass((group ? 'vselect-option-child ' : '') + (group ? group : ''));

    if (!group) {
      optElm.addClass('vselect-option-solo');
    } else if (!settings.expanded) {
      optElm.hide();
    }

    if (idx === null) {
      optElm.find('input[type=checkbox]').attr('data-type', 'solo');
    } else {
      optElm.find('input[type=checkbox]').attr('data-type', 'child');
      optElm.find('input[type=checkbox]').attr('data-group-id', group);
      optElm.find('input[type=checkbox]').addClass('vselect-child-'+group);
    }
  }

  // Append checkbox for an optgroup
  function addOptgroup(item, index, group) {
    const ogElm = $('<div><input type="checkbox" id="vselect-group-'+group+'" data-group-id="'+group+'" data-index="'+index+'"><label for="vselect-group-'+group+'">'+item.label+'</label><div data-group-id="'+group+'" class="vselect-group-toggle"><svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1L5 5L9 1" stroke="#202020" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div></div>');

    vSelectTray.append(ogElm);

    ogElm.addClass('vselect-option');
    ogElm.addClass('vselect-option-group');

    if (settings.expanded) {
      ogElm.find('.vselect-group-toggle').addClass('active');
    }

    ogElm.find('input[type=checkbox]').attr('data-type', 'group');
  }

  // Loop options to append all checkboxes
  $.each(options, function(index) {
    const item = $(this)[0];

    if (item.type === 'option') {
      addOption(item, index);
    }

    if (item.type === 'optgroup') {
      const group = item.label.toLowerCase().replace(/ /g, '_').replace(/[^\w\s]/gi, '') + randomId;
      addOptgroup(item, index, group);

      $.each(item.options, function(idx) {
        const childItem = $(this)[0];

        addOption(childItem, index, idx, group);
      });
    }
  });

  const vSelectOptions = vSelectElm.find('.vselect-option'); // All options checkboxes
  const vSelectGroup = vSelectElm.find('.vselect-option-group'); // Only group options checkboxes

  // Group toggle to show/hide child options
  vSelectGroup.find('.vselect-group-toggle').on('click', function() {
    const toggleElm = $(this);
    const groupId = toggleElm.data('group-id');

    if (toggleElm.hasClass('active')) {
      toggleElm.removeClass('active');
      $('.vselect-option-child.'+groupId).hide();
    } else {
      toggleElm.addClass('active');
      $('.vselect-option-child.'+groupId).show();
    }
  });

  // Checkbox on change handler
  vSelectOptions.find('input[type=checkbox]').on('change', function(){
    console.log('AAA');
    const cbElm = $(this);
    const checked = cbElm.is(":checked");
    const type = cbElm.data('type');
    let index;
    let data;

    if (type === 'child') {
      index = cbElm.data('index').split('-');
      data = options[parseInt(index[0])].options[parseInt(index[1])];
    } else {
      index = cbElm.data('index');
      data = options[index];
    }

    console.log('A data', data);
    data.checked = checked;

    switch (type) {
      case 'solo':
        updateSelectElm(data);
        break;

      case 'group':
        checkUncheckAllChilds(cbElm, checked);
        break;

      case 'child':
        updateSelectElm(data);
        isAllChildChecked(cbElm);
        break;
    }
    
    if(settings.checkAll) {
      isAllOptionsChecked();
    }
  });

  // Update option of original Select element
  function updateSelectElm(data) {
    selectElm.find('option[value='+data.value+']').prop("selected", data.checked);
  }

  function isAllChildChecked(cbElm) {
    const groupId = cbElm.data('group-id');
    const groundChilds = $('.vselect-option-child.' + groupId + ' input[type=checkbox]');

    let allChecked = true;

    groundChilds.each(function() {
      const cElm = $(this);

      const checked = cElm.is(":checked");

      if (!checked) {
        allChecked = checked;
      }
    });

    if (allChecked) {
      $('#vselect-group-'+groupId).prop("checked", true);
    } else {
      $('#vselect-group-'+groupId).prop("checked", false);
    }
  }

  function checkUncheckAllChilds(cbElm, checked) {
    const groupId = cbElm.data('group-id');

    console.log('groupId', groupId);

    $('.vselect-child-'+groupId).prop("checked", checked);

    $('.vselect-child-'+groupId).each(function() {
      const cElm = $(this);
      const val = cElm.val();

      console.log('val', val);

      selectElm.find('option[value='+val+']').prop("selected", checked);
    });
  }

  function isAllOptionsChecked() {
    const optionsCbElms = $('.vselect-option input[type=checkbox]');

    let allChecked = true;

    optionsCbElms.each(function() {
      const cElm = $(this);

      const checked = cElm.is(":checked");

      if (!checked) {
        allChecked = checked;
      }
    });

    if (allChecked) {
      $('#vselect-global'+randomId).prop("checked", true);
    } else {
      $('#vselect-global'+randomId).prop("checked", false);
    }
  }

  return vSelectElm;
}