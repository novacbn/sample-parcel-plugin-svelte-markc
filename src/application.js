import "highlight.js/styles/github.css";

import Application from "./components/Application.svelte";

window._application = new Application({
    target: document.body
});
