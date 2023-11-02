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
  const [selectedCategory, setSelectedCategory] = useState('')

  const [products, setProducts] = useState([
    {
      category: '',
      product_name: '',
      price: 0,
      img_path: '',
      product_id: 0
    }
  ])
  const [productsOfPage, setProductsOfPage] = useState([])

  const [productsInfo, setProductsInfo] = useState([])

  const [openMenu, setOpenMenu] = useState(false)

  const [pageNumber, setPageNumber] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const productsPerPage = 5

  const arraysOfProductsOfPages: any = []
  arraysOfProductsOfPages.push(new Array())
  let pageIndex = 0
  products.map(product => {
    if ((products.indexOf(product) + 1) % productsPerPage === 0) {
      arraysOfProductsOfPages[pageIndex].push(product)
      pageIndex++
      arraysOfProductsOfPages.push(new Array())
    } else {
      arraysOfProductsOfPages[pageIndex].push(product)
    }
  })

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [selectedCategory])

  useEffect(() => {
    setPages()
    setPageNumber(1)
    updateProductsOfPage()
  }, [products])

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
    if (selectedCategory === '') {
      axios
        .get('http://localhost:4001/products')
        .then(response => {
          setProducts(response.data)
        })
        .catch(err => {
          console.error(err)
        })
    } else {
      axios
        .get(`http://localhost:4001/${selectedCategory}`)
        .then(response => {
          setProducts(response.data)
        })
        .catch(err => {
          console.error(err)
        })

      if (selectedCategory === 'TV & Audio') {
        axios
          .get(`http://localhost:4001/tv_audio/products-info`)
          .then(response => {
            setProductsInfo(response.data)
          })
          .catch(err => {
            console.error(err)
          })
      } else {
        axios
          .get(`http://localhost:4001/${selectedCategory}/products-info`)
          .then(response => {
            setProductsInfo(response.data)
          })
          .catch(err => {
            console.error(err)
          })
      }
    }
  }

  function handleMenu(boolean: boolean) {
    setOpenMenu(boolean)
  }

  function selectCategory(category: string) {
    setSelectedCategory(category)
  }

  function updateProductsOfPage() {
    setProductsOfPage(arraysOfProductsOfPages)
  }

  function setPages() {
    if (products.length % productsPerPage !== 0) {
      setNumberOfPages(Math.floor(products.length / productsPerPage) + 1)
    } else {
      setNumberOfPages(products.length / 5)
    }
  }

  function previousPage() {
    if (pageNumber === 1) {
      return
    } else {
      setPageNumber(n => n - 1)
    }
  }

  function nextPage() {
    if (pageNumber === numberOfPages) {
      return
    } else {
      setPageNumber(n => n + 1)
    }
  }

  function choosePage(number: number) {
    setPageNumber(number)
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
        productsOfPage={productsOfPage[pageNumber - 1]}
        selectCategory={selectCategory}
        selectedCategory={selectedCategory}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
        previousPage={previousPage}
        nextPage={nextPage}
        choosePage={choosePage}
      />
    </div>
  )
}
