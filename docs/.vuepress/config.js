module.exports = {
    title: "陈双的自定义组件库",
    description: "陈双的自定义组件库",
    port: 9999,
    themeConfig: {
        search:true,  // 默认情况下为true
        lastUpdated:true,  //最后一次git提交的时间 ,默认false
        repo:'https://github.com/doublechenfor/VUE_vuepress',
        nav: [
            {text:'Home',link:'/'},
            {text:'代码风格',link:'https://github.com/doublechenfor'}
            ],
        sidebar:  [
            ['/guide/install','安装'],
            ['/guide/introduction','介绍'],
            ['/guide/test','测试demo'],  
            {
                title: 'UI组件',   // 必要的
                path: '/guide/install',      // 可选的, 应该是一个绝对路径
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 1,    // 可选的, 默认值是 1
                children: [
                  ['/views/button','button'],
                  ['/views/icon','icon'],
                  ['/views/images','images'],               
                ]
              },          
        ]
    }
    
};