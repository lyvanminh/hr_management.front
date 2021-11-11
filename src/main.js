import Vue from 'vue';
import App from './App.vue';
// import 'babel-polyfill';
// import 'es6-promise';
import VueRouter from 'vue-router';
import {routes} from './routes';
import store from './store';
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';
import clipboard from 'v-clipboard';
import GlobalMixin from './mixins/globalMixin';

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.mixin(GlobalMixin);
Vue.use(clipboard);

moment.locale('vi');
Vue.use(VueMoment, {
  moment
});

const router = new VueRouter({
  scrollBehavior (to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    };
  },
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (!localStorage.getItem('token')) {
      router.push({name: 'login'});
      alert('Vui lòng đăng nhập lại');
      window.location.href = '/login';
      return;
    } else {
      console.log('wtf');
    }
  }

  let routerNameNotAuth = [
    'login'
  ];

  if (localStorage.getItem('token') && routerNameNotAuth.indexOf(to.name) !== -1) {
    if (localStorage.getItem('user_type')) {
        let userType = localStorage.getItem('user_type');
        router.push({name: 'home', params: {user_type: userType}})
    }

    return;
  }

  store.commit('message/setError', '');
  store.commit('message/setErrors', []);
  next();
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app');
