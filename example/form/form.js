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
      attr: {
        validateTrigger: 'blur',
      },
    },
    fields: {
      account: {
        label: '账号',
        type: 'number',
        required: true,
        placeholder: '请输入手机',
        attr: {
          maxlength: 11,
          prefixIcon: 'search',
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
      radio: {
        label: '性别',
        type: 'checkbox',
        localdata: [
          { label: '男', val: 0 },
          { label: '女', val: 1 },
          { label: '未知', val: 2 },
        ],
        attr: {
          map: { text: 'label', value: 'val' },
        },
      },
      checkbox: {
        label: '兴趣',
        type: 'checkbox',
        localdata: [
          { value: 0, text: '篮球' },
          { value: 1, text: '足球' },
          { value: 2, text: '游泳' },
        ],
        attr: {
          multiple: true,
          min: 1,
          max: 2,
          mode: 'tag',
        },
      },
      select: {
        label: 'select',
        type: 'select',
        localdata: [
          { value: 0, label: '篮球' },
          { value: 1, label: '足球' },
          { value: 2, label: '游泳' },
        ],
        attr: {
          filterable: true,
          dataKey: 'label',
          dataValue: 'value',
        },
      },
      picker: {
        label: '城市选择',
        type: 'picker',
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
      datetime: {
        label: '时间',
        type: 'datetime',
      },
      file: {
        label: '文件',
        type: 'file',
        defaultValue: [],
      },
    },
  };
}
