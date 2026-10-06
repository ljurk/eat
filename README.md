# Mise recipes

A recipe collection built for GitHub Pages. Recipes are stored as separate YAML files and rendered as Markdown by Jekyll using the built-in `minima` theme.

## Add a recipe

Create a YAML file in `_data/recipes/`, for example
`_data/recipes/04-recipe-name.yml`, using this structure:

```yaml
title: Recipe name
url: /recipes/recipe-name/
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

Then create its Markdown page at `recipes/recipe-name.md`:

```markdown
---
layout: default
title: Recipe name
permalink: /recipes/recipe-name/
recipe_id: 04-recipe-name
---

{% raw %}{% assign recipe = site.data.recipes[page.recipe_id] %}
{% include recipe.md recipe=recipe %}{% endraw %}
```

The `recipe_id` must match the YAML filename without `.yml`. Use numbered YAML
filenames to control the order on the main page. Commit and push both files;
GitHub Pages rebuilds the site automatically.

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
