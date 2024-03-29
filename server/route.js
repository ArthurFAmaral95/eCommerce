import express from 'express'

import * as routes from './controller.js'

const router = express.Router()

router.get('/categories', routes.categories)

router.get('/products', routes.products)

router.get('/productId/:id', routes.product)

router.get('/orders/:userId', routes.userOrders)

router.get('/:category', routes.categoryPage)

router.get('/:category/products-info', routes.productsInfo)

router.get('/:category/product-info/:id', routes.productInfo)

router.post('/registerUser', routes.registerNewUser)

router.post('/userLogin', routes.checkLogin)

router.post('/finishPurchase', routes.registerOrder)

export { router }
