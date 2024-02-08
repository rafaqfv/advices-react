## React + Advices

This is my first react project, and with an advice api

What i learned here?

I learned how to **deploy** with **gh-pages** and below is the step by step

1. `npm i gh-pages`
2. configure the same as below (package.json)
```
  "homepage": "https://${usuario}.github.io/${caminho-do-repositório}",
  "name": "project-name",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint . --ext js,jsx --report-unused-disable-directives --max-warnings 0",
    "preview": "vite preview",
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
```
3. vite.config.js
```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/advices-react",
});

```
4. `npm run deploy`