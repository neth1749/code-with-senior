<template>
    <div v-if="show" :class="['fixed bottom-8 right-8 p-4 rounded-lg shadow-lg text-white', snackbarType]">
        {{ message }}
    </div>
</template>

<script>
export default {
    name: "Snackbar",
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            default: "success", // Default type is 'success'
        },
    },
    computed: {
        snackbarType() {
            return this.type === "error" ? "bg-red-500" : "bg-green-500";
        },
    },
};
</script>
