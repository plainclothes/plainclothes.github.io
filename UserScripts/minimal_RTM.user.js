// ==UserScript==
// @name        minimal RTM
// @namespace   hellochameleon.com
// @description Simple design update for the web app. Best if used used with the "A bit better RTM" plug-in for Firefox.
// @include     http://www.rememberthemilk.com/home/*
// @include     https://www.rememberthemilk.com/home/*
// @require		http://code.jquery.com/jquery-1.11.0.min.js
// @grant       none
// @version     1.9
// ==/UserScript==


// Restyle
var styleFix = document.createElement('style'),
    googleFonts = document.createElement('link'),
    statusBox = document.getElementById('statusbox'),
    content = document.getElementById('content'),
    addBox = document.getElementById('add-box'),
    headerBreak = document.getElementById('break'),
    noPipes = $('#topnav').html().replace(/\|/g,'');

//jQ.setAttribute('src', '//code.jquery.com/jquery-1.11.0.min.js');
//jQ.setAttribute('type', 'text/javascript');
//document.getElementsByTagName('head')[0].appendChild(jqIt);

googleFonts.setAttribute('href', 'http://fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Source+Sans+Pro:400,400italic,700,700italic');
googleFonts.setAttribute('rel', 'stylesheet');
googleFonts.setAttribute('type', 'text/css');
document.head.appendChild(googleFonts);

// General
styleFix.innerHTML=' \
   body, input, select, textarea, .xtd_tag {font-family:"Source Sans Pro"; font-weight:400; font-size:13px;} \
   body { background-color: #eee; } \
   #break { padding: 0; border-bottom: 1px solid #ddd; margin-bottom: 6px; } \
   a {text-decoration:none!important;}';

//top nav
//$('#topnav').empty();
//$('#topnav').append(noPipes);
$('#viewSelector img').remove();
styleFix.innerHTML+=' \
   #content {padding: 0;} \
   #appheader {background-color: transparent; border-bottom: 1px solid #ddd; height: 24px; padding: 12px; margin:0 0 9px;} \
   #topnav {float:left!important; } \
   #topnav, #topnav > span { color:transparent; } \
   #topnav > span > span, #topnav > span > a {font-weight:400; color:#aaa;} \
   #viewSelector { display:block; float: left; padding-top: 6px; } \
   #viewSelector a, #viewSelector span { margin-right: 9px; } \
   #viewSelector img { display: none; } \
   #topnav a:hover {color:#333;} \
   #topnav > #viewSelector > span {color:#333;} \
   #searchbox {clear: none; float: right; padding-top: 0;} \
   #list {width:600px; margin:auto;} \
   #searchbox div { float: none; display: inline-block;} \
   #searchtogglewrap {text-align:left; width:auto;} \
   #searchbox input { height: 24px; } \
   #searchtoggle img { padding-bottom:6px; } \
';

//Lists nav
styleFix.innerHTML+=' \
   #listAdder .taskaddicon {display: none;} \
   .abr-listtabs li a {color:#999!important;} \
   .abr-listtabs li a:hover {color:#0060BF!important;} \
   .abr-listtabs li.xtab_selected {background-color: #9ed9ff!important;} \
   .abr-listtabs li.xtab_selected a {color:#555!important;} \
';

