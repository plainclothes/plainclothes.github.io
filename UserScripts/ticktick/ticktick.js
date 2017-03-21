window.onload = function() {
  var addStyle = document.createElement('link');

  // load stylesheet from Dbox public folder
  addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/ticktick/ticktick.css');
  addStyle.setAttribute('rel', 'stylesheet');
  addStyle.setAttribute('type', 'text/css');
  document.head.appendChild(addStyle);
}
