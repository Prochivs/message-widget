function include(src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.type = "text/javascript"; // Add this line
    script.onload = callback;
    document.getElementsByTagName("head").item(0).appendChild(script);
  }

/* include all the components js file */

include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/chat.js',
() => {
  console.log("components done");
});
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/constants.js',
() => {
  console.log("components done");
});
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/cardsCarousel.js',
() => {
  console.log("components done");
});
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/botTyping.js',
() => {
  console.log("components done");
});
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/collapsible.js',
() => {
  console.log("components done");
});
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/dropDown.js',
() => {
  console.log("components done");
});
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/quickReplies.js',
() => {
  console.log("components done");
});
