var D=Object.defineProperty;var I=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var M=(e,r,n)=>r in e?D(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,g=(e,r)=>{for(var n in r||(r={}))R.call(r,n)&&M(e,n,r[n]);if(I)for(var n of I(r))v.call(r,n)&&M(e,n,r[n]);return e};var b=(e,r,n)=>new Promise((s,i)=>{var c=a=>{try{l(n.next(a))}catch(d){i(d)}},m=a=>{try{l(n.throw(a))}catch(d){i(d)}},l=a=>a.done?s(a.value):Promise.resolve(a.value).then(c,m);l((n=n.apply(e,r)).next())});import{B as P,n as T}from"./useForm.64137a1f.js";import{c as h,e9 as p,ea as x,az as y,a as C,v as N,f as S,i as f,aB as w,o as O,j as $,B as L,n as k,aC as j}from"./index.c8efd86c.js";import{B as A,a as E}from"./index.29932cc5.js";const{t}=h(),Z=[{title:t("member.relation.ancestorId"),dataIndex:"ancestorId",ellipsis:!0},{title:t("member.relation.ancestorUsername"),dataIndex:"ancestorUsername",ellipsis:!0},{title:t("member.relation.ancestorMobile"),dataIndex:"ancestorMobile",ellipsis:!0},{title:t("member.relation.descendantId"),dataIndex:"descendantId",ellipsis:!0},{title:t("member.relation.descendantUsername"),dataIndex:"descendantUsername",ellipsis:!0},{title:t("member.relation.descendantMobile"),dataIndex:"descendantMobile",ellipsis:!0},{title:t("member.relation.depth"),dataIndex:"depth",ellipsis:!0},{title:t("member.relation.createTime"),dataIndex:"createTime",ellipsis:!0},{title:t("member.relation.updateTime"),dataIndex:"updateTime",ellipsis:!0}],ee=[{field:"ancestorId",label:t("member.relation.ancestorId"),component:"InputNumber",colProps:{span:8}},{field:"ancestorUsername",label:t("member.relation.ancestorUsername"),component:"Input",colProps:{span:8}},{field:"ancestorMobile",label:t("member.relation.ancestorMobile"),component:"Input",colProps:{span:8}},{field:"descendantId",label:t("member.relation.descendantId"),component:"InputNumber",colProps:{span:8}},{field:"descendantUsername",label:t("member.relation.descendantUsername"),component:"Input",colProps:{span:8}},{field:"descendantMobile",label:t("member.relation.descendantMobile"),component:"Input",colProps:{span:8}},{field:"depth",label:t("member.relation.depth"),component:"InputNumber",colProps:{span:8}}],z=[{field:"ancestorId",label:t("member.relation.ancestorId"),component:"InputNumber"},{field:"ancestorUsername",label:t("member.relation.ancestorUsername"),component:"Input"},{field:"ancestorMobile",label:t("member.relation.ancestorMobile"),component:"Input"},{field:"descendantId",label:t("member.relation.descendantId"),component:"InputNumber"},{field:"descendantUsername",label:t("member.relation.descendantUsername"),component:"Input"},{field:"descendantMobile",label:t("member.relation.descendantMobile"),component:"Input"},{field:"depth",label:t("member.relation.depth"),component:"InputNumber"}];function te(e){return p.post({url:"/member/relation/query",params:e},{errorMessageMode:"message"})}function V(e){return p.post({url:"/member/relation/save",params:e},{errorMessageMode:"message"})}function q(e){return p.post({url:"/member/relation/update",params:e},{errorMessageMode:"message"})}function ne(e){return p.delete({url:"/member/relation/delete",headers:{"Content-Type":x.FORM_URLENCODED},params:{id:e}},{errorMessageMode:"message"})}const G=C({name:"MemberRelationDrawer",components:{BasicDrawer:A,BasicForm:P},emits:["success","register"],setup(e,{emit:r}){const{t:n}=h(),s=N(!0);let i;const[c,{resetFields:m,setFieldsValue:l,removeSchemaByFiled:a,validate:d}]=T({labelWidth:100,schemas:z,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[U,{setDrawerProps:u,closeDrawer:B}]=E(o=>b(this,null,function*(){yield m(),u({confirmLoading:!1}),s.value=!!(o!=null&&o.isUpdate),f(s)&&(yield a(["id","tenantId"]),yield l(g({},o.record)),i=o.record.id)})),F=S(()=>f(s)?n("common.editText"):n("common.createText"));function _(){return b(this,null,function*(){try{const o=yield d();u({confirmLoading:!0}),f(s)?(o.id=i,yield q(o)):yield V(o),B(),r("success")}finally{u({confirmLoading:!1})}})}return{registerDrawer:U,registerForm:c,getTitle:F,handleSubmit:_}}});function H(e,r,n,s,i,c){const m=w("BasicForm"),l=w("BasicDrawer");return O(),$(l,j(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:L(()=>[k(m,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var W=y(G,[["render",H]]),re=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as M,re as a,Z as c,ne as d,te as g,ee as s};
