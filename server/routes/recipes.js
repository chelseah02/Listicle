import express from 'express'
import path from 'path'

import { fileURLToPath } from 'url'

import recipeData from '../data/recipes.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json(recipeData)
})

router.get('/:recipeId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/recipe.html'))
  })

export default router