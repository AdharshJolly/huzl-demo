import { useProduct } from "../context";
import StarIcon from "../icons/StarIcon";
import Currency from "react-currency-formatter";
import { cartAdd, cartRemove } from "../utils/CartFunctions";
import AddIcon from "../icons/AddIcon";
import DeleteIcon from "../icons/DeleteIcon";
import RemoveIcon from "../icons/RemoveIcon";

function CheckoutProduct({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
  hasPrime,
  quantity,
}) {
  const { products, cart, setProducts, setCart } = useProduct();

  const addItemToBasket = () => {
    cartAdd(id, setProducts, setCart, products, cart);
  };

  const removeItemFromBasket = () => {
    cartRemove(id, setProducts, setCart, products, cart);
  };

  return (
    <div className="grid grid-cols-5">
      <img
        src={image}
        className="object-contain"
        style={{ height: "200px", width: "200px" }}
        alt=""
      />

      <div className="col-span-3 mx-5">
        <p>{title}</p>

        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>

        <p className="text-xs my-2 line-clamp-3">{description}</p>

        <div className="mb-5">
          <Currency quantity={price} currency="INR" />
          <div>Quantity: {quantity}</div>
        </div>

        {hasPrime && (
          <div className="flex items-center space-x-2 -mt-5">
            <img
              className="w-12"
              src="https://links.papareact.com/fdw"
              alt=""
            />
            <p className="text-xs text-gray-500">Free Next-day Delivery</p>
          </div>
        )}
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket} className="button">
          <AddIcon />
        </button>
        <button onClick={removeItemFromBasket} className="button">
          {quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
