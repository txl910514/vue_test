// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/init'

/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});*/

new Vue({
  router,
  render: h => h(App),
  mounted(){
    fetch("http://10.0.1.67:2618/api/",{
      method: "POST",
      body: "userName=hhhh&password=mmmm"
    }).then((res)=>{

    })
  }
}).$mount('#app');
