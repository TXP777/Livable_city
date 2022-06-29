# livable_city

## 技术栈
react + reactHook + reactRouter + redux + axios + less

## 功能
1. 首页展示
2. 城市管理
3. 搜索功能
4. 上拉加载
5. 详情页
6. 收藏功能
7. 订单评价

## 环境构建
1. 项目环境：create-react-app 
2. 支持less语法
3. 集成网络请求axios

## less支持的配置
React脚手架中默认支持css和Sass/Scss,需手动配置less
1. 执行命令：npm run eject
2. 安装依赖
---js
npm install  --save-dev less less-loader
3. 修改配置文件webpack.config
配置1
const lessRegex = /\.less$/;
const lessModuleRegex = /\.module\.less$/;
配置2
            // 配置less
            {
              test: lessRegex,
              exclude: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'icss',
                  },
                },
                'less-loader'
              ),
              sideEffects: true,
            },
   
            {
              test: lessModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 3,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: {
                    mode: 'local',
                    getLocalIdent: getCSSModuleLocalIdent,
                  },
                },
                'less-loader'
              ),
            },

## 配置网络请求
1. 安装依赖
npm install --save axios

2. 配置相关文件
api
utils


## 配置初始化样式
1. 初始化css文件
2. 引入字体图标库：iconfont

## 首页展示
1. 创建页面：Home/User/Shop/LifeService
2. 创建路由 
       安装依赖 npm install --save react-router-dom
       配置AppRouter



