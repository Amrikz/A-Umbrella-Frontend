import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UI_components from './components/UI_components'

const app = createApp(App);

app.config.globalProperties.$apiURI = "http://umbrella.xp3.biz/backend/";
app.config.globalProperties.$apiAddPath = "api/v1";

app.provide('$apiURI', app.config.globalProperties.$apiURI)
app.provide('$apiAddPath', app.config.globalProperties.$apiAddPath)

UI_components.forEach(component => {
    app.component(component.name, component);
});

app.use(store).use(router).mount('#app');