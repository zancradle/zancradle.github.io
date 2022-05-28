var T=Object.defineProperty;var D=Object.getOwnPropertySymbols;var $=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var E=(e,s,r)=>s in e?T(e,s,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[s]=r,F=(e,s)=>{for(var r in s||(s={}))$.call(s,r)&&E(e,r,s[r]);if(D)for(var r of D(s))k.call(s,r)&&E(e,r,s[r]);return e};var g=(e,s,r)=>new Promise((n,d)=>{var f=t=>{try{c(r.next(t))}catch(u){d(u)}},w=t=>{try{c(r.throw(t))}catch(u){d(u)}},c=t=>t.done?n(t.value):Promise.resolve(t.value).then(f,w);c((r=r.apply(e,s)).next())});import{B as x,n as I}from"./useForm.64137a1f.js";import{d as S}from"./user.data.a34574cf.js";import{B as L,a as V}from"./index.29932cc5.js";import{az as q,a as O,c as j,v as P,f as v,i as C,aB as A,o as z,j as G,B as N,n as W,aC as H,fc as J,fd as K}from"./index.c8efd86c.js";import{g as M}from"./dept.7d90adee.js";import"./index.5bccfa61.js";import"./index.d99ed209.js";import"./_baseIteratee.813ccf6c.js";import"./get.a8e0dbdb.js";import"./useSize.822cfd2a.js";import"./index.59448792.js";import"./index.f0acda50.js";import"./index.8f1c0509.js";import"./index.e7beea07.js";import"./index.b775b83d.js";import"./index.650ee6e3.js";import"./index.17fa07c8.js";import"./index.eb75c359.js";import"./useWindowSizeFn.569f2c34.js";import"./FullscreenOutlined.5ec4a1b8.js";import"./useRefs.76e09c0b.js";import"./download.b01f8fdc.js";import"./index.a13d6ad9.js";import"./index.4c128a7b.js";import"./uniqBy.8070035d.js";import"./dict.b085f5a7.js";import"./role.fb1ba1ae.js";import"./index.5f5435f2.js";import"./ArrowLeftOutlined.8ce689d7.js";const Q=O({name:"UserDrawer",components:{BasicDrawer:L,BasicForm:x},emits:["success","register"],setup(e,{emit:s}){const{t:r}=j(),n=P(!0),d=P(""),[f,{resetFields:w,setFieldsValue:c,updateSchema:t,clearValidate:u,validate:h}]=I({labelWidth:100,schemas:S,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[_,{setDrawerProps:l,closeDrawer:b}]=V(m=>g(this,null,function*(){yield w(),l({confirmLoading:!1}),n.value=!!(m!=null&&m.isUpdate);const U=yield M();yield t({field:"deptId",componentProps:{treeData:U}}),yield t({field:"password",dynamicRules:({values:o})=>[{required:!0,message:"\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",whitespace:!0},{min:6,max:50,message:"\u5BC6\u7801\u957F\u5EA66-50"},{validator(B,i){return new Promise((a,p)=>{if(!(i&&i.trim())){a();return}o.password===o.confirmPassword?(u("confirmPassword"),a()):p("\u5BC6\u7801\u548C\u786E\u8BA4\u5BC6\u7801\u4E0D\u4E00\u81F4")})},trigger:"blur"}]}),yield t({field:"confirmPassword",dynamicRules:({values:o})=>[{required:!0,message:"\u786E\u8BA4\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A",whitespace:!0},{validator(B,i){return new Promise((a,p)=>{if(!(i&&i.trim())){a();return}o.password===o.confirmPassword?(u("password"),a()):p("\u5BC6\u7801\u548C\u786E\u8BA4\u5BC6\u7801\u4E0D\u4E00\u81F4")})},trigger:"blur"}]}),C(n)&&(yield t({field:"password",dynamicRules:({values:o})=>[{min:6,max:50,message:"\u5BC6\u7801\u957F\u5EA66-50"},{validator(B,i){return new Promise((a,p)=>{if(!(i&&i.trim())){a();return}o.password===o.confirmPassword?(u("confirmPassword"),a()):p("\u5BC6\u7801\u548C\u786E\u8BA4\u5BC6\u7801\u4E0D\u4E00\u81F4")})},trigger:"blur"}]}),yield t({field:"confirmPassword",dynamicRules:({values:o})=>[{min:6,max:50,message:"\u5BC6\u7801\u957F\u5EA66-50"},{validator(B,i){return new Promise((a,p)=>{if(!(i&&i.trim())){a();return}o.password===o.confirmPassword?(u("password"),a()):p("\u5BC6\u7801\u548C\u786E\u8BA4\u5BC6\u7801\u4E0D\u4E00\u81F4")})},trigger:"blur"}]}),yield c(F({},m.record)),d.value=m.record.id,yield u())})),y=v(()=>C(n)?r("common.editText"):r("common.createText"));function R(){return g(this,null,function*(){try{const m=yield h();l({confirmLoading:!0}),C(n)?(m.id=d.value,yield K(m)):yield J(m),b(),s("success")}finally{l({confirmLoading:!1})}})}return{registerDrawer:_,drawerForm:f,getTitle:y,handleSubmit:R}}});function X(e,s,r,n,d,f){const w=A("BasicForm"),c=A("BasicDrawer");return z(),G(c,H(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:N(()=>[W(w,{onRegister:e.drawerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var Rr=q(Q,[["render",X]]);export{Rr as default};
