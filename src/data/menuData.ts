
export interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const popularMenuItems: MenuItem[] = [
  {
    id: 1,
    name: "Salada Bowl",
    price: 12.99,
    description: "Bowl de salada fresca com grãos, vegetais e molho especial",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 2,
    name: "Buddha Bowl",
    price: 14.99,
    description: "Mix nutritivo de legumes, proteína vegetal e molho tahine",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  },
  {
    id: 3,
    name: "Bowl Vegano",
    price: 13.99,
    description: "Combinação perfeita de vegetais orgânicos e tofu grelhado",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
  }
];
