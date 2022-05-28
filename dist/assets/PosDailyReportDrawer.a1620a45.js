var F=Object.defineProperty;var y=Object.getOwnPropertySymbols;var Y=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var D=(e,t,r)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))Y.call(t,r)&&D(e,r,t[r]);if(y)for(var r of y(t))B.call(t,r)&&D(e,r,t[r]);return e};var f=(e,t,r)=>new Promise((n,l)=>{var m=s=>{try{i(r.next(s))}catch(d){l(d)}},p=s=>{try{i(r.throw(s))}catch(d){l(d)}},i=s=>s.done?n(s.value):Promise.resolve(s.value).then(m,p);i((r=r.apply(e,t)).next())});import{B as _,n as v}from"./useForm.64137a1f.js";import{c as h,dA as M,e9 as c,ea as x,az as C,a as N,v as O,f as S,i as g,aB as R,o as T,j as k,B as $,n as L,aC as U}from"./index.c8efd86c.js";import{B as j,a as E}from"./index.29932cc5.js";const{t:o}=h(),ee=[{title:o("pos.dailyReport.reportDate"),dataIndex:"reportDate",ellipsis:!0},{title:o("pos.dailyReport.registeredMember"),dataIndex:"registeredMember",ellipsis:!0},{title:o("pos.dailyReport.rechargedMember"),dataIndex:"rechargedMember",ellipsis:!0},{title:o("pos.dailyReport.consumedMember"),dataIndex:"consumedMember",ellipsis:!0},{title:o("pos.dailyReport.rechargeAmount"),dataIndex:"rechargeAmount",ellipsis:!0},{title:o("pos.dailyReport.consumedAmount"),dataIndex:"consumedAmount",ellipsis:!0},{title:o("pos.dailyReport.spendAmount"),dataIndex:"spendAmount",ellipsis:!0}],re=[{field:"reportDateRange",label:o("pos.dailyReport.reportDate"),component:"RangePicker",defaultValue:[M().startOf("month").format("YYYY-MM-DD"),M().endOf("month").format("YYYY-MM-DD")],componentProps:{valueFormat:"YYYY-MM-DD"},colProps:{span:8}}],V=[{field:"reportDate",label:o("pos.dailyReport.reportDate"),component:"DatePicker",componentProps:{valueFormat:"YYYY-MM-DD"}},{field:"registeredMember",label:o("pos.dailyReport.registeredMember"),component:"InputNumber"},{field:"rechargedMember",label:o("pos.dailyReport.rechargedMember"),component:"InputNumber"},{field:"consumedMember",label:o("pos.dailyReport.consumedMember"),component:"InputNumber"},{field:"rechargeAmount",label:o("pos.dailyReport.rechargeAmount"),component:"InputNumber"},{field:"consumedAmount",label:o("pos.dailyReport.consumedAmount"),component:"InputNumber"},{field:"spendAmount",label:o("pos.dailyReport.spendAmount"),component:"InputNumber"}];function te(e){return c.post({url:"/pos/daily-report/query",params:e},{errorMessageMode:"message"})}function z(e){return c.post({url:"/pos/daily-report/save",params:e},{errorMessageMode:"message"})}function q(e){return c.post({url:"/pos/daily-report/update",params:e},{errorMessageMode:"message"})}function oe(e){return c.delete({url:"/pos/daily-report/delete",headers:{"Content-Type":x.FORM_URLENCODED},params:{id:e}},{errorMessageMode:"message"})}const G=N({name:"PosDailyReportDrawer",components:{BasicDrawer:j,BasicForm:_},emits:["success","register"],setup(e,{emit:t}){const{t:r}=h(),n=O(!0);let l;const[m,{resetFields:p,setFieldsValue:i,removeSchemaByFiled:s,validate:d}]=v({labelWidth:100,schemas:V,showActionButtonGroup:!1,baseColProps:{lg:12,md:24}}),[w,{setDrawerProps:u,closeDrawer:I}]=E(a=>f(this,null,function*(){yield p(),u({confirmLoading:!1}),n.value=!!(a!=null&&a.isUpdate),g(n)&&(yield s(["id","tenantId"]),yield i(b({},a.record)),l=a.record.id)})),P=S(()=>g(n)?r("common.editText"):r("common.createText"));function A(){return f(this,null,function*(){try{const a=yield d();u({confirmLoading:!0}),g(n)?(a.id=l,yield q(a)):yield z(a),I(),t("success")}finally{u({confirmLoading:!1})}})}return{registerDrawer:w,registerForm:m,getTitle:P,handleSubmit:A}}});function H(e,t,r,n,l,m){const p=R("BasicForm"),i=R("BasicDrawer");return T(),k(i,U(e.$attrs,{onRegister:e.registerDrawer,showFooter:"",title:e.getTitle,width:"50%",onOk:e.handleSubmit}),{default:$(()=>[L(p,{onRegister:e.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var W=C(G,[["render",H]]),se=Object.freeze(Object.defineProperty({__proto__:null,default:W},Symbol.toStringTag,{value:"Module"}));export{W as P,se as a,ee as c,oe as d,te as g,re as s};
