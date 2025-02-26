Webpack 性能优化手段主要包括以下几个方面：

### 1. **代码分割**
- **入口起点**：配置多个入口文件，拆分代码。
- **动态导入**：使用 `import()` 语法实现按需加载。
- **SplitChunksPlugin**：提取公共代码，避免重复打包。

### 2. **Tree Shaking**
- 通过 `import` 和 `export` 语法移除未使用的代码，需在 `package.json` 中设置 `"sideEffects": false`。

### 3. **缓存**
- **babel-loader 缓存**：启用 `cacheDirectory` 选项缓存 Babel 编译结果。
- **HardSourceWebpackPlugin**：缓存模块，提升二次构建速度。

### 4. **多线程/多进程构建**
- **thread-loader**：将耗时的 loader 放在多线程中运行。
- **HappyPack**：~~多线程处理 loader（已不推荐）~~。`
- **TerserWebpackPlugin 多进程**：启用 `parallel` 选项并行压缩代码。

### 5. **优化 Loader 配置**
- **缩小文件匹配范围**：通过 `include` 和 `exclude` 减少 loader 处理的文件数量。
- **缓存 loader 结果**：如 `babel-loader` 的 `cacheDirectory`。

### 6. **优化插件**
- **TerserWebpackPlugin**：压缩 JavaScript 代码。
- **OptimizeCSSAssetsPlugin**：压缩 CSS 代码。
- **PurgeCSSPlugin**：移除未使用的 CSS。

### 7. **DLLPlugin**
- 将不常变动的库提前打包，减少重复构建。

### 8. **模块解析优化**
- **resolve.alias**：配置别名，减少模块解析时间。
- **resolve.extensions**：减少文件扩展名匹配次数。

### 9. **DevServer 优化**
- **热更新**：启用 `hot: true` 提升开发效率。
- **lazy 模式**：按需编译，减少初始构建时间。

### 10. **生产环境优化**
- **启用生产模式**：设置 `mode: 'production'`，自动启用优化。
- **Source Map**：选择合适的 source map 类型，避免影响性能。

### 11. **分析工具**
- **webpack-bundle-analyzer**：分析打包文件，找出优化点。
- **speed-measure-webpack-plugin**：测量各插件和 loader 的耗时。

### 12. **其他优化**
- **压缩图片**：使用 `image-webpack-loader` 压缩图片。
- **使用 CDN**：通过 `output.publicPath` 将静态资源上传到 CDN。

通过这些手段，可以有效提升 Webpack 的构建性能和输出质量。