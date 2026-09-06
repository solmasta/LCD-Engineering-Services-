# LCD Engineering Services

A static business website for LCD Engineering Services — mobile HVAC and mechanical
repair, diagnostics, and consulting.

## Pages

- `index.html` — Home
- `about.html` — About / background
- `services.html` — Services, process, FAQ
- `contact.html` — Contact form and info

## Structure

- `css/style.css` — all styling
- `js/main.js` — mobile nav toggle, contact form handling, FAQ accordion

## Running locally

No build step required. Open `index.html` directly in a browser, or serve the
folder with any static file server, e.g.:

```
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## Notes

- Placeholder contact details (`(555) 555-0123`, `contact@lcdengineeringservices.com`)
  and address are used throughout — update them with real business info before
  going live.
- The contact form currently opens the visitor's email client with a pre-filled
  message (no backend). Swap in a form service (e.g. Formspree) or a small
  backend endpoint later if you want submissions delivered without relying on
  the visitor's email client.
