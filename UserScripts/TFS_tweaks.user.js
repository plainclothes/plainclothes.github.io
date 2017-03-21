// ==UserScript==
// @name        TFS tweaks
// @namespace   HelloChameleon.com
// @description do the snake
// @include     *://hil-vs-tfs02:8080/tfs/*
// @version     .2
// @grant       none
// ==/UserScript==

var styleFix = document.createElement('style'),
    googleFonts = document.createElement('link');

// load fonts from Google
googleFonts.setAttribute('href', '//fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Source+Sans+Pro:400,400italic,700,700italic');
googleFonts.setAttribute('rel', 'stylesheet');
googleFonts.setAttribute('type', 'text/css');
document.head.appendChild(googleFonts);

styleFix.innerHTML = ' \
/* Set the global font */ \
*, input, button, textarea, select { font-family: "Source Sans Pro"; } \
 \
/* make the note editor resizeable */ \
.richeditor-container { resize:vertical; overflow:hidden; } \
.richeditor-toolbar { top: 4px !important; border-bottom: 1px solid #ccc; } \
.richeditor-editarea { top: 24px; } \
';

// load the styles
document.body.appendChild(styleFix);