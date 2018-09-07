import Vue from 'vue'
import App from './app'

console.log('xxx')
console.log(App)

new Vue({
    el: '#app',
    render: h => h(App)
})