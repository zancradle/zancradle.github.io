var f=(e,p,s)=>new Promise((m,a)=>{var d=o=>{try{r(s.next(o))}catch(n){a(n)}},t=o=>{try{r(s.throw(o))}catch(n){a(n)}},r=o=>o.done?m(o.value):Promise.resolve(o.value).then(d,t);r((s=s.apply(e,p)).next())});import{az as w,a as y,b as $,s as F,f as _,aB as u,o as L,j as M,B as g,m as l,q as c,t as k,n as h,C as S,aC as I,c as b}from"./index.c8efd86c.js";import{B as N,b as P}from"./index.eb75c359.js";import{B as R,n as U}from"./useForm.64137a1f.js";import{u as V}from"./lock.878792d9.js";import{h as q}from"./header.d801b988.js";import"./useWindowSizeFn.569f2c34.js";import"./FullscreenOutlined.5ec4a1b8.js";import"./index.5bccfa61.js";import"./index.d99ed209.js";import"./_baseIteratee.813ccf6c.js";import"./get.a8e0dbdb.js";import"./useSize.822cfd2a.js";import"./index.59448792.js";import"./index.f0acda50.js";import"./index.8f1c0509.js";import"./index.e7beea07.js";import"./index.b775b83d.js";import"./index.650ee6e3.js";import"./index.17fa07c8.js";import"./useRefs.76e09c0b.js";import"./download.b01f8fdc.js";import"./index.a13d6ad9.js";import"./index.4c128a7b.js";import"./uniqBy.8070035d.js";const z=y({name:"LockModal",components:{BasicModal:N,BasicForm:R},setup(){const{t:e}=b(),{prefixCls:p}=$("header-lock-modal"),s=F(),m=V(),a=_(()=>{var i;return(i=s.getUserInfo)==null?void 0:i.name}),[d,{closeModal:t}]=P(),[r,{validateFields:o,resetFields:n}]=U({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),colProps:{span:24},component:"InputPassword",required:!0}]});function v(){return f(this,null,function*(){const C=(yield o()).password;t(),m.setLockInfo({isLock:!0,pwd:C}),yield n()})}const B=_(()=>{const{avatar:i}=s.getUserInfo;return i||q});return{t:e,prefixCls:p,getName:a,register:d,registerForm:r,handleLock:v,avatar:B}}}),D=["src"];function j(e,p,s,m,a,d){const t=u("BasicForm"),r=u("a-button"),o=u("BasicModal");return L(),M(o,I({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:g(()=>[l("div",{class:c(`${e.prefixCls}__entry`)},[l("div",{class:c(`${e.prefixCls}__header`)},[l("img",{src:e.avatar,class:c(`${e.prefixCls}__header-img`)},null,10,D),l("p",{class:c(`${e.prefixCls}__header-name`)},k(e.getName),3)],2),h(t,{onRegister:e.registerForm},null,8,["onRegister"]),l("div",{class:c(`${e.prefixCls}__footer`)},[h(r,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:g(()=>[S(k(e.t("layout.header.lockScreenBtn")),1)]),_:1},8,["onClick"])],2)],2)]),_:1},16,["title","class","onRegister"])}var me=w(z,[["render",j]]);export{me as default};
