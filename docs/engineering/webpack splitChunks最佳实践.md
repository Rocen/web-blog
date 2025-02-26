以下是 Webpack `splitChunks` 的最佳实践及详细配置解析，帮助你在项目中合理分割代码，提升加载性能：

---

### **1. 核心目标**
- **减少重复代码**：提取公共依赖（如 `lodash`、`react`）。
- **按需加载**：分割动态导入的模块（如路由组件）。
- **控制请求数量**：避免生成过多小文件（通过 `minSize` 等阈值控制）。

---

### **2. 默认行为**
Webpack 5 默认配置已足够智能，但需根据项目调整：
```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'async',         // 默认只分割异步模块（如 import()）
      minSize: 20000,          // 模块大于 20KB 才分割
      minRemainingSize: 0,
      minChunks: 1,            // 至少被引用 1 次才分割
      maxAsyncRequests: 30,    // 最大异步请求数（防过多小文件）
      maxInitialRequests: 30,  // 最大初始请求数
      enforceSizeThreshold: 50000, // 强制分割阈值（50KB）
      cacheGroups: {           // 自定义分组规则
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,       // 优先级（值越大优先级越高）
          reuseExistingChunk: true,
        },
        default: {
          minChunks: 2,        // 被引用 2 次以上提取为公共模块
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
```

---

### **3. 最佳实践配置示例**
#### **(1) 基础优化：分离第三方库**
```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all', // 同时处理同步和异步代码
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',     // 固定名称
          chunks: 'all',
          priority: 10,        // 优先级高于 default 分组
        },
        react: {               // 单独提取 React 相关库
          test: /[\\/]node_modules[\\/](react|react-dom|react-router)[\\/]/,
          name: 'react-core',
          chunks: 'all',
          priority: 20,        // 更高优先级
        },
      },
    },
  },
};
```

#### **(2) 提取公共业务代码**
```javascript
cacheGroups: {
  common: {
    name: 'common',
    minChunks: 2,        // 至少被 2 个入口引用
    chunks: 'all',
    priority: 5,         // 优先级低于 vendors
    reuseExistingChunk: true,
  },
}
```

#### **(3) 按需加载的路由组件**
结合动态导入语法（自动触发代码分割）：
```javascript
// 使用动态导入
const Home = () => import('./Home.vue');
const About = () => import('./About.vue');
```

---

### **4. 关键参数说明**
| 参数                  | 说明                                                                 |
|-----------------------|--------------------------------------------------------------------|
| `chunks: 'all'`       | 处理所有类型代码（同步/异步），最大化提取公共模块                              |
| `minSize: 20000`      | 模块体积 > 20KB 才分割（避免生成过多小文件）                                |
| `maxAsyncRequests: 5` | 按需加载时，最多同时请求 5 个 chunk（防止 HTTP 请求过多）                    |
| `priority: 10`        | 分组优先级，值越大越优先匹配（防止模块被错误分组）                             |
| `reuseExistingChunk: true` | 复用已存在的 chunk（避免重复打包）                                      |

---

### **5. 注意事项**
1. **避免过度分割**：  
   - 设置合理的 `minSize`（如 20KB）和 `maxAsyncRequests`（如 5-10）。
   - 过小的 chunk 会增加 HTTP 请求开销。

2. **命名策略**：  
   - 使用 `name: 'vendors'` 固定名称，避免哈希变化导致缓存失效。
   - 动态模块默认自动命名，无需手动干预。

3. **监控分析**：  
   - 使用 `webpack-bundle-analyzer` 分析分割效果：
     ```javascript
     const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
     plugins: [new BundleAnalyzerPlugin()];
     ```

4. **生产/开发环境差异化**：  
   - 生产环境启用更严格的分割，开发环境可关闭部分优化以提升构建速度。

---

### **6. 实战示例**
```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 20000,
      maxAsyncRequests: 6,      // 按需加载最多 6 个请求
      maxInitialRequests: 4,    // 入口文件最多 4 个请求
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          priority: 20,
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          name: 'react-core',
          chunks: 'all',
          priority: 30, // 优先级高于 vendors
        },
        utils: {
          test: /[\\/]src[\\/]utils[\\/]/, // 提取业务公共工具类
          name: 'utils',
          chunks: 'all',
          minChunks: 2,
          priority: 10,
        },
      },
    },
  },
};
```

---

### **总结**
- **核心逻辑**：按体积、引用次数、来源（如 `node_modules`）分割代码。
- **权衡点**：在减少重复代码和控制请求数量之间找到平衡。
- **验证手段**：通过分析工具确保分割后的 chunks 大小合理，无冗余代码。

根据项目规模调整参数，优先解决体积最大的依赖项（如 `antd`、`lodash`），再逐步优化业务代码！