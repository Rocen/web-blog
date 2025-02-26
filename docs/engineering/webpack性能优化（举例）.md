以下是 Webpack 性能优化的常见手段及具体示例：

---

### 1. **代码分割（Code Splitting）**
**示例1：动态导入（按需加载）**
```javascript
// 使用动态导入语法（Webpack 自动拆分代码）
const loadModule = () => import('./largeModule.js');
loadModule().then(module => {
  module.doSomething();
});

// 输出结果：Webpack 会将 largeModule.js 单独打包为一个 chunk
```

**示例2：`SplitChunksPlugin` 配置**
```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
// 效果：将 node_modules 中的依赖单独打包为 vendors.js
```

---

### 2. **Tree Shaking（摇树优化）**
**示例**  
确保使用 ES Module 语法，并在 `package.json` 中标记副作用：
```json
// package.json
{
  "sideEffects": ["*.css", "*.scss"] // 标记无副作用的文件（如 CSS 需保留）
}
```
Webpack 会自动移除未使用的代码（需设置 `mode: 'production'`）。

---

### 3. **缓存优化**
**示例1：Babel 缓存**
```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true, // 启用 Babel 缓存
          },
        },
      },
    ],
  },
};
```

**示例2：Webpack 5 持久化缓存**
```javascript
// webpack.config.js
module.exports = {
  cache: {
    type: 'filesystem', // 使用文件系统缓存（Webpack 5 内置）
  },
};
```

---

### 4. **多线程/多进程构建**
**示例1：`thread-loader`（多线程处理 Loader）**
```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'thread-loader', // 将后续 Loader 放在多线程中运行
            options: {
              workers: 4, // 线程数
            },
          },
          'babel-loader',
        ],
      },
    ],
  },
};
```

**示例2：`TerserWebpackPlugin` 多进程压缩**
```javascript
// webpack.config.js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [
      new TerserPlugin({
        parallel: true, // 启用多进程压缩（默认使用 CPU 核心数 -1）
      }),
    ],
  },
};
```

---

### 5. **优化模块解析**
**示例1：`resolve.alias` 缩短路径**
```javascript
// webpack.config.js
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // 用别名缩短路径
    },
  },
};
```

**示例2：`resolve.extensions` 优化**
```javascript
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx'], // 减少文件后缀匹配次数
  },
};
```

---

### 6. **生产环境优化**
**示例1：启用生产模式**
```javascript
// webpack.config.js
module.exports = {
  mode: 'production', // 自动启用 Terser 压缩、Tree Shaking 等
};
```

**示例2：CSS 压缩**
```javascript
// webpack.config.js
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  optimization: {
    minimizer: [new CssMinimizerPlugin()], // 压缩 CSS
  },
};
```

---

### 7. **分析工具**
**示例：`webpack-bundle-analyzer` 分析包体积**
```javascript
// webpack.config.js
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin(), // 构建后自动打开分析页面
  ],
};
```

---

### 8. **其他优化**
**示例1：图片压缩**
```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: { name: '[name].[hash:8].[ext]' },
          },
          {
            loader: 'image-webpack-loader', // 压缩图片
            options: {
              mozjpeg: { quality: 60 },
            },
          },
        ],
      },
    ],
  },
};
```

**示例2：使用 CDN**
```javascript
// webpack.config.js
module.exports = {
  output: {
    publicPath: 'https://cdn.example.com/assets/', // 静态资源上传到 CDN
  },
};
```

---

### 总结
- **开发环境**：优先使用缓存（`cache`）、多线程（`thread-loader`）、热更新（`HMR`）。
- **生产环境**：代码分割、压缩（JS/CSS/图片）、Tree Shaking、CDN。
- **通用优化**：分析工具（`BundleAnalyzerPlugin`）、模块解析优化（`alias`）。
