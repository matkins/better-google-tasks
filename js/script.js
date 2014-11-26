// Change favicon
var linkTags = document.getElementsByTagName('link');
linkTags[0].href = chrome.extension.getURL('img/icon-16.png');
linkTags[1].href = chrome.extension.getURL('img/favicon.ico');
// Add styles to tasks iframe
var link = document.createElement('link');
link.href= chrome.extension.getURL('css/styles.css');
link.rel = 'stylesheet';
link.type = 'text/css';
document.getElementsByTagName('iframe')[0].contentDocument.head.appendChild(link);