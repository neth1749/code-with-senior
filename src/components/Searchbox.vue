<template>
    <div class="flex items-center justify-between bg-white border-2 border-[#BCE3C9] rounded-lg w-2/4">
        <!-- Category Dropdown -->
        <div class="relative">
            <button @click="toggleDropdown" class="px-4 py-2 rounded-l-lg text-gray-700">
                {{ selectedCategory.title || 'All Categories' }}
                <i class='bx bxs-chevron-down ml-2'></i>
            </button>
            <div v-show="showDropdown" class="absolute z-10 bg-white border rounded-md shadow-lg w-44 mt-1">
                <ul>
                    <li v-for="category in categories" :key="category.id" @click="selectCategory(category)"
                        class="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                        {{ category.title }}
                    </li>
                </ul>
            </div>
        </div>
        <!-- Search Input -->
        <input type="text" class="flex-grow py-2 px-4 rounded-r-lg border-l border-gray-300 outline-none"
            placeholder="Search for items">
        <i class='bx bx-search text-gray-500 px-3 cursor-pointer'></i>
    </div>
</template>

<script>
export default {
    name: 'searchbox',
    data() {
        return {
            showDropdown: false,
            categories: [
                { id: 1, title: 'Cake & Milk' },
                { id: 2, title: 'Peach' },
                { id: 3, title: 'Organic Kiwi' },
                { id: 4, title: 'Red Apple' },
                { id: 5, title: 'Snack' },
                { id: 6, title: 'Black Plum' },
                { id: 7, title: 'Vegetables' },
                { id: 8, title: 'Headphone' },
                { id: 9, title: 'Cake & Milk' },
                { id: 10, title: 'Orange' },
                { id: 10, title: 'All Categories' }
            ],
            selectedCategory: {}
        }
    },
    methods: {
        toggleDropdown() {
            this.showDropdown = !this.showDropdown;
        },
        selectCategory(category) {
            this.selectedCategory = category;
            this.showDropdown = false;
        },
    }
}
</script>
