const cartAdd = async (id, setProducts, setCart, products, cart) => {
  const product = products.find((product) => product.id === id);

  product.stock -= 1;
  await setProducts([...products]);

  let data;
  if (cart.length > 0) {
    data = cart.find((cartItem) => cartItem.id === id);
  }
  if (data) {
    data.quantity += 1;
    await setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    data = {
      id: product.id,
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image,
      rating: product.rating,
      hasPrime: product.hasPrime,
      quantity: 1,
    };
    await setCart([...cart, data]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  localStorage.setItem("products", JSON.stringify(products));
};

const cartRemove = async (id, setProducts, setCart, products, cart) => {
  const product = products.find((product) => product.id === id);
  product.stock += 1;
  await setProducts([...products]);

  if (cart.length <= 0) return;
  const data = cart.find((cartItem) => cartItem.id === id);
  if (!data) return;

  if (data.quantity === 1) {
    const newCart = cart.filter((cartItem) => cartItem.id !== id);
    await setCart([...newCart]);
    localStorage.setItem("cart", JSON.stringify(newCart));
  } else {
    data.quantity -= 1;
    await setCart([...cart]);
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  localStorage.setItem("products", JSON.stringify(products));
};

export { cartAdd, cartRemove };
