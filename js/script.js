// Change favicon
var linkTags = document.getElementsByTagName('link');
linkTags[0].href = chrome.extension.getURL('img/icon-16.png');
linkTags[1].href = chrome.extension.getURL('img/favicon.ico');
// Add styles to tasks iframe
var link = document.createElement('link');
link.href= chrome.extension.getURL('css/styles.css');
link.rel = 'stylesheet';
link.type = 'text/css';
var iframeDocument = document.getElementsByTagName('iframe')[0].contentDocument;
iframeDocument.head.appendChild(link);
// Change help link destination
setTimeout(function(){
  var helpLink = iframeDocument.getElementById(':1.he');
  var nav = helpLink.parentNode;
  nav.removeChild(helpLink);
  var newHelpLink = "<a href='http://richwells.me/better-google-tasks/' target='_blank' class='goog-flat-button w goog-inline-block' role='button' aria-hidden='true' style='text-decoration:none'>Help</a>";
  nav.innerHTML = newHelpLink + nav.innerHTML;
},3000);