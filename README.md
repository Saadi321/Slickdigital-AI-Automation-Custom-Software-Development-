# SlickDigital AI Landing Page

## Run locally (Vite dev server)

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Important

Do **not** open `index.html` directly with `file://` or a generic static server that does not transpile TypeScript/TSX.
This project uses Vite to transform `src/main.tsx` into browser-compatible JavaScript.

If you see a browser error like:

- `Failed to load module script ... MIME type of "application/octet-stream"`

it usually means the app is being served without Vite build/dev processing.
