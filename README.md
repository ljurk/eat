# Mise recipes

A recipe collection built for GitHub Pages. Recipes are stored as YAML and rendered by Jekyll—no build setup or JavaScript framework required.

## Add a recipe

Create a YAML file in `_data/recipes/`, for example
`_data/recipes/04-recipe-name.yml`, using this structure:

```yaml
title: Recipe name
description: A short description.
category: Dinner
time: 30 min
servings: 4
ingredients:
  - First ingredient
  - Second ingredient
steps:
  - First instruction.
  - Second instruction.
source:
  label: Original recipe
  url: https://example.com/recipe
```

Use a numbered filename to control the display order. If you introduce a new
category, add it to `_data/categories.yml`. Commit and push the file; GitHub
Pages rebuilds the page automatically.

## Publish on GitHub Pages

1. Push these files to a GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

Your site will be available at `https://<username>.github.io/<repository>/`.

## Preview locally

With Jekyll installed:

```sh
jekyll serve
```