//Task list styles
styleFix.innerHTML+=' \
   #sorting, #tasksToolbox, #tasksCompletedToolbox, #tasksSentToolbox, #contactsToolbox, #groupsToolbox, #listsToolbox, #locationsToolbox, #tagToolbox {padding: 9px 0 12px!important;} \
   .xtoolbox_actions, .xtoolbox_selector {padding-left:0!important;} \
   #tasksToolbox .xtoolbox_selector { color: transparent; margin-left: -42px; margin-top: 4px;} \
   #tasksToolbox .xtoolbox_selector a { margin: 0 6px; color: #777; } \
   #tasksToolbox .xtoolbox_selector a:hover { color: #F47A00; } \
   #sorting {padding-right:0!important;} \
   #midcontent > div, #tools {border-left: 1px solid #eee!important; border-right: 1px solid #eee!important;} \
   #tools {padding: 0 9px 0 9px;} \
   .xtd_tag {font-family} \
   .xtd_prio {border-right:none;} \
   .xtd {border-bottom: 1px solid #eee; height: 60px;} \
   .xtd_task_name { font-size: 16px; margin-right: 12px; } \
   .xtable {background-color: #FFFFFF; border-color: #EEEEEE;} \
   .xtr_hover {background-color:#D1EDFF!important;} \
   #add-box { float:right; border-top: medium none; padding: 0 20px 7px 8px; } \
   #listwrap > div#tools_spacer {border-left: 1px solid #eee!important; border-right: 1px solid #eee!important; border-top: 1px solid #eee!important;} \
   #appview > .taskcloudcontent, #detailsstatuswrap {border:1px solid #eee!important; background-color: transparent;} \
   .taskoverdue {text-decoration:none; color:#000;} \
   .prio1 {background-color: #d50003;} \
   .prio2 {background-color: #F47A00;} \
   .prio3 {background-color: #FADA63;} \
   .add-box .ab2, .add-box .ab3, .add-box .ab4, .add-box .ab5, .add-box .ab6, .add-box .ab7, .add-box .ab8, .add-box .ab9 { background-image: none; } \
   .add-box .ab1 { background-color: transparent; } \
   .add-box.highlight .ab1, .add-box.highlight .ab2,.add-box.highlight .ab3,.add-box.highlight .ab4,.add-box.highlight .ab5,.add-box.highlight .ab7,.add-box.highlight .ab9 { background-image:none; background-color: #fff; } \
   .add-box.highlight .ab6,.add-box.highlight .ab8{ background-image:none; background-color: #fff; } \
';

//Form elements over the task list
styleFix.innerHTML+=' \
   .xtoolbox_actions form input, .xtoolbox_actions form select {cursor:pointer;} \
   .xtoolbox_actions form input {background: none repeat scroll 0 0 #E7E7E7; border: 1px solid #CCCCCC; border-radius: 4px; font-size: 10px; text-transform: uppercase; padding: 3px;} \
   .xtoolbox_actions form input:hover {background-color: #D1EDFF;} \
   .xtoolbox_actions form select {background: none repeat scroll 0 0 #FFFFFF; border: 1px solid #CCCCCC; border-radius: 4px; font-size: 10px; padding: 3px;} \
';

//detailsbox
styleFix.innerHTML+=' \
   #detailswrap {background: none repeat scroll 0 0 #FAFAFA; border: solid 1px #EEE; width: 293px;} \
   .xtabs_grey a, .xtabs a, .xtabs_grey li {background:none;} \
   .xtabs {background:none; padding:6px;} .xtabs ul {padding:0;} \
   xtabs_grey li, .xtabs li, .xtabs li.xtab_selected {border:none;} \
   .xtabs li a:link, .xtabs li a:visited, .xtabs li a:active {color:#999;} \
   .xtabs li a:hover, .xtabs_grey a:hover {color:#000;} \
   .xtabs .xtab_selected {background:none; border-bottom:solid 1px #cacaca!important;} \
';

//Tag cloud
styleFix.innerHTML+=' \
   .white_rbtop div, .white_rbtop, .white_rbbot div, .white_rbbot, .white_rbcontent, .white_rbcontentwrap {background:none!important;} \
   .taskcloudbox {border:1px solid #eee; background: none transparent!important;} \
';

styleFix.innerHTML+='#onlinehelpwrap {border:solid 1px #eee; background: none transparent!important;}';

//Footer
styleFix.innerHTML+=' \
   .appfooter {width:600px; margin:auto;} \
   .appfooter a {color:#bbb;} \
   .appfooter a:hover {color:#777;} \
';

document.body.appendChild(styleFix);

content.appendChild(statusBox);
$('#datetime').parent().remove();
$('#appheaderlogo, #break').remove();
//headerBreak.appendChild(addBox);
//$('#break').remove();
$('#add-box').appendTo('#topnav');
$('#personName').remove();
$('#appview #listAdder').insertAfter('#appview #listtabs');
$('#add-box .ab6, #add-box .ab7, #add-box .ab8,#add-box .ab9').remove();
$('#searchtogglewrap a').html('<img alt="Options" src="http://s2.rtmcdn.net/img/ico/ico_info_blu.gif"">');