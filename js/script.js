// Change favicon
var linkTags = document.getElementsByTagName('link');
linkTags[0].href = chrome.extension.getURL('img/icon-16.png');
linkTags[0].type = 'image/png';
linkTags[0].setAttribute('sizes','16x16');
linkTags[1].href = chrome.extension.getURL('img/favicon.ico');
var highResFavicon = document.createElement('link');
highResFavicon.rel = 'icon';
highResFavicon.type = 'image/png';
highResFavicon.setAttribute('sizes','32x32');
highResFavicon.href = chrome.extension.getURL('img/icon-32.png');
document.head.appendChild(highResFavicon);

// Add styles to tasks iframe
var link = document.createElement('link');
link.href= chrome.extension.getURL('css/styles.css');
link.rel = 'stylesheet';
link.type = 'text/css';
var iframe = document.getElementsByTagName('iframe')[0];
iframe.contentDocument.head.appendChild(link);

// Function to add and remove important class
function markImportant(row){
  var r = $(row);
  var text = r.find('div.d').html();
  if(text.match(/^!!/)){
    r.addClass('important');
  } else {
    r.removeClass('important');
  }
}

function markAllImportant(doc){
  doc.find('table.z tr.r').each(function(idx,row){
    markImportant(row);
  });
}

iframe.onload = function(){
  // Change help link destination
  var doc = $(iframe).contents();
  var helpLink = doc.find('#\\:1\\.he');
  var nav = helpLink.parent();
  helpLink.remove();
  var newHelpLink = "<a href='http://richwells.me/better-google-tasks/' target='_blank' class='goog-flat-button w goog-inline-block' role='button' aria-hidden='true' style='text-decoration:none'>Help</a>";
  nav.prepend(newHelpLink);
  markAllImportant(doc);
  doc.on('input', 'table.z tr.r div.d', function(){
    markImportant($(this).parents('tr.r'));
  });
  doc.bind('DOMNodeInserted', function(e) {
    if(e.target.tagName == 'TABLE'){
      markAllImportant(doc);
    }
  });
};