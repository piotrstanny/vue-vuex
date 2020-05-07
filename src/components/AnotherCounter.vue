<template>
    <div>
        <h3>Using Actions:</h3>
        <button type="button" class="btn btn-primary" @click="incrementCounter(); incrementClicks()">Increment</button>
        <button type="button" class="btn btn-primary" @click="decrementCounter(); incrementClicks()">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'incrementCounter',
                'decrementCounter',
                'incrementClicks'
            ])
        }
    }
</script>

<style scoped>
.btn {
    margin: 5px;
}
</style>