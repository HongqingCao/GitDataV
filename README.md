# GitDataV

 GitDataV，是一个github“大数据可视化平台”，通过它你可以更直观的看到你在github里的一些数据：  
 个人信息(✔)，仓库stars情况(✔)，仓库语言分类(✔)  
 仓库公开数量(✔)、粉丝数量(✔)、跟随数量(✔)、仓库数据(✔)、最近你的操作(✔)  
 最近的粉丝(✔)、最近的跟随(✔)、最新信息(✔)  
左上角箭头小彩蛋： 全屏(✔)、 国际化语言切换（开发中...）、皮肤切换（开发中..） 


[GitDataV在线使用](https://hongqingcao.github.io/GitDataV/)

###### ![实例效果](https://user-gold-cdn.xitu.io/2018/8/24/1656c59629551995?w=1954&h=934&f=gif&s=3919397)
 
## 构建和设置

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## 项目目录结构  

``` bash
├── README.md                  项目介绍
├── index.html                 入口页面
├── build                      构建脚本目录
│  ├── build-server.js         运行本地构建服务器，可以访问构建后的页面
│  ├── build.js                生产环境构建脚本
│  ├── dev-client.js           开发服务器热重载脚本，主要用来实现开发阶段的页面自动刷新
│  ├── dev-server.js           运行本地开发服务器
│  ├── utils.js                构建相关工具方法
│  ├── webpack.base.conf.js    wabpack基础配置
│  ├── webpack.dev.conf.js     wabpack开发环境配置
│  └── webpack.prod.conf.js    wabpack生产环境配置
├── config                    项目配置
│  ├── dev.env.js             开发环境变量
│  ├── index.js               项目配置文件
│  ├── prod.env.js            生产环境变量
│  └── test.env.js            测试环境变量
├── package.json              npm包配置文件，里面定义了项目的npm脚本，依赖包等信息
├── src                       源码目录  
│  ├── main.js               入口js文件
│  ├── app.vue               根组件
│  ├── components            公共组件目录
│  │  └── index.js           把全部组件遍历出来
│  ├── assets                资源目录，这里的资源会被wabpack构建
│  │  └── css                css基础重置
│  │  └── data               可视化界面需要的图片
│  │  └── iconfont           字体图标
│  │    └── bg.png
│  ├── routes               前端路由
│  │  └── index.js
│  └── pages               页面目录
│    ├── app               入口文件
│    └── data              可视化文件
├── static                纯静态资源，不会被wabpack构建。
```