Asciinema screencasts in your book
==============

This plugins requires gitbook `>=2.0.0`.

### How to use it?

Add the below to your `book.json` file, then run `gitbook install` :

```json
{
    "plugins": ["asciinema"]
}
```

You can now add Asciinema screencats to your book using this tag:

```markdown
Take a look at this:

{% asciinema %}https://asciinema.org/a/bxwffohsczswrxie2z3y9ex3n{% endasciinema %}
```

The asciinema will be replaced by the embed script in the website, and by a link in the ebook version.
