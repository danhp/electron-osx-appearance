# electron-osx-appearance

> APIs for accessing the OS X Appearance Settings.

Requires:
* **Electron >=0.37.8**

## Why?

* Simple function calls instead of having to remember the name and types of each setting you need to access.

## Install

```
$ npm install --save electron-osx-appearance
```

## Usage

```js
const osxPrefs = require('electron-osx-appearance');


if (process.platform === 'darwin') {
	osxPrefs.isDarkMode();

	osxPrefs.onDarkModeChanged(() => {
		// Handle the event
	});
}

// ...
```

**Note**: This module is a wrapper around **OS X specific** methods from Electron's `systemPreferences` module.

## Methods

### `unsubscribe(id)`

* `id` Integer

Remove subscriber with `id`.

### `isDarkMode()`

Returns `true` if the system is in Dark Mode, and `false` otherwise.

### `onDarkModeChanged(callback)`

* `callback` Function

Substribe to the Dark Mode changed event. Runs `callback` when event is fired.

Returns the `id` with which you can then unsubscribe with.

### `isTintBlue()`

This method return `true` if the system is using the blue tint, `false` otherwise.

### `getTint()`

Return a `String` with the system's current Tint.

Possible values are `'blue'` or `'graphite'`.

### `onTintChanged(callback)`

* `callback` Function

Subscribe to the Tint changed event. Runs `callback` when event is fired.

Returns the `id` with which you can then unsubscribe with.

### `getHighlightColour()`

Returns an RGB `array` of the system's current Highlight Colour.

If none is found, returns `[9, 92, 220]` as default.

### `onHighlightColourChanged(callback)`

* `callback` Function

Subscribe to the Highlight Colour changed event. Runs `callback` when event is fired.

Returns the `id` with which you can then unsubscribe with.

### `getSidebarIconSize()`

Returns `String` with the system's current Sidebar Icon Size.

Possible values are `small`, `medium` or `large`.

### `onSidebarIconSizeChanged(callback)`

* `callback` Function

Subscribe to the Sidebar Icon Size changed event. Runs `callback` when event is fired.

Returns the `id` with which you can then unsubscribe with.

### `getScrollbarVisibility()`

Returns a `String` with the system's current Scrollbar Visibility.

Possible values are `automatic`, `whenscrolling` or `always`.

### `onScrollbarVisibilityChanged(callback)`

* `callback` Function

Subscribe to the Scrollbar Visibility changed event. Runs `callback` when event is fired.

Returns the `id` with which you can then unsubscribe with.

### `isScrollbarPaging()`

Returns `true` if the system is using Scrollbar Paging, `false` otherwise.

### `onScrollbarPagingChanged(callback)`

* `callback` Function

Subscribe to the Scrollbar Paging changed event. Runs `callback` when event is fired.

Returns the `id` with which you can then unsubscribe with.

## License

MIT © Daniel Pham
