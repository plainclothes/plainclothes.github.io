// ==UserScript==
// @name        tfs tweaks
// @namespace   HelloChameleon.com
// @description whatever I want
// @include     *://hil-vs-tfs02:8080/tfs/*
// @version     0.3
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/tfsTweaks/tfsTweaks.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
