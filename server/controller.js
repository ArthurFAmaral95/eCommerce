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
    .select(
      'categories.category',
      'products.product_id',
      'products.product_name',
      'products.price',
      'products_imgs.img_path'
    )
    .from(`categories`)
    .whereLike('category', `${req.params.category}`)
    .join('products', { 'categories.id': 'products.category_id' })
    .join('products_imgs', {
      'products.product_id': 'products_imgs.product_id'
    })
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const productsInfo = async (req, res) => {
  knx
    .select('*')
    .from(`${req.params.category}`)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const product = async (req, res) => {
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
    .where('products.product_id', req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const productInfo = async (req, res) => {
  knx
    .select('*')
    .from(`${req.params.category}`)
    .where('item_id', req.params.id)
    .then(data => res.json(data))
    .catch(err => res.json(err))
}

const registerNewUser = async (req, res) => {
  knx
    .insert([
      {
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      }
    ])
    .into('users')
    .then(() =>
      res.json({
        message: `Welcome to e-Commerce, ${req.body.firstName} ${req.body.lastName}`,
        user: {
          firstName: req.body.firstName,
          lastName: req.body.lastName
        }
      })
    )
    .catch(err => {
      res.status(400).send(err)
    })
}

const checkLogin = async (req, res) => {
  knx
    .select('*')
    .from('users')
    .whereLike('email', `${req.body.email}`)
    .then(user => {
      if (user.length === 0) {
        return res
          .status(400)
          .send({ error: 'email', message: 'User not found.' })
      } else if (user[0].password !== req.body.password) {
        return res
          .status(400)
          .send({ error: 'password', message: 'Wrong password.' })
      } else {
        res.json({
          message: `Welcome to e-Commerce, ${user[0].first_name} ${user[0].last_name}`,
          user: {
            firstName: user[0].first_name,
            lastName: user[0].last_name
          }
        })
      }
    })
    .catch(err => {
      res.json(err)
    })
}

export {
  categories,
  products,
  categoryPage,
  productsInfo,
  product,
  productInfo,
  registerNewUser,
  checkLogin
}
