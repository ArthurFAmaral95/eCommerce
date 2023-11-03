import express from 'express'

import * as routes from './controller.js'

const router = express.Router()

router.get('/categories', routes.categories)

router.get('/products', routes.products)

router.get('/:category', routes.categoryPage)

router.get('/:category/products-info', routes.productsInfo)

export { router }
