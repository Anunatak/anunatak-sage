import VueApp from '../util/VueApp.js'
import App from '../apps/App.vue';

export default {
  init() {
    // JavaScript to be fired on the home page
    new VueApp('#app', App)
  },
  finalize() {
    // JavaScript to be fired on the home page, after the init JS
  },
};
