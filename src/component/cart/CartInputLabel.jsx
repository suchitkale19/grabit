function CartInputLabel({ description }) {
  const descriptionID = description.split(" ")[0];
  const banks = [
    "Choose Option",
    "State Bank of India",
    "HDFC Bank",
    "ICICI Bank",
    "Axis Bank",
    "Punjab National Bank",
    "Bank of Baroda",
    "Canara Bank",
    "Union Bank of India",
    "IDBI Bank",
    "Indian Bank",
    "Kotak Mahindra Bank",
    "IndusInd Bank",
    "Yes Bank",
    "Federal Bank",
    "IDFC First Bank",
    "RBL Bank",
    "South Indian Bank",
    "Bandhan Bank",
    "UCO Bank",
    "Central Bank of India",
  ];
  return (
    <>
      <div className="flex gap-4 ">
        <input
          className="accent-emerald-500 scale-150 cursor-pointer"
          type="radio"
          id={descriptionID}
          name="payment"
        />
        <label
          htmlFor={descriptionID}
          className="hover:underline cursor-pointer "
        >
          {description}
        </label>
      </div>
      {descriptionID !== "Net" ? (
        <img
          className="h-10  w-fit"
          src={`/src/assets/${descriptionID}.png`}
          alt="dgea"
        />
      ) : (
        <select
          className="w-44 h-10 bg-black border border-zinc-900 rounded-xl px-2 no-scrollbar"
          name="bank"
        >
          {banks.map((bank) => (
            <option value={bank} key={bank}>
              {bank}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default CartInputLabel;
