webpackJsonp([58,159],{703:function(n,s){n.exports={content:["article",["p","Ant Design Mobile allows to customize some basic design aspects in order to meet the needs of UI diversity from business and brand, including primary color, border radius, border color, etc."],["p",["img",{title:null,src:"https://gw.alipayobjects.com/zos/rmsportal/pinkfuSuBGRhJFugFdmO.png",alt:null}]],["h2","Less variables"],["p","We are using ",["a",{title:null,href:"http://lesscss.org/"},"Less"]," as the development language of style. A set of less variables are defined for each design aspect that can be customized to your needs."],["ul",["li",["p",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"the default style variable"]]]],["p","Please report an issue if the existing list of variables is not enough for you."],["h2","How to do it"],["p","we can use the way of ",["a",{title:null,href:"http://lesscss.org/usage/#using-less-in-the-browser-modify-variables"},"modifyVars"]," to override variables."],["h3","1) theme"],["ul",["li",["p","Firstly\uff0cyou should install these devDependencies in your project:",["code","babel-plugin-import less less-loader style-loader css-loader"],"."]]],["pre",{lang:"bash",highlighted:'  <span class="token function">npm</span> <span class="token function">install</span> --save-dev babel-plugin-import <span class="token function">less</span> less-loader'},["code","  npm install --save-dev babel-plugin-import less less-loader"]],["ul",["li",["p","Secondly, configuration babel-plugin-import to load antd-mobile less"]]],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">[</span><span class="token string">"import"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">"libraryName"</span><span class="token punctuation">:</span> <span class="token string">"antd-mobile"</span><span class="token punctuation">,</span> <span class="token string">"style"</span><span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>'},["code",'{\n    ...\n    "plugins": [\n        ["import", {"libraryName": "antd-mobile", "style": true}],\n        ...\n    ]\n}']],["ul",["li",["p","Then\uff0cadd the 'theme' in ",["code","package.json"]," file, ",["a",{title:null,href:"https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"},"the default style variable"]]]],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"brand-primary"</span><span class="token punctuation">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>\n        <span class="token string">"color-text-base"</span><span class="token punctuation">:</span>  <span class="token string">"#333"</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code",'{\n    ...\n    "theme": {\n        "brand-primary": "red",\n        "color-text-base":  "#333",\n        ...\n    },\n    ...\n}']],["ul",["li",["p","In the end, in your webpack(3.0+) config file, add these config."]]],["blockquote",["p"," webpack loader configuration changes in different version\uff0cplease see webpack offcial doc."]],["pre",{lang:"js",highlighted:'<span class="token keyword">const</span> theme <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./package.json\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>theme<span class="token punctuation">;</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    module<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token operator">...</span>\n        rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            <span class="token operator">...</span>\n            <span class="token punctuation">{</span>\n                test<span class="token punctuation">:</span> <span class="token regex">/\\.css$/</span><span class="token punctuation">,</span>\n                use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n                    <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token punctuation">{</span>\n                test<span class="token punctuation">:</span> <span class="token regex">/\\.less$/</span><span class="token punctuation">,</span>\n                use<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                    <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span>\n                    <span class="token string">\'css-loader\'</span><span class="token punctuation">,</span>\n                    <span class="token punctuation">{</span>loader<span class="token punctuation">:</span> <span class="token string">\'less-loader\'</span><span class="token punctuation">,</span> options<span class="token punctuation">:</span> <span class="token punctuation">{</span>modifyVars<span class="token punctuation">:</span> theme<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">]</span><span class="token punctuation">,</span>\n                include<span class="token punctuation">:</span> <span class="token regex">/node_modules/</span><span class="token punctuation">,</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token operator">...</span>\n        <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code","const theme = require('./package.json').theme;\n\nmodule.exports = {\n    ...\n    module: {\n        ...\n        rules: [\n            ...\n            {\n                test: /\\.css$/,\n                use: [\n                    'style-loader',\n                    'css-loader',\n                ],\n            },\n            {\n                test: /\\.less$/,\n                use: [\n                    'style-loader',\n                    'css-loader',\n                    {loader: 'less-loader', options: {modifyVars: theme}},\n                ],\n                include: /node_modules/,\n            },\n            ...\n        ],\n    },\n    ...\n}"]],["p","Besides\uff0c",["strong",["a",{title:null,href:"https://github.com/ant-design/ant-design-mobile/wiki/HD"},"antd-mobile@1 viewport setting"]," is no longer requirement in antd-mobile2.0"],"\uff0cIf you still want to use viewport scale\uff0cyou need set theme varaiable ",["code","hd"]," to ",["code","2px"],"."],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n    <span class="token operator">...</span>\n    <span class="token string">"theme"</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>\n        <span class="token string">"hd"</span><span class="token punctuation">:</span> <span class="token string">"2px"</span><span class="token punctuation">,</span>\n        <span class="token string">"brand-primary"</span><span class="token punctuation">:</span> <span class="token string">"red"</span><span class="token punctuation">,</span>\n        <span class="token string">"color-text-base"</span><span class="token punctuation">:</span>  <span class="token string">"#333"</span><span class="token punctuation">,</span>\n        <span class="token operator">...</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token operator">...</span>\n<span class="token punctuation">}</span>'},["code",'{\n    ...\n    "theme": {\n        "hd": "2px",\n        "brand-primary": "red",\n        "color-text-base":  "#333",\n        ...\n    },\n    ...\n}']],["h3","2) less"],["p","Use less files for variable coverage."],["p","To establish a separate ",["code","less"]," files as follows, to introduce the file again."],["pre",{lang:"css",highlighted:'<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"~antd/dist/antd.less"</span><span class="token punctuation">;</span></span>   // Introduce the official less style entry file\n<span class="token atrule"><span class="token rule">@import</span> <span class="token string">"your-theme-file.less"</span><span class="token punctuation">;</span></span>   // Used to override the variables defined above'},["code",'@import "~antd/dist/antd.less";   // Introduce the official less style entry file\n@import "your-theme-file.less";   // Used to override the variables defined above']],["p","Notice\uff1aThis approach has already been loaded into the style of all components\uff0cso don't use the ",["code","babel-plugin-import"],"."]],meta:{order:6,title:"Customize Theme",filename:"docs/react/customize-theme.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Less-variables",title:"Less variables"},"Less variables"]],["li",["a",{className:"bisheng-toc-h2",href:"#How-to-do-it",title:"How to do it"},"How to do it"]]]}}});