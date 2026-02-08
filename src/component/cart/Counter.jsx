import { useContext } from "react";
import { CartContext } from "../../CartContext";
function Counter({ product }) {
  const { setCartProduct } = useContext(CartContext);

  return (
    <div className="flex gap-1 items-center">
      <button
        className="border w-6 h-6 text-center border-zinc-800 rounded-lg"
        onClick={() =>
          setCartProduct((prev) =>
            prev
              .map((p) =>
                p.id === product.id
                  ? { ...p, quantityAdded: (p.quantityAdded || 1) - 1 }
                  : p,
              )
              .filter((p) => p.quantityAdded > 0),
          )
        }
      >
        -
      </button>

      <h1 className="w-12 flex items-center justify-center border border-zinc-800 h-8 rounded-xl">
        {product.quantityAdded || 1}
      </h1>
      <button
        className="border w-6 h-6 text-center border-zinc-800 rounded-lg"
        onClick={() =>
          setCartProduct((prev) =>
            prev.map((p) =>
              p.id === product.id
                ? { ...p, quantityAdded: (p.quantityAdded || 1) + 1 }
                : p,
            ),
          )
        }
      >
        +
      </button>
    </div>
  );
}

export default Counter;
