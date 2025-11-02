# JUNJ by Junioner

**Radical community education — free, open, together**

JUNJ is a techno-brutalist website that curates radical resources for people who refuse to be reduced to datasets. It's a growing directory of tools, guides, and knowledge for creative autonomy, community building, and digital self-determination.

## 🎯 Mission

[radical resources for people who are more than datasets]  
[radical resources for you] [resist being reduced]

This project exists to:
- Share free educational resources and open-source tools
- Build community knowledge outside of corporate platforms
- Celebrate digital autonomy and creative freedom
- Preserve and amplify grassroots learning

## ✨ Features

- **Tool Directory** — Curated collection of creative, educational, and community-building tools
- **Resource Guides** — Getting-started tutorials and how-tos
- **Tool of the Week** — Regular spotlight on powerful open-source software
- **Live Uptime Counter** — Transparency tracker showing site availability
- **Brutalist Design** — High-contrast, accessible, no-nonsense interface
- **Community Submissions** — Open process for suggesting new tools and resources

## 🏗️ Technical Stack

- **Static Site Generator**: Jekyll 3.10.0
- **Styling**: Custom CSS with techno-brutalist aesthetic
- **Hosting**: Designed for both GitHub Pages and self-hosted servers
- **JavaScript**: Minimal (only for uptime counter)
- **Typography**: Monospace (Courier New) throughout
- **Responsive**: Mobile-optimized with progressive enhancement

## 🚀 Local Development

### Prerequisites
- Ruby 3.0+
- Bundler

### Setup
```bash
# Clone the repository
git clone https://github.com/junioner/junj.git
cd junj

# Install dependencies
bundle install

# Run the development server
bundle exec jekyll serve --livereload

# Open http://127.0.0.1:4000 in your browser
```

### Building for Production
```bash
# Clean previous builds
bundle exec jekyll clean

# Build static files to _site/
bundle exec jekyll build
```

## 📁 Project Structure

```
junj/
├── _config.yml           # Site configuration
├── _layouts/             # Page templates
│   └── default.html      # Base layout with header/footer
├── _includes/            # Reusable components
│   ├── navigation.html   # Hero header with ASCII art
│   └── tool_of_week.html # Tool spotlight widget
├── _posts/               # Blog posts (Tool of the Week)
├── pages/                # Static pages
│   ├── credits.md
│   └── directory.md
├── assets/
│   ├── css/              # Stylesheets
│   │   └── main.css      # Main stylesheet
│   └── js/               # JavaScript
│       └── uptime.js     # Live uptime counter
├── resources/            # Educational guides
└── _site/                # Generated static site (committed for server deployment)
```

## 🎨 Design Philosophy

**Techno-Brutalism**: Raw, functional, honest
- Monospace typography for clarity and accessibility
- High-contrast purple/tan color scheme
- ASCII art and text-based decoration
- No tracking, no analytics, no corporate dependencies
- Mobile-first responsive design
- Semantic HTML for screen readers

## 🤝 Contributing

JUNJ is a community project. Ways to contribute:

1. **Submit a Tool**: Use the [Submit page](https://junioner.github.io/junj/submit/) or open a GitHub issue
2. **Improve Documentation**: Fix typos, clarify guides, add examples
3. **Report Issues**: Found a bug or broken link? Open an issue
4. **Share Resources**: Know a great tutorial or tool? Let us know

## 📝 Content Guidelines

Resources and tools featured on JUNJ should be:
- **Free or open-source** (prioritize truly free options)
- **Accessible** (work across platforms, low barrier to entry)
- **Community-oriented** (support autonomy, not extraction)
- **Well-documented** (people can actually use them)

## 🔧 Configuration

Key settings in `_config.yml`:

```yaml
title: JUNJ by Junioner
description: Radical community education - free, open, together
github_url: https://github.com/junioner/junj
discord_url: https://discord.gg/your-invite
last_shutdown_date: "2025-11-02T00:00:00Z"  # Update when site goes down
record_uptime_ms: 2592000000                # All-time uptime record in milliseconds
```

## 📜 License

Content and code are shared freely. Specific license TBD — priority is maximum openness and reusability.

## 🌐 Links

- **Live Site**: https://junioner.github.io/junj/
- **GitHub**: https://github.com/junioner/junj
- **Submit Tools**: https://junioner.github.io/junj/submit/
- **Credits**: https://junioner.github.io/junj/credits/

## 💬 Contact

- Open a GitHub issue for bugs, suggestions, or tool submissions
- Discord: [Join the community](https://discord.gg/your-invite)
- Email: See website for current contact info

---

**[resist being reduced]**

Built with Jekyll. Hosted on GitHub (for now). Designed for humans, not algorithms.