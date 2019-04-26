<template>
    <div>
        <div>{{ msg }}</div>
        <div>
            <router-link to="/example">Go to example</router-link>
            <input v-model="message" >
            <button @click="updateMessage()">更新消息</button>
        </div>
        <bus-event />
    </div>
</template>

<script type="text/ecmascript-6">
    import busEvent from '../components/busEvent.vue'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App',
                 message: "这是一条消息"
            }
        },
        components: {
            busEvent
        },
        methods: {
            updateMessage() {
                this.$bus.$emit("updateMessage", this.message);
            }
        },
        beforeDestroy () {
            $this.$bus.$off('updateMessage')
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
