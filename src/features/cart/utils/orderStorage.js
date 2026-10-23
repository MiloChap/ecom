function getOrders() {
  const savedOrders = localStorage.getItem("orders");
  return savedOrders ? JSON.parse(savedOrders) : [];
}

export function saveOrder(order) {
  const orders = getOrders();
  localStorage.setItem("orders", JSON.stringify([...orders, order]));
}

export function getOrder(id) {
  const orders = getOrders();
  return orders.find((order) => order.id === Number(id));
}
