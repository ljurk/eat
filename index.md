---
layout: default
title: Recipes
---

# Mise recipes

Reliable recipes for ordinary days—collected, cooked, and worth making again.

{% for recipe_entry in site.data.recipes %}
{% assign recipe = recipe_entry[1] %}
- [**{{ recipe.title }}**]({{ recipe.url | relative_url }}) — {{ recipe.description }}
{% endfor %}
