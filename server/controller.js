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
    .select('*')
    .from('products')
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const test = async (req, res) => {
  knx
    .select('products.product_name', 'products.price', 'categories.category')
    .from('products')
    .join('categories', { 'categories.id': 'products.category_id' })
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

export { categories, products, test }
