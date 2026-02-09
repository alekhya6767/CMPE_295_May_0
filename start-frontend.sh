#!/bin/bash
# Start DeepWiki frontend. Loads nvm if available (Node from nvm).
# Run from project root: ./start-frontend.sh
cd "$(dirname "$0")"
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
if ! command -v npm &>/dev/null; then
  echo "Node.js is required. Install nvm then: nvm install --lts"
  echo "  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash"
  exit 1
fi
npm install
npm run dev
