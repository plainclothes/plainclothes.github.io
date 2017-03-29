window.onload = function() {
  var mainStyle = document.createElement('link'),
      localStyle = document.createElement('link');

  // load main se stylesheet from Dbox public folder
  mainStyle.setAttribute('href','https://plainclothes.github.io/UserScripts/stackexchange/se.css');
  mainStyle.setAttribute('rel', 'stylesheet');
  mainStyle.setAttribute('type', 'text/css');
  document.head.appendChild(mainStyle);

  // load local gd stylesheet from Dbox public folder
  localStyle.setAttribute('href','https://plainclothes.github.io/UserScripts/stackexchange/gd-se.css');
  localStyle.setAttribute('rel', 'stylesheet');
  localStyle.setAttribute('type', 'text/css');
  document.head.appendChild(localStyle);
}
