function include(file) {
    const script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;

    document.getElementsByTagName('head').item(0).appendChild(script);
}

/* include all the components js file */

include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/chat.js');
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/constants.js');
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/cardsCarousel.js');
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/botTyping.js');
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/collapsible.js');
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/dropDown.js');
include('https://raw.githack.com/Prochivs/message-widget/main/static/js/components/quickReplies.js');
