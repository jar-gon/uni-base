import Request from '@/js_sdk/luch-request/luch-request';
import { debounce } from '@/utils';
import { BaseUrl } from '@/config.js';

const Http = new Request();

Http.setConfig(config => {
  config.baseURL = BaseUrl;
  config.timeout = 60 * 1000;
  config.custom = { loading: true };
  // #ifdef H5
  // config.withCredentials = true;
  // #endif
  return config;
});

Http.interceptors.request.use(
  config => {
    config.header['x-zm-token'] = wx.getStorageSync('token');
    if (config.custom.loading) {
      uni.showLoading({ title: '加载中' });
    }
    return config;
  },
  config => {
    return config;
  }
);

const dbGoLogin = debounce(goLogin);
function goLogin() {
  uni.navigateTo({
    url: '/pages/login/login',
  });
}

Http.interceptors.response.use(
  res => {
    if (res.config.custom.loading) {
      uni.hideLoading();
    }
    const { data } = res;
    if (data && data.code && data.code === '11') {
      uni.removeStorageSync('token');
      dbGoLogin();
    }
    return data;
  },
  err => {
    const { config, data } = err;
    if (config.custom.loading) {
      uni.hideLoading();
    }
    return data;
  }
);

export default Http;
