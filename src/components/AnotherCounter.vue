<template>
    <div>
        <h3>Using Actions:</h3>
        <button type="button" class="btn btn-primary" @click="asyncIncrementCounter(); incrementClicks()">Increment</button>
        <button type="button" class="btn btn-primary" @click="asyncDecrementCounter(); incrementClicks()">Decrement</button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'asyncIncrementCounter',
                'asyncDecrementCounter',
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