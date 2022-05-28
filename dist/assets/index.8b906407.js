import{B as h,u as T}from"./useTable.2dfc64b8.js";import{T as g}from"./useForm.64137a1f.js";import{u as w}from"./index.29932cc5.js";import{M as C,g as S,c as D,s as B,d as W}from"./MemberWalletDrawer.2b5c42f9.js";import{az as _,a as k,aZ as F,c as M,aB as n,o as R,h as y,n as i,B as d,C as v,t as V}from"./index.c8efd86c.js";import"./index.f0acda50.js";import"./index.17fa07c8.js";import"./index.95f8610f.js";import"./index.1cc2df02.js";import"./index.ae0eca88.js";import"./useSize.822cfd2a.js";import"./useWindowSizeFn.569f2c34.js";import"./useContentViewHeight.833d113a.js";import"./ArrowLeftOutlined.8ce689d7.js";import"./index.e7beea07.js";import"./index.b775b83d.js";import"./index.8f1c0509.js";import"./get.a8e0dbdb.js";import"./index.eb75c359.js";import"./FullscreenOutlined.5ec4a1b8.js";import"./index.59448792.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.b14ae1e3.js";import"./scrollTo.877bd4fa.js";import"./index.93134645.js";import"./index.8a182ce2.js";import"./index.5bccfa61.js";import"./index.d99ed209.js";import"./_baseIteratee.813ccf6c.js";import"./index.650ee6e3.js";import"./useRefs.76e09c0b.js";import"./download.b01f8fdc.js";import"./index.a13d6ad9.js";import"./index.4c128a7b.js";import"./uniqBy.8070035d.js";import"./index.5f5435f2.js";const $=k({name:"MemberWalletManagement",components:{BasicTable:h,MemberWalletDrawer:C,TableAction:g},setup(){const e=F(),{t:r}=M(),[u,{openDrawer:a}]=w(),[f,{reload:s}]=T({api:S,columns:D,useSearchForm:!0,formConfig:{labelWidth:120,schemas:B},isTreeTable:!1,pagination:!0,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!0,actionColumn:{width:80,title:r("common.operateText"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){a(!0,{isUpdate:!1})}function m(o){a(!0,{record:o,isUpdate:!0})}function c(o){e("/member/wallet_detail/"+o.id)}function p(o){W({id:o.id}).then(()=>s())}function t(){s()}function b(){}return{t:r,registerTable:f,registerDrawer:u,handleCreate:l,handleEdit:m,handleView:c,handleDelete:p,handleSuccess:t,onFetchSuccess:b}}});function A(e,r,u,a,f,s){const l=n("a-button"),m=n("TableAction"),c=n("BasicTable"),p=n("memberWalletDrawer");return R(),y("div",null,[i(c,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:d(()=>[i(l,{type:"primary",onClick:e.handleCreate},{default:d(()=>[v(V(e.t("common.createText")),1)]),_:1},8,["onClick"])]),action:d(({record:t})=>[i(m,{actions:[{icon:"clarity:info-standard-line",tooltip:e.t("common.detailText"),onClick:e.handleView.bind(null,t)},{icon:"clarity:note-edit-line",tooltip:e.t("common.editText"),onClick:e.handleEdit.bind(null,t)},{icon:"ant-design:delete-outlined",tooltip:e.t("common.delText"),color:"error",popConfirm:{title:e.t("common.delTip"),confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),i(p,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var Te=_($,[["render",A]]);export{Te as default};
