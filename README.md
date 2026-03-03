# Hachemite | Infrastructure & Digital Garden

> "The Debug Console meets The Academic Paper."

This repository is not a standard portfolio. It is a **performance-optimised digital CV** designed to demonstrate senior engineering competence through **resource efficiency, information density, and system-design thinking**. 

Deployed at: [hachemsqualli.xyz](https://hachemsqualli.xyz)

## 🏗️ Architecture & DevOps Flex

This project is built and maintained as a **Production Environment**, completely avoiding "Click-to-Deploy" anti-patterns.

* **Content as Code:** Resume data and digital garden notes are managed via strictly typed Astro Content Collections, validated at build time.
* **CI/CD Automation:** Automated workflows using GitHub Actions handle linting, type-checking, and zero-downtime edge deployments.
* **Military-Grade SecOps:** Protected by strict Layer 7 HTTP security headers (`Content-Security-Policy`, `X-Frame-Options`, `Permissions-Policy`) ensuring an A+ security rating.
* **Observability:** Includes a `/health` endpoint designed for load balancer and Prometheus monitoring.
* **Future-Proof Infrastructure:** Includes a multi-stage `Dockerfile` and `docker-compose.yml` for instant, vendor-independent VPS deployment.

## 🎨 Visual Identity: "Sand & Dust"

The UI is built on a strict 1-bit monochrome palette (`#FDF8D8` Sand, `#494949` Dust, `#8C7B65` Bronze). 

To achieve the "lvl374 / NIDANA" aesthetic without draining battery life, the background relies on a highly engineered, low-resolution 2D Canvas:
* **Generative Mesh:** A Delaunay triangulation point cloud drifting at a throttled 1-2 FPS.
* **Performance Guarantee:** Consumes negligible CPU, achieving a 100/100 Lighthouse score with a Time to Interactive of < 0.5s.
* **Interaction:** Points gently repel the cursor and snap to a rigid grid on click, representing "order from chaos."

## 🛠️ Local Setup & Commands

To spin up this infrastructure locally:

```bash
# 1. Clone the repository
git clone [https://github.com/hachemite/portfolio.git](https://github.com/hachemite/portfolio.git)
cd portfolio

# 2. Install dependencies
npm ci

# 3. Run the development server
npm run dev

# 4. Run the ultimate SecOps QA pipeline (Format, Lint, Type-Check)
npm run qa

```

## 📡 Telemetry

* **Status:** `ALL SYSTEMS NOMINAL`
* **Routing:** `Cloudflare Edge`
* **Uptime Target:** `99.99%`

---

*Looking for bugs? Submit a PR.*






# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
