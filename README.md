# Staycation — Client

React single-page app (Vite) for browsing and booking staycations. Talks to the
Staycation server API.

The codebase is **environment-driven**: the same code runs locally and in
production — only environment variables change between the `main` (local) and
`production` (cloud / Netlify) branches.

## Stack

- React 18 + Vite
- Redux Toolkit + React-Redux
- React Router 6
- Sass (Dart Sass), axios

## Getting started (local)

```bash
npm install
cp .env.example .env      # then edit VITE_API_HOST if needed
npm run dev               # Vite dev server, http://localhost:5173
```

Make sure the [server](../staycation-server) is running (default
`http://localhost:4000`) and seeded.

## Environment variables

Vite only exposes variables prefixed with `VITE_`. See
[.env.example](.env.example).

| Variable          | Local                                  | Production                                        |
| ----------------- | -------------------------------------- | ------------------------------------------------- |
| `VITE_API_HOST`   | `http://localhost:4000/api/v1/member`  | `https://<app>.onrender.com/api/v1/member`        |
| `VITE_IMAGE_HOST` | _(optional; defaults to API origin)_   | usually unset (Cloudinary URLs are absolute)      |

Image URLs are resolved through `utils/getImageUrl`: absolute URLs (Cloudinary,
in production) are used as-is; relative paths (local disk storage) are prefixed
with the asset host.

## Scripts

| Script          | Description                          |
| --------------- | ----------------------------------- |
| `npm run dev`   | Start the Vite dev server           |
| `npm run build` | Production build into `dist/`        |
| `npm run preview` | Serve the production build locally |

## Deployment (Netlify — production branch)

[netlify.toml](netlify.toml) sets the build command, publish directory (`dist`),
and the SPA redirect. Set `VITE_API_HOST` in the Netlify dashboard
(Site settings → Environment variables) to the Render API URL.

## Project layout

```
src/
  configs/axios   axios instance (reads VITE_API_HOST)
  elements/       reusable UI (Button, Form inputs, Stepper, …)
  pages/          route components (Landing, Details, Checkout, NotFound)
  parts/          page sections (Hero, MostPicked, Categories, …)
  store/          Redux Toolkit store, actions, reducers
  utils/          getImageUrl, withRouter (router-v6 bridge), formatters
  assets/scss/    styles (Bootstrap 4 base + custom)
```
