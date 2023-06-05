export const cartCache = (selectedProducts, setupTime) => {
  const hours = 1;
  const now = new Date().getTime();
  const cache = [selectedProducts, now];
  if (setupTime == null) {
    localStorage.setItem("productsInCart", JSON.stringify(cache));
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.removeItem("productsInCart");
    } else {
      localStorage.setItem("productsInCart", JSON.stringify(cache));
    }
  }
};
