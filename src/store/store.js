import { reactive } from 'vue';

const store = reactive({
  isAuthenticated: !!localStorage.getItem('token'),
  token: localStorage.getItem('token'),
  logout: () => {
    if(store.token) {
      store.token = null;
    }
    store.isAuthenticated = false;
    localStorage.removeItem('token');
  },
});

export default store;
