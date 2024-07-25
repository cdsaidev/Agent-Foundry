<!-- [![vercel](https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg)](https://vercel.com/?utm_source=appledore-dev&utm_campaign=oss) -->

# Agent Foundry

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![server status](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fagent-foundry.appledore.dev%2Fapi%2Fping&query=status&label=server%20status)


An agent studio platform that utilizes Claude models to generate a specific agent for a particular task.

Live demo: [agent-foundry.appledore.dev](https://agent-foundry.appledore.dev)

![ss](/public/img1.png)









## Features

- [x] Generate agents
- [x] Agent Store
- [x] Publish your generated agents
- [x] Install agents from the Store
- [x] Review submissions
- [x] Stream mode
- [ ] Isolated script execution
- [ ] Advanced mode Studio
- [ ] Chat with multiple agents
- [ ] Pagination, lol

## Requirements


- [PostgreSQL](https://www.postgresql.org)
- [bun](https://bun.sh) (recommended)

## Installation and Setup

1. Clone this repository
2. Install dependencies

    ```bash
    bun install
    ```
3. Create a `.env` file and fill it with the required [environment variables](#environment-variables)

    ```bash
    cp .env.example .env
    ```
4. Create a new database and set the `DATABASE_URL` in the `.env` file
5. Run the migrations

    ```bash
    bun prisma migrate deploy && \
    bun prisma generate
    ```

## Development

Run the development server

```bash
bun run dev
```

## Production

Build the project & start the server

```bash
bun run build && bun run start
```

## Environment Variables

| Variable | Description | Required |
| --- | --- | --- |
| `NODE_ENV` | The environment mode | ✅ |
| `DATABASE_URL` | The database URL | ✅ |
| `SUPERADMINS` | The superadmins' email | ✅ |
| `SECRET` | The encryption secret | ✅ |
| `GOOGLE_CLIENT_ID` | The Google OAuth client ID | ✅ |
| `GOOGLE_CLIENT_SECRET` | The Google OAuth client secret | ✅ |
| `GOOGLE_REDIRECT_URI` | The Google OAuth redirect URI | ✅ |
| `GOOGLE_SEARCH_KEY` | The Google Search API key | ✅ |
| `GOOGLE_SEARCH_CX` | The Google Search CX | ✅ |
| `BROWSER_URL` | The Agent Foundry Browser URL | ✅ |
| `BROWSER_SECRET` | The Agent Foundry Browser secret | ✅ |
| `SCRIPT_URL` | The Agent Foundry Script Runner URL | ✅ |
| `SCRIPT_SECRET` | The Agent Foundry Script Runner secret | ✅ |
| `ANTHROPIC_API_KEY` | The Anthropic API key | ✅ |


## License

[MIT](/LICENSE.md)


