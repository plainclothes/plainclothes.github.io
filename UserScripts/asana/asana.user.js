// ==UserScript==
// @name        asana
// @namespace   Hellochameleon.com
// @include     *://app.asana.com/*
// @version     1
// @grant       none
// ==/UserScript==
var d = document,
    addStyle = d.createElement('link');

// load stylesheet from Dbox public folder
addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/asana/asana.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('body')[0].appendChild(addStyle);
