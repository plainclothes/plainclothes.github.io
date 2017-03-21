// ==UserScript==
// @name        Evernote web app tweaks
// @namespace   HelloChameleon.com
// @description As of 0.1, this is just to reposition the focus mode button for a narrow view.
// @include     *://www.evernote.com/Home.action*
// @version     0.1
// @require		  none
// @grant       none
// ==/UserScript==
var d = document,
    addStyle = d.createElement('link');

// load stylesheet from Dbox public folder
addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/evernote/evernote-tweaks.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('body')[0].appendChild(addStyle);
