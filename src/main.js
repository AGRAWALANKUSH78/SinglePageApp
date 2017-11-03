import Vue from 'vue';
import VeeValidate from 'vee-validate';
import VueRouter from 'vue-router';

import App from './components/app.vue';

import FormComponent from './components/FormComponent.vue';
import Registration from './components/registration.vue';


Vue.use(VeeValidate);
Vue.use(VueRouter);

const routes = [
  {
    path : '/',
    component : FormComponent
  },
  {
    path : '/add',
    component : Registration
  },
  {
    path : '/update/:index',
    component : Registration
  },
  {
    path : '/delete/:index',
    component : FormComponent
  }
]

const router = new VueRouter({
  routes : routes
});

new Vue({
  el: '#app',
  router : router,
  render: h => h(App)
});

