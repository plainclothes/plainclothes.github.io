// ==UserScript==
// @name        Navis-Jira
// @namespace   Hellochameleon.com
// @description Stuff to make Jira less miserable
// @include     *://jira.buehner-fry.com/*
// @version     1
// @grant       none
// ==/UserScript==
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/jira/navis-jira.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
