import{B as T,u as b}from"./useTable.2dfc64b8.js";import{T as g}from"./useForm.64137a1f.js";import{u as D}from"./index.29932cc5.js";import{P as C,g as w,c as y,s as R,d as S}from"./PosDailyReportDrawer.a1620a45.js";import{az as B,a as _,aZ as k,c as F,aB as i,o as P,h as v,n,B as d,C as V,t as $}from"./index.c8efd86c.js";import"./index.f0acda50.js";import"./index.17fa07c8.js";import"./index.95f8610f.js";import"./index.1cc2df02.js";import"./index.ae0eca88.js";import"./useSize.822cfd2a.js";import"./useWindowSizeFn.569f2c34.js";import"./useContentViewHeight.833d113a.js";import"./ArrowLeftOutlined.8ce689d7.js";import"./index.e7beea07.js";import"./index.b775b83d.js";import"./index.8f1c0509.js";import"./get.a8e0dbdb.js";import"./index.eb75c359.js";import"./FullscreenOutlined.5ec4a1b8.js";import"./index.59448792.js";import"./sortable.esm.c081a59d.js";import"./RedoOutlined.b14ae1e3.js";import"./scrollTo.877bd4fa.js";import"./index.93134645.js";import"./index.8a182ce2.js";import"./index.5bccfa61.js";import"./index.d99ed209.js";import"./_baseIteratee.813ccf6c.js";import"./index.650ee6e3.js";import"./useRefs.76e09c0b.js";import"./download.b01f8fdc.js";import"./index.a13d6ad9.js";import"./index.4c128a7b.js";import"./uniqBy.8070035d.js";import"./index.5f5435f2.js";const A=_({name:"PosDailyReportManagement",components:{BasicTable:T,PosDailyReportDrawer:C,TableAction:g},setup(){const e=k(),{t:r}=F(),[u,{openDrawer:a}]=D(),[f,{reload:s}]=b({api:w,columns:y,useSearchForm:!0,formConfig:{labelWidth:120,schemas:R},isTreeTable:!1,pagination:!0,striped:!1,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!0,actionColumn:{width:80,title:r("common.operateText"),dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});function l(){a(!0,{isUpdate:!1})}function p(t){a(!0,{record:t,isUpdate:!0})}function c(t){e("/pos/daily-report_detail/"+t.id)}function m(t){S({id:t.id}).then(()=>s())}function o(){s()}function h(){}return{t:r,registerTable:f,registerDrawer:u,handleCreate:l,handleEdit:p,handleView:c,handleDelete:m,handleSuccess:o,onFetchSuccess:h}}});function E(e,r,u,a,f,s){const l=i("a-button"),p=i("TableAction"),c=i("BasicTable"),m=i("posDailyReportDrawer");return P(),v("div",null,[n(c,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:d(()=>[n(l,{type:"primary",onClick:e.handleCreate},{default:d(()=>[V($(e.t("common.createText")),1)]),_:1},8,["onClick"])]),action:d(({record:o})=>[n(p,{actions:[{icon:"clarity:info-standard-line",tooltip:e.t("common.detailText"),onClick:e.handleView.bind(null,o)},{icon:"clarity:note-edit-line",tooltip:e.t("common.editText"),onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",tooltip:e.t("common.delText"),color:"error",popConfirm:{title:e.t("common.delTip"),confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])]),_:1},8,["onRegister","onFetchSuccess"]),n(m,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])}var be=B(A,[["render",E]]);export{be as default};
