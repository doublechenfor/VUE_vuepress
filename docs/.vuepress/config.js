module.exports = {
    title: "chenshuang 的vuepress",
    description: "chenshuang vuepress",
    port: 9999,
    themeConfig: {
        search:true,  // 默认情况下为true
        lastUpdated:true,  //最后一次git提交的时间 ,默认false
        nav: [
            {text:'Home',link:'/'},
            {text:'github',link:'https://github.com/doublechenfor'},
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
                  ['/guide/test','button'],
                  ['/guide/test','icon'],
                  ['/guide/test','images'],
                  ['/guide/test','canvas']
                ]
              },          
        ]
    }
    
};