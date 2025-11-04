import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}


export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-IN', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const loadScript = (src) => {
  return new Promise((resolve) => {
    const script = document.createElement('script')
    script.src = src;
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

export const initialState = {
  userInfo: null,
  addresses: [],
  completedOrders: [],
  pendingOrders: [],
  products: [],
  cartItems: [],
  restaurants: [],
  subscriptions: [],
  vegMode: false,
  category: "dish",
  moveIndex: null,
  menuItems: [],
  showMenu: false,
  showMenuRestaurant: {},
  orderProducts: [],
  displayProducts: [],
  orderAmount: 0,
  deliveryCharge: 20,
  platFormFee: 1.5,
  gst: 0,
  orderAddress: null,
  paymentMode: "online",
  isOrderFromCart: false,
}

