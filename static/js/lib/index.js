/* module for importing other js files */
// function include(src) {
//     const script = document.createElement('script');
//     script.src = src;
//     script.type = 'text/javascript';
//     script.defer = true;

//     document.getElementsByTagName('head').item(0).appendChild(script);
// }

function include(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.type = "text/javascript"; // Add this line
  script.onload = callback;
  document.getElementsByTagName("head").item(0).appendChild(script);
}

loadScript(
  "https://raw.githack.com/Prochivs/message-widget/main/static/js/lib/jquery.min.js",
  () => {
    console.log("done 1");
  }
);

include(
  "https://raw.githack.com/Prochivs/message-widget/main/static/js/lib/materialize.min.js",
  () => {
    console.log("done 1");
  }
);
include(
  "https://raw.githack.com/Prochivs/message-widget/main/static/js/lib/chart.min.js",
  () => {
    console.log("done 1");
  }
);
include(
  "https://raw.githack.com/Prochivs/message-widget/main/static/js/lib/uuid.min.js",
  () => {
    console.log("done 1");
  }
);
