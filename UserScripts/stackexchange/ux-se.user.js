// ==UserScript==
// @name        UX-SE clean up
// @namespace   Hellochameleon.com
// @description Stack exchange tweaks, for the ux site
// @include     *://ux.stackexchange.com/*
// @include     *://meta.ux.stackexchange.com/*
// @version     1
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://plainclothes.github.io/UserScripts/stackexchange/ux-se.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
