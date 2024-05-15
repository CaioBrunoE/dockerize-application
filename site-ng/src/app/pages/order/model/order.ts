// export class Order {
//   id!: string;
//   client!: string;
//   orderItems!: string;
//   priceItem!: string;
//   quantityItems!: string;
//   orderTotal!: number;
//   paymentInformation!: string;
//   registryUser!: string;
//   orderStatus!: string;
//   paymentMethod!: string;
//   shippingMethod!: string;
//   shippingInformation!: string;
//   discountsAndFees!: string;
//   orderNotes!: string;
//   orderDate!: string;
//   created!: string;
//   updated!: string;
// }

export class Order {
  id!: string;
  client!: string;
  orderItems!: OrderItem[];
  orderTotal!: number;
  paymentInformation!: string;
  registryUser!: string;
  orderStatus!: string;
  paymentMethod!: string;
  shippingMethod!: string;
  shippingInformation!: string;
  discountsAndFees!: string;
  orderNotes!: string;
  orderDate!: string;
  created!: string;
  updated!: string;
}

export interface OrderItem {
  item: string;
  description: string;
  quantity: number;
  price: number;
}

