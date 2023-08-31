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
            // {
            //   pattern: /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/,
            //   errorMessage: '请输入正确的手机号码',
            // },
          ],
        },
        // pwd: {
        //   rules: [
        //     {
        //       required: true,
        //       errorMessage: '请输入密码',
        //     },
        //   ],
        // },
        // checkNum: {
        //   rules: [
        //     {
        //       required: true,
        //       errorMessage: '请输入验证码',
        //     },
        //   ],
        // },
      },
      validateTrigger: 'blur',
    },
    items: {
      account: {
        type: 'number',
        defaultValue: '133',
        itemAttrs: {
          label: '账号',
        },
        attrs: {
          required: true,
          placeholder: '请输入手机',
          maxlength: 11,
          prefixIcon: 'search',
        },
      },
      pwd: {
        type: 'password',
        defaultValue: '133',
        itemAttrs: {
          label: '密码',
        },
        attrs: {
          placeholder: '请输入密码',
          trim: 'all',
        },
      },
      numberBox: {
        type: 'numberBox',
        defaultValue: '133',
        itemAttrs: {
          label: '数字',
        },
        attrs: {},
      },
      rate: {
        type: 'rate',
        defaultValue: 3,
        itemAttrs: {
          label: '评分',
        },
        attrs: {},
      },
      checkNum: {
        type: 'slot',
        defaultValue: '133',
        itemAttrs: {
          label: '验证码',
        },
      },
      radio: {
        type: 'checkbox',
        defaultValue: 2,
        itemAttrs: {
          label: '性别',
        },
        attrs: {
          localdata: [
            { label: '男', val: 0 },
            { label: '女', val: 1 },
            { label: '未知', val: 2 },
          ],
          map: { text: 'label', value: 'val' },
        },
      },
      checkbox: {
        type: 'checkbox',
        defaultValue: [0, 1],
        itemAttrs: {
          label: '兴趣',
        },
        attrs: {
          localdata: [
            { value: 0, text: '篮球' },
            { value: 1, text: '足球' },
            { value: 2, text: '游泳' },
          ],
          multiple: true,
          min: 1,
          max: 2,
          mode: 'tag',
        },
      },
      select: {
        type: 'select',
        defaultValue: 0,
        itemAttrs: {
          label: 'select',
        },
        attrs: {
          localdata: [
            { value: 0, label: '篮球' },
            { value: 1, label: '足球' },
            { value: 2, label: '游泳' },
          ],
          filterable: true,
          dataKey: 'label',
          dataValue: 'value',
        },
      },
      picker: {
        type: 'picker',
        defaultValue: '1-2',
        itemAttrs: {
          label: '城市选择',
        },
        attrs: {
          popupTitle: '城市选择',
          localdata: [
            {
              text: '一年级',
              value: '1-0',
              children: [
                { text: '1.1班', value: '1-1' },
                { text: '1.2班', value: '1-2' },
              ],
            },
            { text: '二年级', value: '2-0' },
            { text: '三年级', value: '3-0' },
          ],
        },
      },
      datetime: {
        type: 'datetime',
        defaultValue: new Date(),
        itemAttrs: {
          label: '时间',
        },
        attrs: {},
      },
      file: {
        type: 'file',
        itemAttrs: {
          label: '文件',
        },
        attrs: {},
      },
    },
  };
}
