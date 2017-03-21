var addStyle = document.createElement('link');
// load stylesheet from Dbox public folder
addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/tfsTweaks/tfsTweaks.css');
addStyle.setAttribute('rel', 'stylesheet');
addStyle.setAttribute('type', 'text/css');
window.onload = function() {
  document.head.appendChild(addStyle);
}
