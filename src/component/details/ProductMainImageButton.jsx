import { useContext } from "react";
import ButtonSvg from "../home/ButtonSvg";
import { DataContext } from "../../DataContext";
import { Link } from "react-router-dom";

function ProductMainImageButton({ product, image }) {
  const {
    cartProduct,
    setCartProduct,
    setDirectBuy,
    setBuyProduct,
    buyProduct,
  } = useContext(DataContext);
  console.log(cartProduct);
  return (
    <div className="w-[80%] flex flex-col gap-4 p-4">
      <img
        className="w-full h-auto object-contain p-0 "
        src={image}
        alt={product.title}
      />

      <div className="w-full grid grid-cols-2 gap-2">
        <Link to={"/checkout"}>
          <div
            onClick={() => {
              setBuyProduct([...buyProduct, product]);
              setDirectBuy(true);
            }}
          >
            <ButtonSvg
              name={"Buy Now"}
              highlight={true}
              path={
                "m480-336 128-184H494l80-280H360v320h120v144ZM400-80v-320H280v-480h400l-80 280h160L400-80Zm80-400H360h120Z"
              }
              width={"full"}
            />
          </div>
        </Link>
        <div onClick={() => setCartProduct([...cartProduct, product])}>
          <ButtonSvg
            name={"Add To Cart"}
            path={
              "M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z"
            }
            width={"full"}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductMainImageButton;
