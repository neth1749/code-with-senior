<template>
    <div class="min-h-screen bg-white">
        <!-- Header -->
        <Header />

        <!-- Navigation -->
        <Navigation />

        <!-- Product Details Section -->
        <div v-if="product" class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <!-- Product Image Section -->
                <div class="flex flex-col">
                    <img :src="product.image" alt="Product Image" class="rounded-lg" />
                    <!-- Thumbnail Images -->
                    <div class="flex space-x-4 mt-4">
                        <img v-for="(image, index) in product.thumbnails" :key="index" :src="image" alt="Thumbnail"
                            class="w-20 h-20 rounded-lg border border-gray-200" />
                    </div>
                </div>

                <!-- Product Info Section -->
                <div class="flex flex-col space-y-4">
                    <h1 class="text-3xl font-bold text-gray-800">{{ product.name }}</h1>
                    <div class="flex items-center space-x-4">
                        <span class="text-green-600 font-bold text-3xl">${{ product.price }}</span>
                        <span class="text-gray-500 line-through">${{ product.oldPrice }}</span>
                        <span class="text-green-500 text-sm font-semibold">{{ product.status }}</span>
                    </div>
                    <p class="text-gray-600">
                        {{ product.description }}
                    </p>
                    <div class="flex items-center space-x-4">
                        <div class="flex items-center">
                            <label for="quantity" class="mr-2 text-gray-700">Quantity</label>
                            <select id="quantity" v-model="selectedQuantity"
                                class="border border-gray-300 rounded-lg h-10 text-gray-600">
                                <option v-for="n in 10" :key="n" :value="n">{{ n }}</option>
                            </select>
                        </div>
                        <button class="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                            <i class='bx bx-cart'></i> Add To Cart
                        </button>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-gray-700 font-semibold">Vendor:</span>
                        <span class="text-gray-600">{{ product.vendor }}</span>
                    </div>
                    <div class="flex items-center space-x-2">
                        <span class="text-gray-700 font-semibold">SKU:</span>
                        <span class="text-gray-600">{{ product.sku }}</span>
                    </div>
                </div>
            </div>

            <!-- Tabs Section -->
            <div class="mt-12">
                <div class="border-b border-gray-200">
                    <nav class="-mb-px flex space-x-8">
                        <a href="#"
                            class="border-green-500 text-green-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Description</a>
                        <a href="#"
                            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Additional
                            Info</a>
                        <a href="#"
                            class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm">Reviews
                            (3)</a>
                    </nav>
                </div>
                <div class="mt-4">
                    <p class="text-gray-600">
                        Uninhibited carnally hired played in whimpered dear gorilla koala depending and much yikes off
                        far quetzal goodness and from for grimaced goodness unaccountably.
                    </p>
                    <p class="text-gray-600 mt-4">Spluttered narrowly yikes left moth in yikes bowed this that grizzly much
                        hello on spoon-fed that
                        alas rethought much decently richly and wow against the frequent fluidly at formidable
                        acceptably flapped besides and much circa far over the bucolically hey precarious goldfinch
                        mastodon goodness gnashed a jellyfish and one however because. </p>
                </div>
            </div>
        </div>
        <div v-else class="text-center py-8">
            <p class="text-gray-600">Loading product details...</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';

export default {
    name: 'ProductDetail',
    components: {
        Header,
        Navigation,
    },
    setup() {
        const route = useRoute();
        const product = ref(null); // Initialize product as null
        const selectedQuantity = ref(1);

        // Example product data with dynamic imports for images
        const products = [
            {
                id: 1,
                name: "Seeds of Change Organic Quinoa, Brown",
                image: () => import('@/assets/image/products/lemon.png'),
                thumbnails: [
                    () => import('@/assets/image/products/orange.png'),
                    () => import('@/assets/image/products/snack.png'),
                    () => import('@/assets/image/products/strawberry.png'),
                    () => import('@/assets/image/products/lemon1.png'),
                ],
                price: 38,
                oldPrice: 42,
                status: "In Stock",
                description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi.",
                vendor: "NestMart",
                sku: "FWM15VKT"
            },
            // Additional products can be added here
        ];

        onMounted(async () => {
            const productId = parseInt(route.params.id);
            const foundProduct = products.find(p => p.id === productId);

            if (foundProduct) {
                // Resolve image imports
                foundProduct.image = (await foundProduct.image()).default;
                foundProduct.thumbnails = await Promise.all(
                    foundProduct.thumbnails.map(async thumb => (await thumb()).default)
                );
                product.value = foundProduct;
            }
        });

        return {
            product,
            selectedQuantity,
        };
    }
};
</script>
