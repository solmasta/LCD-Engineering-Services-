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

- Contact number is (312) 515-9931; service area is Chicago and surrounding
  suburbs (Cook County). There's no business email yet — add one to the
  topbar/footer/contact page across all four pages once you have one.
- The contact form currently opens the visitor's messaging app with a
  pre-filled text to the business number (no backend, no email set up yet).
  SMS links are unreliable on desktop browsers, so the form note tells
  desktop visitors to just call/text directly. Once you have a business
  email or want submissions delivered without relying on the visitor's own
  phone, swap in a form service (e.g. Formspree) or a small backend endpoint.
