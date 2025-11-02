---
name: Submit a tool
about: Add an open source tool to the JUNI-PI library. Keep it factual and short.
title: "[SUBMIT] Tool Name"
labels: submit
assignees: ''
---

Please paste the YAML frontmatter below into the issue body and fill in values. Don't write marketing copy — one-line description only.

```yaml
title: 
description: 
category: creativity | productivity
platforms: [linux, mac, windows]
license: 
repo: 
tags: []
Screenshot: https:// (optional)
notes: (optional)
```

Example:

```yaml
title: Audacity
description: Simple multi-track audio editor and recorder.
category: creativity
platforms: [linux, mac, windows]
license: GPL-2.0
repo: https://github.com/audacity/audacity
tags: [audio, recording, editing]
```

Maintainers: Please include the repo URL if possible.

We will convert valid submissions into `_tools/<slug>.md` and publish after a quick verification.
