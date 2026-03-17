# Portfolio

This folder contains a simple static portfolio site.

Quick preview

Open `index.html` in your browser (double-click the file) to preview.

Deploy to GitHub Pages

1. Initialize a git repo and push to GitHub.
2. In GitHub repo settings -> Pages, set branch to `main` and folder to `/ (root)`.

I've included `about.html`, `resume.html`, CSS and JS under `assets/`.

Additional notes

- The contact form on `about.html` is wired to Formspree. Replace `your-form-id` in the form `action` attribute with your Formspree form ID.
- The GitHub Actions workflow will publish the repository root to GitHub Pages when you push to `main`.
- To preview locally with a simple static server (Python 3):

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
