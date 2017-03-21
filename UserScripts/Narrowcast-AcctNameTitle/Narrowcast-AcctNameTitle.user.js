// ==UserScript==
// @name        Narrowcast-AcctNameTitle
// @namespace   HelloChameleon.com
// @description Get the account name and append it to the page title
// @include     *.thenavisway.com/narrowcast/*
// @version     0.5
// @require		http://code.jquery.com/jquery-1.11.0.min.js
// @grant       none
// ==/UserScript==

// import the remote script
var s = document.createElement('script');
s.src='https://dl.dropboxusercontent.com/u/14684724/UserScripts/Narrowcast-AcctNameTitle/Narrowcast-AcctNameTitle.js';
s.type='text/javascript';
document.getElementsByTagName('head')[0].appendChild(s);
