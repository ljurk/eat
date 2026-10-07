---
layout: default
title: Rezepte
---

# Rezepte

Bewährte Rezepte für jeden Tag – gesammelt, gekocht und zum Wiederholen empfohlen.

{% for recipe_entry in site.data.recipes %}
{% assign recipe = recipe_entry[1] %}
<details markdown="1">
<summary>{{ recipe.title }} · {{ recipe.time }}</summary>

{{ recipe.description }}

**Kategorie:** {{ recipe.category }}
**Portionen:** {{ recipe.servings }}

### Zutaten

{% for ingredient in recipe.ingredients -%}

- {{ ingredient }}
{% endfor %}

### Zubereitung

{% for step in recipe.steps -%}

1. {{ step }}
{% endfor %}

[{{ recipe.source.label }}]({{ recipe.source.url }})

</details>

{% endfor %}
