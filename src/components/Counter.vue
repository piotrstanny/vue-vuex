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
                this.$store.state.counter++;
                this.$store.state.clicks++;
            },
            decrement() {
                this.$store.state.counter--;
                this.$store.state.clicks++;
            }
        }
    }
</script>

<style scoped>
.btn {
    margin: 5px;
}
</style>