---
layout: default
title: Submit a Tool
permalink: /submit/
---

# Submit a tool

Drop the facts. No marketing copy. We want concise, verifiable submissions we can turn into tool pages.

Required fields (copy this YAML block into your issue or paste into the submission form):

```yaml
title: Tool Name
description: One-line description (15 words max)
category: creativity | productivity
platforms: [linux, mac, windows]
license: SPDX identifier (e.g. MIT, GPL-3.0)
repo: https://github.com/owner/repo (or website)
tags: [audio, editing, video]
---
---

Optional:
- screenshot: https://...
- notes: short notes for maintainers (breaking changes, forks, special install)

How to submit:
1. Open a new GitHub issue using the "Submit a tool" template (link below).
2. Paste the YAML block above and fill it out.
3. Attach a screenshot if available.

What we do with submissions:
- We convert valid submissions into `_tools/<slug>.md` entries with frontmatter.
- We may edit descriptions for clarity and brevity.
- You will get credited in the entry.

Link: [Open a submission issue](https://github.com/junioner/jun-pi/issues/new/choose)

If you prefer to email: send the YAML block to contact@juni-pi.example (use GitHub issues if possible).

Thanks. Keep it short and correct.
