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
