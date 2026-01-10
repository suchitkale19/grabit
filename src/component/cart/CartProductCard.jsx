import { useContext } from "react";
import { DataContext } from "../../DataContext";
import Counter from "./Counter";

function CartProductCard() {
  const { cartProduct, setCartProduct } = useContext(DataContext);
  if (cartProduct.length === 0)
    return (
      <h1 className="h-96 w-[50%] text-2xl flex flex-col justify-center items-center gap-4">
        You haven't added products to your cart
      </h1>
    );
  return (
    <div className="h-fit w-[50%] flex flex-col gap-4 ">
      {cartProduct.map((product) => (
        <div
          key={product.title}
          className="h-fit w-full pl-6 pr-10   border border-zinc-900 rounded-2xl flex justify-between items-center"
        >
          <div className="flex items-center gap-2">
            <img className="w-36" src={product.thumbnail} alt={product.title} />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">{product.title} </h1>
              <h1>{product.brand} </h1>
              <Counter />
            </div>
            <img
              className="border border-zinc-900  rounded-full p-2"
              src="/src/assets/trash.svg"
              alt="trash"
              onClick={() =>
                setCartProduct(
                  cartProduct.filter((cartItem) => cartItem != product)
                )
              }
            />
          </div>
          <h1 className="text-2xl font-bold">
            ₹ {Math.round(product.price * 90)}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default CartProductCard;
