const renderRecipes = async () => {
    const response = await fetch('/recipes')
    const data = await response.json()

    const mainContent = document.getElementById('main-content')

    if (data) {
        console.log(data)
        data.map(recipe => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${recipe.image})`

            const name = document.createElement('h3')
            name.textContent = recipe.name
            bottomContainer.appendChild(name)

            const pricePoint = document.createElement('p')
            pricePoint.textContent = 'Price: ' + recipe.pricePoint
            bottomContainer.appendChild(pricePoint)

            const audience = document.createElement('p')
            audience.textContent = 'Great For: ' + recipe.audience
            bottomContainer.appendChild(audience)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/recipes/${recipe.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)

            mainContent.appendChild(card)
        })
    }
    else {
        const textUnavailable = document.createElement('h2')
        textUnavailable.textContent = "No Recipes Available 😞"
        mainContent.appendChild(textUnavailable)
    }
}

const requestedUrl = window.location.href.split('/').pop()

if (requestedUrl) {
  window.location.href = '../404.html'
}
else {
  renderRecipes()
}