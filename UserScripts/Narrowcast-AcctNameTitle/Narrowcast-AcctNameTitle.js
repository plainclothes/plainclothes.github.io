window.onload = function() {
  var acctName = $('#ctl00_lblAccount').html(),
      pageTitle = $('head > title'),
      pageTitleCont = pageTitle.html();
  pageTitle.html( pageTitleCont + ' > ' + acctName );
}
