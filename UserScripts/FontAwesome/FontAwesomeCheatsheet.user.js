// ==UserScript==
// @name        FontAwesome-cheatsheet
// @namespace   HelloChameleon.com
// @description Bump up the icons for scanability
// @include     https://fortawesome.github.io/Font-Awesome/cheatsheet/
// @include     http://fontawesome.io/cheatsheet/
// @include     http://fontawesome.io/icons/
// @version     1
// @grant       none
// ==/UserScript==

var d = document, addStyle = d.createElement('link');
addStyle.setAttribute('href','https://plainclothes.github.io/UserScripts/FontAwesome/fontawesome-tweaks.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('head')[0].appendChild(addStyle);
