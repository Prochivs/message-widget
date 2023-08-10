import { CLOSE_ICON, MESSAGE_ICON, styles } from "./assets.js";

class MessageWidget {
  constructor(position = "bottom-right") {
    this.position = this.getPosition(position);
    this.open = false;
    this.initialize();
    this.injectStyles();
  }
  position = "";
  open = false;
  widgetContainer = null;

  getPosition(position) {
    const [vertical, horizontal] = position.split("-");
    return {
      [vertical]: "30px",
      [horizontal]: "30px",
    };
  }

  async initialize() {
    /**
     * Create and append a div element to the document body
     */
    const container = document.createElement("div");
    container.style.position = "fixed";
    Object.keys(this.position).forEach(
      (key) => (container.style[key] = this.position[key])
    );
    document.body.appendChild(container);

    /**
     * Create a button element and give it a class of button__container
     */
    const buttonContainer = document.createElement("button");
    buttonContainer.classList.add("button__container");

    /**
     * Create a span element for the widget icon, give it a class of `widget__icon`, and update its innerHTML property to an icon that would serve as the widget icon.
     */
    const widgetIconElement = document.createElement("span");
    widgetIconElement.innerHTML = MESSAGE_ICON;
    widgetIconElement.classList.add("widget__icon");
    this.widgetIcon = widgetIconElement;

    /**
     * Create a span element for the close icon, give it a class of `widget__icon` and `widget__hidden` which would be removed whenever the widget is closed, and update its innerHTML property to an icon that would serve as the widget icon during that state.
     */
    const closeIconElement = document.createElement("span");
    closeIconElement.innerHTML = CLOSE_ICON;
    closeIconElement.classList.add("widget__icon", "widget__hidden");
    this.closeIcon = closeIconElement;

    /**
     * Append both icons created to the button element and add a `click` event listener on the button to toggle the widget open and close.
     */
    buttonContainer.appendChild(this.widgetIcon);
    buttonContainer.appendChild(this.closeIcon);
    buttonContainer.addEventListener("click", this.toggleOpen.bind(this));

    /**
     * Create a container for the widget and add the following classes:- `widget__hidden`, `widget__container`
     */
    this.widgetContainer = document.createElement("div");
    this.widgetContainer.classList.add("widget__hidden", "container");

    /**
     * Invoke the `createWidget()` method
     */
    this.createWidgetContent();

    /**
     * Append the widget's content and the button to the container
     */
    container.appendChild(this.widgetContainer);
    container.appendChild(buttonContainer);
  }

  createWidgetContent() {
    this.widgetContainer.innerHTML = `
    <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
  
 
  <link
    href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
    rel="stylesheet"
  />

  <!--Import Font Awesome Icon Font-->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    integrity="sha256-eZrrJcwDc/3uDhsdt61sL2oOBY362qM3lon1gyExkL0="
    crossorigin="anonymous"
  />

  <!--Import materialize.css-->
  <link
    rel="stylesheet"
    type="text/css"
    href="static/css/materialize.min.css"
  />

  <!--Main css-->
  <link rel="stylesheet" type="text/css" href="static/css/style.css" />
    <div class="container">
  
    
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

 
    <!--JavaScript at end of body for optimized loading-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   
   
    <script
      type="text/javascript"
      src="static/js/lib/materialize.min.js"
    ></script>

    
    <script src="static/js/lib/uuid.min.js"></script>
    <!--Main Script -->
    <script type="text/javascript" src="static/js/script.js"></script>

    <!--Chart.js Script -->
    <script type="text/javascript" src="static/js/lib/chart.min.js"></script>
    <script type="text/javascript" src="static/js/lib/showdown.min.js"></script>  
    `;
  }

  injectStyles() {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = styles.replace(/^\s+|\n/gm, "");
    document.head.appendChild(styleTag);
  }

  toggleOpen() {
    this.open = !this.open;
    if (this.open) {
      this.widgetIcon.classList.add("widget__hidden");
      this.closeIcon.classList.remove("widget__hidden");
      this.widgetContainer.classList.remove("widget__hidden");
    } else {
      this.createWidgetContent();
      this.widgetIcon.classList.remove("widget__hidden");
      this.closeIcon.classList.add("widget__hidden");
      this.widgetContainer.classList.add("widget__hidden");
    }
  }
}

function initializeWidget() {
  return new MessageWidget();
}

initializeWidget();
