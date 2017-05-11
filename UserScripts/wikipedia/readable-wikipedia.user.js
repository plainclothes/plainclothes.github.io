// ==UserScript==
// @name         More Readabler Wikipedia
// @namespace    http://HelloChameleon.com
// @version      0.1
// @description  Little things so I can read the whole page without bloodying my eyes
// @author       @plainclothes
// @match        https://*wikipedia.org/*
// @grant        none
// ==/UserScript==

var d = document, addStyle = d.createElement('link');
addStyle.setAttribute('href','https://plainclothes.github.io/UserScripts/wikipedia/readable-wikipedia.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('head')[0].appendChild(addStyle);
