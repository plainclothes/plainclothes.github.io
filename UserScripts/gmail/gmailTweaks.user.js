// ==UserScript==
// @name          Gmail tweaks
// @namespace     http://userstyles.org
// @description	  whatever
// @include     	*://mail.google.com/*
// @author        David Holman
// @homepage      http://HelloChameleon.com
// @run-at        document-start
// @version       0.1
// ==/UserScript==
(function() {var css = "";
css += [
		"/*****************************************",
		" * Modded from :",
		" * Gmail Easy Access Colored Buttons",
		" * (c)reated by steve 2011 - 2012",
		" *",
		" * Author      : steve",
		" * Updated     : Mar 9th, 2015",
		" * Version     : 4.9",
		" * Description : Modifies the colors of most used icons for Gmail",
		" * Usage       : Use with Stylish Firefox extension (http://userstyles.org/) or copy to your Firefox userContent.css file",
		" *****************************************/",
		"",
		"@namespace url(http://www.w3.org/1999/xhtml);"
	].join("\n");
if (false || (document.domain == "mail.google.com" || document.domain.substring(document.domain.indexOf(".mail.google.com") + 1) == "mail.google.com"))
	css += [
		"html { font-size: 16px !important; }",
		"*, html, body { font-family: 'Roboto' !important; }",
		"body { font-size: 1rem !important; }"
	].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
