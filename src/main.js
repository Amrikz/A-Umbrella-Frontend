import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UI_components from './components/UI_components'

const app = createApp(App);

UI_components.forEach(component => {
    app.component(component.name, component);
});

app.use(store).use(router).mount('#app');
