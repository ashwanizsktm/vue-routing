<template>
    <div>
        <h3>My Profile</h3>
        <h4>{{$route.params.id}}</h4>
        <router-link :to="{name:'Profile', params: {id: 456}, query:{plan: 'private'} }">Another route</router-link>
        <h4>{{$route.query}}</h4>
        <router-link :to="{name: 'Info', params: {id: 3}}">Info Route</router-link>
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    mounted(){
        console.log(this.$route.params.id);
    },

    watch: {
        $route(to, from) {
            console.log('to', to);
            console.log('from', from);
        }
    }
}
</script>
<style lang="scss">
    
</style>