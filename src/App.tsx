import { SideBar } from './components/SideBar'
import { Header } from './components/Header'
import { Main } from './Main'

import { useState, useEffect } from 'react'

import axios from 'axios'

import {
  SelectedFiltersProps,
  ProductsArrayProps,
  ProductsProps,
  CondensededFilters,
  Item,
  ProductsInfoProps,
  CartProductProps
} from './types/types'
import { Footer } from './components/Footer'

export const productsPerPage = 5

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

  const [individualProduct, setIndividualProduct] = useState<ProductsProps>({
    category: '',
    product_name: '',
    price: 0,
    img_path: '',
    product_id: 0
  })

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

  const [individualProductInfo, setIndividualProductInfo] = useState<
    ProductsInfoProps[]
  >([
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

  const [filteredProducts, setFilteredProducts] = useState<
    ProductsArrayProps[]
  >([])

  const [openMenu, setOpenMenu] = useState(false)
  const [openFilters, setOpenFilters] = useState(false)

  const [pageNumber, setPageNumber] = useState(1)
  const [numberOfPages, setNumberOfPages] = useState(1)

  const [selectedFilters, setSelectedFilters] = useState<
    SelectedFiltersProps[]
  >([])

  const [searchedTerm, setSearchedTerm] = useState('')

  const [listOfSearchMatches, setListOfSearchMatches] = useState<
    ProductsProps[]
  >([])

  const [cartProducts, setCartProducts] = useState<CartProductProps[]>([
    {
      configs: [{ id: '', value: '' }],
      product: {
        category: '',
        product_name: '',
        price: 0,
        img_path: '',
        product_id: 0
      }
    }
  ])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    fetchCategories()
    fetchProducts()
  }, [selectedCategory])

  useEffect(() => {
    setPages()
    setPageNumber(1)
    updateProductsOfPage()
  }, [products])

  useEffect(() => {
    handleFilterOfProducts()
  }, [selectedFilters])

  useEffect(() => {
    updateProductsOfPage()
    setPages()
    setPageNumber(1)
  }, [filteredProducts])

  useEffect(() => {
    performSearch(searchedTerm)
  }, [searchedTerm])

  useEffect(() => {
    populateCartProducts()
  }, [])

  useEffect(() => {
    sumCartTotal()
  }, [cartProducts])

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

  function handleFilters(boolean: boolean) {
    setOpenFilters(boolean)
  }

  const searchProductInput: HTMLElement | null = document.querySelector(
    'input#search-product'
  )

  function selectCategory(category: string) {
    setSelectedCategory(category)
    setSelectedFilters([])
    setSearchedTerm('')
    ;(searchProductInput as HTMLInputElement).value = ''
  }

  function updateProductsOfPage() {
    if (searchedTerm !== '') {
      const arraysOfProductsOfPages: any = []
      arraysOfProductsOfPages.push(new Array())
      let pageIndex = 0
      listOfSearchMatches.map(product => {
        if (
          (listOfSearchMatches.indexOf(product) + 1) % productsPerPage ===
          0
        ) {
          arraysOfProductsOfPages[pageIndex].push(product)
          pageIndex++
          arraysOfProductsOfPages.push(new Array())
        } else {
          arraysOfProductsOfPages[pageIndex].push(product)
        }
      })
      setProductsOfPage(arraysOfProductsOfPages)
    } else if (selectedFilters.length === 0) {
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
      setProductsOfPage(arraysOfProductsOfPages)
    } else {
      const arraysOfProductsOfPages: any = []
      arraysOfProductsOfPages.push(new Array())
      let pageIndex = 0
      filteredProducts.map(product => {
        if ((filteredProducts.indexOf(product) + 1) % productsPerPage === 0) {
          arraysOfProductsOfPages[pageIndex].push(product)
          pageIndex++
          arraysOfProductsOfPages.push(new Array())
        } else {
          arraysOfProductsOfPages[pageIndex].push(product)
        }
      })
      setProductsOfPage(arraysOfProductsOfPages)
    }
  }

  function setPages() {
    if (searchedTerm !== '') {
      if (listOfSearchMatches.length % productsPerPage !== 0) {
        setNumberOfPages(
          Math.floor(listOfSearchMatches.length / productsPerPage) + 1
        )
      } else {
        setNumberOfPages(listOfSearchMatches.length / productsPerPage)
      }
    } else if (selectedFilters.length === 0) {
      if (products.length % productsPerPage !== 0) {
        setNumberOfPages(Math.floor(products.length / productsPerPage) + 1)
      } else {
        setNumberOfPages(products.length / productsPerPage)
      }
    } else {
      if (filteredProducts.length % productsPerPage !== 0) {
        setNumberOfPages(
          Math.floor(filteredProducts.length / productsPerPage) + 1
        )
      } else {
        setNumberOfPages(filteredProducts.length / productsPerPage)
      }
    }
  }

  function previousPage() {
    if ((productsOfPage[0] as any)?.length === 0) {
    } else if (pageNumber === 1) {
      return
    } else {
      setPageNumber(n => n - 1)
    }
  }

  function nextPage() {
    if ((productsOfPage[0] as any)?.length === 0) {
    } else if (pageNumber === numberOfPages) {
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

  function handleFilterOfProducts() {
    const uniqueFilterFields: string[] = []
    const condensededFilters: CondensededFilters[] = []

    selectedFilters.map(filter => {
      if (!uniqueFilterFields.includes(filter.field)) {
        uniqueFilterFields.push(filter.field)
      }
    })

    uniqueFilterFields.map(field => {
      const filterValues: string | number[] = []
      selectedFilters.map(filter => {
        if (filter.field === field) {
          filterValues.push(filter.value)
        }
      })

      const newFilter = {
        field: field,
        values: filterValues
      }

      condensededFilters.push(newFilter)
    })

    const arraysOfFilteredProducts = []

    for (const filter of condensededFilters) {
      const filteredProductsIds: number[] = []
      for (const value of filter.values) {
        for (const item of productsInfo) {
          for (const info in item) {
            if (
              info === filter.field &&
              (item as Item)[info] === value &&
              !filteredProductsIds.includes(item.item_id)
            ) {
              filteredProductsIds.push(item.item_id)
            }
          }
        }
      }
      arraysOfFilteredProducts.push(filteredProductsIds)
    }

    const finalFilteredProductsIds: number[] = []

    if (arraysOfFilteredProducts.length === 0) {
    } else {
      for (const base_id of arraysOfFilteredProducts[0]) {
        let isInAllFilters = true
        let countOfMatches = 1
        for (let i = 1; i < arraysOfFilteredProducts.length; i++) {
          for (const id of arraysOfFilteredProducts[i]) {
            if (base_id === id) {
              countOfMatches++
            }
          }
        }

        if (countOfMatches !== arraysOfFilteredProducts.length) {
          isInAllFilters = false
        }

        if (isInAllFilters) {
          finalFilteredProductsIds.push(base_id)
        }
      }
    }

    const filteredProductsToAdd: ProductsArrayProps[] = []

    products.map((product: ProductsProps | any) => {
      if (finalFilteredProductsIds.includes(product.product_id)) {
        filteredProductsToAdd.push(product)
      }
    })

    setFilteredProducts(filteredProductsToAdd)
  }

  const searchList = document.querySelector('#search-list')

  function handleSearchInput(string: string) {
    setSearchedTerm(string)
    searchList?.classList.remove('hidden')
  }

  function performSearch(searchTerm: string) {
    const productsToAdd: ProductsProps[] = []
    if (searchedTerm.length === 0) {
    } else {
      products.map(product => {
        if (
          product.product_name.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          productsToAdd.push(product)
        }
      })
    }
    setListOfSearchMatches(productsToAdd)
  }

  function handleFormSubmit() {
    const formBtn: HTMLElement | null =
      document.querySelector('#search-form-btn')
    const form = document.querySelector('#search-form')

    updateProductsOfPage()
    setPages()
    setPageNumber(1)

    formBtn?.click()
    ;(form as HTMLFormElement)?.reset()
    searchList?.classList.add('hidden')
  }

  function selectProduct(productID: number, category: string) {
    axios
      .get(`http://localhost:4001/productId/${productID}`)
      .then(response => {
        setIndividualProduct(response.data[0])
      })
      .catch(error => {
        console.error(error)
      })

    if (category === 'TV & Audio') {
      axios
        .get(`http://localhost:4001/tv_audio/product-info/${productID}`)
        .then(response => {
          setIndividualProductInfo(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    } else {
      axios
        .get(`http://localhost:4001/${category}/product-info/${productID}`)
        .then(response => {
          setIndividualProductInfo(response.data)
        })
        .catch(error => {
          console.error(error)
        })
    }

    setSearchedTerm('')
  }

  function populateCartProducts() {
    setCartProducts(JSON.parse(localStorage.getItem('order') || 'false'))
  }

  function sumCartTotal() {
    let total = 0
    for (const product of cartProducts) {
      let productTotal =
        Number(product.product.price) * Number(product.configs[0].value)

      total += productTotal
    }
    setTotal(Number(total.toFixed(2)))
  }

  function removeCartItem(id: number) {
    const updatedCart: CartProductProps[] = []

    cartProducts.map(product => {
      if (product.product.product_id !== id) {
        updatedCart.push(product)
      }
    })

    localStorage.setItem('order', JSON.stringify(updatedCart))
    populateCartProducts()
  }

  return (
    <div
      className={
        openMenu || openFilters ? 'container menu-expanded' : 'container'
      }
    >
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
        handleSearchInput={handleSearchInput}
        listOfSearchMatches={listOfSearchMatches}
        selectedCategory={selectedCategory}
        handleFormSubmit={handleFormSubmit}
        searchedTerm={searchedTerm}
        updateProductsOfPage={updateProductsOfPage}
        setPages={setPages}
        setPageNumber={setPageNumber}
        selectProduct={selectProduct}
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
        handleFilters={handleFilters}
        openFilters={openFilters}
        selectProduct={selectProduct}
        product={individualProduct}
        productInfo={individualProductInfo}
        cartProducts={cartProducts}
        removeCartItem={removeCartItem}
        total={total}
      />
      <Footer />
    </div>
  )
}
