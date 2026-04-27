import { useState } from 'react'
import WelcomePage from './components/WelcomePage'
import TopBar from './components/TopBar'
import HeroHeading from './components/HeroHeading'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import FoodGrid from './components/FoodGrid'
import BottomNav from './components/BottomNav'
import ProductDetail from './components/ProductDetail'

export default function App() {
  const [page, setPage] = useState('welcome') // 'welcome' | 'home' | 'detail'
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProduct, setSelectedProduct] = useState(null)

  const handleGetStarted = () => setPage('home')

  const handleProductClick = (product) => {
    setSelectedProduct(product)
    setPage('detail')
  }

  const handleBackToHome = () => {
    setSelectedProduct(null)
    setPage('home')
  }

  // Welcome / Onboarding screen
  if (page === 'welcome') {
    return <WelcomePage onGetStarted={handleGetStarted} />
  }

  // Product Detail screen
  if (page === 'detail' && selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={handleBackToHome} />
  }

  // Home screen
  return (
    <div className="min-h-screen bg-white font-inter antialiased max-w-lg mx-auto relative">
      <TopBar />
      <HeroHeading />
      <SearchBar />
      <CategoryFilter active={activeCategory} onSelect={setActiveCategory} />
      <FoodGrid activeCategory={activeCategory} onProductClick={handleProductClick} />
      <BottomNav />
    </div>
  )
}
