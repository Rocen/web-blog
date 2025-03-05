以下是 CSS3 **Grid 布局**的详细解析，它是一种强大的二维布局系统，适用于复杂页面结构的设计，能够精确控制行和列，实现灵活且响应式的布局。

---

### **一、核心概念**
1. **Grid 容器（Grid Container）**  
   通过 `display: grid` 或 `display: inline-grid` 将元素定义为网格容器，其直接子元素成为 **Grid 项目（Grid Item）**。

2. **网格轨道（Grid Track）**  
   - **行（Rows）**：水平轨道，由 `grid-template-rows` 定义。
   - **列（Columns）**：垂直轨道，由 `grid-template-columns` 定义。

3. **网格线（Grid Line）**  
   网格轨道的分界线，用于定位项目（编号从 1 开始）。

4. **网格单元格（Grid Cell）**  
   行和列交叉形成的单个单元格。

5. **网格区域（Grid Area）**  
   由多个单元格组成的矩形区域，通过 `grid-template-areas` 命名。

![Grid 布局示意图](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout/grid.png)

---

### **二、容器（Container）的属性**
以下属性作用于 **Grid 容器**，定义整体网格结构。

#### 1. **定义网格轨道**
- `grid-template-columns`：定义列宽（支持 `px`, `fr`, `auto`, `minmax()` 等）。
- `grid-template-rows`：定义行高。
- `grid-template-areas`：通过命名区域布局。

```css
.container {
  display: grid;
  grid-template-columns: 100px 1fr 2fr; /* 3列：100px、剩余空间的1:2比例 */
  grid-template-rows: 80px auto 120px;   /* 3行 */
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
}
```

#### 2. **间距控制**
- `gap`：简写属性，设置行和列的间距（替代旧的 `grid-gap`）。
  - `row-gap`：行间距。
  - `column-gap`：列间距。

```css
.container {
  gap: 20px 10px; /* 行间距20px，列间距10px */
}
```

#### 3. **隐式网格控制**
当项目超出显式定义的网格时，自动生成隐式轨道：
- `grid-auto-rows`：隐式行的高度。
- `grid-auto-columns`：隐式列的宽度。
- `grid-auto-flow`：自动放置项目的方向（`row`、`column`、`dense`）。

```css
.container {
  grid-auto-rows: 60px; /* 新增行默认高度60px */
  grid-auto-flow: dense; /* 密集填充空白 */
}
```

#### 4. **对齐方式**
- `justify-items`：所有项目在 **列方向（水平）** 的对齐方式（`start`、`end`、`center`、`stretch`）。
- `align-items`：所有项目在 **行方向（垂直）** 的对齐方式。
- `justify-content`：整个网格在容器中的水平对齐方式（当网格总宽度小于容器时）。
- `align-content`：整个网格在容器中的垂直对齐方式。

```css
.container {
  justify-items: center;  /* 所有项目水平居中 */
  align-content: space-between; /* 网格整体垂直两端对齐 */
}
```

---

### **三、项目（Item）的属性**
以下属性作用于 **Grid 项目**，控制项目在网格中的位置和尺寸。

#### 1. **位置控制**
- `grid-column-start` / `grid-column-end`：项目占据的列范围。
- `grid-row-start` / `grid-row-end`：项目占据的行范围。
- 简写：
  - `grid-column: 1 / 3` → 从第1列到第3列。
  - `grid-row: span 2` → 跨2行。

```css
.item {
  grid-column: 1 / 3;  /* 占据第1到第2列 */
  grid-row: 2 / 4;     /* 占据第2到第3行 */
}
```

#### 2. **命名区域定位**
通过 `grid-area` 将项目分配到命名区域：
```css
.header {
  grid-area: header; /* 对应 grid-template-areas 中的名称 */
}
```

#### 3. **对齐单个项目**
- `justify-self`：覆盖容器的 `justify-items`，控制单个项目的水平对齐。
- `align-self`：覆盖容器的 `align-items`，控制单个项目的垂直对齐。

```css
.item {
  justify-self: end;   /* 项目右侧对齐 */
  align-self: center;  /* 项目垂直居中 */
}
```

#### 4. **层级控制**
- `z-index`：调整项目在网格中的层叠顺序。

---

### **四、关键单位与函数**
1. **`fr` 单位**  
   按比例分配剩余空间（类似 Flex 的 `flex-grow`）。
   ```css
   grid-template-columns: 1fr 2fr; /* 两列，宽度比例为1:2 */
   ```

2. **`minmax(min, max)`**  
   定义轨道的最小和最大尺寸。
   ```css
   grid-template-columns: minmax(100px, 1fr);
   ```

3. **`repeat()`**  
   重复定义轨道，简化代码。
   ```css
   grid-template-columns: repeat(3, 1fr); /* 3列等宽 */
   ```

---

### **五、典型应用场景**
#### 1. **圣杯布局（Holy Grail Layout）**
```css
.container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: 80px 1fr 80px;
  grid-template-areas:
    "header header header"
    "left main right"
    "footer footer footer";
  height: 100vh;
}
.header { grid-area: header; }
.left { grid-area: left; }
.main { grid-area: main; }
.right { grid-area: right; }
.footer { grid-area: footer; }
```

#### 2. **响应式布局**
```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}
/* 效果：自动适应容器宽度，项目最小250px，自动换行 */
```

#### 3. **卡片网格**
```css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
```

---

### **六、Grid vs Flexbox**
| **特性**              | **Grid**                          | **Flexbox**                  |
|-----------------------|-----------------------------------|------------------------------|
| **维度**              | 二维（行 + 列）                   | 一维（行 或 列）             |
| **适用场景**          | 复杂布局（如整个页面结构）         | 单行/单列布局（如导航栏）     |
| **内容优先 vs 布局优先** | 布局优先（先定义结构，再填充内容） | 内容优先（根据内容动态调整）  |
| **控制方式**          | 显式定义行和列                    | 通过主轴和交叉轴控制          |

---

### **七、兼容性**
- 所有现代浏览器（Chrome、Firefox、Safari、Edge）均支持 Grid。
- IE 11 支持旧版语法（需前缀 `-ms-`），但功能有限。

---

### **总结**
- **Grid 的核心优势**：  
  精准控制二维布局、代码简洁、响应式能力强。
- **学习建议**：  
  从简单网格开始（如 `grid-template-columns: repeat(3, 1fr)`），逐步掌握轨道定义、命名区域和隐式网格。
- **最佳实践**：  
  结合 `minmax()`、`auto-fit`/`auto-fill` 和媒体查询，实现高度自适应的布局。