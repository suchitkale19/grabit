import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../DataContext";
import ProductDetails from "../component/details/ProductDetails";
import ProductMainImageButton from "../component/details/ProductMainImageButton";
import ProductImages from "../component/details/ProductImages";
import Title from "/src/component/home/Title.jsx";
import ProductSection from "../component/home/ProductSection";

function Details() {
  const { idNum } = useParams();
  const { allItems } = useContext(DataContext);
  const [image, setImage] = useState(null);

  const fiteredCategories = allItems.filter(
    (item) => item.category === "fragrances"
  );
  console.log(fiteredCategories);

  return (
    <>
      {allItems
        .filter((item) => item.id === Number(idNum))
        .map((product) => (
          <div
            className="h-full w-full gap-4 flex flex-col py-6  justify-center items-center  bg-black text-white "
            key={product.id}
          >
            <div className="h-auto w-[80%] flex items-start gap-2 rounded-2xl p-4  ">
              <div className="w-[50%]  h-auto sticky top-0  flex ">
                {product.images.length > 1 ? (
                  <ProductImages
                    setImage={setImage}
                    image={image}
                    product={product}
                  />
                ) : (
                  ""
                )}
                <ProductMainImageButton
                  setImage={setImage}
                  image={image || product.images[0]}
                  product={product}
                />
              </div>
              <ProductDetails product={product} />
            </div>
            <div className="w-full">
              <ProductSection
                allItems={allItems.filter(
                  (item) => item.category === product.category
                )}
              />
            </div>
          </div>
        ))}
    </>
  );
}
export default Details;
