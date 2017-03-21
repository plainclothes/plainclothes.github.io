// ==UserScript==
// @name        FontAwesomeCheatsheet
// @namespace   HelloChameleon.com
// @description Bump up the icons for easy copying
// @include     https://fortawesome.github.io/Font-Awesome/cheatsheet/
// @include     http://fontawesome.io/cheatsheet/
// @version     1
// @grant       none
// ==/UserScript==

var styleFix = document.createElement('style');

styleFix.innerHTML = ' \
.fa{font-size:36px;line-height:1.6;} \
';

document.body.appendChild(styleFix);