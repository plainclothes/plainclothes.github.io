window.onload = function() {
  var addStyle = document.createElement('link'),
      googleFonts = document.createElement('link');

  // load fonts from Google
  googleFonts.setAttribute('href', '//fonts.googleapis.com/css?family=Source+Code+Pro:400,700|Source+Sans+Pro:400,400italic,700,700italic');
  googleFonts.setAttribute('rel', 'stylesheet');
  googleFonts.setAttribute('type', 'text/css');
  document.head.appendChild(googleFonts);

  // ## remote load didn't work ...
  // load stylesheet from Dbox public folder
  // addStyle.setAttribute('href','//dl.dropboxusercontent.com/u/14684724/UserScripts/gmail/gmail.css');
  // addStyle.setAttribute('rel', 'stylesheet');
  // addStyle.setAttribute('type', 'text/css');
  // document.head.appendChild(addStyle);

  var styleFix = document.createElement('style');

  styleFix.innerHTML = ' \
  * { font-family: "Source Sans Pro" !important; } \
  html { font-size: 78% !important; } \
  body { font-size: 1.4rem !important; } \
  .at, .au { border-radius: 12px !important; } \
  ';

  document.body.appendChild(styleFix);
}
