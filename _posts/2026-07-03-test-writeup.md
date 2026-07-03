---
title: "Test writeup"
date: 2026-07-03
tags:
  - Test
  - Markdown
  - Jekyll
excerpt: "A temporary test post to confirm Markdown writeups render correctly through the Jekyll layout."
---

## What this is

This is a temporary test writeup. Its only purpose is to confirm that posts written in Markdown are picked up by Jekyll, listed on the writeups page, and rendered with the same post layout as the preview design.

<div class="callout"><strong>Test note:</strong> if you can see this styled callout on the post page, the custom HTML helpers inside Markdown are working too.</div>

## Markdown checks

This section checks the normal content you will probably use in real writeups:

- Bullet lists
- **Bold text**
- *Italic text*
- Inline code like `docker ps`
- Links, such as [GitHub](https://github.com/o-inn)

## Code block

```bash
docker ps
df -h
bundle exec jekyll serve
```

## Result

If this page appears at `/writeups/test-writeup/`, the Markdown-to-post workflow is working.
