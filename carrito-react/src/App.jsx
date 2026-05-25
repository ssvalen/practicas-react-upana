import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Search from "./components/Search";
import CategoryFilter from "./components/CategoryFilter";

import { useStore } from "./hooks/useStore";

function App() {
  const {
    cart,
    search,
    category,
    categories,
    filteredProducts,

    setSearch,
    setCategory,

    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeProduct,
  } = useStore();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">
          Carrito UPANA
        </h1>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <Search
            search={search}
            setSearch={setSearch}
          />

          <CategoryFilter
            categories={categories}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <ProductList
          products={filteredProducts}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          increaseQuantity={increaseQuantity}
          decreaseQuantity={decreaseQuantity}
          removeProduct={removeProduct}
        />
      </div>
    </div>
  );
}

export default App;