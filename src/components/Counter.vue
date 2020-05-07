<template>
    <div>
        <button type="button" class="btn btn-primary" @click="increment">Increment</button>
        <button type="button" class="btn btn-primary" @click="decrement">Decrement</button>
    </div>
</template>

<script>
    export default {
        methods: {
            increment() {
                this.$store.commit('incrementCounter');
                this.$store.commit('incrementClicks');
            },
            decrement() {
                this.$store.commit('decrementCounter');
                this.$store.commit('incrementClicks');
            }
        }
    }
</script>

<style scoped>
.btn {
    margin: 5px;
}
</style>