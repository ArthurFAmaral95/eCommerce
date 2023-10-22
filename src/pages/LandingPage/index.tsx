import { useState, useEffect } from 'react'
import axios from 'axios'

import { Header } from '../../components/Header'
import './styles.css'

export function LandingPage() {
  const [categories, setCategories] = useState([
    {
      id: 0,
      category: ''
    }
  ])

  useEffect(() => {
    fetchCategories()
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

  return (
    <div className="container">
      <Header categories={categories} />
    </div>
  )
}
