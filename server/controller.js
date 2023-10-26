import { knx } from './db.js'

const categories = async (req, res) => {
  knx
    .select('*')
    .from('categories')
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const products = async (req, res) => {
  knx
    .select(
      'categories.category',
      'products.product_id',
      'products.product_name',
      'products.price',
      'products_imgs.img_path'
    )
    .from('categories')
    .join('products', { 'categories.id': 'products.category_id' })
    .join('products_imgs', {
      'products.product_id': 'products_imgs.product_id'
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const categoryPage = async (req, res) => {
  knx
    .select('products.product_name', 'products.price', 'products_imgs.img_path')
    .from(`categories`)
    .whereLike('category', `${req.params.category}`)
    .join('products', { 'categories.id': 'products.category_id' })
    .join('products_imgs', {
      'products.product_id': 'products_imgs.product_id'
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const test = async (req, res) => {
  knx
    .select('*')
    .from(`categories`)
    .whereLike('category', `${req.params.category}`)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

export { categories, products, categoryPage, test }
