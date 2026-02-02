function ReceiptList({ renderProduct }) {
  return (
    <>
      {Array.isArray(renderProduct) ? (
        renderProduct.map((product) => (
          <div className="h-10 flex justify-between items-center px-2">
            <h1>{product.title}</h1>
            <b>₹ {Math.round(product.price * 90)}</b>
          </div>
        ))
      ) : (
        <div className="h-10 flex justify-between items-center px-2">
          <h1>{renderProduct.title}</h1>
          <b>₹ {Math.round(renderProduct.price * 90)}</b>
        </div>
      )}
    </>
  );
}

export default ReceiptList;
