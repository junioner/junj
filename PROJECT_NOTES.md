# Juni-Pi Project Notes

## What This Is
A techno-brutalist Jekyll site for curating open source creativity and productivity software. Think Are.na meets library catalog with a raw, terminal-inspired aesthetic.

## Tech Stack
- **Jekyll 4.4.1** - Static site generator
- **Ruby 3.4** - Runtime
- **Git** - Version control (repo: junioner/jun-pi)
- **VSCode** - Editor
- **Windows** - Development environment

## Design Aesthetic
Techno-Brutalism with deep purples and earth tones:

- Purple palette: #1a1625, #2d1b3d, #9b72cf, #d896ff
- Earth tones: Clay #8b6f47, Sand #c9a66b, Moss #5a6b4d
- Monospace fonts (Courier New)
- Raw borders, exposed structure
- Terminal/command-line inspired UI
- No fancy frameworks - just HTML/CSS/Jekyll

## File Structure
```
juni-pi/
├── _config.yml          # Site configuration
├── _layouts/            # HTML templates
│   └── default.html     # Main layout with nav + footer
├── _includes/           # Reusable components
│   └── navigation.html  # Site navigation
├── assets/
│   └── css/
│       └── main.css     # Brutalist stylesheet
├── _tools/             # Collection of software entries
├── index.md            # Homepage
└── pages/             # Static pages (about, categories, etc.)
```

## Key Features to Build
- Collections - _tools for software entries
- Categories - Creativity vs Productivity
- Tool Cards - Individual software pages with:
  - Name, description
  - Category tags
  - Platform (Linux/Mac/Windows)
  - License type
  - Links (website, repo, docs)
- Navigation - Sticky header with category pages
- Are.na Integration - Optional: embed or link channels
- Mastodon Integration - Share buttons, RSS feeds

## Content Structure
Each tool entry (_tools/toolname.md):
```yaml
---
layout: tool
title: Tool Name
category: creativity
platforms: [linux, mac, windows]
license: GPL-3.0
website: https://example.com
repo: https://github.com/user/repo
tags: [video, audio, editing]
---

Tool description goes here in markdown.
```

## Development Commands
```bash
# Start local server
jekyll serve

# With live reload
jekyll serve --livereload

# Build static site
jekyll build

# Check Ruby/Jekyll versions
ruby -v
jekyll -v
```

## Design Principles
- Functionality over decoration - No unnecessary animations
- Raw and honest - Show the bones of the site
- Monospace everything - Terminal aesthetic
- High contrast - Accessible, readable
- No JavaScript (unless absolutely necessary)
- Fast and lightweight - Static HTML/CSS only

## Next Steps
1. Create tool layout template
2. Add example tool entries
3. Build category filter pages
4. Add search functionality (optional)
5. Create submission guidelines
6. Set up GitHub Pages deployment

## Notes
- Using custom theme (not minima)
- No localStorage/sessionStorage needed (static site)
- All data in markdown frontmatter
- Windows paths use backslashes \
- Jekyll runs on http://127.0.0.1:4000 locally