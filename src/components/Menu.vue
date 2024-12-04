<!-- <template>
  <div class="flex flex-wrap justify-between w-full pt-14 items-center">
    <strong class="text-3xl">{{ topic }}</strong>
    <div class="flex flex-wrap space-x-4">
      <button v-for="menu in menus" :key="menu.id"
        class="text-base font-medium hover:text-blue-500 focus:outline-none focus:text-blue-500"
        @click="selectMenu(menu.id)">
        {{ menu.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    topic: String
  },
  data() {
    return {
      selectedMenuId: 1,
      menus: [
        { id: 1, name: "All" },
        { id: 2, name: "Milks & Dairies" },
        { id: 3, name: "Coffees & Teas" },
        { id: 4, name: "Pet Foods" },
        { id: 5, name: "Meats" },
        { id: 6, name: "Vegetables" },
        { id: 7, name: "Fruits" }
      ]
    };
  },
  methods: {
    selectMenu(id) {
      this.selectedMenuId = id;
      this.$emit('menu-selected', id);
    }
  }
}
</script> -->
<template>
  <div class="flex flex-wrap justify-between w-full pt-14 items-center">
    <strong class="text-3xl">{{ topic }}</strong>
    <!-- Responsive container for menu items with better spacing and wrapping -->
    <div class="flex flex-wrap gap-2 md:gap-4 lg:gap-6 overflow-auto py-2">
      <button v-for="menu in menus" :key="menu.id" :class="['text-base font-medium hover:text-blue-500 focus:outline-none focus:text-blue-500 px-2 md:px-4',
      selectedMenuId === menu.id ? 'text-blue-500' : 'text-gray-700']" @click="selectMenu(menu.id)">
        {{ menu.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    topic: String
  },
  data() {
    return {
      selectedMenuId: 1,
      menus: [
        { id: 1, name: "All" },
        { id: 2, name: "Milks & Dairies" },
        { id: 3, name: "Coffees & Teas" },
        { id: 4, name: "Pet Foods" },
        { id: 5, name: "Meats" },
        { id: 6, name: "Vegetables" },
        { id: 7, name: "Fruits" }
      ]
    };
  },
  methods: {
    selectMenu(id) {
      this.selectedMenuId = id;
      this.$emit('menu-selected', id);
    }
  }
}
</script>
