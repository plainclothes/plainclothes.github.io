// ==UserScript==
// @name        rtm beta tweaks
// @namespace   HelloChameleon.com
// @description Stuff and things
// @include     http://www.rememberthemilk.com/app/*
// @include     https://www.rememberthemilk.com/app/*
// @version     0.9
// @require		http://code.jquery.com/jquery-1.11.0.min.js
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/rtmBetaTweaks/rtmBeta.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
