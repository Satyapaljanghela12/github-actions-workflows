# Node.js GitHub Actions CI Project

A small Express.js REST API with Jest/Supertest tests and a GitHub Actions CI workflow.

## Requirements

- Node.js 22 or later
- npm
- Git

## Run locally

```bash
npm install
npm test
npm start
```

The server listens on `http://localhost:3000` by default.

## API endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Welcome message |
| GET | `/health` | Health status |
| GET | `/add/10/20` | Adds two numbers |

Example:

```bash
curl http://localhost:3000/health
curl http://localhost:3000/add/10/20
```

## GitHub Actions CI

The workflow is located at `.github/workflows/ci.yml`.

It runs on:
- Pushes to `main`
- Pull requests targeting `main`

The workflow checks out the repository, sets up Node.js 22, installs locked dependencies using `npm ci`, and runs the automated tests.

## Push to GitHub

Create an empty GitHub repository, then run:

```bash
git init
git branch -M main
git add .
git commit -m "Initial Node.js CI project"
git remote add origin https://github.com/YOUR_USERNAME/node-github-actions.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username. After pushing, open the repository's **Actions** tab to see the CI run.
