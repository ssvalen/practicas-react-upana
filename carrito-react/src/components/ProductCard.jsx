function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-xl font-bold">
          {product.name}
        </h2>

        <p className="text-gray-500">
          {product.category}
        </p>

        <p className="text-2xl font-bold text-green-600 mt-2">
          Q{product.price}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-4 py-2 rounded mt-4 w-full hover:bg-gray-800"
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default ProductCard;