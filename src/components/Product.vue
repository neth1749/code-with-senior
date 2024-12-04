<template>
    <div class="flex flex-wrap justify-center gap-6 pt-10 pb-12 w-full h-full">
        <div v-for="product in products" :key="product.id"
            class="border rounded-lg overflow-hidden shadow-lg relative w-[298px] h-[402px] grid">
            <div v-if="product.discount"
                class="absolute top-5 bg-[#3BB77E] text-white text-xs font-bold px-3 py-2 rounded-r-xl w-[50px] h-[32px]">
                -{{ product.discount }}%
            </div>
            <div v-if="product.tag"
                :class="['absolute top-5 text-white text-xs font-bold px-3 py-2 rounded-r-xl w-[50px] h-[32px]', getTagBgClass(product.tag)]">
                {{ product.tag }}
            </div>

            <RouterLink :to="{ name: 'ProductDetail', params: { id: product.id } }">
                <img :src="product.image" alt="product.name" class="flex items-center w-[200px] h-[150px] ml-12 mt-8">
                <div class="px-4 pt-8">
                    <h3 class="text-xs">{{ product.brand }}</h3>
                    <p class="text-base font-semibold mt-1">{{ product.description }}</p>
                    <div class="flex items-center text-center mt-1">
                        <template v-for="star in 5" :key="star">
                            <img :src="star <= product.rating ? 'src/assets/icon/yellow-star.svg' : 'src/assets/icon/white-star.svg'"
                                class="h-4 w-4" />
                        </template>
                        <span class="ml-2 text-base text-gray-600">({{ product.rating.toFixed(1) }})</span>
                    </div>
                </div>
            </RouterLink>

            <div class="flex justify-between items-center px-4 pb-4">
                <div>
                    <span class="text-lg font-bold text-green-600">${{ product.price }}</span>
                    <span v-if="product.oldPrice" class="text-sm text-gray-500 line-through">${{ product.oldPrice
                        }}</span>
                </div>

                <div class="flex items-center gap-2">
                    <input type="number" v-model.number="product.quantity" min="1" value="1"
                        class="w-[67px] h-[29px] border text-[#3BB77E] text-lg border-[#3BB77E] rounded-[4px] text-center items-center focus:outline-none focus:shadow-outline">
                    <button @click="addToCart(product)"
                        aria-label="Add {{ product.quantity }} {{ product.brand }} to cart"
                        class="flex justify-center items-center w-[67px] h-[29px] bg-[#DEF9EC] text-[#3BB77E] font-bold text-sm rounded focus:outline-none focus:shadow-outline cursor-pointer gap-2">
                        Add
                        <img src="../assets/icon/fi-rs-plus-small 1.svg" alt="Add icon">
                    </button>
                </div>
            </div>
        </div>

        <!-- Snackbar -->
        <Snackbar :show="snackbar.show" :message="snackbar.message" :type="snackbar.type" />
    </div>
</template>

<script>
import { RouterLink } from 'vue-router'
import Snackbar from '@/components/Snackbar.vue'
export default {
    name: 'product',
    components:{
        Snackbar,
        RouterLink,
    },
    data() {
        return {
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
        };
    },

    methods: {
        getTagBgClass(tag) {
            if (tag === 'Hot') {
                return 'bg-[#FD6E6E]'; // Red background for Hot
            } else if (tag === 'Sale') {
                return 'bg-[#FDC040]'; // Orange background for Sale
            }
            return ''; // Default, no additional class
        },

        formatRating(rating) {
            return (rating || 0).toFixed(1); // Safely handle undefined or non-numeric ratings
        },
        addToCart(product) {
            if (product.quantity > 0) {
                const existingProductIndex = this.cart.findIndex(item => item.id === product.id);

                if (existingProductIndex !== -1) {
                    this.cart[existingProductIndex].quantity += product.quantity;
                } else {
                    this.cart.push({ ...product });
                }

                this.showSnackbar(`${product.quantity} ${product.brand} have been added to the cart!`);
            } else {
                this.showSnackbar('Please select at least one item to add to the cart!', 'error');
            }
        },
        showSnackbar(message, type = 'success') {
            this.snackbar.message = message;
            this.snackbar.type = type;
            this.snackbar.show = true;
            setTimeout(() => {
                this.snackbar.show = false;
            }, 3000); // Hide after 3 seconds
        },
    },

}
</script>