import{az as C,a as P,aY as h,aZ as I,v as b,bW as N,aB as s,o as p,j as V,B as t,n as r,m as c,h as y,aE as _,t as f,F as k,k as g,C as B}from"./index.c8efd86c.js";import{a as W}from"./index.95f8610f.js";import{T as v}from"./index.79e9bc45.js";import"./index.1cc2df02.js";import"./index.ae0eca88.js";import"./useSize.822cfd2a.js";import"./useWindowSizeFn.569f2c34.js";import"./useContentViewHeight.833d113a.js";import"./ArrowLeftOutlined.8ce689d7.js";import"./useRefs.76e09c0b.js";const $=P({name:"MemberRelationDetail",components:{PageWrapper:W,ATabs:v,ATabPane:v.TabPane},setup(){var a;const e=h(),n=I(),i=b((a=e.params)==null?void 0:a.id),m=b("detail"),{setTitle:d}=N();d("\u8BE6\u60C5\uFF1A\u7528\u6237"+i.value);function u(){n("/member/relation")}return{userId:i,currentKey:m,goBack:u}}}),D=B(" \u7981\u7528\u8D26\u53F7 "),R=B(" \u4FEE\u6539\u5BC6\u7801 "),w={class:"pt-4 m-4 desc-wrap"};function A(e,n,i,m,d,u){const a=s("a-button"),l=s("a-tab-pane"),T=s("a-tabs"),K=s("PageWrapper");return p(),V(K,{title:"\u7528\u6237"+e.userId+"\u7684\u8D44\u6599",content:"\u8FD9\u662F\u7528\u6237\u8D44\u6599\u8BE6\u60C5\u9875\u9762\u3002\u672C\u9875\u9762\u4EC5\u7528\u4E8E\u6F14\u793A\u76F8\u540C\u8DEF\u7531\u5728tab\u4E2D\u6253\u5F00\u591A\u4E2A\u9875\u9762\u5E76\u4E14\u663E\u793A\u4E0D\u540C\u7684\u6570\u636E",contentBackground:"",onBack:e.goBack},{extra:t(()=>[r(a,{type:"primary",danger:""},{default:t(()=>[D]),_:1}),r(a,{type:"primary"},{default:t(()=>[R]),_:1})]),footer:t(()=>[r(T,{"default-active-key":"detail",activeKey:e.currentKey,"onUpdate:activeKey":n[0]||(n[0]=o=>e.currentKey=o)},{default:t(()=>[r(l,{key:"detail",tab:"\u7528\u6237\u8D44\u6599"}),r(l,{key:"logs",tab:"\u64CD\u4F5C\u65E5\u5FD7"})]),_:1},8,["activeKey"])]),default:t(()=>[c("div",w,[e.currentKey=="detail"?(p(),y(k,{key:0},_(10,o=>c("div",{key:o},"\u8FD9\u662F\u7528\u6237"+f(e.userId)+"\u8D44\u6599Tab",1)),64)):g("",!0),e.currentKey=="logs"?(p(),y(k,{key:1},_(10,o=>c("div",{key:o},"\u8FD9\u662F\u7528\u6237"+f(e.userId)+"\u64CD\u4F5C\u65E5\u5FD7Tab",1)),64)):g("",!0)])]),_:1},8,["title","onBack"])}var Z=C($,[["render",A]]);export{Z as default};
