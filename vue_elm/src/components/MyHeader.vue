<template>
    <fieldset>
        <router-link :to="{path:'/shop'}">首页</router-link>
        <router-link :to="{path:'/cart'}">购物车</router-link>
        <router-link :to="{path:'/home'}">我的</router-link>
    </fieldset>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>

</style>
