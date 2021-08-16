## webpack5 新特性

> webpack5 的 3 大更新
>
> 1. 持久化缓存
> 2. tree-shaking
> 3. module federation 模块联邦

## 1. 持久化缓存

- webpack4 里多次 build(构建)的速度时间是相同的,需要插件 cache 选项启动
- webpack5 将其内置,会缓存生成的 webpack 模块和 chunk,来改善构建速度
  - 缓存在 webpack5 中默认开启，缓存默认是在内存里,但可以对 cache 进行设置
  - webpack5 追踪了每个模块的依赖，并创建了文件系统快照。此快照会与真实文件系统进行比较，当检测到差异时，将触发对应模块的重新构建

## 2. 资源模块

- 资源模块是一种模块类型，它允许使用资源文件（字体，图标等）而无需配置额外 loader
- `raw-loader` => `asset/source`  导出资源的源代码
- `file-loader` => `asset/resource`  发送一个单独的文件并导出 URL
- `url-loader` => `asset/inline`  导出一个资源的 data URI
- asset 在导出一个 data URI 和发送一个单独的文件之间自动选择。之前通过使用  `url-loader`，并且配置资源体积限制实现
- [Rule.type](https://webpack.js.org/configuration/module/#rule)
- [asset-modules](https://webpack.js.org/guides/asset-modules/)

## 3. URIs

- [experiments](https://webpack.js.org/configuration/experiments/#experiments)
- Webpack 5 支持在请求中处理协议
- 支持 data 支持 Base64 或原始编码,`MimeType`可以在`module.rule`中被映射到加载器和模块类型

## 4. moduleIds & chunkIds 的优化

### 概念和选项

- module: 每一个文件其实都可以看成一个 module
- chunk: webpack 打包最终生成的代码块，代码块会生成文件，一个文件对应一个 chunk
- 在 webpack5 之前，没有从 entry 打包的 chunk 文件，都会以 1、2、3...的文件命名方式输出,删除某些些文件可能会导致缓存失效
- 在生产模式下，默认启用这些功能 chunkIds: "deterministic", moduleIds: "deterministic"，此算法采用`确定性`的方式将短数字 ID(3 或 4 个字符)短 hash 值分配给 modules 和 chunks
- chunkId 设置为 deterministic，则 output 中 chunkFilename 里的[name]会被替换成确定性短数字 ID
- 虽然 chunkId 不变(不管值是 deterministic | natural | named)，但更改 chunk 内容，chunkhash 还是会改变的

| 可选值        | 含义                           | 示例          |
| ------------- | ------------------------------ | ------------- |
| natural       | 按使用顺序的数字 ID            | 1             |
| named         | 方便调试的高可读性 id          | src_two_js.js |
| deterministic | 根据模块名称生成简短的 hash 值 | 915           |
| size          | 根据模块大小生成的数字 id      | 0             |

- deterministic:当文件名超过 999 个有可能出现 hash 冲突
- 一般开发环境下 named,生产环境 deterministic

## 5.tree-shaking

- webpack4 里的 tree-shaking 作用很小
