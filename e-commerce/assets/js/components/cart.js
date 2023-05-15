function cart(db, printProducts) {
  let cart = [];

  /* DOM ELEMENTS */
  const domProducts = document.querySelector(".products__container");
  const domNotify = document.querySelector(".notify");
  const domCart = document.querySelector(".cart__body");
  const domCount = document.querySelector(".cart__count--item");
  const domTotal = document.querySelector(".cart__total--item");
  const domCheckout = document.querySelector(".btn--buy");

  /* FUNCTIONS */

  function printCart() {
    console.log("Carrito:", cart);

    console.log("items:" + showItemsCount());

    console.log("Total:" + showTotal());
  }

  /* ADDS ITEMS TO CART */
  function addToCart(id, qty = 1) {
    const itemFound = cart.find((i) => i.id === id);

    if (itemFound) {
      itemFound.qty += qty;
    } else {
      cart.push({ id, qty });
    }

    printCart();
  }

  /* REMOVES ITEMS FROM CART */
  function removeFromCart(id, qty = 1) {
    const itemFound = cart.find((i) => i.id === id);
    const result = itemFound.qty - qty;

    if (result > 0) {
      itemFound.qty -= qty;
    } else {
      cart = cart.filter((i) => i.id !== id);
    }

    printCart();
  }

  /* DELTE FROM CART */
  function deleteFromCart(id) {
    cart = cart.filter((i) => i.id !== id);
    printCart();
  }

  /* SHOWS HOW MANY ITEMS I'VE ADDED */
  function showItemsCount() {
    let suma = 0;
    for (const item of cart) {
      suma += item.qty;
    }
    return suma;
  }

  /* SHOWS TOTAL  */
  function showTotal() {
    let total = 0;

    for (const item of cart) {
      const productFound = db.find((p) => p.id === item.id);
      total += item.qty * productFound.price;
    }
    return total;
  }

  /* CHEKOUT */
  function checkout() {
    for (const item of cart) {
      const productFound = db.find((p) => p.id === item.id);
      productFound.quantity -= item.qty;
    }
    cart = [];
    printCart();
    printProducts();
    window.alert("Gracias por su compra");
  }

  /* EVENTS */
}

export default cart;
