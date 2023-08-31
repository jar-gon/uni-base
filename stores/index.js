import { defineStore } from 'pinia';

export const sellerStore = defineStore('seller', {
  state: () => {
    return {
      info: {},
      permission: [],
    };
  },
  actions: {
    setSellerInfo(info) {
      this.info = info;
    },
    setPermission(permission) {
      this.permission = permission;
    },
    hasPermission(permission) {
      return this.permission.includes(permission);
    },
  },
  // unistorage: true // 开启后对 state 的数据读写都将持久化
});

// import { ref } from 'vue';
// export const useInfoStore = defineStore('counter', () => {
//   const count = ref(0);

//   function increment() {
//     count.value++;
//   }

//   return { count, increment };
// }, {
//   unistorage: true
// });
