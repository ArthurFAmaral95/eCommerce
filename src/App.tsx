import { SideBar } from './components/SideBar'
import { Header } from './components/Header'
import { Main } from './Main'

import { useState, useEffect } from 'react'

import axios from 'axios'

export function App() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      category: ''
    }
  ])

  const [selectedCategry, setSelectedCategry] = useState('')

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

  function handleMenu(boolean: boolean) {
    setOpenMenu(boolean)
  }

  function selectCategory(category: string) {
    setSelectedCategry(category)
  }

  return (
    <div className={`container ${openMenu ? 'menu-expanded' : ''}`}>
      <SideBar
        categories={categories}
        handleMenu={handleMenu}
        openMenu={openMenu}
        selectCategory={selectCategory}
      />

      <Header
        categories={categories}
        handleMenu={handleMenu}
        selectCategory={selectCategory}
      />

      <Main
        products={products}
        categories={categories}
        selectedCategory={selectedCategry}
      />
    </div>
  )
}
