"use strict";(self.webpackChunkdeveloper=self.webpackChunkdeveloper||[]).push([[2748],{35472:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(97218),d=n(59301),i=n(24076),a=n(95763),r=[{code:"label",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898"},{code:"labelAlign",type:"'left' | 'top'",default:"'top'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u7684\u4f4d\u7f6e"},{code:"labelColSpan",type:"number",default:"4",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u6807\u9898\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u914d\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColSpan",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u5360\u4f4d\u5bbd\u5ea6\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"wrapperColOffset",type:"number",default:"0",desc:"\u8bbe\u7f6e\u8868\u5355\u7ec4\u4ef6\u7684\u504f\u79fb\u4f4d\u7f6e\uff0c\u8bbe\u7f6e\u503c\u4e3a\u6805\u683c\u503c\uff0c1\u4ee3\u88681/24"},{code:"labelTextAlign",type:"'left' | 'right'",default:"'right'",desc:"\u8868\u5355\u7ec4\u4ef6\u7684\u6807\u9898\u5bf9\u9f50\u65b9\u5f0f"},{code:"tips",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u63cf\u8ff0\u4fe1\u606f\uff0c\u5c55\u793a\u5728\u63a7\u4ef6\u4e0b\u65b9"},{code:"size",type:"[Size](/docs/components/interface#size)",default:"'medium'",desc:"\u8868\u5355\u7ec4\u4ef6\u5c3a\u5bf8"},{code:"behavior",type:"[Behavior](/docs/components/interface#behavior)",default:"'NORMAL'",desc:"\u8868\u5355\u7ec4\u4ef6\u663e\u793a\u72b6\u6001"},{code:"labelTipsTypes",type:"[LabelTipsTypes](/docs/components/interface#labelTipsTypes)",default:"'none'",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u7c7b\u578b\u8bbe\u7f6e"},{code:"labelTipsIcon",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u5165\u53e3\u56fe\u6807\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u6216 **render** \u65f6\u751f\u6548"},{code:"labelTipsText",type:"string",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u6587\u672c\u4fe1\u606f\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **text** \u65f6\u751f\u6548"},{code:"labelTipsRender",type:"(props: IComponentProps) => ReactNode",default:"-",desc:"\u8868\u5355\u7ec4\u4ef6\u6807\u9898\u63d0\u793a\u4fe1\u606f\u81ea\u5b9a\u4e49\u6e32\u67d3\u65b9\u6cd5\uff0c\u5f53labelTipsTypes\u53d6\u503c\u4e3a **render** \u65f6\u751f\u6548"},{code:"validation",type:"[Validation[]](/docs/components/interface#validation)",default:"[]",desc:"\u8868\u5355\u7ec4\u4ef6\u6821\u9a8c\u8bbe\u7f6e\uff0c\u5177\u4f53\u4f7f\u7528\u8be6\u89c1[\u8868\u5355\u6821\u9a8c\u6587\u6863](/docs/guide/concept/validation)"}],c=(n(94648),[{title:"\u5c5e\u6027",dataIndex:"code",width:"20%",render:function(e){return d.createElement("div",{style:{fontWeight:600}},e)}},{title:"\u8bf4\u660e",dataIndex:"desc",width:"45%",render:function(e){return d.createElement(i.D,{children:e,remarkPlugins:[a.Z]})}},{title:"\u7c7b\u578b",dataIndex:"type",className:"attr-type",width:"20%",render:function(e){return d.createElement(i.D,{children:e,remarkPlugins:[a.Z]})}},{title:"\u9ed8\u8ba4\u503c",dataIndex:"default",width:"15%",wordBreak:!0,render:function(e){return"-"!==e&&e?d.createElement(i.D,{children:e,remarkPlugins:[a.Z]}):d.createElement("div",null," - ")}}]);var s=function(e){var t=e.category,n=e.dataSource,i=("form"===t?[].concat(r,n||[]):[].concat(n||[])).sort((function(e,t){return e.code<t.code?-1:1}));return d.createElement(o.Z,{className:"attr-table",dataSource:i,pagination:!1,columns:c})}},50199:function(e,t,n){n.d(t,{Z:function(){return a}});var o=n(44117),d=n(59301),i=function(){function e(){this.subscriptions={},window.addEventListener("message",this.handleMsg.bind(this),!1)}var t=e.prototype;return t.on=function(e,t){this.subscriptions[e]=this.subscriptions[e]||[],this.subscriptions[e].push(t)},t.off=function(e,t){if(this.subscriptions[e]){var n=this.subscriptions[e].findIndex((function(e){return e===t}));this.subscriptions[e].splice(n,1)}},t.handleMsg=function(e){e.data&&e.data.type&&(this.subscriptions[e.data.type]||[]).forEach((function(t){t(e.data,e.origin,e.source)}))},t.destroy=function(){window.removeEventListener("message",this.handleMsg),this.subscriptions={}},e}(),a=function(e){function t(t){var n;return(n=e.call(this,t)||this).createRecevier=function(){n.destroyRecevier(),n.recevier=new i,n.recevier.on("updateHeight",(function(e,t,o){n.iframe&&o===n.iframe.contentWindow&&(n.container.style.height=(e.msg||0)+"px",n.props.onUpdateHeight&&n.props.onUpdateHeight(e.msg||"#"))}))},n.destroyRecevier=function(){n.recevier&&(n.recevier.destroy(),n.recevier=null)},n.container=null,n.iframe=null,n}(0,o.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.disableHeightSync||this.createRecevier()},n.componentDidUpdate=function(e){e.url.replace(/#.*$/,"")!==this.props.url.replace(/#.*$/,"")&&this.container&&(this.container.style.height=this.props.style&&this.props.style.height.toString()||"800px"),void 0!==e.disableHeightSync&&e.disableHeightSync!==this.props.disableHeightSync&&(this.props.disableHeightSync?this.destroyRecevier():this.createRecevier())},n.componentWillUnmount=function(){this.destroyRecevier()},n.render=function(){var e=this,t=this.props,n=t.className,o=t.id,i=t.style,a=t.url;return a?d.createElement("div",{className:"bg-iframe "+n,id:o,style:Object.assign({height:400,width:"100%"},i),ref:function(t){e.container=t}},d.createElement("iframe",{src:a,style:{border:"none",width:"100%",height:"100%"},ref:function(t){e.iframe=t}})):d.createElement("div",{className:"bg-iframe empty"},"Iframe")},t}(d.PureComponent);a.displayName="bg-iframe"},4687:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return m}});var o=n(21810),d=n(86919),i=(n(59301),n(99278)),a=n(50199),r=n(35472),c=["components"],s={title:"TableField \u660e\u7ec6",order:16},l="TableField \u660e\u7ec6",u={unversionedId:"components/form/tableField",id:"components/form/tableField",title:"TableField \u660e\u7ec6",description:"\u4f55\u65f6\u4f7f\u7528",source:"@site/docs/components/form/tableField.mdx",sourceDirName:"components/form",slug:"/components/form/tableField",permalink:"/docs/components/form/tableField",editUrl:"https://github.com/dingtalk-yida/developer-site/edit/master/docs/components/form/tableField.mdx",tags:[],version:"current",frontMatter:{title:"TableField \u660e\u7ec6",order:16},sidebar:"components",previous:{title:"CascadeSelectField \u7ea7\u8054\u9009\u62e9",permalink:"/docs/components/form/cascadeSelectField"},next:{title:"JSX",permalink:"/docs/components/advanced/JSX"}},p=[{value:"\u4f55\u65f6\u4f7f\u7528",id:"\u4f55\u65f6\u4f7f\u7528",children:[],level:2},{value:"\u7c7b\u578b\u5b9a\u4e49",id:"\u7c7b\u578b\u5b9a\u4e49",children:[{value:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u9879\u914d\u7f6e\u7ed3\u6784",id:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u9879\u914d\u7f6e\u7ed3\u6784",children:[],level:3}],level:2},{value:"\u7ec4\u4ef6\u793a\u4f8b",id:"\u7ec4\u4ef6\u793a\u4f8b",children:[],level:2},{value:"\u7ec4\u4ef6\u5c5e\u6027",id:"\u7ec4\u4ef6\u5c5e\u6027",children:[],level:2}],f={toc:p};function m(e){var t=e.components,n=(0,d.Z)(e,c);return(0,i.kt)("wrapper",(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"tablefield-\u660e\u7ec6"},"TableField \u660e\u7ec6"),(0,i.kt)("h2",{id:"\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u5b50\u8868\u5355\u63d0\u4ea4\u573a\u666f\uff1b")),(0,i.kt)("h2",{id:"\u7c7b\u578b\u5b9a\u4e49"},"\u7c7b\u578b\u5b9a\u4e49"),(0,i.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u9879\u914d\u7f6e\u7ed3\u6784"},"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u9879\u914d\u7f6e\u7ed3\u6784"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"interface Action {\n  content: string; // \u64cd\u4f5c\u9879\u6587\u6848\n  callback: ({index: number, groupId: string, itemValue: any, actionKey: string }) => void; // \u70b9\u51fb\u56de\u8c03\n  render: ({index: number, groupId: string, itemValue: any, actionKey: string }) => ReactNode; // \u81ea\u5b9a\u4e49\u6e32\u67d3\n}\n")),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u793a\u4f8b"},"\u7ec4\u4ef6\u793a\u4f8b"),(0,i.kt)(a.Z,{url:"https://www.aliwork.com/developer/table-field-v2?isRenderNav=false",mdxType:"Iframe"}),(0,i.kt)("h2",{id:"\u7ec4\u4ef6\u5c5e\u6027"},"\u7ec4\u4ef6\u5c5e\u6027"),(0,i.kt)(r.Z,{category:"form",dataSource:[{code:"value",type:"any[]",default:"[]",desc:"\u660e\u7ec6\u7ec4\u4ef6\u9ed8\u8ba4\u503c"},{code:"layoutSetting.layout",type:"'TILED' | 'TABLE'",default:"'TABLE'",desc:"\u6392\u5217\u65b9\u5f0f\uff08\u8868\u683c\u65b9\u5f0f\u53ea\u5728 PC \u6a21\u5f0f\u4e0b\u6709\u6548\uff09\uff0cTILED\uff1a\u5e73\u94fa\u65b9\u5f0f\u3001TABLE\uff1a\u8868\u683c\u65b9\u5f0f"},{code:"layoutSetting.theme",type:"'zebra' | 'split' | 'border'",default:"'split'",desc:"\u4e3b\u9898\uff08\u53ea\u5728 PC \u8868\u683c\u65b9\u5f0f\u4e0b\u6709\u6548\uff09"},{code:"layoutSetting.showTableHead",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u8868\u5934\uff08\u53ea\u5728 PC \u8868\u683c\u65b9\u5f0f\u4e0b\u6709\u6548\uff09"},{code:"layoutSetting.showIndex",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u5e8f\u53f7"},{code:"layoutSetting.indexName",type:"string",default:"'\u9879\u76ee'",desc:"\u5e8f\u53f7\u540d\u79f0"},{code:"layoutSetting.pcFreezeColumnStartCounts",type:"'0' | '1' | '2' | '3'",default:"0",desc:"\u5de6\u4fa7\u5217\u51bb\u7ed3\uff0c0\u8868\u793a\u4e0d\u51bb\u7ed3"},{code:"layoutSetting.isFreezeOperateColumn",type:"boolean",default:"true",desc:"\u662f\u5426\u51bb\u7ed3\u64cd\u4f5c\u5217"},{code:"showActions",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u64cd\u4f5c\u5217"},{code:"showCopyAction",type:"boolean",default:"false",desc:"\u662f\u5426\u663e\u793a\u590d\u5236\u6309\u94ae"},{code:"copyButtonText",type:"string",default:"'\u590d\u5236'",desc:"\u590d\u5236\u6309\u94ae\u540d\u79f0"},{code:"showDelAction",type:"boolean",default:"true",desc:"\u662f\u5426\u663e\u793a\u5220\u9664\u6309\u94ae"},{code:"delButtonText",type:"string",default:"'\u5220\u9664'",desc:"\u5220\u9664\u6309\u94ae\u540d\u79f0"},{code:"showDeleteConfirm",type:"boolean",default:"true",desc:"\u662f\u5426\u5f00\u542f\u5220\u9664\u786e\u8ba4"},{code:"showSortable",type:"boolean",default:"false",desc:"\u662f\u5426\u663e\u793a\u6392\u5e8f\uff08\u53ea\u5728 PC \u8868\u683c\u65b9\u5f0f\u4e0b\u6709\u6548\uff09"},{code:"moveUp",type:"string",default:"'\u4e0a\u79fb'",desc:"\u4e0a\u79fb\u6309\u94ae\u540d\u79f0"},{code:"moveDown",type:"string",default:"'\u4e0b\u79fb'",desc:"\u4e0b\u79fb\u6309\u94ae\u540d\u79f0"},{code:"actions",type:"Action[]",default:"[]",desc:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u9879"},{code:"addButtonPosition",type:"'bottom' | 'top'",default:"'bottom'",desc:"\u65b0\u589e\u6309\u94ae\u4f4d\u7f6e"},{code:"addButtonText",type:"string",default:"'\u65b0\u589e\u4e00\u9879'",desc:"\u65b0\u589e\u6309\u94ae\u6587\u6848"},{code:"addButtonBehavior",type:"'NORMAL' | 'DISABLED' | 'HIDDEN'",default:"NORMAL",desc:"\u65b0\u589e\u6309\u94ae\u7684\u53ef\u64cd\u4f5c\u72b6\u6001"},{code:"pageSize",type:"'10' | '20' | '30'",default:"20",desc:"\u5206\u9875\u6761\u6570"},{code:"maxItems",type:"number",default:"50",desc:"\u6700\u5927\u6761\u6570\uff0c\u6700\u5927 500 \u6761"},{code:"actionsColumnWidth",type:"number",default:"70",desc:"\u64cd\u4f5c\u5217\u5bbd\u5ea6\uff0c\u5355\u4f4dpx"},{code:"useCustomColumnsWidth",type:"boolean",default:"false",desc:"\u662f\u5426\u81ea\u5b9a\u4e49\u5176\u5b83\u5217\u5bbd\u5ea6"},{code:"columnsWidth",type:"Record<string, string>",default:"-",desc:"\u5b57\u6bb5\u5217\u5bbd\uff0c\u4f8b\u5982\uff1a { node_ockzdxe6of1: '200px' }"},{code:"onChange",type:"({ value: any , extra: any }) => void",default:"-",desc:"onChange \u5b50\u8868\u5355\u503c\u53d8\u5316"},{code:"beforeAddClick",type:"() => boolean",default:"-",desc:"\u6dfb\u52a0\u6309\u94ae\u70b9\u51fb\u524d\u56de\u8c03\uff0c\u8fd4\u56defalse\u963b\u6b62\u6dfb\u52a0"},{code:"onAddClick",type:"( newGroupId: string ) => void",default:"-",desc:"\u6dfb\u52a0\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6"},{code:"beforeCopyClick",type:"( sourceGroupId: string, sourceItem: any ) => boolean",default:"-",desc:"\u590d\u5236\u6309\u94ae\u70b9\u51fb\u524d\u56de\u8c03\uff0c\u8fd4\u56defalse\u963b\u6b62\u590d\u5236"},{code:"onCopyClick",type:"( newGroupId: string , copiedItem: any ) => void",default:"-",desc:"\u6dfb\u52a0\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6"},{code:"beforeDelClick",type:"( groupId: string , item: object ) => void",default:"-",desc:"\u5220\u9664\u6309\u94ae\u70b9\u51fb\u524d\u56de\u8c03\uff0c\u8fd4\u56defalse\u963b\u6b62\u5220\u9664"},{code:"onDelClick",type:"( newGroupId: string , copiedItem: object ) => void",default:"-",desc:"\u5220\u9664\u6309\u94ae\u70b9\u51fb\u4e8b\u4ef6"},{code:"beforeImportData",type:"( data: any[] ) => any[]",default:"-",desc:"\u6279\u91cf\u5bfc\u5165\u6570\u636e\u524d\u6267\u884c"}],mdxType:"AttrTable"}))}m.isMDXComponent=!0}}]);