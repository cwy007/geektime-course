# index

webpack.config.js
webpack --config

entry
output
mode
module {rules: []}
plugins []

yarn add webpack webpack-cli -D

entry
单入口
多入口

output
如何输出到磁盘
编译
占位符

loaders
原生支持 js json
通过loader支持
依赖图
loader 本身是一个函数
babel-loader
css-loader
less-loader
ts-loader
file-loader
raw-loader
thread-loader
test 匹配规则
use 使用的loader的名称

plugins
增强webpack的功能
手动删除目录
作用于整个构建构成
CommmonsChunkPlugin
CleanWebpackPlugin
ExtractTextWebpackPlugin
CopyWebpackPlugin
HtmlWebpackPlugin
UglifyjsWebpackPlugin
ZipWebpackPlugin
数组

mode
当前打包的环境
production development none
触发 webpack 内置的函数
触发插件的功能
process.env.NODE_ENV
NamedChunksPlugin
NamedModulesPlugin
HMR

production
process.env.NODE_ENV
FlagDependencyUsagePlugin
FlagIncludedChunksPlugin
ModuleConcatenationPlugin
NoEmitOnErrorsPlugin
OccurrenceOrderPlugin
SideEffectsFlagPlugin
TerserPlugin
none 不开启任何优化选项

解析
js jsx css 图片 字体 资源

解析 es6
babel-loader
.babelrc
匹配文件，然后，对文件进行解析
plugin 对应一个功能
preset plugin 的集合

react babel preset 配置
