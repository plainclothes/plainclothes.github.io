// ==UserScript==
// @name        GD-SE clean up
// @namespace   Hellochameleon.com
// @description Stack exchange tweaks, for the graphicdesign site
// @include     *://graphicdesign.stackexchange.com/*
// @include     *://meta.graphicdesign.stackexchange.com/*
// @version     1
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://plainclothes.github.io/UserScripts/stackexchange/gd-se.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
