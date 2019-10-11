(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1551:function(t,e){t.exports={content:["section",["p","A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data."],["h2","When To Use"],["ul",["li",["p","A user input in a form field is needed."]],["li",["p","A search input is required."]]]],meta:{category:"Components",type:"Data Entry",title:"Input",filename:"components/input/index.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#When-To-Use",title:"When To Use"},"When To Use"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]],["li",["a",{className:"bisheng-toc-h2",href:"#FAQ",title:"FAQ"},"FAQ"]]],api:["section",["h2","API"],["h3","Input"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","addonAfter"],["td","The label text displayed after (on the right side of) the input field."],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","addonBefore"],["td","The label text displayed before (on the left side of) the input field."],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","defaultValue"],["td","The initial input content"],["td","string"],["td"],["td"]],["tr",["td","disabled"],["td","Whether the input is disabled."],["td","boolean"],["td","false"],["td"]],["tr",["td","id"],["td","The ID for input"],["td","string"],["td"],["td"]],["tr",["td","prefix"],["td","The prefix icon for the Input."],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","size"],["td","The size of the input box. Note: in the context of a form, the ",["code","large"]," size is used. Available: ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]],["td"]],["tr",["td","suffix"],["td","The suffix icon for the Input."],["td","string","|","ReactNode"],["td"],["td"]],["tr",["td","type"],["td","The type of input, see: ",["a",{title:null,href:"https://developer.mozilla.org/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types"},"MDN"],"(use ",["code","Input.TextArea"]," instead of ",["code",'type="textarea"'],")"],["td","string"],["td",["code","text"]],["td"]],["tr",["td","value"],["td","The input content value"],["td","string"],["td"],["td"]],["tr",["td","onChange"],["td","callback when user input"],["td","function(e)"],["td"],["td","3.9.3"]],["tr",["td","onPressEnter"],["td","The callback function that is triggered when Enter key is pressed."],["td","function(e)"],["td"],["td"]],["tr",["td","allowClear"],["td","allow to remove input content with clear icon"],["td","boolean"],["td"],["td","3.12.0"]]]],["blockquote",["p","When ",["code","Input"]," is used in a ",["code","Form.Item"]," context, if the ",["code","Form.Item"]," has the ",["code","id"]," and ",["code","options"]," props defined then ",["code","value"],", ",["code","defaultValue"],", and ",["code","id"]," props of ",["code","Input"]," are automatically set."]],["p","The rest of the props of Input are exactly the same as the original ",["a",{title:null,href:"https://facebook.github.io/react/docs/events.html#supported-events"},"input"],"."],["h3","Input.TextArea"],["blockquote",["p","If you are using ",["code","antd@<2.12"],", please use ",["code","Input[type=textarea]"],"."]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","autosize"],["td","Height autosize feature, can be set to ",["code","true|false"]," or an object ",["code","{ minRows: 2, maxRows: 6 }"]],["td","boolean","|","object"],["td","false"],["td"]],["tr",["td","defaultValue"],["td","The initial input content"],["td","string"],["td"],["td"]],["tr",["td","value"],["td","The input content value"],["td","string"],["td"],["td"]],["tr",["td","onPressEnter"],["td","The callback function that is triggered when Enter key is pressed."],["td","function(e)"],["td"],["td"]]]],["p","The rest of the props of ",["code","Input.TextArea"]," are the same as the original ",["a",{title:null,href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea"},"textarea"],"."],["h4","Input.Search"],["p",["code","Added in 2.5.0"]],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","enterButton"],["td","to show an enter button after input. This prop is conflict with addon."],["td","boolean","|","ReactNode"],["td","false"],["td"]],["tr",["td","onSearch"],["td","The callback function triggered when you click on the search-icon, the clear-icon or press the Enter key."],["td","function(value, event)"],["td"],["td"]]]],["p","Supports all props of ",["code","Input"],"."],["h4","Input.Group"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","compact"],["td","Whether use compact style"],["td","boolean"],["td","false"],["td"]],["tr",["td","size"],["td","The size of ",["code","Input.Group"]," specifies the size of the included ",["code","Input"]," fields. Available: ",["code","large"]," ",["code","default"]," ",["code","small"]],["td","string"],["td",["code","default"]],["td"]]]],["pre",{lang:"html",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input.Group</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Input.Group</span><span class="token punctuation">></span></span>'},["code","<Input.Group>\n  <input />\n  <input />\n</Input.Group>"]],["h4","Input.Password (Added in 3.12.0)"],["table",["thead",["tr",["th","Property"],["th","Description"],["th","Type"],["th","Default"],["th","Version"]]],["tbody",["tr",["td","visibilityToggle"],["td","Whether show toggle button"],["td","boolean"],["td","true"],["td","3.12.2"]]]],["h2","FAQ"],["h3","Why Input lose focus when change ",["code","prefix/suffix"]],["p","When Input dynamic add or remove ",["code","prefix/suffix"]," will make React recreate the dom structure and new input will be not focused. You can set an empty ",["code","<span />"]," element to keep the dom structure:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> suffix <span class="token operator">=</span> condition <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>smile<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span> <span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Input</span> <span class="token attr-name">suffix</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>suffix<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">;</span>'},["code",'const suffix = condition ? <Icon type="smile" /> : <span />;\n\n<Input suffix={suffix} />;']]]}}}]);