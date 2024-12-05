import { useState } from "react";
import StarIcon from "../icons/StarIcon";
import Currency from "react-currency-formatter";
import { useProduct } from "../context";
import { cartAdd } from "../utils/CartFunctions";

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
  const { setProducts, setCart, products, cart } = useProduct();

  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  );

  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <img
        src={image}
        objectFit="contain"
        alt=""
        style={{ height: "200px", width: "200px" }}
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>

      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-day Delivery</p>
        </div>
      )}

      <button
        onClick={() => cartAdd(id, setProducts, setCart, products, cart)}
        className="mt-auto button"
      >
        Add To Basket
      </button>
    </div>
  );
}

export default Product;
