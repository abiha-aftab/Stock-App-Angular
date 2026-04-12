# Real-time stock dashboard

Angular app that shows live quotes for **Apple (AAPL)**, **Alphabet (GOOGL)**, **Microsoft (MSFT)**, and **Tesla (TSLA)**. A small Node **WebSocket** server pushes updates; the Angular `StockFeedService` can also run a **mock** feed in the browser (no backend).

## Layout (reference)

The UI follows the [reference layout](https://postimg.cc/5HkMdDYR): **CSS Grid** on the page (1 column → 2 columns → **4 columns** on wide screens for four tiles), **full-width colored tiles** (green / red / grey when paused), centered ticker + price, and a **pill ON/OFF toggle** at the bottom of each card. Inner stats use a small **grid** (day high/low; 52-week rows on desktop).

## Features

- **WebSocket server** (`server/index.js`) broadcasting quote payloads compatible with the Angular client.
- **Finnhub** integration when `FINNHUB_API_KEY` is set; otherwise the server uses a deterministic mock random walk.
- **Mock mode in Angular**: set `useMock: true` in `src/environments/environment.ts` to simulate prices without running the server.
- **Per-card toggle**: click a card to turn updates **OFF** (card greys out) or **ON**. While off, the UI ignores new prices until you turn it back on.
- **Colors**: green when the price ticks up, red when it ticks down, muted styling when the card is off.
- **Responsive layout**: CSS Grid for the page and cards; **mobile** shows name, current price, day high, and day low; **desktop** (wider breakpoint) also shows **52-week high** and **52-week low**.

## Run locally

**Terminal 1 — WebSocket server** (from this folder):

```bash
cd server && npm install && npm start
```

Optional: live Finnhub data (free API key from [finnhub.io](https://finnhub.io/register)):

```bash
export FINNHUB_API_KEY=your_token
npm start
```

**Terminal 2 — Angular app**:

```bash
npm install
npm start
```

Open `http://localhost:4200/`. The client expects the WebSocket at `ws://localhost:8080` (see `src/environments/environment.ts`).

Shortcut from the project root:

```bash
npm run server
```

## Mock-only (no Node server)

In `src/environments/environment.ts`, set `useMock: true`, then run `npm start`.

## Build

```bash
npm run build
```

Output is under `dist/stock-dashboard/`.

## Push to GitHub for review

From the `stock-dashboard` directory (this repo root):

```bash
git status
git add .
git commit -m "Add real-time stock dashboard with WebSocket server"
```

Create a new empty repository on GitHub (no README/license if you already have them locally), then:

```bash
git remote add origin https://github.com/<your-username>/<your-repo>.git
git branch -M main
git push -u origin main
```

Share the repository URL with the reviewer.

## Tests

```bash
npm test
```
