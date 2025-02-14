在 Webpack 中，**Compiler** 和 **Compilation** 是构建流程的两个核心对象，它们分别承担不同的职责，协同完成模块打包工作。以下是它们的核心作用和区别：

---

### **1. Compiler（编译器）**
- **作用**  
  - **全局构建控制器**：贯穿整个 Webpack 的生命周期，负责启动、配置和协调构建流程。
  - **环境初始化**：加载 Webpack 配置（`webpack.config.js`）、初始化插件、创建 `Compilation` 实例。
  - **事件调度**：触发全局钩子（如 `beforeRun`、`run`、`done`），供插件监听和干预构建过程。

- **生命周期**  
  - **单例对象**：在 Webpack 启动时创建，整个构建过程中唯一存在。
  - **存活时间**：从 Webpack 启动到结束（如开发模式下 `watch` 持续运行）。

- **典型场景**  
  ```javascript
  class MyPlugin {
    apply(compiler) {
      // 监听 Compiler 的 "run" 钩子（构建开始时触发）
      compiler.hooks.run.tap('MyPlugin', () => {
        console.log('Webpack 构建启动！');
      });
    }
  }
  ```

---

### **2. Compilation（编译过程）**
- **作用**  
  - **单次构建上下文**：管理**单次**构建（如初始构建或文件变更后的增量构建）的所有数据。
  - **模块处理**：解析模块依赖、转换代码（Loader）、生成模块依赖图（Module Graph）。
  - **资源生成**：根据依赖图生成 Chunk、优化（Tree Shaking、Code Splitting）、输出最终文件。

- **生命周期**  
  - **临时对象**：每次构建（包括 `watch` 模式下的每次文件变更）都会创建一个新的 `Compilation`。
  - **存活时间**：从单次构建开始到结束（完成后销毁）。

- **典型场景**  
  ```javascript
  compiler.hooks.compilation.tap('MyPlugin', (compilation) => {
    // 监听 Compilation 的 "optimizeChunks" 钩子（优化 Chunk 时触发）
    compilation.hooks.optimizeChunks.tap('MyPlugin', (chunks) => {
      console.log('正在优化 Chunk！');
    });
  });
  ```

---

### **3. 核心区别**
| **维度**         | **Compiler**                          | **Compilation**                      |
|-------------------|---------------------------------------|--------------------------------------|
| **作用范围**      | 全局，控制整个 Webpack 进程           | 单次构建，处理具体模块和资源生成      |
| **生命周期**      | 单例，存活于 Webpack 整个运行期间     | 临时对象，每次构建时创建并销毁        |
| **数据内容**      | 包含配置、插件等全局信息              | 包含模块图、Chunk、本次构建的中间状态 |
| **典型钩子**      | `beforeRun`, `run`, `done`, `watchRun` | `buildModule`, `finishModules`, `optimizeChunks` |

---

### **4. 协作关系**
1. **启动阶段**  
   Webpack 根据配置创建 `Compiler`，应用所有插件的 `apply` 方法，注册全局钩子。

2. **构建触发**  
   当执行构建（如 `compiler.run()`），`Compiler` 触发 `run` 钩子，随后创建 `Compilation` 实例。

3. **模块处理**  
   `Compilation` 开始解析入口文件、递归构建模块依赖图，调用 Loader 转换代码。

4. **优化与输出**  
   `Compilation` 完成优化后，将结果传递给 `Compiler`，由 `Compiler` 的 `emit` 钩子触发文件写入。

---

### **5. 插件开发中的应用**
- **修改全局配置**：通过 `Compiler` 的钩子（如 `environment`）修改 Webpack 运行环境。
- **干预单次构建**：通过 `Compilation` 的钩子（如 `optimizeChunks`）调整 Chunk 生成策略。
- **示例：统计构建耗时**  
  ```javascript
  class BuildTimePlugin {
    apply(compiler) {
      let startTime;

      compiler.hooks.run.tap('BuildTimePlugin', () => {
        startTime = Date.now();
      });

      compiler.hooks.done.tap('BuildTimePlugin', () => {
        console.log(`构建耗时：${Date.now() - startTime}ms`);
      });
    }
  }
  ```

---

### **总结**
- **Compiler** 是 Webpack 的“大脑”，管理全局流程和配置。
- **Compilation** 是单次构建的“执行者”，处理模块转换和资源生成。
- 理解二者的区别，能帮助你更精准地编写插件，或在调试时定位问题（如区分全局配置错误和单次构建逻辑错误）。