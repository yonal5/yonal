export function loadCart() {

  return JSON.parse(localStorage.getItem("cart") || "[]");

}

export function saveCart(cart) {

  localStorage.setItem("cart", JSON.stringify(cart));

}

export function addToCart(product, qty = 1) {

  let cart = loadCart();

  const index = cart.findIndex(
    i => i.productID === product.productID
  );

  if (index >= 0)
    cart[index].quantity += qty;
  else
    cart.push({ ...product, quantity: qty });

  saveCart(cart);

}

export function getTotal() {

  const cart = loadCart();

  return cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

}
