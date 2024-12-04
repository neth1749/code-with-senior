<template>
  <div class="flex flex-wrap justify-center w-full h-full gap-6 pt-[44px]">

    <div v-for="item in categories" :key="item.id"
      class="flex justify-center items-center w-[136px] h-[185px] border rounded-[10px]" :class="item.bgColor">
      <div class="flex flex-col justify-center items-center text-center">
        <img :src="item.imgSrc" :alt="item.name" :class="item.imgClass">
        <strong>{{ item.title }}</strong>
        <p class="text-sm">{{ item.count }} items</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "category",
  props: ['activeMenu'],
  data() {
    return {
      categories: [
        { id: 1, title: 'Cake & Milk', count: 14, imgSrc: 'src/assets/image/cat-13 1.svg', imgClass: '-mt-3', bgColor: 'bg-[#F2FCE4]' },
        { id: 2, title: 'Peach', count: 17, imgSrc: 'src/assets/image/cat-11 1.svg', imgClass: '-mt-3', bgColor: 'bg-[#FFFCEB]' },
        { id: 3, title: 'Organic Kiwi', count: 21, imgSrc: 'src/assets/image/cat-12 1.svg', imgClass: '-mt-3', bgColor: 'bg-[#ECFFEC]' },
        { id: 4, title: 'Red Apple', count: 68, imgSrc: 'src/assets/image/cat-9 1.svg', imgClass: '-mt-3', bgColor: 'bg-[#FEEFEA]' },
        { id: 5, title: 'Snack', count: 34, imgSrc: 'src/assets/image/cat-3 1.svg', imgClass: '-mb-1', bgColor: 'bg-[#FFF3EB]' },
        { id: 6, title: 'Black Plum', count: 25, imgSrc: 'src/assets/image/cat-4 1.svg', imgClass: '-mb-2', bgColor: 'bg-[#FFF3FF]' },
        { id: 7, title: 'Vegetables', count: 65, imgSrc: 'src/assets/image/cat-1 4.svg', imgClass: '', bgColor: 'bg-[#F2FCE4]' },
        { id: 8, title: 'Headphone', count: 33, imgSrc: 'src/assets/image/cat-15 1.svg', imgClass: 'mb-4', bgColor: 'bg-[#FFFCEB]' },
        { id: 9, title: 'Cake & Milk', count: 54, imgSrc: 'src/assets/image/cat-14 1.svg', imgClass: '-mt-4', bgColor: 'bg-[#F2FCE4]' },
        { id: 10, title: 'Orange', count: 63, imgSrc: 'src/assets/image/cat-7 1.svg', imgClass: '-mb-4 -mt-1', bgColor: 'bg-[#FFF3FF]' }
      ]
    }
  },
  computed: {
    filteredCategories() {
      if (this.activeMenu === 1) { // Assuming 'All' has ID 1
        return this.categories;
      }
      // Example filter, implement based on real criteria
      return this.categories.filter(cat => cat.menuId === this.activeMenu);
    }
  }
}

</script>
