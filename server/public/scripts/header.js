const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerTitle = document.createElement('h1')
headerTitle.textContent = "Chelsea's Cookbook"

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

const headerButton = document.createElement('Home')
headerButton.textContent = 'Home'
    
headerButton.addEventListener('click', (event) => {
    window.location = '/'
  })
  
headerLeft.appendChild(headerTitle)
headerRight.appendChild(headerButton)
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)
header.appendChild(headerContainer)

