// ==UserScript==
// @name         SVPG Insprired sample pages
// @namespace    http://hellochameleon.com/
// @version      0.1
// @description  Make these old pages readable
// @author       David Holman
// @match        http://www.svpg.com/*
// @grant        none
// ==/UserScript==

var d = document,
    addStyle = d.createElement('link');

// load stylesheet from Dbox public folder
addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/svpg--inspired-examples-pages.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('body')[0].appendChild(addStyle);
