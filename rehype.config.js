const highlight_css = require("highlight.js/lib/languages/css");
const highlight_javascript = require("highlight.js/lib/languages/javascript");
const highlight_json = require("highlight.js/lib/languages/json");
const highlight_markdown = require("highlight.js/lib/languages/markdown");
const highlight_xml = require("highlight.js/lib/languages/xml");

module.exports = {
    plugins: [
        "rehype-slug",
        [
            "rehype-highlight",
            {
                languages: {
                    css: highlight_css,
                    html: highlight_xml,
                    javascript: highlight_javascript,
                    js: highlight_javascript,
                    json: highlight_json,
                    markdown: highlight_markdown,
                    md: highlight_markdown,
                    xml: highlight_xml
                }
            }
        ],
        ["rehype-format", {indent: 4}]
    ]
};
