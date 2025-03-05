# N0wayBack Team Website

This is the official website for the N0wayBack team, built with Astro framework, showcasing team introduction, member information, and a hall of fame. The website features a cyberpunk terminal-style design that reflects the team's focus on cybersecurity.

## 🌐 Live Website

Visit our website at [https://n0wayback.com](https://n0wayback.com)

## 🎨 Design Features

- **Terminal-Style Interface**: The entire website is designed to mimic a terminal/command-line interface
- **Cyberpunk Aesthetic**: Features neon colors, grid backgrounds, and glitch effects
- **Dual-Color ASCII Art**: Custom ASCII art with cyan and red color scheme for brand identity
- **Dark Mode Support**: Optimized for both light and dark themes
- **Fully Responsive**: Carefully designed for both desktop and mobile devices

## 👨‍💻 Credits

Designed and developed by [shenghuo2](https://github.com/shenghuo2)

## 🚀 Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   ├── MemberCard.astro
│   │   └── Navbar.astro
│   ├── data/
│   │   ├── honors.ts
│   │   └── members.ts
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── pages/
│       ├── honors.astro
│       ├── index.astro
│       └── members.astro
├── .github/
│   └── workflows/
│       └── astro.yml
└── package.json
```

## 📝 Features

- **Home Page**: Team introduction with terminal-style ASCII art and manifesto
- **Members Page**: Displays team leaders, active members, and pioneers with their skills and contributions
- **Honors Timeline**: Chronological display of team achievements and milestones in CTF competitions
- **Responsive Design**: Adapts to various device screen sizes with optimized layouts for mobile

## 🧞 Commands

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Builds production site to `./dist/` directory    |
| `npm run preview`         | Previews build locally before deployment         |

## 🔧 Tech Stack

- [Astro](https://astro.build) - Fast, modern static site generator
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Typed JavaScript for better code quality

## 🚀 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions. The deployment workflow is defined in `.github/workflows/astro.yml`. When changes are pushed to the main branch, the site is automatically built and deployed.

## 👥 Contributing

If you want to contribute to the N0wayBack team website, feel free to submit a Pull Request or contact our team members.

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.
