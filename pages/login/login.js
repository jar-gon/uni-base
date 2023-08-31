export function getFormStates() {
  return {
    form: {
      rules: {
        account: {
          rules: [
            {
              required: true,
              errorMessage: '请输入手机号码',
            },
            {
              pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
              errorMessage: '请输入正确的手机号码',
            },
          ],
        },
        pwd: {
          rules: [
            {
              required: true,
              errorMessage: '请输入密码',
            },
          ],
        },
        checkNum: {
          rules: [
            {
              required: true,
              errorMessage: '请输入验证码',
            },
          ],
        },
      },
    },
    items: {
      account: {
        type: 'number',
        itemAttrs: {
          label: '账号',
        },
        attrs: {
          placeholder: '请输入手机',
          maxlength: 11,
        },
      },
      pwd: {
        type: 'password',
        itemAttrs: {
          label: '密码',
        },
        attrs: {
          placeholder: '请输入密码',
          trim: 'all',
        },
      },
      checkNum: {
        type: 'slot',
        itemAttrs: {
          label: '验证码',
        },
        attrs: {
          placeholder: '请输入验证码',
          trim: 'all',
          maxlength: 4,
        },
      },
    },
  };
}
