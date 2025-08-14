export interface NavDropdownItem {
  name: string;
  href: string;
  description?: string;
}

export interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: NavDropdownItem[];
  icon?: string; // Optional icon for the navigation item
  isActive?: boolean; // Optional property to indicate if the item is active
}

export const navItems: NavItem[] = [
  {name: 'All Poducts', href: '/products',},
  {name: 'CBD Buds', href: '/buds', hasDropdown: true, dropdownItems: [
    {name:'THC-9', href: '/buds/thc-9'},
    {name:'HHC-10', href: '/buds/HHC-10'},
  ]},
  {name: 'CBD Vapes', href: '/vapes', hasDropdown: true, dropdownItems: [
    {name:'Vape pods', href: '/vapes/pods'},
    {name:'Vape Cartridges', href: '/vapes/cartridges'},
    {name:'Vape Batteries', href: '/vapes/batteries'},
  ]},
  {name: 'CBD Oils', href: '/oils', hasDropdown: true, dropdownItems: [
    {name:'Full Spectrum', href: '/oils/full-spectrum'},
    {name:'Broad Spectrum', href: '/oils/broad-spectrum'},
    {name:'Isolate', href: '/oils/isolate'},
  ]},
  {name:'Accesssories', href: '/accessories', hasDropdown: true, dropdownItems: [
    {name:'Grinders', href: '/accessories/grinders'},
    {name:'Rolling Papers', href: '/accessories/rolling-papers'},
    {name:'Storage Containers', href: '/accessories/storage-containers'},
  ]},
]

export const productCategories = [
  { key: "all", label: "All Products" },
  { key: "buds", label: "CBD Buds" },
  { key: "vapes", label: "CBD Vapes" },
  { key: "oils", label: "CBD Oils" },
  { key: "accessories", label: "Accessories" },
];
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CartItem {
  productId: string;
  quantity: number;
}
export interface Cart {
  userId: string;
  items: CartItem[];
  total: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum OrderStatus {
  Pending = 'pending',
  Completed = 'completed',
  Cancelled = 'cancelled',
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  stock: number;
  rating: number;
  reviews: number;
  createdAt: Date;
  updatedAt: Date;
}

