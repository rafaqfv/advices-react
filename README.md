# React + Advices

This is my first react project, and with an advice api

What i learned here?
Deploy with gh-pages with `npm run deploy`
```
  "homepage": "https://${USUÁRIO}.github.io/${caminho do repositório}",
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