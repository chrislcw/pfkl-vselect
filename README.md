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

#### onChange

On change call back function.
**values**: Current changed option, **options**: entire options collection.

```
onChange: function(values, options) {}
```

## Changelog

### v1.0.3
- Single selection mode - tray will automatically closed once an option is selected.
- Added unique id to vselect-container.
- Bug fixes.