var handler = function() {
  getQuoteAndCopy(copyQuoteToClipboard);
}

var copyQuoteToClipboard = function(quote) { 
  var area = createTextArea();
  var oldFocus = document.activeElement;
  area.value = quote; 
  area.select();
  document.execCommand("copy");
  oldFocus.focus();
  document.body.removeChild(area);
}

var createTextArea = function(id) {
  var element = document.createElement("textarea");
  element.style.left = "9999px";
  element.id = "djk-textarea";
  document.body.appendChild(element);
  return element;
}

var getQuoteAndCopy = function(callback) {
  var url = "http://khaledquotes.herokuapp.com/quote";
  var xhr = new XMLHttpRequest();
  
  xhr.onreadystatechange = function() { 
    if xhr.readyState == 4 && xhr.status == 200) { 
      copyQuoteToClipboard(xhr.responseText)
    }
  }

  xhr.open("GET", url, true);
  xhr.send();
}

chrome.commands.onCommand.addListener(function(command) {
  if (command === "copy-quote") {
    handler();
  }
});
