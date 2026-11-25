import ProductCard from './components/ProductCard.jsx'
import './App.css'

function App() {
  return (
    <div className="products">
      <h1>My Products</h1>
      <div className="product-list">
        <ProductCard name="Notebook" />
        <ProductCard name="Water Bottle" />
        <ProductCard name="Backpack" />
      </div>
    </div>
  )
}

export default App
