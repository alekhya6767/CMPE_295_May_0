# Running DeepWiki-Open on Your System

The repo is already cloned at `deepwiki-open/`. Backend dependencies are installed and the API can be started with `./start-api.sh`.

## Prerequisites

You need **Python 3.11+** and **Node.js** (for the frontend).

### Install on macOS (Homebrew)

```bash
# Python 3.12
brew install python@3.12

# Node.js (includes npm)
brew install node
```

If you use **uv** (recommended for Python):

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

---

## 1. Environment (API keys)

Copy the example env and add at least one AI provider key:

```bash
cd deepwiki-open
cp .env.example .env
```

Edit `.env` and set **at least one** of:

- `GOOGLE_API_KEY=...` — [Google AI Studio](https://aistudio.google.com/)
- `OPENAI_API_KEY=...` — [OpenAI Platform](https://platform.openai.com/)

Optional: set `DEEPWIKI_EMBEDDER_TYPE=google` if you use Google for generation.

---

## 2. Backend (API)

From the **project root** (`deepwiki-open/`):

**Option A – Using uv (installs Python 3.11+ if needed)**

```bash
cd /Users/spartan/Desktop/cursor/deepwiki-open
uv run -m api.main
```

**Option B – Using Poetry**

```bash
cd /Users/spartan/Desktop/cursor/deepwiki-open
python3 -m pip install poetry==2.0.1
cd api && python3 -m poetry install
cd ..
python3 -m api.main
```

Use **Python 3.11+** for Option B (e.g. `python3.12` if installed via Homebrew).

API will be at **http://localhost:8001**.

---

## 3. Frontend

In a **second terminal**:

```bash
cd /Users/spartan/Desktop/cursor/deepwiki-open
npm install
npm run dev
```

Or with yarn:

```bash
yarn install
yarn dev
```

App will be at **http://localhost:3000**.

---

## 4. Use DeepWiki

1. Open http://localhost:3000
2. Enter a repo (e.g. `https://github.com/AsyncFuncAI/deepwiki-open`)
3. Click **Generate Wiki**

For private repos, add a personal access token when prompted.

---

## Alternative: Docker

No local Python/Node needed:

```bash
cd deepwiki-open
# Add your keys to .env first
docker-compose up
```

Then open http://localhost:3000 (frontend and API run in containers).

---

## Quick reference

| Component   | Command (from `deepwiki-open/`) | URL                |
|------------|----------------------------------|--------------------|
| Backend    | `uv run -m api.main` or `python3 -m api.main` | http://localhost:8001 |
| Frontend   | `npm run dev` or `yarn dev`      | http://localhost:3000 |
