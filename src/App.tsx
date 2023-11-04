import { SideBar } from './components/SideBar'
import { Header } from './components/Header'
import { Main } from './Main'

import { useState, useEffect } from 'react'

import axios from 'axios'

import { SelectedFiltersProps } from './types/types'

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

  const [productsInfo, setProductsInfo] = useState([
    {
      item_id: 0,
      brand: '',
      type: '',
      gender: '',
      author: '',
      best_sellet: 0,
      publisher: '',
      seller: '',
      new: 0,
      size: '',
      color: '',
      department: '',
      in_stock: 0,
      storage: 0,
      age: ''
    }
  ])

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

  const [selectedFilters, setSelectedFilters] = useState<
    SelectedFiltersProps[]
  >([])

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
    setSelectedFilters([])
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

  function selectFilter(field: string, value: string | number) {
    const filter = {
      field: field,
      value: value
    }

    let addFilter = true

    for (const item of selectedFilters) {
      if (item.field === filter.field && item.value === filter.value) {
        selectedFilters.splice(selectedFilters.indexOf(item), 1)
        addFilter = false
      }
    }

    if (addFilter) {
      setSelectedFilters(prevState => [...prevState, filter])
    } else {
      setSelectedFilters([...selectedFilters])
    }
  }

  function clearFilters() {
    setSelectedFilters([])
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
        productsInfo={productsInfo}
        selectCategory={selectCategory}
        selectedCategory={selectedCategory}
        pageNumber={pageNumber}
        numberOfPages={numberOfPages}
        previousPage={previousPage}
        nextPage={nextPage}
        choosePage={choosePage}
        selectFilter={selectFilter}
        clearFilters={clearFilters}
        selectedFilters={selectedFilters}
      />
    </div>
  )
}
