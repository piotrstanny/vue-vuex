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
                this.$emit('updated', 1);
            },
            decrement() {
                this.$emit('updated', -1);
            }
        }
    }
</script>

<style scoped>
.btn {
    margin: 5px;
}
</style>