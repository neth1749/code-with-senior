// src/stores/store.js
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
    state: () => ({
        products: [
            { id: 1, brand: "Hodo Foods", description: "Seeds of Change Organic Quinoa, Brown, & Red Rice", image: "src/assets/image/products/18 1.svg", price: "2.51", oldPrice: "3.00", rating: 4, discount: 17, quantity: 0 },
                { id: 2, brand: "Hodo Foods", description: "All Natural Italian-Style Chicken Meatballs", image: "src/assets/image/products/1 902.svg", price: "2.51", tag: "Hot", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 3, brand: "Hodo Foods", description: "Angie's Boomchickapop Sweet & Salty Kettle Corn", image: "src/assets/image/products/3 389454.svg", price: "2.51", tag: "Sale", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 4, brand: "Hodo Foods", description: "Foster Farms Takeout Crispy Classic Buffalo Wings", image: "src/assets/image/products/5 7.svg", price: "2.51", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 5, brand: "Hodo Foods", description: "Blue Diamond Almonds Lightly Salted Vegetables", image: "src/assets/image/products/7 1.svg", price: "2.51", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 6, brand: "Hodo Foods", description: "Chobani Complete Vanilla Greek Yogurt", image: "src/assets/image/products/8 1.svg", price: "2.51", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 7, brand: "Hodo Foods", description: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g", image: "src/assets/image/products/9 1.svg", price: "2.51", tag: "Sale", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 8, brand: "Hodo Foods", description: "Encore Seafoods Stuffed Alaskan Salmon", image: "src/assets/image/products/11 1.svg", price: "2.51", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 9, brand: "Hodo Foods", description: "Gorton's Beer Battered Fish Fillets with soft paper", image: "src/assets/image/products/12 1.svg", price: "2.51", rating: 4, oldPrice: "3.00", quantity: 0 },
                { id: 10, brand: "Hodo Foods", description: "Haagen-Dazs Caramel Cone Ice Cream Ketchup", image: "src/assets/image/products/16 1.svg", price: "2.51", tag: "Hot", rating: 4, oldPrice: "3.00", quantity: 0 },
        ],
        cart: [],
        snackbar: {
            show: false,
            message: '',
            type: 'success' // 'success' or 'error'
        },
    }),
});
