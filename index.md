---
layout: default
title: Recipes
---

# Mise recipes

Reliable recipes for ordinary days—collected, cooked, and worth making again.

{% for recipe_entry in site.data.recipes %}
{% assign recipe = recipe_entry[1] %}
<details markdown="1">
<summary>{{ recipe.title }} · {{ recipe.time }}</summary>

{{ recipe.description }}

**Category:** {{ recipe.category }}  
**Servings:** {{ recipe.servings }}

### Ingredients

{% for ingredient in recipe.ingredients -%}
- {{ ingredient }}
{% endfor %}

### Steps

{% for step in recipe.steps -%}
1. {{ step }}
{% endfor %}

[{{ recipe.source.label }}]({{ recipe.source.url }})

</details>

{% endfor %}
