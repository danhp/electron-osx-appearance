'use strict';
const electron = require('electron');
const prefs = electron.systemPreferences || electron.remote.systemPreferences;

exports.unsubscribe = id => {
	prefs.unsubscribeNotification(id);
};

/* DARK MODE */
exports.isDarkMode = () => {
	return prefs.isDarkMode();
};

exports.onDarkModeChanged = callback => {
	return prefs.subscribeNotification('AppleInterfaceThemeChangedNotification', callback);
};

/* TINT */
exports.isTintBlue = () => {
	return prefs.getUserDefault('AppleAquaColorVariant', 'int') === 1;
};

exports.getTint = () => {
	return prefs.getUserDefault('AppleAquaColorVariant', 'int') === 1 ? 'blue' : 'graphite';
};

exports.onTintChanged = callback => {
	return prefs.subscribeNotification('AppleAquaColorVariantChanged', callback);
};

/* HIGHLIGHT COLOUR */
exports.getHighlightColour = () => {
	const colour = prefs.getUserDefault('AppleHighlightColor', 'string');
	let rgb = [9, 92, 220];
	if (colour) {
		rgb = colour.split(' ').map(i => Math.round(Number(i) * 255));
	}
	return rgb;
};

exports.onHighlightColourChanged = callback => {
	return prefs.subscribeNotification('AppleColorPreferencesChangedNotification', callback);
};

/* SIDEBAR ICON SIZE */
exports.getSidebarIconSize = () => {
	const iconSize = prefs.getUserDefault('NSTableViewDefaultSizeMode', 'int');

	switch (iconSize) {
		case 1: return 'small';
		case 3: return 'large';
		default: return 'medium';
	}
};

exports.onIconSizeChanged = callback => {
	return prefs.subscribeNotification('AppleSideBarDefaultIconSizeChanged', callback);
};

/* SCROLLBAR VISIBILITY */
exports.getScrollbarVisibility = () => {
	return prefs.getUserDefault('AppleShowScrollBars', 'string').trim().toLowerCase();
};

exports.onScrollbarVisibilityChanged = callback => {
	return prefs.subscribeNotification('AppleShowScrollBarsSettingChanged', callback);
};

/* SCROLLBAR PAGING */
exports.isScrollbarPaging = () => {
	return prefs.getUserDefault('AppleScrollerPagingBehaviour', 'int') === 0;
};

exports.onScrollbarPagingChanged = callback => {
	return prefs.subscribeNotification('AppleNoRedisplayAppearancePreferenceChanged', callback);
};
