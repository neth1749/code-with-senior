<template>
    <li class="flex items-center gap-1 text-center">
        <template v-if="icon !== 'none'">
            <i :class="['bx', icon, `text-${iconSize}`, { 'text-[#7E7E7E]': iconColor === 'black' }]" />
        </template>
        <span :class="{ 'font-bold': fontWeight === '700', 'font-normal': fontWeight === '400' }">{{ menuName }}</span>
        <template v-if="dropList === 'yes'">
            <i class="bx bx-chevron-down" />
        </template>
    </li>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        menuName: {
            type: String,
            required: true
        },
        dropList: {
            type: String,
            default: 'none'
        },
        icon: {
            type: String,
            default: 'none'
        },
        iconColor: {
            type: String,
            default: 'black' // Use color names or classes instead of 'back'
        },
        fontWeight: {
            type: String,
            default: '400'
        },
        iconSize: {
            type: String,
            default: 'text-xl' // Use Tailwind size classes
        },
        active: Boolean,
    }
};
</script>

