<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xs-12 col-sm-8">
                <h1>Vuex</h1>
                <app-result></app-result>
                <hr>
                <app-counter></app-counter>
                <hr>
                <app-another-counter></app-another-counter>
            </div>
        </div>
    </div>
</template>

<script>
    import Counter from './components/Counter.vue';
    import AnotherCounter from './components/AnotherCounter.vue';
    import Result from './components/Result.vue';

    export default {
        components: {
            appCounter: Counter,
            appAnotherCounter: AnotherCounter,
            appResult: Result,
        }
    }
</script>

<style scoped>
.container {
    margin-top: 80px;
}
</style>