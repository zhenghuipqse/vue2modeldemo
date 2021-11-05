import Vue from 'vue'

import iView from 'iview';
import 'iview/dist/styles/iview.css';

import store from './store'

import '@assets/css/main.css';
import App from './view/App.vue';


// import VueRouter from 'vue-router';
// import Routers from './router.js';
// Vue.use(VueRouter);
// const RouterConfig = {
//     routes: Routers
// };
// const router = new VueRouter(RouterConfig);

Vue.use(iView);

window.eventBus = new Vue();
window.$vm = new Vue({
    el: '#app',
    store,
    render: h => h(App)
});

/*window.$vm = new Vue({
    components: {
        App
    },
    store,
    template: "<App/>",
    renderError(h, err) {
        console.log(err);
        return h("pre", { style: { color: "red" } }, err.stack);
    }
}).$mount("#app");*/

