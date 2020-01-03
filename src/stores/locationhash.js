import {writable} from "svelte/store";

/**
 * Returns a Svelte Writable Store for listening / modifying `location.hash`
 */
export function locationhash() {
    const store = writable(location.hash, (set) => {
        function on_hash_change(event) {
            set(location.hash);
        }

        set(location.hash);
        window.addEventListener("hashchange", on_hash_change);

        return () => {
            window.removeEventListener("hashchange", on_hash_change);
        };
    });

    store.subscribe((value) => {
        location.hash = value;
    });

    return store;
}
