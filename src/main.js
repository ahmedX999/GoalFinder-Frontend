import { createApp, h } from 'vue'


import vuetify from './plugins/vuetify'





import App from '@/src/App.vue'
import router from "@/src/router";
import '@/src/assets/tailwind.css'
import Default from "@/src/layouts/Default.vue";
import NoSidebar from "@/src/layouts/NoSidebar.vue";
import functions from './helpers/functions'
import { createPinia } from "pinia";
const app = createApp({
    render: () => h(App),
});
app.component("default-layout", Default);
app.component("no-sidebar-layout", NoSidebar);
app.directive('click-away', {
    mounted(el, binding, vnode) {
        el.clickOutsideEvent = function(event) {
        if (!(el === event.target || el.contains(event.target))) {
            binding.value(event, el);
        }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});
app.mixin(functions);
app.use(createPinia());
app.use(router);
app.use(vuetify);
app.mount('#app')
