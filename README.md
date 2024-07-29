```
   ╭────────────────────────────────────────────╮
   │              Agent Foundry                 │
   │   Task-native assistants you ship & share  │
   ╰────────────────────────────────────────────╯
```

# Agent Foundry

> **One line:** Build focused automations with Claude, list them in a store, install what others publish, and review incoming submissions—with streaming generation along the way.

![ss](/public/img1.png)

---

### Contents

1. [Why this exists](#why-this-exists)
2. [What you can do today](#what-you-can-do-today)
3. [What is still rough](#what-is-still-rough)
4. [Stack assumptions](#stack-assumptions)
5. [First run](#first-run)
6. [Scripts you will actually use](#scripts-you-will-actually-use)
7. [Configuration surface](#configuration-surface)
8. [License](#license)

---

### Why this exists

Most “assistant” products optimize for open-ended chat. **Agent Foundry** optimizes for **narrow jobs**: you describe a task, the model drafts a runnable package of behavior, and the app treats that artifact as something you can version, publish, and reuse—not a one-off reply.

---

### What you can do today

| Area | Status |
|------|--------|
| Generate task-specific assistants from prompts | Done |
| Browse a shared catalog (“store”) | Done |
| Publish your own builds | Done |
| Install items from the catalog locally | Done |
| Moderation / review queue for submissions | Done |
| Token streaming while generating | Done |

---

### What is still rough

- Sandboxed execution for arbitrary scripts (planned)
- “Advanced” authoring studio (planned)
- Multi-assistant chat sessions (planned)
- Catalog pagination (acknowledged gap)

---

### Stack assumptions

- **Runtime / package manager:** [Bun](https://bun.sh) is the happy path.
- **Database:** PostgreSQL, accessed through Prisma migrations.

If you prefer another JS runtime, you are on your own—commands below assume `bun`.

---

### First run

<details>
<summary><strong>Expand: clone → env → database</strong></summary>

1. Clone the repository you are reading from.
2. Install dependencies:

   ```bash
   bun install
   ```

3. Copy the example environment file and edit values:

   ```bash
   cp .env.example .env
   ```

4. Create an empty PostgreSQL database and point `DATABASE_URL` at it.
5. Apply schema and regenerate the Prisma client:

   ```bash
   bun prisma migrate deploy && bun prisma generate
   ```

</details>

---

### Scripts you will actually use

| Goal | Command |
|------|---------|
| Local dev server | `bun run dev` |
| Production bundle + serve | `bun run build && bun run start` |

---

### Configuration surface

These keys are expected in `.env`. Names are literal; descriptions are purpose-focused.

| Key | Role |
|-----|------|
| `NODE_ENV` | `development` vs `production` behavior switches |
| `DATABASE_URL` | PostgreSQL connection string for Prisma |
| `SUPERADMINS` | Comma-separated emails with elevated privileges |
| `SECRET` | Application secret for signing / crypto |
| `GOOGLE_CLIENT_ID` | OAuth client id |
| `GOOGLE_CLIENT_SECRET` | OAuth client secret |
| `GOOGLE_REDIRECT_URI` | OAuth redirect registered in Google Cloud |
| `GOOGLE_SEARCH_KEY` | Programmatic web search credential |
| `GOOGLE_SEARCH_CX` | Programmatic search engine id (`cx`) |
| `BROWSER_URL` | Base URL for the headless browser microservice |
| `BROWSER_SECRET` | Shared secret for that microservice |
| `SCRIPT_URL` | Base URL for the remote script runner |
| `SCRIPT_SECRET` | Shared secret for the script runner |
| `ANTHROPIC_API_KEY` | Claude API access |

> **Tip:** Never commit a populated `.env`. The committed `.env.example` is the contract; your local file is private state.

---

### License

Distributed under the terms in [`LICENSE.md`](LICENSE.md) (MIT).
