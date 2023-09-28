module.exports = {
  color: '#7A7E83',
  selectedColor: '#f54f50',
  backgroundColor: '#ffffff',
  height: '50px',
  // #ifdef H5 || APP-PLUS
  borderStyle: 'black',
  fontSize: '10px',
  iconWidth: '24px',
  spacing: '3px',
  iconfontSrc: '/static/iconfont/iconfont.ttf', // app tabbar 字体.ttf文件路径 app 3.4.4+
  // #endif
  list: [
    {
      pagePath: 'pages/index/index',
      iconPath: 'static/image/shouye.png',
      selectedIconPath: 'static/image/shouye-selected.png',
      text: '我的工作台',
      // #ifdef H5 || APP-PLUS
      iconfont: {
        // 优先级高于 iconPath，该属性依赖 tabbar 根节点的 iconfontSrc
        text: '\ue65f',
        selectedText: '\ue65f',
        fontSize: '22px',
        color: '#000000',
        selectedColor: '#f54f50',
      },
      // #endif
    },
    {
      pagePath: 'pages/my/my',
      iconPath: 'static/image/my.png',
      selectedIconPath: 'static/image/my-selected.png',
      text: '我的',
      // #ifdef H5 || APP-PLUS
      iconfont: {
        // 优先级高于 iconPath，该属性依赖 tabbar 根节点的 iconfontSrc
        text: '\ue666',
        selectedText: '\ue666',
        fontSize: '22px',
        color: '#000000',
        selectedColor: '#f54f50',
      },
      // #endif
    },
  ],
};
