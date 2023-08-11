// Create the widget container
const widgetContainer = document.createElement("div");

// Create a custom HTML element
const customHtmlElement = document.createElement("div");
customHtmlElement.innerHTML = `
<div class="container">
<!-- Modal for rendering the charts, declare this if you want to render charts, 
   else you remove the modal -->

<!--chatbot widget -->
<div class="widget">
  <div class="chat_header">
    <!--Add the name of the bot here -->
    <span class="chat_header_title">Xavier Ai</span>
    <span class="dropdown-trigger" href="#" data-target="dropdown1">
      <i class="material-icons"> more_vert </i>
    </span>

    <!-- Dropdown menu-->
    <ul id="dropdown1" class="dropdown-content">
      <li><a href="#" id="clear">Clear</a></li>
      <li><a href="#" id="restart">Restart</a></li>
      <li><a href="#" id="close">Close</a></li>
    </ul>
  </div>

  <!--Chatbot contents goes here -->
  <div class="chats" id="chats">
    <div class="clearfix"></div>
  </div>

  <!--keypad for user to type the message -->
  <div class="keypad">
    <textarea
      id="userInput"
      placeholder="Type a message..."
      class="usrInput"
    ></textarea>
    <div id="sendButton">
      <i class="fa fa-paper-plane" aria-hidden="true"></i>
    </div>
  </div>
</div>

<!--bot profile-->
<div class="profile_div" id="profile_div">
  <img class="imgProfile" src="static/img/chat.png" />
</div>


</div>
`;

// Append custom HTML, quote elements, and the generate button
widgetContainer.appendChild(customHtmlElement);

// Append the container to the body
document.body.appendChild(widgetContainer);

// Add event listener to the generate button

// Load external scripts
function loadScript(src, callback) {
  const script = document.createElement("script");
  script.src = src;
  script.onload = callback;
  document.body.appendChild(script);
}

// Load external CSS file
function loadCSS(href) {
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = href;
  document.head.appendChild(link);
}

// Load additional scripts
loadScript(
  "https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js",
  () => {
    console.log("Additional script  0 loaded.");
  }
);

// Load external script tags
loadScript("static/js/lib/materialize.min.js", () => {
  console.log("External script 1 loaded.");
});

loadScript("static/js/lib/uuid.min.js", () => {
  console.log("External script 2 loaded.");
});

loadScript("https://cdn.jsdelivr.net/gh/Prochivs/message-widget@main/static/js/script.js", () => {
  console.log("External script 3 loaded.");
});

loadScript("static/js/lib/chart.min.js", () => {
  console.log("External script 4 loaded.");
});

loadScript("static/js/lib/showdown.min.js", () => {
  console.log("External script 5 loaded.");
});

// Load external CSS files
loadCSS("static/css/materialize.min.css");
loadCSS("static/css/style.css");
loadCSS(
  "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
);
loadCSS("https://fonts.googleapis.com/css2?family=Lato&display=swap");
loadCSS("https://fonts.googleapis.com/icon?family=Material+Icons");


