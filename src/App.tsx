import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { CategoryPage } from './pages/CategoryPage'

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/test" element={<CategoryPage />} />
      </Routes>
    </Router>
  )
}
