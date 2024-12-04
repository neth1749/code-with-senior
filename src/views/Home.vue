<template>

  <div class="min-h-screen bg-white flex flex-col justify-center items-center">

    <!-- Header -->
    <Header />

    <!-- Navigation -->
    <Navigation />

    <!-- Meneu & Categories -->
    <div class="w-full max-w-[1586px] mx-auto">
      <show-case></show-case>
      <Menu topic="Featured Categories" @menu-selected="handleMenuSelection"></Menu>
      <category :activeMenu="activeMenu"></category>
    </div>

    <!-- Promotion -->
    <div class="w-full max-w-[1586px] mx-auto my-8">
      <promotion></promotion>
    </div>

    <!-- Menu & Products -->
    <div class="w-full max-w-[1586px] mx-auto">
      <Menu topic="Popular Products" @menu-selected="handleMenuSelection"></Menu>
      <product></product>
    </div>

  </div>

</template>

<script>
import ShowCase from '@/components/ShowCase.vue';
import Category from '@/components/Category.vue';
import Promotion from '@/components/Promotion.vue';
import Menu from '@/components/Menu.vue';
import Product from '@/components/Product.vue';
import Header from '@/components/Header.vue'
import Navigation from '@/components/Navigation.vue'


export default {
  name: "home",
  components: {
    Menu,
    Category,
    Promotion,
    Product,
    ShowCase,
    Header,
    Navigation,
  },
  data() {
    return {
      activeMenu: 1
    }
  },

  methods: {
    handleMenuSelection(menuId) {
      this.activeMenu = menuId;
    }
  },
}
</script>
