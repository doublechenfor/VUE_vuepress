---
home: true
heroImage: /hero.png
heroText: Hero 标题
tagline: Hero 副标题
actionText: 快速上手 →
actionLink: /zh/guide/
features:
  - title: 简洁至上
    details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
  - title: Vue驱动
    details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
  - title: 高性能
    details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: MIT Licensed | Copyright © 2018-present Evan You
---

#### > 1.局安装 vuepress

```
yarn global vuepress || npm i -g vuepress
```

#### > 2.初始化该项目

```
 yarn init || npm init
```

#### > 3.根据推荐结构完善项目结构

！[avatar](assets/images/vuepress_content.png)

#### > 4.封装 vuepress 命令

###### vuepress 中有 dev 和 build 两个命令，利于项目的开发，我们将其封装在脚本命令中

```
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    }
```

###### 其中运行`yarn docs：dev`时，开启本地服务，可直接通过`localhost:8080`访问网站

###### 运行`yarn docs：build`时，将当前网页打包成静态文件，默认放在`.vuepress/dist`目录中，也可以通过`.vuepress/config.js`中的 dest 字段来修改，生成的文件可以部署在任意静态服务器上

##### >5. 此时可以运行 dev 命令，相对上图项目结构的默认路由如下图所示：

！[avatar](assets/images/vuepress_touter.png)

######　至此，打开`http://localhost:8080/config.html`即可打开`.vuepress/config.md`中的内容
