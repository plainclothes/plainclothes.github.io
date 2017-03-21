// ==UserScript==
// @name        NavisKnowledgeBaseFix
// @namespace   HelloChameleon.com
// @description Stuff and things
// @include     *://www.navistechnologies.info/MainMenu/KB/*
// @version     0.9
// @require		  http://code.jquery.com/jquery-1.11.0.min.js
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/NavisKB/NavisKB.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
