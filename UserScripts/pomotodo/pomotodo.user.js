// ==UserScript==
// @name        Pomotodo
// @namespace   Hellochameleon.com
// @description Minor UI tweaks (mostly for dark mode)
// @include     https://pomotodo.com/app/*
// @version     1
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/pomotodo/pomotodo.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
