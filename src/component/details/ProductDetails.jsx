import ProductInformation from "./ProductInformation.jsx";
import ProductFeatures from "./ProductFeatures";
import ProductReviews from "./ProductReviews.jsx";
import Title from "/src/component/home/Title.jsx";
function ProductDetails({ product }) {
  return (
    <div className=" w-[60%] h-auto flex flex-col gap-5 ">
      <ProductInformation product={product} />
      <ProductFeatures product={product} />
      <Title name={"Product Reviews"} />
      <ProductReviews product={product} />
    </div>
  );
}

export default ProductDetails;
