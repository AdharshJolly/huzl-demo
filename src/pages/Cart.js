import { useNavigate } from "react-router";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { useProduct } from "../context";

export default function Cart() {
  const { cart } = useProduct();
  const navigate = useNavigate();

  let total;
  if (cart.length <= 0) {
    total = 0;
  } else {
    total = cart.map((item) => item.price * item.quantity);
  }

  return (
    <div className="bg-gray-100">
      <Header />

      <main className="lg:flex max-w-screen-2xl mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <img
            src="https://links.papareact.com/ikj"
            alt=""
            className="object-contain"
            style={{ width: "1020px", height: "250px" }}
          />

          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">
              {cart.length === 0
                ? "Your Amazon Basket is empty"
                : "Your Shopping Basket"}
            </h1>

            {cart.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                title={item.title}
                description={item.description}
                price={item.price}
                category={item.category}
                image={item.image}
                rating={item.rating}
                hasPrime={item.hasPrime}
                quantity={item.quantity}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col bg-white p-10 shadow-md">
          {cart.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({cart.length} {cart.length > 1 ? "items" : "item"}) :{" "}
                <span className="font-bold">Rs {total}</span>
              </h2>

              <button
                role="link"
                onClick={() => navigate("/")}
                className={`button mt-2`}
              >
                Proceed To Checkout
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
