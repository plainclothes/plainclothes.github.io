// ==UserScript==
// @name        confluence
// @namespace   Hellochameleon.com
// @include     *://confluence.buehner-fry.com/*
// @version     1
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/confluence/confluence.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
