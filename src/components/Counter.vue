<template>
    <div>
        <button type="button" class="btn btn-primary" @click="incrementCounter(); incrementClicks()">Increment</button>
        <button type="button" class="btn btn-primary" @click="decrementCounter(); incrementClicks()">Decrement</button>
    </div>
</template>

<script>
    import { mapMutations } from 'vuex';

    export default {
        methods: {
            ...mapMutations([
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