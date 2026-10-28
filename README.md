# OneTrip website

GitHub Pages copy of the published OneTrip website at https://www.onetrip.tours/.

Includes the English/Chinese homepage, road-trip planner, account sign-in and signup, support, privacy information, and existing booking-provider links.

The source is the existing published website export (version 10, commit `58b4b9ef7be01eb2cbef5ff50c6aac878d98b735`). Unpublished local changes and native iPhone build files are not included.

## Hosting

Publish the `main` branch root with GitHub Pages. `.nojekyll` is required so the planner’s `_expo` assets are served. Primary domain: `www.onetrip.tours`. The website expects domain-root paths; serve it at the custom domain.

## Data and accounts

Supabase continues to provide authentication and cloud trip storage. This hosting migration does not move, delete, or change Supabase projects, tables, users, or saved trips. Client configuration is public browser configuration; no server credentials belong in this repository.

## Editing

Edit `index.html`, `home.js`, and `styles.css` for homepage wording, translation strings, and styling. Edit `support/index.html` and `privacy/index.html` for those pages. The planner is an Expo web export; update its original source and regenerate the `/planner/` export for planner changes.

Local preview: `python3 -m http.server 4174`.
