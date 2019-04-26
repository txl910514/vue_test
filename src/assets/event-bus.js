import Vue from 'vue'
var EventBus = new Vue();
console.log('112333');
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function () {
            return EventBus
        }
    }
})