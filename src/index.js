import html from "./index.pug"
// Import styles
import style from "./styles/main.sass";
// Import scripts
import 'bootstrap';
// import script from "./scripts/plugin.js";

function logMessage(...args) {
  if (window.location.href.indexOf('enable-log') != -1) {
    console.log(...args);
  }
}

logMessage('all files loaded');
