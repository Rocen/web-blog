import{_ as i,c as a,o as n,ae as l}from"./chunks/framework.Bl5GZLa3.js";const c=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"css/Flex.md","filePath":"css/Flex.md"}'),e={name:"css/Flex.md"};function t(h,s,p,k,d,r){return n(),a("div",null,s[0]||(s[0]=[l(`<p>CSS3 中的 <strong>Flexbox（弹性盒子布局）</strong> 是一种用于页面布局的现代 CSS 技术，旨在更高效、直观地实现复杂的一维（单行或单列）布局。它通过赋予容器和子元素动态调整尺寸、对齐和分布空间的能力，简化了传统布局（如浮动、定位）的复杂性。</p><hr><h3 id="一、核心概念" tabindex="-1"><strong>一、核心概念</strong> <a class="header-anchor" href="#一、核心概念" aria-label="Permalink to &quot;**一、核心概念**&quot;">​</a></h3><ol><li><p><strong>Flex 容器（Flex Container）</strong><br> 通过 <code>display: flex</code> 或 <code>display: inline-flex</code> 将一个元素定义为弹性容器，其直接子元素自动成为 <strong>Flex 项目（Flex Item）</strong>。</p></li><li><p><strong>主轴（Main Axis）</strong> 与 <strong>交叉轴（Cross Axis）</strong></p><ul><li>主轴：Flex 项目的默认排列方向（水平或垂直，由 <code>flex-direction</code> 决定）。</li><li>交叉轴：与主轴垂直的方向。</li></ul><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0e8d7f4f5d3c4e8d8f0c6d4b4c4d4d4a~tplv-k3u1fbpfcp-zoom-1.image" alt="Flexbox 主轴与交叉轴示意图"></p></li></ol><hr><h3 id="二、容器-container-的属性" tabindex="-1"><strong>二、容器（Container）的属性</strong> <a class="header-anchor" href="#二、容器-container-的属性" aria-label="Permalink to &quot;**二、容器（Container）的属性**&quot;">​</a></h3><p>以下属性作用于 <strong>Flex 容器</strong>，控制整体布局行为：</p><h4 id="_1-flex-direction" tabindex="-1">1. <code>flex-direction</code> <a class="header-anchor" href="#_1-flex-direction" aria-label="Permalink to &quot;1. \`flex-direction\`&quot;">​</a></h4><p>定义主轴方向（即项目的排列方向）：</p><ul><li><code>row</code>（默认）：水平排列（左到右）</li><li><code>row-reverse</code>：水平反向排列（右到左）</li><li><code>column</code>：垂直排列（上到下）</li><li><code>column-reverse</code>：垂直反向排列（下到上）</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-direction</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">row</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_2-flex-wrap" tabindex="-1">2. <code>flex-wrap</code> <a class="header-anchor" href="#_2-flex-wrap" aria-label="Permalink to &quot;2. \`flex-wrap\`&quot;">​</a></h4><p>控制项目是否换行：</p><ul><li><code>nowrap</code>（默认）：不换行（可能导致溢出）</li><li><code>wrap</code>：换行（多行排列）</li><li><code>wrap-reverse</code>：反向换行</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_3-justify-content" tabindex="-1">3. <code>justify-content</code> <a class="header-anchor" href="#_3-justify-content" aria-label="Permalink to &quot;3. \`justify-content\`&quot;">​</a></h4><p>控制项目在 <strong>主轴</strong> 上的对齐方式：</p><ul><li><code>flex-start</code>（默认）：左对齐</li><li><code>flex-end</code>：右对齐</li><li><code>center</code>：居中对齐</li><li><code>space-between</code>：两端对齐，项目间等距</li><li><code>space-around</code>：项目两侧等距</li><li><code>space-evenly</code>：所有间距相等</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">space-between</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_4-align-items" tabindex="-1">4. <code>align-items</code> <a class="header-anchor" href="#_4-align-items" aria-label="Permalink to &quot;4. \`align-items\`&quot;">​</a></h4><p>控制项目在 <strong>交叉轴</strong> 上的对齐方式：</p><ul><li><code>stretch</code>（默认）：拉伸填满容器高度</li><li><code>flex-start</code>：顶部对齐</li><li><code>flex-end</code>：底部对齐</li><li><code>center</code>：垂直居中</li><li><code>baseline</code>：基线对齐</li></ul><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 垂直居中 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_5-align-content" tabindex="-1">5. <code>align-content</code> <a class="header-anchor" href="#_5-align-content" aria-label="Permalink to &quot;5. \`align-content\`&quot;">​</a></h4><p>控制多行项目在 <strong>交叉轴</strong> 上的对齐方式（需启用 <code>flex-wrap: wrap</code>）：</p><ul><li>值与 <code>justify-content</code> 类似（如 <code>space-between</code>, <code>center</code>）。</li></ul><hr><h3 id="三、项目-item-的属性" tabindex="-1"><strong>三、项目（Item）的属性</strong> <a class="header-anchor" href="#三、项目-item-的属性" aria-label="Permalink to &quot;**三、项目（Item）的属性**&quot;">​</a></h3><p>以下属性作用于 <strong>Flex 项目</strong>，控制单个元素的行为：</p><h4 id="_1-order" tabindex="-1">1. <code>order</code> <a class="header-anchor" href="#_1-order" aria-label="Permalink to &quot;1. \`order\`&quot;">​</a></h4><p>定义项目的排列顺序（数值越小越靠前，默认 <code>0</code>）：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  order</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 此项目排在第三个位置 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_2-flex-grow" tabindex="-1">2. <code>flex-grow</code> <a class="header-anchor" href="#_2-flex-grow" aria-label="Permalink to &quot;2. \`flex-grow\`&quot;">​</a></h4><p>定义项目的放大比例（默认 <code>0</code>，即不放大）：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-grow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 占据剩余空间的比例 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_3-flex-shrink" tabindex="-1">3. <code>flex-shrink</code> <a class="header-anchor" href="#_3-flex-shrink" aria-label="Permalink to &quot;3. \`flex-shrink\`&quot;">​</a></h4><p>定义项目的缩小比例（默认 <code>1</code>，即空间不足时缩小）：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-shrink</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 禁止缩小 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_4-flex-basis" tabindex="-1">4. <code>flex-basis</code> <a class="header-anchor" href="#_4-flex-basis" aria-label="Permalink to &quot;4. \`flex-basis\`&quot;">​</a></h4><p>定义项目的初始大小（默认 <code>auto</code>）：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-basis</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 初始宽度为 200px */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_5-align-self" tabindex="-1">5. <code>align-self</code> <a class="header-anchor" href="#_5-align-self" aria-label="Permalink to &quot;5. \`align-self\`&quot;">​</a></h4><p>覆盖容器的 <code>align-items</code>，定义单个项目的交叉轴对齐方式：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-self</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex-end</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 单独底部对齐 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="_6-flex-简写" tabindex="-1">6. <code>flex</code> 简写 <a class="header-anchor" href="#_6-flex-简写" aria-label="Permalink to &quot;6. \`flex\` 简写&quot;">​</a></h4><p>合并 <code>flex-grow</code>, <code>flex-shrink</code>, <code>flex-basis</code>：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 放大1、不缩小、初始100px */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h3 id="四、典型应用场景" tabindex="-1"><strong>四、典型应用场景</strong> <a class="header-anchor" href="#四、典型应用场景" aria-label="Permalink to &quot;**四、典型应用场景**&quot;">​</a></h3><ol><li><p><strong>垂直居中</strong><br> 只需两行代码：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  align-items</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">center</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>等高列布局</strong><br> Flex 容器内的项目默认拉伸为等高：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>自适应导航栏</strong><br> 使用 <code>justify-content: space-between</code> 实现左右分布：</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nav&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;logo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Logo&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> class</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;menu&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Home&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;#&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;About&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.nav</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  justify-content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">space-between</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p><strong>响应式布局</strong><br> 结合媒体查询和 <code>flex-wrap</code> 实现多设备适配：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.container</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  display</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex-wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">wrap</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.item</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  flex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 200</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">px</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* 最小宽度 200px，自动换行 */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><hr><h3 id="五、flexbox-vs-grid" tabindex="-1"><strong>五、Flexbox vs Grid</strong> <a class="header-anchor" href="#五、flexbox-vs-grid" aria-label="Permalink to &quot;**五、Flexbox vs Grid**&quot;">​</a></h3><ul><li><strong>Flexbox</strong>：适合 <strong>一维布局</strong>（单行或单列排列）。</li><li><strong>Grid</strong>：适合 <strong>二维布局</strong>（同时控制行和列）。</li></ul><hr><h3 id="六、兼容性" tabindex="-1"><strong>六、兼容性</strong> <a class="header-anchor" href="#六、兼容性" aria-label="Permalink to &quot;**六、兼容性**&quot;">​</a></h3><ul><li>所有现代浏览器（Chrome、Firefox、Safari、Edge）均支持 Flexbox。</li><li>对 IE 10/11 需添加 <code>-ms-</code> 前缀（如 <code>display: -ms-flexbox</code>）。</li></ul><hr><h3 id="总结" tabindex="-1"><strong>总结</strong> <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;**总结**&quot;">​</a></h3><p>Flexbox 通过简洁的属性和强大的对齐能力，彻底改变了 CSS 布局方式。掌握其核心概念和常用属性，可以快速实现过去需要复杂代码才能完成的布局效果。</p>`,59)]))}const E=i(e,[["render",t]]);export{c as __pageData,E as default};
