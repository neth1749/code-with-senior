<template>
    <div class="flex justify-between items-center mb-6 w-full max-w-[1586px] mx-auto py-4 border-y">
        <div @click="toggleDropdown" class="relative">
            <button class="flex items-center bg-green-500 text-white py-2 px-4 rounded-md">
                <i class='bx bx-grid-alt pr-2'></i>
                {{ selectedCategory }}
                <i class='bx bx-chevron-down pl-2'></i>
            </button>
            <ul v-if="dropdownOpen" class="absolute bg-white shadow-lg mt-1 w-48">
                <li v-for="category in categories" :key="category.id" class="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    @click="selectCategory(category)">
                    {{ category.title }}
                </li>
            </ul>
        </div>
        <!-- Menu -->
        <div class="flex gap-6 cursor-pointer">
        <RouterLink to="">
            <MenuItem menuName="Hot Deals" icon="bxs-hot" icon_color="#3BB77E" font_weight="700" />
        </RouterLink>
        <RouterLink to="/">
            <MenuItem menuName="Home" dropList="none" font_weight="700" />
        </RouterLink>
        <MenuItem menuName="Food" dropList="yes" font_weight="700" />
        <MenuItem menuName="Vegetables" dropList="yes" font_weight="700" />
        <MenuItem menuName="Drink" dropList="none" font_weight="700" />
        <MenuItem menuName="Cookies" dropList="none" font_weight="700" />
        <MenuItem menuName="Meat & Seafood" dropList="yes" font_weight="700" />
        <MenuItem menuName="Bakery" dropList="none" font_weight="700" />
      </div>

        <!-- Contact -->
        <div class="flex items-end space-x-2">
        <div class="flex items-center text-3xl">
          <i class='bx bx-headphone'></i>
        </div>
        <div class="flex flex-col text-end">
          <div class="text-xl text-green-500 font-extrabold">099 777 888</div>
          <div class="text-xs">24/7 support center</div>
        </div>
      </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import MenuItem from '@/components/MenuItem.vue';


export default {
    name: 'Navigation',
    components: {
        MenuItem,
    },
    setup() {
        const categories = ref([
            { id: 1, title: 'All Categories' },
            { id: 2, title: 'Cake & Milk' },
            { id: 3, title: 'Peach' },
            { id: 4, title: 'Organic Kiwi' },
            { id: 5, title: 'Red Apple' },
            { id: 6, title: 'Snack' },
            { id: 7, title: 'Black Plum' },
            { id: 8, title: 'Vegetables' },
            { id: 9, title: 'Headphone' },
            { id: 10, title: 'Cake & Milk' },
            { id: 11, title: 'Orange' },
        ]);
        const selectedCategory = ref('Browse All Categories');
        const dropdownOpen = ref(false);

        const toggleDropdown = () => {
            dropdownOpen.value = !dropdownOpen.value;
        };

        const selectCategory = (category) => {
            selectedCategory.value = category.title;
            dropdownOpen.value = false;
        };

        return { categories, selectedCategory, dropdownOpen, toggleDropdown, selectCategory };
    }
}
</script>
