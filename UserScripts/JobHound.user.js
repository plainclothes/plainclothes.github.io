// ==UserScript==
// @name         JobHound
// @namespace    http://www.hellochameleon.com
// @version      0.1
// @description  Clean up JobHound UI
// @author       David Holman
// @match        https://jobhound.io/
// @grant        none
// ==/UserScript==

var d = document, addStyle = d.createElement('link');
addStyle.setAttribute('href','https://plainclothes.github.io/UserScripts/jobhound/jobhound-fixes.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('head')[0].appendChild(addStyle);
