+++
thing = "Joseph Joester"
hidden_data = "You normally can't see me!"
+++

<script>
    let count = 0;
    let thing = FRONTMATTER.thing;

    function on_click(event) {
        event.preventDefault();

        count += 1;
    }
</script>

<style>
    input {
        display: inline !important;
    }
</style>

# Test :: Markdown / Header Slugs

Can you **see** me, {thing}? I've seen you counted {count} times!

<input type="text" bind:value={thing} />
<button on:click={on_click}>
    +1
</button>

## Raw Sources

### Markdown

```markdown
{SOURCE.markdown}
```

### HTML

```html
{SOURCE.html}
```

### Frontmatter

```json
{JSON.stringify(FRONTMATTER, null, 4)}
```
