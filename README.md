# Mise recipes

A recipe collection built for GitHub Pages. Recipes are stored as separate YAML files and rendered as Markdown by Jekyll using the built-in `minima` theme.

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

Use numbered YAML filenames to control the order on the main page. Each recipe
is rendered automatically as a collapsible section, so no separate Markdown
page is needed. Commit and push the YAML file; GitHub Pages rebuilds the site.

## Publish on GitHub Pages

1. Push these files to a GitHub repository.
2. Open **Settings → Pages** in the repository.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and `/ (root)`, then save.

Your site will be available at `https://<username>.github.io/<repository>/`.

## Preview locally

Install Jekyll and the `minima` theme, then start the local server:

```sh
gem install jekyll minima
jekyll serve
```
