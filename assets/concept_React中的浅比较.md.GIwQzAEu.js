import{_ as i,c as a,o as n,ae as t}from"./chunks/framework.Bl5GZLa3.js";const E=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"concept/React中的浅比较.md","filePath":"concept/React中的浅比较.md"}'),e={name:"concept/React中的浅比较.md"};function l(h,s,p,k,r,d){return n(),a("div",null,s[0]||(s[0]=[t(`<p>在 React 中，<strong><code>useEffect</code>、<code>useMemo</code>、<code>useCallback</code> 等 Hook 的依赖项数组（第二个参数）的比较方式确实是浅比较</strong>，但具体实现是基于 <code>Object.is</code> 算法，而不是简单的 <code>===</code> 运算符。以下是详细说明和注意事项：</p><hr><h3 id="_1-依赖项的比较方式" tabindex="-1"><strong>1. 依赖项的比较方式</strong> <a class="header-anchor" href="#_1-依赖项的比较方式" aria-label="Permalink to &quot;**1. 依赖项的比较方式**&quot;">​</a></h3><p>React 对依赖项数组中的每一项进行<strong>浅比较</strong>，具体规则如下：</p><ul><li><strong>基本类型</strong>（如 <code>number</code>、<code>string</code>、<code>boolean</code>、<code>null</code>、<code>undefined</code>、<code>Symbol</code>）：<br> 直接比较值是否相同（<code>Object.is(value1, value2)</code>）。</li><li><strong>引用类型</strong>（如对象、数组、函数）：<br> 比较的是它们的<strong>内存引用</strong>是否一致（即是否是同一个对象或函数实例），<strong>不会递归检查内部属性是否变化</strong>。</li></ul><h4 id="示例" tabindex="-1">示例： <a class="header-anchor" href="#示例" aria-label="Permalink to &quot;示例：&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> obj2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 即使内容相同，引用不同，浅比较认为不相等</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">is</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj1, obj2); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// false</span></span></code></pre></div><hr><h3 id="_2-为什么-react-使用浅比较" tabindex="-1"><strong>2. 为什么 React 使用浅比较？</strong> <a class="header-anchor" href="#_2-为什么-react-使用浅比较" aria-label="Permalink to &quot;**2. 为什么 React 使用浅比较？**&quot;">​</a></h3><ul><li><strong>性能优化</strong>：<br> 深比较需要递归遍历所有属性，对复杂对象可能导致性能问题。浅比较的时间复杂度为 O(1)（基本类型）或 O(n)（依赖项数组长度），效率更高。</li><li><strong>不可变数据模式</strong>：<br> React 鼓励使用不可变数据（如通过 <code>setState</code> 返回新对象），依赖项引用变化即代表数据已更新，浅比较可以快速检测到变化。</li><li><strong>避免意外行为</strong>：<br> 如果依赖项是动态生成的对象或函数（如 <code>() =&gt; {}</code> 或 <code>{ key: value }</code>），每次渲染都会生成新的引用，深比较会导致依赖项永远“不相等”，反而触发无限更新。</li></ul><hr><h3 id="_3-依赖项是引用类型的陷阱" tabindex="-1"><strong>3. 依赖项是引用类型的陷阱</strong> <a class="header-anchor" href="#_3-依赖项是引用类型的陷阱" aria-label="Permalink to &quot;**3. 依赖项是引用类型的陷阱**&quot;">​</a></h3><p>如果依赖项是对象、数组或函数，且未保持引用稳定，可能导致 Hook 频繁触发：</p><h4 id="错误示例" tabindex="-1">错误示例： <a class="header-anchor" href="#错误示例" aria-label="Permalink to &quot;错误示例：&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ❌ 每次渲染时，dataFiltered 都是新对象，导致 useEffect 重复执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataFiltered</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.isActive);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 副作用逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, [dataFiltered]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 依赖项引用每次变化，触发 effect</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h4 id="正确修复方法" tabindex="-1">正确修复方法： <a class="header-anchor" href="#正确修复方法" aria-label="Permalink to &quot;正确修复方法：&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ✅ 使用 useMemo 保持引用稳定（当 data 和过滤条件未变时，返回缓存值）</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> dataFiltered</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useMemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">filter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">item</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> item.isActive),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [data] </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 仅当 data 变化时重新计算</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 副作用逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }, [dataFiltered]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 依赖项引用稳定</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><hr><h3 id="_4-如何实现深比较依赖项" tabindex="-1"><strong>4. 如何实现深比较依赖项？</strong> <a class="header-anchor" href="#_4-如何实现深比较依赖项" aria-label="Permalink to &quot;**4. 如何实现深比较依赖项？**&quot;">​</a></h3><p>React 不原生支持深比较依赖项，但可通过以下方式手动处理：</p><h4 id="方法-1-自定义-hook-结合-useref-和深比较库" tabindex="-1">方法 1：自定义 Hook（结合 <code>useRef</code> 和深比较库） <a class="header-anchor" href="#方法-1-自定义-hook-结合-useref-和深比较库" aria-label="Permalink to &quot;方法 1：自定义 Hook（结合 \`useRef\` 和深比较库）&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { isEqual } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lodash&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDeepCompareEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">effect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dependencies</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> prevDeps</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useRef</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(dependencies);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 手动深比较依赖项</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">isEqual</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(prevDeps.current, dependencies)) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    prevDeps.current </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> dependencies;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(effect, [prevDeps.current]);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用示例</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useDeepCompareEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 副作用逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, [obj]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 依赖项 obj 的内容变化时触发</span></span></code></pre></div><h4 id="方法-2-序列化依赖项-仅适用于可序列化数据" tabindex="-1">方法 2：序列化依赖项（仅适用于可序列化数据） <a class="header-anchor" href="#方法-2-序列化依赖项-仅适用于可序列化数据" aria-label="Permalink to &quot;方法 2：序列化依赖项（仅适用于可序列化数据）&quot;">​</a></h4><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 副作用逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj)]); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 当 obj 的 JSON 字符串变化时触发</span></span></code></pre></div><h4 id="注意事项" tabindex="-1">注意事项： <a class="header-anchor" href="#注意事项" aria-label="Permalink to &quot;注意事项：&quot;">​</a></h4><ul><li><strong>性能风险</strong>：深比较或序列化可能对大型对象造成性能问题。</li><li><strong>特殊类型限制</strong>：<code>JSON.stringify</code> 无法处理 <code>Date</code>、<code>Set</code>、循环引用等。</li><li><strong>推荐场景</strong>：仅在依赖项变化频率低且数据结构简单时使用。</li></ul><hr><h3 id="_5-总结" tabindex="-1"><strong>5. 总结</strong> <a class="header-anchor" href="#_5-总结" aria-label="Permalink to &quot;**5. 总结**&quot;">​</a></h3><table tabindex="0"><thead><tr><th><strong>场景</strong></th><th><strong>解决方案</strong></th></tr></thead><tbody><tr><td>依赖项是基本类型</td><td>直接使用浅比较，无需额外处理。</td></tr><tr><td>依赖项是对象/数组/函数</td><td>使用 <code>useMemo</code>、<code>useCallback</code> 或 <code>useState</code> 保持引用稳定。</td></tr><tr><td>必须依赖嵌套对象的变化</td><td>手动提取关键字段作为依赖项（如 <code>[obj.id, obj.value]</code>）。</td></tr><tr><td>需要深度比较</td><td>自定义 Hook 结合深比较库（如 Lodash 的 <code>_.isEqual</code>），但需谨慎评估性能。</td></tr></tbody></table><hr><h3 id="_6-官方推荐实践" tabindex="-1"><strong>6. 官方推荐实践</strong> <a class="header-anchor" href="#_6-官方推荐实践" aria-label="Permalink to &quot;**6. 官方推荐实践**&quot;">​</a></h3><ol><li><strong>最小化依赖项</strong>：<br> 仅将真正影响副作用的变量放入依赖项数组。</li><li><strong>保持引用稳定</strong>：<br> 对对象、数组使用 <code>useMemo</code>，对函数使用 <code>useCallback</code>。</li><li><strong>避免动态生成依赖项</strong>：<br> 不要在 Hook 内部直接创建对象或函数作为依赖项。</li></ol><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ✅ 正确示例：保持依赖项引用稳定</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fetchData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useCallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">async</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 请求逻辑</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, [apiUrl, params]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> processedData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useMemo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> data.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(transform);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, [data]);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fetchData</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}, [fetchData]);</span></span></code></pre></div><hr><p>通过合理使用浅比较和引用稳定化技术，可以确保 React Hook 的行为符合预期，同时避免性能问题。</p>`,35)]))}const c=i(e,[["render",l]]);export{E as __pageData,c as default};
