[← All recipes]({{ "/" | relative_url }})

# {{ include.recipe.title }}

{{ include.recipe.description }}

**Category:** {{ include.recipe.category }}  
**Time:** {{ include.recipe.time }}  
**Servings:** {{ include.recipe.servings }}

## Ingredients

{% for ingredient in include.recipe.ingredients -%}
- {{ ingredient }}
{% endfor %}

## Steps

{% for step in include.recipe.steps -%}
1. {{ step }}
{% endfor %}

[{{ include.recipe.source.label }}]({{ include.recipe.source.url }})
