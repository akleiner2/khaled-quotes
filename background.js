var quotes = [
  "they dont want u to eat !! i promise u !",
  "bless up 🙏",
  "lets see 👀",
  "cloth talk comin soon",
  "ride wit me on the pathway to more success",
  "LIOOOONNNNNN",
  "Another one. Another one. Another one. Another one.",
  "i told my security its fan luv its all good",
  "cocoa butter is the 🔑",
  "egg whites, turkey sausage, water. they dont want u to eat",
  "When you win big, you win more - they gonna sue you. Just counter sue 'em tho. Don't back down.",
  "Rain will come, rain will go. When you a winner - rain on 'em forever.",
  "Some people can't handle success. I can.",
  "Ben, how's business? BOOMIN'."
];

var handler = function() {
  var quote = getSuccess();
  copyQuoteToClipboard(quote);
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

var getSuccess = function() { 
  return quotes[Math.floor(Math.random() * quotes.length)];
}

chrome.commands.onCommand.addListener(function(command) {
  if (command === "copy-quote") {
    handler();
  }
});
