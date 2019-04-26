<template>
  <div>
    {{ msg }}
            <div>
            <router-link to="/home">Go to home</router-link>
        </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'example'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
