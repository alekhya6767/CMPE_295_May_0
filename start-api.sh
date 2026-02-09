#!/bin/bash
# Start DeepWiki API (run from project root: ./start-api.sh)
cd "$(dirname "$0")"
if [ ! -d .venv ]; then
  echo "Run setup first: uv venv --python 3.12 .venv && uv pip install --python .venv/bin/python3 fastapi \"uvicorn[standard]\" pydantic google-generativeai tiktoken adalflow numpy faiss-cpu langid requests jinja2 python-dotenv openai ollama aiohttp boto3 websockets azure-identity azure-core"
  exit 1
fi
.venv/bin/python -m api.main
