# A simple jQuery select plugin

## Usage

### JS codes

```
import "pfkl-select/vselect/vselect.min.js";

$('#my-select').vSelect({
  settings...
});
```

### SCSS codes
```
@import "~pfkl-vselect/vselect/vselect";
```

### HTML codes

```
<select name="" id="my-select" multiple>
  <optgroup label="Fruits">
    <option value="apple">Apple</option>
    <option value="banana">Banana</option>
  </optgroup>
  <optgroup label="Bakery">
    <option value="bread">Bread</option>
    <option value="bun">Bun</option>
    <option value="loaf">Loaf</option>
  </optgroup>
  <option value="vegetables">Vegetables</option>
  <option value="meat">Meat</option>
  <option value="grass">Grass</option>
</select>
```

### Settings

#### multiSelect

Allowed only one or multiple selection.

```
multiSelect: true|false
```

Default is **true**

#### placeholder

Custom placeholder text.

```
placeholder: 'Please select'
```

#### checkAll

Add a check all option to the list. *Only applicable if multiSelect is true*.

```
checkAll: true|false
```

Default is **true**

#### checkAllLabel

Label text for check all option.

```
checkAllLabel: 'All'
```

#### expanded

Option group is expanded or collapsed by default.

```
expanded: true|false
```

Default is **true**

#### display

Selected options display style.

```
display: 'sum'|'values'
```
display: 'sum', eg. output:
**2 option(s) selected**

display: 'values', eg. output:
**Apple; Banana; Orange**

Default is **'sum'**

#### trayHeight

Set custom tray height.

```
trayHeight: '###px'|'auto'
```

Default is **'240px'**

#### dropdown

**true**: tray display as overlay dropdown, **false**: tray display as inline block

```
dropdown: true|false
```

Default is **true**

#### search

**true**: let user seach option via an search input box, **false**: no search input box.

```
search: true|false
```

Default is **false**

#### onChange

On change call back function.
**values**: Current changed option, **options**: entire options collection.

```
onChange: function(values, options) {}
```

## Changelog

### v1.2.0
Added search feature.

### v1.1.1
Close tray when clicked outside of vSelect container.

### v1.1.0
Bug fix - hide original select element.

### v1.0.9
Fix a bug where initialise by class name is broken.

### v1.0.8
Enabled preselected options.

### v1.0.7
Remove console log.

### v1.0.6
Bug fix.

### v1.0.5
`<option>` accepts disabled property.

### v1.0.4
Any css class added to `<option>` will be included in the vSelect option wrapper.
Tips: add css class to indent options, to fake sub options for grouping.

### v1.0.3
- Single selection mode - tray will automatically closed once an option is selected.
- Added unique id to vselect-container.
- Bug fixes.