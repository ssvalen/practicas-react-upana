function Cart({
  cart,
  increaseQuantity,
  decreaseQuantity,
  removeProduct,
}) {
  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const impuesto = subtotal * 0.12;

  const total = subtotal + impuesto;

  return (
    <div className="bg-white p-6 rounded-xl shadow-md mt-10">
      <h2 className="text-2xl font-bold mb-4">
        Carrito
      </h2>

      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded flex justify-between items-center"
              >
                <div>
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p>Q{item.price}</p>

                  <p>
                    Cantidad: {item.quantity}
                  </p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() =>
                      increaseQuantity(item.id)
                    }
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    +
                  </button>

                  <button
                    onClick={() =>
                      decreaseQuantity(item.id)
                    }
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                  >
                    -
                  </button>

                  <button
                    onClick={() =>
                      removeProduct(item.id)
                    }
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-right">
            <p>
              Subtotal: Q
              {subtotal.toFixed(2)}
            </p>

            <p>
              Impuestos: Q
              {impuesto.toFixed(2)}
            </p>

            <h3 className="text-2xl font-bold">
              Total: Q{total.toFixed(2)}
            </h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;