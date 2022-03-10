"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[62],{35472:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(97218),d=n(59301),o=n(24076),c=n(95763),r=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],i=(n(94648),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return d.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return d.createElement(o.D,{children:e,remarkPlugins:[c.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return d.createElement(o.D,{children:e,remarkPlugins:[c.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?d.createElement(o.D,{children:e,remarkPlugins:[c.Z]}):d.createElement("div",null," - ")}}]);var s=function(e){var t=e.category,n=e.dataSource,o=("form"===t?[].concat(r,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return d.createElement(a.Z,{className:"attr-table",dataSource:o,pagination:!1,columns:i})}},50199:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(44117),d=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,a){n.iframe&&a===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,a=t.id,o=t.style,c=t.url;return c?d.createElement("div",{className:"bg-iframe "+n,id:a,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},d.createElement("iframe",{src:c,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):d.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(d.PureComponent);c.displayName="bg-iframe"},3506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return y}});var a=n(21810),d=n(86919),o=(n(59301),n(99278)),c=n(50199),r=n(35472),i=["components"],s={title:"Tree \u6811\u5f62\u63a7\u4ef6",order:10},l="Tree \u6811\u5f62\u63a7\u4ef6",p={unversionedId:"components/advanced/tree",id:"components/advanced/tree",title:"Tree \u6811\u5f62\u63a7\u4ef6",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/tree.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/tree",permalink:"/docs/components/advanced/tree",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/advanced/tree.mdx",tags:[],version:"current",frontMatter:{title:"Tree \u6811\u5f62\u63a7\u4ef6",order:10},sidebar:"components",previous:{title:"Pagination \u7ffb\u9875\u5668",permalink:"/docs/components/advanced/pagination"},next:{title:"Menu \u83dc\u5355",permalink:"/docs/components/advanced/menu"}},u=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f={toc:u};function y(e){var t=e.components,n=(0,d.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tree-\u6811\u5f62\u63a7\u4ef6"},"Tree \u6811\u5f62\u63a7\u4ef6"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9002\u7528\u4e8e\u5927\u91cf\u3001\u5177\u6709\u5c42\u7ea7\u5173\u7cfb\u7684\u6570\u636e\u5c55\u793a\u573a\u666f\u4e2d\uff0c\u5e76\u4e14\u5229\u7528\u7ec4\u4ef6\u7684\u5c55\u5f00\u6536\u8d77\u548c\u5173\u8054\u9009\u4e2d\u7b49\u4ea4\u4e92\u53ef\u4ee5\u65b9\u4fbf\u5730\u5bf9\u6570\u636e\u8fdb\u884c\u64cd\u4f5c\u5904\u7406\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(c.Z,{url:"https://www.aliwork.com/developer/tree-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(r.Z,{dataSource:[{code:"dataSource",type:"[TreeDataSource[]](/docs/components/interface#treedatasource)",default:'~~~json\n[\n  {\n    key: "0-0",\n    label: "0-0",\n    children: [\n      {\n        key: "0-0-0",\n        label: "0-0-0",\n        children: [\n          {\n            key: "0-0-0-0",\n            label: "0-0-0-0",\n            children: [\n              {\n                key: "0-0-0-0-0",\n                label: "0-0-0-0-0",\n              },\n            ],\n          },\n          {\n            key: "0-0-0-1",\n            label: "0-0-0-1",\n          },\n        ],\n      },\n      {\n        key: "0-0-1",\n        label: "0-0-1",\n        children: [\n          {\n            key: "0-0-1-0",\n            label: "0-0-1-0",\n          },\n          {\n            key: "0-0-1-1",\n            label: "0-0-1-1",\n          },\n        ],\n      },\n    ],\n  },\n]',desc:"\u8282\u70b9\u6570\u636e"},{code:"processDataSource",type:"(data: any) => TreeDataSource[]",default:"-",desc:"\u6570\u636e\u9884\u5904\u7406\u51fd\u6570"},{code:"showLine",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u8282\u70b9\u8fde\u7ebf"},{code:"multiple",type:"boolean",default:"false",desc:"\u662f\u5426\u652f\u6301\u591a\u9009"},{code:"editable",type:"boolean",default:"false",desc:"\u662f\u5426\u652f\u6301\u7f16\u8f91"},{code:"draggable",type:"boolean",default:"false",desc:"\u662f\u5426\u652f\u6301\u62d6\u62fd"},{code:"defaultExpandAll",type:"boolean",default:"true",desc:"\u9ed8\u8ba4\u5c55\u5f00\u6240\u6709\u8282\u70b9"},{code:"defaultExpandedKeys",type:"string[]",default:"['0-0-0']",desc:"\u9ed8\u8ba4\u5c55\u5f00\u7684\u8282\u70b9"},{code:"selectable",type:"boolean",default:"true",desc:"\u662f\u5426\u652f\u6301\u9009\u4e2d"},{code:"checkedKeys",type:"string[]",default:"['0-0-0']",desc:"\u9ed8\u8ba4\u9009\u4e2d\u8282\u70b9"},{code:"checkable",type:"boolean",default:"false",desc:"\u662f\u5426\u663e\u793a\u590d\u9009\u6846"},{code:"checkedKeys",type:"string[]",default:'["0-0-0"]',desc:"\u9ed8\u8ba4\u52fe\u9009\u8282\u70b9"},{code:"checkStrictly",type:"boolean",default:"false",desc:"\u590d\u9009\u6846\u5b8c\u5168\u53d7\u63a7"},{code:"checkStrictly",type:"'all' | 'parent' | 'child' ",default:" 'parent' ",desc:"\u5b9a\u4e49\u9009\u4e2d\u65f6\u56de\u586b\u7684\u65b9\u5f0f\uff0call\uff1a\u8fd4\u56de\u6240\u6709\u9009\u4e2d\u8282\u70b9\u3001parent\uff1a\u7236\u8282\u70b9\u90fd\u9009\u4e2d\u65f6\u53ea\u8fd4\u56de\u7236\u8282\u70b9\u3001child\uff1a\u7236\u8282\u70b9\u90fd\u9009\u4e2d\u65f6\u53ea\u8fd4\u56de\u5b50\u8282\u70b9"},{code:"isLoadData",type:"boolean",default:"false",desc:"\u662f\u5426\u5f00\u542f\u5f02\u6b65\u52a0\u8f7d"},{code:"loadData",type:"(data: TreeDataSource) => Promise<TreeDataSource[]>",default:"-",desc:"\u5f02\u6b65\u52a0\u8f7d\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onSelect",type:"(selectedKeys: string[], extra: any) => void",default:"-",desc:"\u9009\u4e2d\u6216\u53d6\u6d88\u9009\u4e2d\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onCheck",type:"(checkedKeys: string[], extra: any) => void",default:"-",desc:"\u52fe\u9009\u6216\u53d6\u6d88\u52fe\u9009\u590d\u9009\u6846\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onExpand",type:"(expandedKeys: string[], extra: any) => void",default:"-",desc:"\u5c55\u5f00\u6536\u8d77\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onEditFinish",type:"(key: string, label: string, node: TreeDataSource) => void",default:"-",desc:"\u7f16\u8f91\u8282\u70b9\u5185\u5bb9\u5b8c\u6210\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onDragStart",type:"(info: any) => void",default:"-",desc:"\u5f00\u59cb\u62d6\u62fd\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onDragEnter",type:"(info: any) => void",default:"-",desc:"\u62d6\u62fd\u8282\u70b9\u8fdb\u5165\u76ee\u6807\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onDragOver",type:"(info: any) => void",default:"-",desc:"\u62d6\u62fd\u8282\u70b9\u5728\u76ee\u6807\u8282\u70b9\u4e0a\u79fb\u52a8\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onDragLeave",type:"(info: any) => void",default:"-",desc:"\u62d6\u62fd\u8282\u70b9\u79bb\u5f00\u76ee\u6807\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onDragEnd",type:"(info: any) => void",default:"-",desc:"\u62d6\u62fd\u7ed3\u675f\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onDrop",type:"(info: any) => void",default:"-",desc:"\t\u62d6\u62fd\u8282\u70b9\u653e\u5165\u76ee\u6807\u8282\u70b9\u5185\u6216\u524d\u540e\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"canDrop",type:"(info: any) => boolean",default:"-",desc:"\u8282\u70b9\u662f\u5426\u53ef\u88ab\u4f5c\u4e3a\u76ee\u6807\u8282\u70b9\u65f6\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"selectedKeys",type:"string[]",default:"['0-0-0']",desc:"\u9ed8\u8ba4\u9009\u4e2d\u8282\u70b9"},{code:"expandedKeys",type:"string[]",default:"['0-0-0']",desc:"\u5c55\u5f00\u7684\u8282\u70b9"},{code:"checkStrictly",type:"boolean",default:"false",desc:"\u590d\u9009\u6846\u5b8c\u5168\u53d7\u63a7"}],mdxType:"AttrTable"}))}y.isMDXComponent=!0}}]);