import { useState } from "react";

function ProductReviews({ product }) {
  const [reviews, setReviews] = useState(product.reviews);
  const [customerReview, setCustomerReview] = useState({
    rating: "",
    comment: "",
    reviewerName: "i will set it later",
    reviewerEmail: "example@gmail.com",
    date: new Date().toISOString(),
  });

  function handleChange(e) {
    setCustomerReview({ ...customerReview, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setReviews([...reviews, customerReview]);
  }

  function convertFormatDate(date) {
    const formatted = new Date(date)
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
      .replace(",", "");
    return formatted;
  }

  return (
    <>
      <div className="w-full h-80 overflow-y-auto flex flex-col justify-center items-center gap-2 no-scrollbar">
        {reviews.map((review) => (
          <div
            className="h-fit w-[80%] border rounded-2xl p-3"
            key={review.reviewerEmail}
          >
            <h1>{review.reviewerName}</h1>
            <h2> {"⭐".repeat(review.rating)}</h2>
            <div className="flex justify-between">
              <p>{review.comment}</p>
              <p>{convertFormatDate(review.date)}</p>
            </div>
          </div>
        ))}
      </div>
      <form
        className="w-full h-auto flex justify-center items-center gap-2  "
        onSubmit={handleSubmit}
      >
        <input
          className="h-10 w-[50%] border px-2 rounded-xl border-zinc-900"
          placeholder="Give your Feedback"
          name="comment"
          onChange={(e) => handleChange(e)}
        />
        <select
          className="w-24 h-10 border border-zinc-900 rounded-xl px-2"
          name="rating"
          onChange={(e) => handleChange(e)}
        >
          {Array.from({ length: 5 }, (_, i) => i + 1).map((el) => (
            <option className="bg-black border " value={el} key={el}>
              ⭐ {el}
            </option>
          ))}
        </select>
        {/* <input
          className="w-28 h-10 border border-zinc-900 rounded-xl px-2"
          placeholder="⭐ Ratings"
          name="rating"
          onChange={(e) => handleChange(e)}
        /> */}

        <button className="w-24 h-10 border rounded-xl border-zinc-900">
          Send
        </button>
      </form>
    </>
  );
}

export default ProductReviews;
