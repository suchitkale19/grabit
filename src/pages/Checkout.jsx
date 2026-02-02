import Receipt from "../component/cart/Receipt";
import CartInputLabel from "../component/cart/CartInputLabel";
import { useContext } from "react";
import { CartContext } from "../CartContext";
import { UserContext } from "../UserContext";
import ButtonSvg from "../component/home/ButtonSvg";
import { Link } from "react-router-dom";

function Checkout() {
  const { directBuy, buyProduct, cartProduct } = useContext(CartContext);
  const { loginUser, login, setLoginPage } = useContext(UserContext);
  // const str = "Credit or Debit Card";
  // console.log(str.split(" ")[0]);

  return (
    <div className="h-fit w-full bg-black ubuntu text-white flex justify-center gap-4 p-10">
      <div className="h-fit w-[50%] border border-zinc-500 rounded-2xl  ">
        <div className="text-3xl p-6  ">
          <h1>Delivering to ...</h1>
          {login ? (
            <div className="text-xl px-6 py-6">
              <h1>{loginUser[0].Fullname}</h1>
              <h1>
                {loginUser[0].BuildingAddress} , {loginUser[0].Landmark},
              </h1>
              <h1>{loginUser[0].RoadAddress},</h1>
              <h1>{loginUser[0].Area},</h1>
              <h1>
                {loginUser[0].City} , {loginUser[0].State}{" "}
                {loginUser[0].PinCode},
              </h1>
            </div>
          ) : (
            <div className="h-full w-full flex flex-col gap-2 justify-center items-center text-xl py-6">
              <h1>Log in to your account</h1>
              <Link to="/login" onClick={() => setLoginPage(false)}>
                <ButtonSvg
                  name={"Login"}
                  path={
                    "M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z"
                  }
                />
              </Link>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-10 text-xl  p-6">
          <h1 className="text-3xl">Payment methods</h1>
          <div className="px-6 flex flex-col gap-4">
            {[
              "Credit or Debit Card",
              "Net Banking",
              "Scan and Pay with UPI",
              "Pay on Delivery",
            ].map((description) => (
              <CartInputLabel description={description} key={description} />
            ))}
          </div>
        </div>
      </div>
      <Receipt
        button={false}
        renderProduct={directBuy ? buyProduct : cartProduct}
      />{" "}
      {/*think about the logic of how to know which array should render */}
    </div>
  );
}

export default Checkout;
