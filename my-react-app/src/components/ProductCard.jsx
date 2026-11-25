import './ProductCard.css'

function ProductCard({ name }) {
  return (
    <div className="product-card">
      <h2>{name}</h2>
      <p>Available now</p>
    </div>
  )
}

export default ProductCard
