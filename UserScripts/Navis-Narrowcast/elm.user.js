// ==UserScript==
// @name        legacy-elm-updates
// @namespace   Hellochameleon.com
// @include     *ELM/ELMLead2.aspx*
// @version     1
// @grant       none
// ==/UserScript==
var d = document,
    addStyle = d.createElement('link');

// load stylesheet from Dbox public folder
addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/Navis-Narrowcast/elm.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('body')[0].appendChild(addStyle);
