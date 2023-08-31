import Http from '@/utils/http.js';

/**
 * 权限信息
 * @returns {*}
 * @constructor
 */
export const GetInitInfo = () => {
  return Http.get('/api/sale-api/seller/initInfo?systemType=1&appCode=05e62568f1904a89bc77fe8482462084');
};

/**
 * 获取验证码
 */
export const VerificationCode = () => {
  return Http.post('/api/zmbiz-login/shield/getCheckCodeImg');
};

/**
 * 获取验证码
 */
export const Logout = () => {
  return Http.post('/api/zmbiz-login/shield/logout');
};

/**
 * 登陆
 * @param pwd
 * @param account
 * @param checkNum
 * @param currentUserCode
 * @returns {*}
 * @constructor
 */
export const Login = param => {
  return Http.post('/api/zmbiz-login/shield/login', param);
};

/**
 * 获取用户信息
 * @returns {*}
 * @constructor
 */

export const GetSeller = () => {
  return Http.get('/api/seller/seller/getSeller');
};
