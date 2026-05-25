import { useState } from "react";

function ProductForm({ addProduct }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.price || !form.category) return;

    addProduct({
      id: Date.now(),
      ...form,
      price: Number(form.price),
    });

    setForm({
      name: "",
      price: "",
      category: "",
      image: "",
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md mb-8"
    >
      <h2 className="text-2xl font-bold mb-4">
        Agregar Producto
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Nombre"
          className="border p-2 rounded"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Precio"
          className="border p-2 rounded"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Categoría"
          className="border p-2 rounded"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="URL Imagen"
          className="border p-2 rounded"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
        />
      </div>

      <button
        className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
      >
        Guardar Producto
      </button>
    </form>
  );
}

export default ProductForm;