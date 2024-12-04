<template>
    <div class="flex items-center justify-between bg-white py-6 px-2 w-full max-w-[1586px] mx-auto">
        <!-- Logo -->
        <img src="@/assets/image/Logo.svg" alt="logo">

        <!-- SearchBox -->
        <searchbox></searchbox>

        <!-- Menu -->
        <div class="flex space-x-4">
            <MenuItem menuName="Account" icon="bx-user" />
            <MenuItem menuName="Compare" icon="bx-recycle" />
            <MenuItem menuName="Wishlist" icon="bx-heart" />
            <MenuItem menuName="Cart" icon="bx-cart" />
        </div>
    </div>
</template>

<script>
import MenuItem from './MenuItem.vue';
import Searchbox from './Searchbox.vue';

export default {
    name: "Header",
    components: {
        MenuItem,
        Searchbox,
    }
}
</script>
