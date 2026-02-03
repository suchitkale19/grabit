import { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import { useNavigate } from "react-router-dom";

function ProductReviews({ product }) {
  const navigate = useNavigate();
  const { loginUser, login } = useContext(UserContext);
  const [reviews, setReviews] = useState(product.reviews);
  const [customerReview, setCustomerReview] = useState({
    rating: "",
    comment: "",
    reviewerName: login ? loginUser.Fullname : "",
    reviewerEmail: login ? loginUser.Email : "",
    date: new Date().toISOString(),
  });

  function handleChange(e) {
    setCustomerReview({ ...customerReview, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    login ? setReviews([...reviews, customerReview]) : navigate("/login");
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
            key={review.date + review.reviewerName + review.rating}
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
          {["Rating", 1, 2, 3, 4, 5].map((el) => (
            <option
              className="bg-black border "
              value={el === "Rating" ? "" : el}
              key={el}
            >
              ⭐ {el}
            </option>
          ))}
        </select>
        <button className="w-24 h-10 border rounded-xl border-zinc-900">
          Send
        </button>
      </form>
    </>
  );
}

export default ProductReviews;
