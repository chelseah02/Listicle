const renderRecipe = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
    console.log("In recipe.js!")
    const response = await fetch('/recipes')
    const data = await response.json()

    const recipeContent = document.getElementById('recipe-content')

    let recipe
    
    recipe = data.find(recipe => recipe.id === requestedID)

    if (recipe) {
        document.getElementById('image').src = recipe.image
        document.getElementById('name').textContent = recipe.name
        document.getElementById('submittedBy').textContent = 'Submitted By: ' + recipe.submittedBy
        document.getElementById('pricePoint').textContent = 'Price: ' + recipe.pricePoint
        document.getElementById('audience').textContent = 'Great for: ' + recipe.audience
        document.getElementById('description').textContent = recipe.description
        document.title = `Recipe - ${recipe.name}`
    }
    else {
        const textUnavailable = document.createElement('h2')
        textUnavailable.textContent = "No Recipes Available 😞"
        recipeContent.appendChild(textUnavailable)
    }
}

renderRecipe()