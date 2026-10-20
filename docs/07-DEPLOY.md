# 07. Деплой: GitHub + Vercel

## 0. Проверки перед публикацией

- [ ] `npm run build` проходит без ошибок, `npm run preview` — визуально ок
- [ ] В `.gitignore`: `node_modules`, `dist`, `.env*`, `docs/02-STRATEGY.md`
- [ ] В репо **не** попали секреты (`.env` не коммитится)

## 1. GitHub (публичный репозиторий)

Через gh CLI (уже установлен):

```bash
git init
git add -A
git commit -m "Место SPA — тестовое задание: лендинг с выбором программы и заявкой"
gh repo create meesto-spa --public --source=. --remote=origin --push
```

Если gh не авторизован: `gh auth login` (выбрать GitHub.com → HTTPS → браузер).

Альтернатива вручную: создать репо на github.com → `git remote add origin URL` →
`git push -u origin main`.

## 2. Vercel

**Вариант A — через GitHub (рекомендую, без CLI):**
1. vercel.com → Sign in with GitHub → **Add New → Project** → выбрать `meesto-spa`.
2. Framework Preset: **Vite**, Build Command: `npm run build`, Output: `dist` (подставится сам).
3. Deploy → ссылка вида `https://meesto-spa-<hash>.vercel.app` (можно переименовать
   Settings → Project Name → `meesto-spa` → `meesto-spa.vercel.app`).

**Вариант B — CLI:**

```bash
npm i -g vercel        # или npx
vercel login           # одноразовый вход через браузер
vercel --prod
```

## 3. Проверка ссылки

- [ ] Открыть в **приватном окне** (Ctrl+Shift+N) — сайт грузится, форма работает
- [ ] Консоль без ошибок, Network без 404
- [ ] Проверить на телефоне/эмуляции 360px

## 4. Если что-то не так

- Белый экран на Vercel → проверить `base` в `vite.config.ts` (для проекта в корне репо обычно не нужен; для GitHub Pages может понадобиться `base: './'`).
- Не собрался → логи Vercel → чаще всего упавший `npm run build` локально.

## 5. GitHub Pages (запасной вариант)

Settings → Pages → Source: `Deploy from a branch` → `main` / `/docs` (или через
Actions с `actions/upload-pages-artifact` на `dist`). Для Vite: в `vite.config.ts`
указать `base: '/meesto-spa/'`.
