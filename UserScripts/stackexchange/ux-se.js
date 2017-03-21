window.onload = function() {
  var mainStyle = document.createElement('link'),
      localStyle = document.createElement('link');

  // load base stackexchange stylesheet from Dbox public folder
  mainStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/stackexchange/se.css');
  mainStyle.setAttribute('rel', 'stylesheet');
  mainStyle.setAttribute('type', 'text/css');
  document.head.appendChild(mainStyle);

  // load local ux. stylesheet from Dbox public folder
  localStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/stackexchange/ux-se.css');
  localStyle.setAttribute('rel', 'stylesheet');
  localStyle.setAttribute('type', 'text/css');
  document.head.appendChild(localStyle);
}
