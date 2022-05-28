var b=(a,i,n)=>new Promise((r,_)=>{var p=s=>{try{l(n.next(s))}catch(o){_(o)}},u=s=>{try{l(n.throw(s))}catch(o){_(o)}},l=s=>s.done?r(s.value):Promise.resolve(s.value).then(p,u);l((n=n.apply(a,i)).next())});import{az as B,a as E,cE as k,v as C,ap as $,aB as f,bQ as A,y as T,o as v,j as g,B as m,m as D,n as F,h as P,aE as K,aC as V,F as w,ej as S,C as y,G as R}from"./index.c8efd86c.js";import{T as h}from"./index.79e9bc45.js";import{a as j}from"./index.95f8610f.js";import{B as W,n as M}from"./useForm.64137a1f.js";import"./useRefs.76e09c0b.js";import"./index.1cc2df02.js";import"./index.ae0eca88.js";import"./useSize.822cfd2a.js";import"./useWindowSizeFn.569f2c34.js";import"./useContentViewHeight.833d113a.js";import"./ArrowLeftOutlined.8ce689d7.js";import"./index.5bccfa61.js";import"./index.d99ed209.js";import"./_baseIteratee.813ccf6c.js";import"./get.a8e0dbdb.js";import"./index.59448792.js";import"./index.f0acda50.js";import"./index.8f1c0509.js";import"./index.e7beea07.js";import"./index.b775b83d.js";import"./index.650ee6e3.js";import"./index.17fa07c8.js";import"./index.eb75c359.js";import"./FullscreenOutlined.5ec4a1b8.js";import"./download.b01f8fdc.js";import"./index.a13d6ad9.js";import"./index.4c128a7b.js";import"./uniqBy.8070035d.js";const N=E({name:"TabsFormDemo",components:{Tabs:h,TabPane:h.TabPane,PageWrapper:j,CollapseContainer:k,BasicForm:W},setup(){const{createMessage:a}=R(),i=C("tabs2"),n=C(!1),r=[],_={showActionButtonGroup:!1,labelWidth:100},p={};for(let o=1;o<=5;++o){const e=`tabs${o}`,c=[],d={};for(let t=1;t<=8;++t)c.push({field:`${e}.field${t}`,label:`${e}-field${t}`,component:"Input",colProps:{span:24}}),d[`field${t}`]=`field: ${e}.field${t}, default value`;p[e]=d,r.push({key:e,tab:e,forceRender:!0,Form:M(Object.assign({schemas:c},_))})}function u(){return b(this,null,function*(){for(const o of r){const{resetFields:e}=o.Form[1];yield e()}})}function l(){return b(this,null,function*(){let o="";n.value=!0;try{const e={};for(const c of r){o=c.key;const{validate:d,getFieldsValue:t}=c.Form[1];yield d(),S(e,t())}a.success("\u63D0\u4EA4\u6210\u529F\uFF01\u8BF7\u6253\u5F00\u63A7\u5236\u53F0\u67E5\u770B")}catch(e){i.value=o}finally{n.value=!1}})}function s(){return b(this,null,function*(){for(const o of r){const{setFieldsValue:e}=o.Form[1];yield e(p)}})}return{omit:$,loading:n,activeKey:i,tabsFormSchema:r,handleReset:u,handleSubmit:l,handleSetValues:s}}}),G={class:"mb-4"},z=y(" \u91CD\u7F6E\u8868\u5355 "),I=y(" \u8BBE\u7F6E\u9ED8\u8BA4\u503C "),L=y(" \u63D0\u4EA4\u8868\u5355 ");function O(a,i,n,r,_,p){const u=f("a-button"),l=f("BasicForm"),s=f("TabPane"),o=f("Tabs"),e=f("CollapseContainer"),c=f("PageWrapper"),d=A("loading");return T((v(),g(c,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:m(()=>[D("div",G,[F(u,{onClick:a.handleReset,class:"mr-2"},{default:m(()=>[z]),_:1},8,["onClick"]),F(u,{onClick:a.handleSetValues,class:"mr-2"},{default:m(()=>[I]),_:1},8,["onClick"]),F(u,{onClick:a.handleSubmit,class:"mr-2",type:"primary"},{default:m(()=>[L]),_:1},8,["onClick"])]),F(e,{title:"\u6807\u7B7E\u9875+\u591A\u7EA7field\u8868\u5355"},{default:m(()=>[F(o,{activeKey:a.activeKey,"onUpdate:activeKey":i[0]||(i[0]=t=>a.activeKey=t)},{default:m(()=>[(v(!0),P(w,null,K(a.tabsFormSchema,t=>(v(),g(s,V({key:t.key},a.omit(t,["Form","key"])),{default:m(()=>[F(l,{onRegister:t.Form[0]},null,8,["onRegister"])]),_:2},1040))),128))]),_:1},8,["activeKey"])]),_:1})]),_:1})),[[d,a.loading]])}var Ce=B(N,[["render",O]]);export{Ce as default};
