import{c,bS as d}from"./index.c8efd86c.js";import{T as i}from"./index.8f1c0509.js";import{p as r,f as m,S as l,u as p}from"./dict.b085f5a7.js";import{c as F,b as f}from"./role.fb1ba1ae.js";const{t:e}=c(),S=[{title:"\u7F16\u7801",dataIndex:"code"},{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u6570\u636E\u8303\u56F4",dataIndex:"dataScope",customRender:({text:u})=>p.get(u)},{title:"\u72B6\u6001",dataIndex:"status",customRender:({record:u})=>{const t=u.status===l.NORMAL,a=t?"green":"red",n=e(t?"common.enable":"common.disable");return d(i,{color:a},()=>n)}},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime"},{title:"\u4FEE\u6539\u65F6\u95F4",dataIndex:"updateTime"}],x=[{field:"code",label:"\u7F16\u7801",component:"Input",colProps:{span:8}},{field:"name",label:"\u540D\u79F0",component:"Input",colProps:{span:8}},{field:"dataScope",label:"\u6570\u636E\u8303\u56F4",component:"Select",componentProps:{options:r},colProps:{span:8}},{field:"status",label:e("common.status"),component:"Select",componentProps:{options:m},colProps:{span:8}}],A=[{field:"id",label:"id",component:"Input",ifShow:!1},{field:"code",label:"\u7F16\u7801",component:"Input",dynamicRules:({values:u})=>[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A",whitespace:!0},{min:1,max:50,message:"\u7F16\u7801\u957F\u5EA61-50"},{validator(o,t){return new Promise((a,n)=>{if(!(t&&t.trim())){a();return}F(u.id===void 0?null:u.id,t).then(s=>{s?a():n("\u7F16\u7801\u5DF2\u5B58\u5728")}).catch(s=>{n(s.message||"\u9A8C\u8BC1\u5931\u8D25")})})},trigger:"blur"}]},{field:"name",label:"\u540D\u79F0",component:"Input",dynamicRules:({values:u})=>[{required:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A",whitespace:!0},{min:1,max:50,message:"\u540D\u79F0\u957F\u5EA61-50"},{validator(o,t){return new Promise((a,n)=>{if(!(t&&t.trim())){a();return}f(u.id===void 0?null:u.id,t).then(s=>{s?a():n("\u540D\u79F0\u5DF2\u5B58\u5728")}).catch(s=>{n(s.message||"\u9A8C\u8BC1\u5931\u8D25")})})},trigger:"blur"}]},{field:"dataScope",label:"\u6570\u636E\u8303\u56F4",component:"Select",required:!0,componentProps:{options:r}},{field:"status",label:e("common.status"),component:"RadioButtonGroup",required:!0,defaultValue:l.NORMAL,componentProps:{options:m}},{label:"\u5206\u914D\u83DC\u5355",field:"menuIds",slot:"menu",component:"Input"},{label:"\u5907\u6CE8",field:"remarks",component:"InputTextArea"}],E=[{field:"username",label:e("sys.user.username"),component:"Input",colProps:{span:8}},{field:"name",label:e("sys.user.name"),component:"Input",colProps:{span:8}},{field:"mobile",label:e("sys.user.mobile"),component:"Input",colProps:{span:8}}],g=[{title:e("sys.user.username"),dataIndex:"username",width:120},{title:e("sys.user.avatar"),dataIndex:"avatarUrl",width:120,slots:{customRender:"avatarUrl"}},{title:e("sys.user.name"),dataIndex:"name",width:120},{title:e("sys.user.deptName"),dataIndex:"deptName",width:180}];export{E as a,S as c,A as f,x as s,g as u};
