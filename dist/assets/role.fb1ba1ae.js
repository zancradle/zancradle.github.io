import{e9 as s,ea as o}from"./index.c8efd86c.js";function t(){return s.get({url:"/sys/role/query"},{errorMessageMode:"message"})}function n(e){return s.post({url:"/sys/role/query",params:e},{errorMessageMode:"message"})}function u(e){return s.get({url:"/sys/role/query/"+e},{errorMessageMode:"message"})}function l(e){return s.post({url:"/sys/role/save",params:e},{errorMessageMode:"message"})}function g(e){return s.post({url:"/sys/role/update",params:e},{errorMessageMode:"message"})}function d(e){return s.delete({url:"/sys/role/delete",headers:{"Content-Type":o.FORM_URLENCODED},params:{id:e}},{errorMessageMode:"message"})}function M(e,r){return s.post({url:"/sys/role/code/check",headers:{"Content-Type":o.FORM_URLENCODED},params:{id:e,code:r}},{errorMessageMode:"message"})}function c(e,r){return s.post({url:"/sys/role/name/check",headers:{"Content-Type":o.FORM_URLENCODED},params:{id:e,name:r}},{errorMessageMode:"message"})}function p(e){return s.post({url:"/sys/role/assign",params:e},{errorMessageMode:"message"})}export{u as a,c as b,M as c,d,p as e,t as f,n as g,l as s,g as u};
