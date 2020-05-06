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
            },
            decrement() {
                this.$store.state.counter--;
            }
        }
    }
</script>

<style scoped>
.btn {
    margin: 5px;
}
</style>