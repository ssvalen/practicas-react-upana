import { useEffect, useState } from "react";

import productsData from "../data/products.json";

export function useStore() {
  const [products] = useState(productsData);

  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");

    return saved ? JSON.parse(saved) : [];
  });

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  const addToCart = (product) => {
    const exist = cart.find(
      (item) => item.id === product.id
    );

    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeProduct = (id) => {
    setCart(
      cart.filter((item) => item.id !== id)
    );
  };

  const categories = [
    ...new Set(
      products.map((p) => p.category)
    ),
  ];

  const filteredProducts = products.filter(
    (product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "" ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  return {
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
  };
}