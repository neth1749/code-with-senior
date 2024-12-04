<template>
    <div class="flex flex-wrap justify-center w-full h-full pt-10 gap-6 relative">

        <div v-for="item in promotions" :key="item.id" class="flex justify-between w-[512px] h-[300px] border rounded-[10px] relative"
            :class="item.bgColor">
            <div class="flex flex-col absolute">
                <p class="text-2xl font-bold w-[271px] h-[92px] pl-8 ml-12 mt-20">
                    {{ item.text }}
                </p>
                <div class="ml-20 mt-6">
                    <Button :class="item.btColor"></Button>
                </div>
            </div>
            <img :src="item.imgSrc" alt="image" :class="item.imgClass" />

        </div>

    </div>
</template>

<script>
import Button from "@/components/Button.vue";

export default {
    name: "promotion",
    components: {
        Button,
    },
    data() {
        return {
            promotions: [
                { id: 1, text: 'Everyday Fresh & Clean with Our Products', imgSrc: 'src/assets/image/Cms-04 1.svg', bgColor: 'bg-[#F0E8D5]', btColor: 'bg-[#3BB77E]', imgClass: 'mt-16 mr-8' },
                { id: 2, text: 'Make your Breakfast Healthy and Easy', imgSrc: 'src/assets/image/Cat-01 1.svg', bgColor: 'bg-[#F3E8E8]', btColor: 'bg-[#3BB77E]', imgClass: 'pl-64 ml-12 h-[252px] mt-12' },
                { id: 3, text: 'The best Organic Products Online', imgSrc: 'src/assets/image/Cms-03 1.svg', bgColor: 'bg-[#E7EAF3]', btColor: 'bg-[#FDC040]', imgClass: 'mt-20 w-[451px] h-[216px] ml-14' },
            ]
        }
    }
};
</script>
