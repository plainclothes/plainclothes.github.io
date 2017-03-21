window.onload = function() {
  var addStyle = document.createElement('link'),
      googleFonts = document.createElement('link');

  // load fonts from Google
  googleFonts.setAttribute('href', '//fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Source+Sans+Pro:400,400italic,700,700italic');
  googleFonts.setAttribute('rel', 'stylesheet');
  googleFonts.setAttribute('type', 'text/css');
  document.head.appendChild(googleFonts);

  // load stylesheet from Dbox public folder
  addStyle.setAttribute('href','https://dl.dropboxusercontent.com/u/14684724/UserScripts/NavisKB/NavisKB.css');
  addStyle.setAttribute('rel', 'stylesheet');
  addStyle.setAttribute('type', 'text/css');
  document.head.appendChild(addStyle);
}
