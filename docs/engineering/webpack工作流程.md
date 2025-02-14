Webpack 是一个现代 JavaScript 应用程序的静态模块打包工具，其核心工作流程可以划分为 **初始化配置、模块解析、依赖图构建、代码生成与优化、输出结果** 五个关键阶段。以下是详细的工作流程描述：

---

### 一、初始化阶段
1. **读取配置**  
   - 读取 `webpack.config.js` 或命令行参数，合并默认配置（`webpack` 内置的 `defaultConfig`）。
   - 初始化 **Compiler 对象**（核心控制类），负责整个打包过程的调度。

2. **加载插件**  
   - 根据配置中的 `plugins` 字段，实例化所有插件，并调用插件的 `apply` 方法，将 `Compiler` 对象暴露给插件。

3. **环境准备**  
   - 注册 `Compiler` 的生命周期钩子（如 `beforeRun`, `run`, `compile` 等），供插件监听。

---

### 二、模块解析与依赖图构建
1. **确定入口（Entry）**  
   - 根据配置的 `entry` 字段找到入口文件（如 `src/index.js`）。

2. **模块解析（Resolve）**  
   - **递归分析依赖**：从入口文件开始，解析 `import`/`require` 语句，找到所有依赖的模块路径。
   - **路径解析**：通过 `resolve` 配置（如别名、扩展名自动补全）确定模块的绝对路径。
   - **加载 Loader**：根据 `module.rules` 匹配文件类型，调用对应的 Loader 链（从右到左）对文件内容进行转换（如将 `.scss` 转成 CSS 再转 JS）。

3. **生成模块对象（Module）**  
   - 每个模块被解析为一个 `Module` 对象，包含：
     - 模块的唯一标识（ID）
     - 模块的源代码（经过 Loader 处理后的 JS 代码）
     - 依赖的模块路径列表（`dependencies`）

4. **构建依赖图（Dependency Graph）**  
   - 通过递归遍历所有模块的依赖关系，形成模块间的依赖关系图（树状或图结构）。

---

### 三、代码生成与优化
1. **生成 Chunk**  
   - 根据入口文件和动态导入（`import()`）分割代码块（Chunk）。
   - 每个入口文件对应一个初始 Chunk，动态导入的模块会生成独立的 Chunk。

2. **优化处理（Optimization）**  
   - **Tree Shaking**：通过 `ES Module` 静态语法标记未使用的代码，并在生产环境移除。
   - **代码分割（Code Splitting）**：按需加载的代码块、公共模块提取（如 `SplitChunksPlugin`）。
   - **作用域提升（Scope Hoisting）**：合并模块作用域，减少闭包数量，优化运行性能。
   - **压缩混淆**：使用 `TerserPlugin` 压缩 JS，`CssMinimizerPlugin` 压缩 CSS。

3. **应用插件优化**  
   - 插件通过监听 `Compiler` 的钩子（如 `optimizeChunks`, `optimizeModules`）介入优化过程。

---

### 四、输出阶段（Emit）
1. **生成资源（Assets）**  
   - 根据 Chunk 和 `output` 配置，生成最终输出文件：
     - **Bundle 文件**：主 JS 文件、按需加载的 Chunk 文件。
     - **辅助文件**：CSS 文件（通过 `MiniCssExtractPlugin`）、图片、字体等。

2. **文件写入**  
   - 调用 `Compilation` 的 `emitAssets` 方法，将文件写入 `output.path` 指定的目录。
   - 文件名可能包含哈希（如 `[contenthash]`），用于缓存策略。

3. **生成 Manifest**  
   - 记录模块 ID 与 Chunk 的映射关系，供运行时（Runtime）使用。

---

### 五、收尾阶段
1. **触发插件钩子**  
   - 调用 `done` 钩子，通知插件打包完成。
   - 输出统计信息（Stats），可通过配置或 `--stats` 控制详细程度。

2. **监听模式（Watch Mode）**  
   - 如果启用 `watch: true`，Webpack 会监听文件变化，重新触发编译流程。

---

### 流程图解
```plaintext
初始化配置 → 创建Compiler → 启动编译 → 解析入口 → 构建模块依赖图 
    ↓                                ↓
加载插件         应用Loader转换代码 → 生成Chunk → 优化 → 输出文件
```

---

### 核心对象与概念
- **Compiler**：全局唯一的打包控制器，管理生命周期和插件调度。
- **Compilation**：单次编译过程的上下文，包含模块、Chunk、生成的资源等信息。
- **Module**：代码模块的抽象，包含源码、依赖、ID 等。
- **Chunk**：输出文件的代码块，由多个 Module 组成。
- **Loader**：文件内容转换器（如转换非 JS 文件）。
- **Plugin**：通过钩子介入打包流程，扩展功能。

通过这一流程，Webpack 将分散的模块整合为可部署的静态资源，同时支持复杂的优化和扩展能力。