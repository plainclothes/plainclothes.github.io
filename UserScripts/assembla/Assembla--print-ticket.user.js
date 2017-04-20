// ==UserScript==
// @name         Assembla--print-ticket
// @namespace    http://HelloChameleon.com
// @version      0.1
// @description  Tweak the ticket page for printability
// @author       @plainclothes
// @match        https://site1001.assembla.com/spaces/SE_Dunn/tickets/*/details
// @grant        none
// ==/UserScript==

var d = document, addStyle = d.createElement('link');
addStyle.setAttribute('href','https://plainclothes.github.io/UserScripts/assembla/assembla--print-ticket.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
d.getElementsByTagName('head')[0].appendChild(addStyle);