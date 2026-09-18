# Superior Taekwondo - Project Context

## Agent Team Rules (added 2026-09-18)

**Model doctrine for all growth/SEO/conversion work on this repo:**
- **Planning:** Fable 5.1 (`fable`). Writes `plan.md`, owns the approval gate, does the final voice pass on customer-facing copy.
- **Orchestrating:** Opus 5 (`opus`). Runs the build phase from the approved plan, fans out tasks, merges results, runs QA.
- **Tasks / building:** Sonnet 5 (`sonnet`). Research, audits, component edits, drafts, verification. Always parallel where independent.
- **Mechanical tail:** Haiku 4.5 (`haiku`). Meta trims, alt text, link checks, formatting.

Agent definitions live in `.claude/agents/` (growth-orchestrator, growth-builder, growth-researcher, growth-mechanical). Use them by name with the Agent tool.

**Process:** follow the `web-growth-team` skill pipeline (context → research fan-out → plan → gate → build → adversarial QA). Use `/loop` to poll a long-running orchestrator rather than blocking.

**Changelog:** every change set gets an entry in `changelog/` named `YYYY-MM-DD-<slug>.md` (what changed, why, files touched, GSC metric it targets, date to re-check). `changelog/README.md` is the index.

**Git / deploy:** production deploys via Netlify from **github.com/AltusSnyman/superiortkd** (`main`), which is `origin` here and is pushable with the existing `gh` login (AltusSnyman). Work on a `growth/<slug>-<date>` branch, then fast-forward `main` and push — never force-push. Never push to GitHub without the user explicitly asking. Never change a URL without a 301 in `netlify.toml` (at the **repository root** — Netlify does not read a netlify.toml from `public/`) and in `public/_redirects`, in the same commit.

**Data:** the `gsc` MCP server (project-scoped, `.mcp.json`) is the source of truth for rankings. Property is `sc-domain:superiortkd.co.nz`. Use it before any keyword estimate.
