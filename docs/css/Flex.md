CSS3 中的 **Flexbox（弹性盒子布局）** 是一种用于页面布局的现代 CSS 技术，旨在更高效、直观地实现复杂的一维（单行或单列）布局。它通过赋予容器和子元素动态调整尺寸、对齐和分布空间的能力，简化了传统布局（如浮动、定位）的复杂性。

---

### **一、核心概念**
1. **Flex 容器（Flex Container）**  
   通过 `display: flex` 或 `display: inline-flex` 将一个元素定义为弹性容器，其直接子元素自动成为 **Flex 项目（Flex Item）**。

2. **主轴（Main Axis）** 与 **交叉轴（Cross Axis）**  
   - 主轴：Flex 项目的默认排列方向（水平或垂直，由 `flex-direction` 决定）。
   - 交叉轴：与主轴垂直的方向。

   ![Flexbox 主轴与交叉轴示意图](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e8d7f4f5d3c4e8d8f0c6d4b4c4d4d4a~tplv-k3u1fbpfcp-zoom-1.image)

---

### **二、容器（Container）的属性**
以下属性作用于 **Flex 容器**，控制整体布局行为：

#### 1. `flex-direction`  
定义主轴方向（即项目的排列方向）：
- `row`（默认）：水平排列（左到右）
- `row-reverse`：水平反向排列（右到左）
- `column`：垂直排列（上到下）
- `column-reverse`：垂直反向排列（下到上）

```css
.container {
  display: flex;
  flex-direction: row; 
}
```

#### 2. `flex-wrap`  
控制项目是否换行：
- `nowrap`（默认）：不换行（可能导致溢出）
- `wrap`：换行（多行排列）
- `wrap-reverse`：反向换行

```css
.container {
  flex-wrap: wrap;
}
```

#### 3. `justify-content`  
控制项目在 **主轴** 上的对齐方式：
- `flex-start`（默认）：左对齐
- `flex-end`：右对齐
- `center`：居中对齐
- `space-between`：两端对齐，项目间等距
- `space-around`：项目两侧等距
- `space-evenly`：所有间距相等

```css
.container {
  justify-content: space-between;
}
```

#### 4. `align-items`  
控制项目在 **交叉轴** 上的对齐方式：
- `stretch`（默认）：拉伸填满容器高度
- `flex-start`：顶部对齐
- `flex-end`：底部对齐
- `center`：垂直居中
- `baseline`：基线对齐

```css
.container {
  align-items: center; /* 垂直居中 */
}
```

#### 5. `align-content`  
控制多行项目在 **交叉轴** 上的对齐方式（需启用 `flex-wrap: wrap`）：
- 值与 `justify-content` 类似（如 `space-between`, `center`）。

---

### **三、项目（Item）的属性**
以下属性作用于 **Flex 项目**，控制单个元素的行为：

#### 1. `order`  
定义项目的排列顺序（数值越小越靠前，默认 `0`）：
```css
.item {
  order: 2; /* 此项目排在第三个位置 */
}
```

#### 2. `flex-grow`  
定义项目的放大比例（默认 `0`，即不放大）：
```css
.item {
  flex-grow: 1; /* 占据剩余空间的比例 */
}
```

#### 3. `flex-shrink`  
定义项目的缩小比例（默认 `1`，即空间不足时缩小）：
```css
.item {
  flex-shrink: 0; /* 禁止缩小 */
}
```

#### 4. `flex-basis`  
定义项目的初始大小（默认 `auto`）：
```css
.item {
  flex-basis: 200px; /* 初始宽度为 200px */
}
```

#### 5. `align-self`  
覆盖容器的 `align-items`，定义单个项目的交叉轴对齐方式：
```css
.item {
  align-self: flex-end; /* 单独底部对齐 */
}
```

#### 6. `flex` 简写  
合并 `flex-grow`, `flex-shrink`, `flex-basis`：
```css
.item {
  flex: 1 0 100px; /* 放大1、不缩小、初始100px */
}
```

---

### **四、典型应用场景**
1. **垂直居中**  
   只需两行代码：
   ```css
   .container {
     display: flex;
     justify-content: center;
     align-items: center;
   }
   ```

2. **等高列布局**  
   Flex 容器内的项目默认拉伸为等高：
   ```css
   .container {
     display: flex;
   }
   ```

3. **自适应导航栏**  
   使用 `justify-content: space-between` 实现左右分布：
   ```html
   <div class="nav">
     <div class="logo">Logo</div>
     <div class="menu">
       <a href="#">Home</a>
       <a href="#">About</a>
     </div>
   </div>
   ```
   ```css
   .nav {
     display: flex;
     justify-content: space-between;
   }
   ```

4. **响应式布局**  
   结合媒体查询和 `flex-wrap` 实现多设备适配：
   ```css
   .container {
     display: flex;
     flex-wrap: wrap;
   }
   .item {
     flex: 1 0 200px; /* 最小宽度 200px，自动换行 */
   }
   ```

---

### **五、Flexbox vs Grid**
- **Flexbox**：适合 **一维布局**（单行或单列排列）。
- **Grid**：适合 **二维布局**（同时控制行和列）。

---

### **六、兼容性**
- 所有现代浏览器（Chrome、Firefox、Safari、Edge）均支持 Flexbox。
- 对 IE 10/11 需添加 `-ms-` 前缀（如 `display: -ms-flexbox`）。

---

### **总结**
Flexbox 通过简洁的属性和强大的对齐能力，彻底改变了 CSS 布局方式。掌握其核心概念和常用属性，可以快速实现过去需要复杂代码才能完成的布局效果。