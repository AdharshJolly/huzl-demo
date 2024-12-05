import SearchIcon from "../icons/SearchIcon";
import MenuIcon from "../icons/MenuIcon";
import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import { useProduct } from "../context";

function Header() {
  const { cart } = useProduct();

  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <a href={`/`}>
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <img
              src="https://links.papareact.com/f90"
              className="cursor-pointer object-contain w-150 h-40"
              style={{ width: "150px", height: "40px" }}
              alt=""
            />
          </div>
        </a>

        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow rounded-l-md flex-shrink focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>

        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick="" className="link">
            <p>Hello Adharsh</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>

          <a href={"/orders/"}>
            <div className="link">
              <p>Returns</p>
              <p className="font-extrabold md:text-sm">& Orders</p>
            </div>
          </a>

          <a href={`/cart`}>
            <div className="relative link flex place-items-center">
              <span className="absolute top-0 right-0 md:right-10 h-4 w-4 rounded-full bg-yellow-400 text-center text-black font-bold">
                {cart.length}
              </span>

              <ShoppingCartIcon className="h-10" />
              <p className="hidden md:inline font-extrabold md:text-sm mt-2">
                Basket
              </p>
            </div>
          </a>
        </div>
      </div>

      <div className="flex items-center bg-amazon_blue-light text-white text-sm space-x-3 p-2 pl-6">
        <p className="link flex items-center">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Prime</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
