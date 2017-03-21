// ==UserScript==
// @name        Trello
// @namespace   Hellochameleon.com
// @include     https://trello.com/*
// @version     1
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/trello/trello.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
