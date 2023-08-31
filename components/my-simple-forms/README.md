## 使用
- form表示Form表单Api
- items表示表单的field
- itemAttrs表示Form.Item的API
- attrs表示对应type组件的API

## 注意
- 做了默认逻辑（组件的placeholder没有设置的话，默认显示label）
- defaultValue设置初始值时使用，会处理到value上，所以将其放置在了itemAttrs和attrs同级

## 具体可以参考form
```javascript
export default {
  form: {
    rules: {
      phone: [
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur',
        },
        {
          pattern: new RegExp(/^\d*$/, 'g'),
          message: '请输入正确的手机号',
          trigger: 'blur',
        },
      ],
    },
  },
  items: {
    phone: {
      type: 'input',
      defaultValue: '1333333333'
      itemAttrs: {
        label: '手机号',
      },
      attrs: {
        placeholder: '请输入手机号',
      },
    },
  },
};

```
