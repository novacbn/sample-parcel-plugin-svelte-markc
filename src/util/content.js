import CONTENT_VIEWS from "../content/**/*.md";

/**
 * Returns the routing map for the `content/*.md` files
 * @param {*} paths
 * @param {*} views
 * @param {*} content
 */
export function get_routing(paths = [], views = {}, content = CONTENT_VIEWS) {
    for (const [key, value] of Object.entries(content)) {
        if (typeof value !== "object") continue;

        if (value.default) {
            const path = [...paths, key].join("/");

            views[path] = value.default;
        } else {
            get_routing([...paths, key], views, value);
        }
    }

    return views;
}
