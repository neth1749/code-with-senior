<template>
    <div class="flex justify-between items-center bg-cover bg-center bg-[#F0E8D5] rounded-[20px]"
        style="background-image: url('src/assets/image/showcase/3389452 1.png');">
        <div class="p-5 flex flex-col gap-2 ml-16">
            <h1 class="text-5xl font-bold text-[#253D4E]">Don't miss amazing grocery deals</h1>
            <h3 class="text-2xl font-light text-[#7E7E7E]">Sign up for the daily newsletter</h3>
            <div class="mt-5 relative flex items-center h-[50px] w-3/4">
                <box-icon type='logo' name='telegram'
                    class='bx bxl-telegram absolute left-5 text-2xl text-[#7E7E7E]'></box-icon>
                <input type="email"
                    class="pl-16 pr-20 w-full h-full rounded-full border-none outline-none text-sm font-light"
                    placeholder="Your email address">
                <button
                    class="absolute right-0 w-36 h-full rounded-full bg-[#3BB77E] text-white font-bold border-none">Subscribe</button>
            </div>
        </div>
        <div class="z-0">
            <img src="@/assets/image/showcase/fresh-apples-shopping-mesh-bag-with-branch-apples-removebg 1.svg"
                alt="Promotional Content" class="h-full">
        </div>
    </div>
</template>

<script>
export default {
    name: 'show-case',
}
</script>
