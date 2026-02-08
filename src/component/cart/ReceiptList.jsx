function ReceiptList({ renderProduct }) {
  return (
    <>
      {Array.isArray(renderProduct) ? (
        renderProduct.map((product) => (
          <div className="h-10 flex justify-between items-center px-2">
            <h1>{product.title}</h1>
            <div className=" flex gap-12 ">
              <b>{product.quantityAdded || 1}</b>
              <b className="h-fit w-24 text-end">
                ₹{" "}
                {Math.round(
                  product.price * (90 * (product.quantityAdded || 1)),
                )}
              </b>
            </div>
          </div>
        ))
      ) : (
        <div className="h-10 flex justify-between items-center px-2">
          <h1>{renderProduct.title}</h1>
          <div className=" flex gap-12 ">
            <b>1</b>
            <b className="h-fit w-24 text-end">
              ₹ {Math.round(renderProduct.price * 90)}
            </b>
          </div>
        </div>
      )}
    </>
  );
}

export default ReceiptList;
