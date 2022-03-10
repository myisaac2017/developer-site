"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[229],{35472:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(97218),r=n(59301),o=n(24076),i=n(95763),c=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],s=(n(94648),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return r.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[i.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return r.createElement(o.D,{children:e,remarkPlugins:[i.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?r.createElement(o.D,{children:e,remarkPlugins:[i.Z]}):r.createElement("div",null," - ")}}]);var d=function(e){var t=e.category,n=e.dataSource,o=("form"===t?[].concat(c,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return r.createElement(a.Z,{className:"attr-table",dataSource:o,pagination:!1,columns:s})}},50199:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(44117),r=n(59301),o=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),i=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new o,n.recevier.on("updateHeight",(function(e,t,a){n.iframe&&a===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,a.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,a=t.id,o=t.style,i=t.url;return i?r.createElement("div",{className:"bg-iframe "+n,id:a,style:Object.assign({height:400,width:"100%"},o),ref:function(t){e.container=t}},r.createElement("iframe",{src:i,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):r.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(r.PureComponent);i.displayName="bg-iframe"},67133:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var a=n(21810),r=n(86919),o=(n(59301),n(99278)),i=n(50199),c=n(35472),s=["components"],d={title:"Search \u641c\u7d22",order:12},l="Search \u641c\u7d22",u={unversionedId:"components/advanced/search",id:"components/advanced/search",title:"Search \u641c\u7d22",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/advanced/search.mdx",sourceDirName:"components/advanced",slug:"/components/advanced/search",permalink:"/docs/components/advanced/search",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/advanced/search.mdx",tags:[],version:"current",frontMatter:{title:"Search \u641c\u7d22",order:12},sidebar:"components",previous:{title:"Menu \u83dc\u5355",permalink:"/docs/components/advanced/menu"},next:{title:"Progress \u8fdb\u5ea6\u6761",permalink:"/docs/components/advanced/progress"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f={toc:p};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"search-\u641c\u7d22"},"Search \u641c\u7d22"),(0,o.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9875\u9762\u3001\u8868\u5355\u6570\u636e\u641c\u7d22\u65f6\u4f7f\u7528\u3002")),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,o.kt)(i.Z,{url:"https://www.aliwork.com/developer/search-v2?isRenderNav=false",mdxType:"Iframe"}),(0,o.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,o.kt)(c.Z,{dataSource:[{code:"type",type:"'normal' | 'primary' | 'secondary' | 'dark'",default:"'normal'",desc:"\u641c\u7d22\u7c7b\u578b"},{code:"defaultValue",type:"string",default:"-",desc:"\u641c\u7d22\u6846\u9ed8\u8ba4\u503c"},{code:"size",type:"'medium' | 'large'",default:"'medium'",desc:"\u5c3a\u5bf8"},{code:"shape",type:"'normal' | 'simple'",default:"'normal'",desc:"\u641c\u7d22\u5f62\u72b6"},{code:"autoFocus",type:"boolean",default:"false",desc:"\u662f\u5426\u81ea\u52a8\u805a\u7126"},{code:"isFilter",type:"boolean",default:"false",desc:"\u662f\u5426\u5f00\u542f\u9009\u62e9\u5668"},{code:"defaultFilterValue",type:"string",default:"'one'",desc:"\u5f00\u542f\u9009\u62e9\u5668\u6309\u94ae\u540e\uff0c\u8bbe\u7f6e\u9009\u62e9\u5668\u9ed8\u8ba4\u503c"},{code:"filter",type:"[SearchDataSource[]](/docs/components/interface#searchdatasource)",default:'~~~json\n[\n  {\n    "label": "one",\n    "value": "one"\n  },\n  {\n    "label": "two",\n    "value": "two"\n  },\n  {\n    "label": "three",\n    "value": "three"\n  }\n]\n      ',desc:"\u8bbe\u7f6e\u9009\u62e9\u5668\u7684\u4e0b\u62c9\u5217\u8868\u503c"},{code:"dataSource",type:"[SearchDataSource[]](/docs/components/interface#searchdatasource)",default:'~~~json\n[\n  {\n    "label": "\u5929\u732b",\n    "value": "value1"\n  },\n  {\n    "label": "\u6dd8\u5b9d",\n    "value": "value2"\n  },\n  {\n    "label": "\u963f\u91cc\u5df4\u5df4",\n    "value": "value3"\n  }\n]\n      ',desc:"\u8bbe\u7f6e\u641c\u7d22\u6846\u7684\u4e0b\u62c9\u5217\u8868\u503c"},{code:"placeholder",type:"string",default:"'\u8bf7\u8f93\u5165'",desc:"\u641c\u7d22\u6846\u9ed8\u8ba4\u63d0\u793a"},{code:"searchText",type:"string",default:"'\u641c\u7d22'",desc:"\u641c\u7d22\u6309\u94ae\u5185\u5bb9"},{code:"hasClear",type:"boolean",default:"false",desc:"\u662f\u5426\u663e\u793a\u6e05\u9664\u6309\u94ae"},{code:"disabled",type:"boolean",default:"false",desc:"\u662f\u5426\u7981\u7528"},{code:"onChange",type:"(value: string) => void",default:"-",desc:"\u7ec4\u4ef6\u503c\u53d1\u751f\u6539\u53d8\u4e8b\u4ef6"},{code:"onSearch",type:"(value: string) => void",default:"-",desc:"\u70b9\u51fb\u641c\u7d22\u6309\u94ae\u89e6\u53d1\u7684\u4e8b\u4ef6"},{code:"onFilterChange",type:"(filterValue: string) => void",default:"-",desc:"\u9009\u62e9\u5668\u53d1\u751f\u53d8\u5316\u65f6\u7684\u4e8b\u4ef6"}],mdxType:"AttrTable"}))}h.isMDXComponent=!0}}]);