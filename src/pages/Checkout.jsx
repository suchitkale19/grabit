import Receipt from "../component/cart/Receipt";
import CartInputLabel from "../component/cart/CartInputLabel";
import { useContext } from "react";
import { DataContext } from "../DataContext";

function Checkout() {
  const { directBuy, buyProduct, cartProduct } = useContext(DataContext);
  // const str = "Credit or Debit Card";
  // console.log(str.split(" ")[0]);
  return (
    <div className="h-fit w-full bg-black ubuntu text-white flex justify-center gap-4 p-10">
      <div className="h-fit w-[50%] border border-zinc-500 rounded-2xl  ">
        <div className="text-3xl p-6  ">
          <h1>Delivering to ...</h1>
          <div className="text-xl px-6 py-6">
            <h1>Harsh Shashikant Bhosale</h1>
            <h1>Room no. 321 , Aparna Society</h1>
            <h1>Near Bhosade niwas , Antop Hill</h1>
            <h1>Gtb Nagar , Kurla</h1>
            <h1>Mumbai , Maharashtra 400067</h1>
          </div>
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
