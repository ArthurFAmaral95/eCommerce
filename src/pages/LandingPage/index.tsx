import { useState, useEffect } from 'react'
import axios from 'axios'

import { Header } from '../../components/Header'
import { Main } from '../../components/Main'

import './styles.css'

export function LandingPage() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      category: ''
    }
  ])
  const [products, setProducts] = useState([
    {
      category: '',
      product_name: '',
      price: 0,
      img_path: '',
      product_id: 0
    }
  ])

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [])

  const fetchCategories = async () => {
    axios
      .get('http://localhost:4001/categories')
      .then(response => {
        setCategories(response.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  const fetchProducts = async () => {
    axios
      .get('http://localhost:4001/products')
      .then(response => {
        setProducts(response.data)
      })
      .catch(err => {
        console.error(err)
      })
  }

  return (
    <div className="container">
      <Header categories={categories} />
      <Main products={products} />
    </div>
  )
}
