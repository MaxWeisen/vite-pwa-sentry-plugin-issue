# @vite-pwa/nuxt & @sentry/vite-plugin issue
https://github.com/getsentry/sentry-javascript-bundler-plugins/issues/460

Steps to reproduce issue:

1. Install dependencies
```bash
# npm
npm install
```

2. Start development server on `http://localhost:3000`:
```bash
# npm
npm run dev
```

3. Open `http://localhost:3000` in browser. (I've been using Chrome Version 124.0.6367.79)

4. Open Developer Tools -> "Console" tab

5. You should see error 
`dev-sw.js?dev-sw:99 Uncaught SyntaxError: Cannot use import statement outside a module (at dev-sw.js?dev-sw:99:2)`

6. Go to Developer Tools -> "Application" tab

7. You should see a service worker for `http://localhost:3000/` with a "Status" of "#xxx is redundant"