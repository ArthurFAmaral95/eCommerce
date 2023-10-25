import { useState, useEffect } from 'react'
import axios from 'axios'

import { Header } from '../../components/Header'
import { Main } from '../../components/Main'

import './styles.css'
import { SideBar } from '../../components/SideBar'

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

  const [openMenu, setOpenMenu] = useState(false)

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

  function handleMenu() {
    setOpenMenu(!openMenu)
  }

  return (
    <div className={`container ${openMenu ? 'menu-expanded' : ''}`}>
      <SideBar
        categories={categories}
        handleMenu={handleMenu}
        openMenu={openMenu}
      />
      <Header categories={categories} handleMenu={handleMenu} />
      <Main products={products} categories={categories} />
    </div>
  )
}
