import ProductCard from "./ProductCard";

function ProductList({
  products,
  addToCart,
}) {
  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500">
        No se encontraron productos
      </p>
    );
  }

  return (
    <div className="grid md:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default ProductList;