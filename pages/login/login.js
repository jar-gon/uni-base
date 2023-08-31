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
      attr: {
        validateTrigger: 'blur',
      },
    },
    fields: {
      account: {
        label: '账号',
        type: 'number',
        placeholder: '请输入手机',
        attr: {
          maxlength: 11,
        },
      },
      pwd: {
        label: '密码',
        type: 'password',
        placeholder: '请输入密码',
        attr: {
          trim: 'all',
        },
      },
      checkNum: {
        label: '验证码',
        type: 'slot',
      },
    },
  };
}
