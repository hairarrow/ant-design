(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1552:function(t,n){t.exports={content:["section",["p","通过鼠标或键盘输入内容，是最基础的表单域的包装。"],["h2","何时使用"],["ul",["li",["p","需要用户输入表单域内容时。"]],["li",["p","提供组合型输入框，带搜索的输入框，还可以进行大小选择。"]]]],meta:{category:"Components",subtitle:"输入框",type:"数据录入",title:"Input",filename:"components/input/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#何时使用",title:"何时使用"},"何时使用"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Input"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","addonAfter"],["td","带标签的 input，设置后置标签"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","addonBefore"],["td","带标签的 input，设置前置标签"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","defaultValue"],["td","输入框默认内容"],["td","string"],["td"],["td"]],["tr",["td","disabled"],["td","是否禁用状态，默认为 false"],["td","boolean"],["td","false"],["td"]],["tr",["td","id"],["td","输入框的 id"],["td","string"],["td"],["td"]],["tr",["td","prefix"],["td","带有前缀图标的 input"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","size"],["td","控件大小。注：标准表单内的输入框大小限制为 ",["code","large"],"。可选 ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","suffix"],["td","带有后缀图标的 input"],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","type"],["td","声明 input 类型，同原生 input 标签的 type 属性，见：",["a",{title:null,href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#属性"},"MDN"],"(请直接使用 ",["code","Input.TextArea"]," 代替 ",["code",'type="textarea"'],")。"],["td","string"],["td",["code","text"]],["td"]],["tr",["td","value"],["td","输入框内容"],["td","string"],["td"],["td"]],["tr",["td","onChange"],["td","输入框内容变化时的回调"],["td","function(e)"],["td"],["td","3.9.3"]],["tr",["td","onPressEnter"],["td","按下回车的回调"],["td","function(e)"],["td"],["td"]],["tr",["td","allowClear"],["td","可以点击清除图标删除内容"],["td","boolean"],["td"],["td","3.12.0"]]]],["blockquote",["p","如果 ",["code","Input"]," 在 ",["code","Form.Item"]," 内，并且 ",["code","Form.Item"]," 设置了 ",["code","id"]," 和 ",["code","options"]," 属性，则 ",["code","value"]," ",["code","defaultValue"]," 和 ",["code","id"]," 属性会被自动设置。"]],["p","Input 的其他属性和 React 自带的 ",["a",{title:null,href:"https://facebook.github.io/react/docs/events.html#supported-events"},"input"]," 一致。"],["h3","Input.TextArea"],["blockquote",["p",["code","2.12"]," 后新增的组件，旧版请使用 ",["code","Input[type=textarea]"],"。"]],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","autosize"],["td","自适应内容高度，可设置为 ",["code","true|false"]," 或对象：",["code","{ minRows: 2, maxRows: 6 }"]],["td","boolean","|","object"],["td","false"],["td"]],["tr",["td","defaultValue"],["td","输入框默认内容"],["td","string"],["td"],["td"]],["tr",["td","value"],["td","输入框内容"],["td","string"],["td"],["td"]],["tr",["td","onPressEnter"],["td","按下回车的回调"],["td","function(e)"],["td"],["td"]]]],["p",["code","Input.TextArea"]," 的其他属性和浏览器自带的 ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"},"textarea"]," 一致。"],["h4","Input.Search"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","enterButton"],["td","是否有确认按钮，可设为按钮文字。该属性会与 addon 冲突。"],["td","boolean","|","ReactNode"],["td","false"],["td"]],["tr",["td","onSearch"],["td","点击搜索或按下回车键时的回调"],["td","function(value, event)"],["td"],["td"]]]],["p","其余属性和 Input 一致。"],["h4","Input.Group"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","compact"],["td","是否用紧凑模式"],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td",["code","Input.Group"]," 中所有的 ",["code","Input"]," 的大小，可选 ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]],["td"]]]],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input.Group</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Input.Group</span><span class="token punctuation">></span></span>'},["code","<Input.Group>\n  <input />\n  <input />\n</Input.Group>"]],["h4","Input.Password (3.12.0 中新增)"],["table",["thead",["tr",["th","参数"],["th","说明"],["th","类型"],["th","默认值"],["th","版本"]]],["tbody",["tr",["td","visibilityToggle"],["td","是否显示切换按钮"],["td","boolean"],["td","true"],["td","3.12.2"]]]],["h2","FAQ"],["h3","为什么我动态改变 ",["code","prefix/suffix"]," 时，Input 会失去焦点？"],["p","当 Input 动态添加或者删除 ",["code","prefix/suffix"]," 时，React 会重新创建 DOM 结构而新的 input 是没有焦点的。你可以预设一个空的 ",["code","<span />"]," 来保持 DOM 结构不变："],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> suffix <span class="token operator">=</span> condition <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">suffix</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>suffix<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code",'const suffix = condition ? <Icon type="smile" /> : <span />;\n\n<Input suffix={suffix} />;']]]}}}]);