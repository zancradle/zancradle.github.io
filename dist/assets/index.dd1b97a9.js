var Xe=Object.defineProperty,Ye=Object.defineProperties;var ze=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var qe=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var fe=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,M=(e,t)=>{for(var n in t||(t={}))qe.call(t,n)&&fe(e,n,t[n]);if(he)for(var n of he(t))Ge.call(t,n)&&fe(e,n,t[n]);return e},te=(e,t)=>Ye(e,ze(t));var ye=(e,t,n)=>new Promise((h,K)=>{var x=p=>{try{o(n.next(p))}catch(b){K(b)}},s=p=>{try{o(n.throw(p))}catch(b){K(b)}},o=p=>p.done?h(p.value):Promise.resolve(p.value).then(x,s);o((n=n.apply(e,t)).next())});import{eR as We,eS as Je,eT as Ze,eU as Qe,eV as et,eW as tt,cX as nt,d1 as pe,eX as lt,eY as st,eZ as at,e_ as ct,a as re,v as G,e$ as rt,c as it,f as F,J as j,o as $,h as U,i,aF as ot,k as O,j as ne,B as R,C as ge,t as ke,dn as ut,q as xe,n as S,f0 as dt,F as W,aE as ht,cf as ft,aG as yt,aH as pt,f1 as gt,b7 as q,b6 as J,bl as kt,cP as xt,bt as St,f2 as bt,bS as vt,aj as ae,f3 as Se,K as Te,L as Kt,b$ as we,cw as Be,eF as Ct,eG as Lt,ax as At,w as be,an as z,dd as _t,ap as Et,aA as le,f4 as mt,df as Tt,U as H,f5 as wt,ek as Bt,b1 as Dt,y as ve,z as Ke,bE as It,aC as $t,cS as Ce,f6 as Ft,bq as Le,cD as Mt}from"./index.c8efd86c.js";import{T as Nt}from"./index.17fa07c8.js";import{D as Ot}from"./index.59448792.js";import{g as jt}from"./get.a8e0dbdb.js";var Pt=200;function Ut(e,t,n,h){var K=-1,x=Qe,s=!0,o=e.length,p=[],b=t.length;if(!o)return p;n&&(t=We(t,Je(n))),h?(x=et,s=!1):t.length>=Pt&&(x=tt,s=!1,t=new Ze(t));e:for(;++K<o;){var k=e[K],r=n==null?k:n(k);if(k=h||k!==0?k:0,s&&r===r){for(var l=b;l--;)if(t[l]===r)continue e;p.push(k)}else x(t,r,h)||p.push(k)}return p}var Rt=nt(function(e,t){return pe(e)?Ut(e,lt(t,1,pe,!0)):[]}),Ht=Rt;function Vt(e){for(var t=-1,n=e==null?0:e.length,h={};++t<n;){var K=e[t];h[K[0]]=K[1]}return h}function ce(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,h)=>n+ce(e,h),""):Object.keys(t).reduce((n,h)=>n+(t[h]?ce(e,h):""),""):""}function Xt(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${ce(t,n)}`)}function De(e){return[Xt(`${st}-${e}`)]}const Ae=Symbol(),_e=Symbol();function Yt(e,t){if(!at(e)||!!e[_e])return e;const{values:n,required:h,default:K,type:x,validator:s}=e,o=n||s?p=>{let b=!1,k=[];if(n&&(k=[...n,K],b||(b=k.includes(p))),s&&(b||(b=s(p))),!b&&k.length>0){const r=[...new Set(k)].map(l=>JSON.stringify(l)).join(", ");ct(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${r}], got value ${JSON.stringify(p)}.`)}return b}:void 0;return{type:typeof x=="object"&&Object.getOwnPropertySymbols(x).includes(Ae)?x[Ae]:x,required:!!h,default:K,validator:o,[_e]:!0}}const zt=e=>Vt(Object.entries(e).map(([t,n])=>[t,Yt(n,t)]));var m=(e=>(e[e.SELECT_ALL=0]="SELECT_ALL",e[e.UN_SELECT_ALL=1]="UN_SELECT_ALL",e[e.EXPAND_ALL=2]="EXPAND_ALL",e[e.UN_EXPAND_ALL=3]="UN_EXPAND_ALL",e[e.CHECK_STRICTLY=4]="CHECK_STRICTLY",e[e.CHECK_UN_STRICTLY=5]="CHECK_UN_STRICTLY",e))(m||{});const qt=["update:expandedKeys","update:selectedKeys","update:value","change","check","update:searchValue"],Gt=zt({value:{type:[Object,Array]},renderIcon:{type:Function},helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:Boolean,search:Boolean,searchValue:{type:String,default:""},checkStrictly:Boolean,clickRowToExpand:{type:Boolean,default:!1},checkable:Boolean,defaultExpandLevel:{type:[String,Number],default:""},defaultExpandAll:Boolean,fieldNames:{type:Object},treeData:{type:Array},actionList:{type:Array,default:()=>[]},expandedKeys:{type:Array,default:()=>[]},selectedKeys:{type:Array,default:()=>[]},checkedKeys:{type:Array,default:()=>[]},beforeRightClick:{type:Function,default:void 0},rightMenuList:{type:Array},filterFn:{type:Function,default:void 0},highlight:{type:[Boolean,String],default:!1},expandOnSearch:Boolean,checkOnSearch:Boolean,selectedOnSearch:Boolean,loading:{type:Boolean,default:!1}}),Wt={key:2,class:"flex items-center flex-1 cursor-pointer justify-self-stretch"},Jt=re({props:{helpMessage:{type:[String,Array],default:""},title:{type:String,default:""},toolbar:{type:Boolean,default:!1},checkable:{type:Boolean,default:!1},search:{type:Boolean,default:!1},searchText:{type:String,default:""},checkAll:{type:Function,default:void 0},expandAll:{type:Function,default:void 0}},emits:["strictly-change","search"],setup(e,{emit:t}){const n=e,h=G(""),[K]=De("tree-header"),x=rt(),{t:s}=it(),o=F(()=>{const l=x.headerTitle||n.title;return["mr-1","w-full",{["ml-5"]:l}]}),p=F(()=>{const{checkable:l}=n,a=[{label:s("component.tree.expandAll"),value:m.EXPAND_ALL},{label:s("component.tree.unExpandAll"),value:m.UN_EXPAND_ALL,divider:l}];return l?[{label:s("component.tree.selectAll"),value:m.SELECT_ALL},{label:s("component.tree.unSelectAll"),value:m.UN_SELECT_ALL,divider:l},...a,{label:s("component.tree.checkStrictly"),value:m.CHECK_STRICTLY},{label:s("component.tree.checkUnStrictly"),value:m.CHECK_UN_STRICTLY}]:a});function b(l){var u,d,f,y;const{key:a}=l;switch(a){case m.SELECT_ALL:(u=n.checkAll)==null||u.call(n,!0);break;case m.UN_SELECT_ALL:(d=n.checkAll)==null||d.call(n,!1);break;case m.EXPAND_ALL:(f=n.expandAll)==null||f.call(n,!0);break;case m.UN_EXPAND_ALL:(y=n.expandAll)==null||y.call(n,!1);break;case m.CHECK_STRICTLY:t("strictly-change",!1);break;case m.CHECK_UN_STRICTLY:t("strictly-change",!0);break}}function k(l){t("search",l)}const r=St(k,200);return j(()=>h.value,l=>{r(l)}),j(()=>n.searchText,l=>{l!==h.value&&(h.value=l)}),(l,a)=>($(),U("div",{class:xe([i(K)(),"flex px-2 py-1.5 items-center"])},[i(x).headerTitle?ot(l.$slots,"headerTitle",{key:0}):O("",!0),!i(x).headerTitle&&l.title?($(),ne(i(ut),{key:1,helpMessage:l.helpMessage},{default:R(()=>[ge(ke(l.title),1)]),_:1},8,["helpMessage"])):O("",!0),l.search||l.toolbar?($(),U("div",Wt,[l.search?($(),U("div",{key:0,class:xe(i(o))},[S(i(dt),{placeholder:i(s)("common.searchText"),size:"small",allowClear:"",value:h.value,"onUpdate:value":a[0]||(a[0]=u=>h.value=u)},null,8,["placeholder","value"])],2)):O("",!0),l.toolbar?($(),ne(i(xt),{key:1,onClick:a[1]||(a[1]=kt(()=>{},["prevent"]))},{overlay:R(()=>[S(i(q),{onClick:b},{default:R(()=>[($(!0),U(W,null,ht(i(p),u=>($(),U(W,{key:u.value},[S(i(ft),yt(pt({key:u.value})),{default:R(()=>[ge(ke(u.label),1)]),_:2},1040),u.divider?($(),ne(i(gt),{key:0})):O("",!0)],64))),128))]),_:1})]),default:R(()=>[S(i(J),{icon:"ion:ellipsis-vertical"})]),_:1})):O("",!0)])):O("",!0)],2))}}),Zt=({icon:e})=>e?bt(e)?vt(J,{icon:e,class:"mr-1"}):J:null;function Qt(e,t){function n(r){const l=[],a=r||i(e),{key:u,children:d}=i(t);if(!d||!u)return l;for(let f=0;f<a.length;f++){const y=a[f];l.push(y[u]);const v=y[d];v&&v.length&&l.push(...n(v))}return l}function h(r){const l=[],a=r||i(e),{key:u,children:d}=i(t);if(!d||!u)return l;for(let f=0;f<a.length;f++){const y=a[f];y.disabled!==!0&&y.selectable!==!1&&l.push(y[u]);const v=y[d];v&&v.length&&l.push(...h(v))}return l}function K(r,l){const a=[],u=l||i(e),{key:d,children:f}=i(t);if(!f||!d)return a;for(let y=0;y<u.length;y++){const v=u[y],E=v[f];r===v[d]?(a.push(v[d]),E&&E.length&&a.push(...n(E))):E&&E.length&&a.push(...K(r,E))}return a}function x(r,l,a){if(!r)return;const u=a||i(e),{key:d,children:f}=i(t);if(!(!f||!d))for(let y=0;y<u.length;y++){const v=u[y],E=v[f];if(v[d]===r){u[y]=M(M({},u[y]),l);break}else E&&E.length&&x(r,l,v[f])}}function s(r=1,l,a=1){if(!r)return[];const u=[],d=l||i(e)||[];for(let f=0;f<d.length;f++){const y=d[f],{key:v,children:E}=i(t),Z=v?y[v]:"",P=E?y[E]:[];u.push(Z),P&&P.length&&a<r&&(a+=1,u.push(...s(r,P,a)))}return u}function o({parentKey:r=null,node:l,push:a="push"}){const u=ae(i(e));if(!r){u[a](l),e.value=u;return}const{key:d,children:f}=i(t);!f||!d||(Se(u,y=>{if(y[d]===r)return y[f]=y[f]||[],y[f][a](l),!0}),e.value=u)}function p({parentKey:r=null,list:l,push:a="push"}){const u=ae(i(e));if(!(!l||l.length<1))if(r){const{key:d,children:f}=i(t);if(!f||!d)return;Se(u,y=>{if(y[d]===r){y[f]=y[f]||[];for(let v=0;v<l.length;v++)y[f][a](l[v]);return e.value=u,!0}})}else for(let d=0;d<l.length;d++)u[a](l[d])}function b(r,l){if(!r)return;const a=l||i(e),{key:u,children:d}=i(t);if(!(!d||!u))for(let f=0;f<a.length;f++){const y=a[f],v=y[d];if(y[u]===r){a.splice(f,1);break}else v&&v.length&&b(r,y[d])}}function k(r,l,a){return!r&&r!==0?null:((l||i(e)).forEach(d=>{if((a==null?void 0:a.key)||(a==null?void 0:a.key)===0)return a;if(d.key===r){a=d;return}d.children&&d.children.length&&(a=k(r,d.children,a))}),a||null)}return{deleteNodeByKey:b,insertNodeByKey:o,insertNodesByKey:p,filterByLevel:s,updateNodeByKey:x,getAllKeys:n,getChildrenKeys:K,getEnabledKeys:h,getSelectedNode:k}}function en(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Be(e)}const se="context-menu",tn={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},Ee=e=>{const{item:t}=e;return S("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&S(J,{class:"mr-2",icon:t.icon},null),S("span",null,[t.label])])};var nn=re({name:"ContextMenu",props:tn,setup(e){const t=G(null),n=G(!1),h=F(()=>{const{axis:s,items:o,styles:p,width:b}=e,{x:k,y:r}=s||{x:0,y:0},l=(o||[]).length*40,a=b,u=document.body,d=u.clientWidth<k+a?k-a:k,f=u.clientHeight<r+l?r-l:r;return te(M({},p),{position:"absolute",width:`${b}px`,left:`${d+1}px`,top:`${f+1}px`,zIndex:9999})});Te(()=>{Kt(()=>n.value=!0)}),we(()=>{const s=i(t);s&&document.body.removeChild(s)});function K(s,o){const{handler:p,disabled:b}=s;b||(n.value=!1,o==null||o.stopPropagation(),o==null||o.preventDefault(),p==null||p())}function x(s){return s.filter(p=>!p.hidden).map(p=>{const{disabled:b,label:k,children:r,divider:l=!1}=p,a={item:p,handler:K,showIcon:e.showIcon};return!r||r.length===0?S(W,null,[S(q.Item,{disabled:b,class:`${se}__item`,key:k},{default:()=>[S(Ee,a,null)]}),l?S(Ot,{key:`d-${k}`},null):null]):i(n)?S(q.SubMenu,{key:k,disabled:b,popupClassName:`${se}__popup`},{title:()=>S(Ee,a,null),default:()=>x(r)}):null})}return()=>{let s;if(!i(n))return null;const{items:o}=e;return S("div",{class:se},[S(q,{inlineIndent:12,mode:"vertical",ref:t,style:i(h)},en(s=x(o))?s:{default:()=>[s]})])}}});const N={domList:[],resolve:()=>{}},ln=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!Ct)return new Promise(n=>{const h=document.body,K=document.createElement("div"),x={};e.styles&&(x.styles=e.styles),e.items&&(x.items=e.items),e.event&&(x.customEvent=t,x.axis={x:t.clientX,y:t.clientY});const s=S(nn,x);Lt(s,K);const o=function(){N.resolve("")};N.domList.push(K);const p=function(){N.domList.forEach(b=>{try{b&&h.removeChild(b)}catch(k){}}),h.removeEventListener("click",o),h.removeEventListener("scroll",o)};N.resolve=function(b){p(),n(b)},p(),h.appendChild(K),h.addEventListener("click",o),h.addEventListener("scroll",o)})},me=function(){N&&(N.resolve(""),N.domList=[])};function sn(e=!0){return At()&&e&&we(()=>{me()}),[ln,me]}function an(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!Be(e)}var hn=re({name:"BasicTree",inheritAttrs:!1,props:Gt,emits:qt,setup(e,{attrs:t,slots:n,emit:h,expose:K}){const[x]=De("tree"),s=be({checkStrictly:e.checkStrictly,expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],checkedKeys:e.checkedKeys||[]}),o=be({startSearch:!1,searchText:"",searchData:[]}),p=G([]),[b]=sn(),k=F(()=>{const{fieldNames:c}=e;return M({children:"children",title:"title",key:"key"},c)}),r=F(()=>{let c=te(M(M({blockNode:!0},t),e),{expandedKeys:s.expandedKeys,selectedKeys:s.selectedKeys,checkedKeys:s.checkedKeys,checkStrictly:s.checkStrictly,fieldNames:i(k),"onUpdate:expandedKeys":g=>{s.expandedKeys=g,h("update:expandedKeys",g)},"onUpdate:selectedKeys":g=>{s.selectedKeys=g,h("update:selectedKeys",g)},onCheck:(g,L)=>{let C=z(s.checkedKeys);if(_t(C)&&o.startSearch){const{key:_}=i(k);C=Ht(C,Z(L.node.$attrs.node[_])),L.checked&&C.push(L.node.$attrs.node[_]),s.checkedKeys=C}else s.checkedKeys=g;const A=z(s.checkedKeys);h("update:value",A),h("check",A,L)},onRightClick:Fe});return Et(c,"treeData","class")}),l=F(()=>o.startSearch?o.searchData:i(p)),a=F(()=>!l.value||l.value.length===0),{deleteNodeByKey:u,insertNodeByKey:d,insertNodesByKey:f,filterByLevel:y,updateNodeByKey:v,getAllKeys:E,getChildrenKeys:Z,getEnabledKeys:P,getSelectedNode:Ie}=Qt(p,k);function $e(c,g){return!g&&e.renderIcon&&le(e.renderIcon)?e.renderIcon(c):g}function Fe(L){return ye(this,arguments,function*({event:c,node:g}){var B;const{rightMenuList:C=[],beforeRightClick:A}=e;let _={event:c,items:[]};if(A&&le(A)){let T=yield A(g,c);Array.isArray(T)?_.items=T:Object.assign(_,T)}else _.items=C;!((B=_.items)!=null&&B.length)||(_.items=_.items.filter(T=>!T.hidden),b(_))})}function V(c){s.expandedKeys=c}function Me(){return s.expandedKeys}function ie(c){s.selectedKeys=c}function Ne(){return s.selectedKeys}function oe(c){s.checkedKeys=c}function Oe(){return s.checkedKeys}function ue(c){s.checkedKeys=c?P():[]}function Q(c){s.expandedKeys=c?E():[]}function je(c){s.checkStrictly=c}j(()=>e.searchValue,c=>{c!==o.searchText&&(o.searchText=c)},{immediate:!0}),j(()=>e.treeData,c=>{c&&ee(o.searchText)});function ee(c){if(c!==o.searchText&&(o.searchText=c),h("update:searchValue",c),!c){o.startSearch=!1;return}const{filterFn:g,checkable:L,expandOnSearch:C,checkOnSearch:A,selectedOnSearch:_}=i(e);o.startSearch=!0;const{title:B,key:T}=i(k),D=[];if(o.searchData=mt(i(p),w=>{var X,Y;const I=g?g(c,w,i(k)):(Y=(X=w[B])==null?void 0:X.includes(c))!=null?Y:!1;return I&&D.push(w[T]),I},i(k)),C){const w=Tt(o.searchData).map(I=>I[T]);w&&w.length&&V(w)}A&&L&&D.length&&oe(D),_&&D.length&&ie(D)}function Pe(c,g){if(!(!e.clickRowToExpand||!g||g.length===0))if(!s.expandedKeys.includes(c))V([...s.expandedKeys,c]);else{const L=[...s.expandedKeys],C=L.findIndex(A=>A===c);C!==-1&&L.splice(C,1),V(L)}}H(()=>{p.value=e.treeData}),Te(()=>{const c=parseInt(e.defaultExpandLevel);c>0?s.expandedKeys=y(c):e.defaultExpandAll&&Q(!0)}),H(()=>{s.expandedKeys=e.expandedKeys}),H(()=>{s.selectedKeys=e.selectedKeys}),H(()=>{s.checkedKeys=e.checkedKeys}),j(()=>e.value,()=>{s.checkedKeys=z(e.value||[])},{immediate:!0}),j(()=>s.checkedKeys,()=>{const c=z(s.checkedKeys);h("update:value",c),h("change",c)}),H(()=>{s.checkStrictly=e.checkStrictly});const Ue={setExpandedKeys:V,getExpandedKeys:Me,setSelectedKeys:ie,getSelectedKeys:Ne,setCheckedKeys:oe,getCheckedKeys:Oe,insertNodeByKey:d,insertNodesByKey:f,deleteNodeByKey:u,updateNodeByKey:v,getSelectedNode:Ie,checkAll:ue,expandAll:Q,filterByLevel:c=>{s.expandedKeys=y(c)},setSearchValue:c=>{ee(c)},getSearchValue:()=>o.searchText};function Re(c){const{actionList:g}=e;if(!(!g||g.length===0))return g.map((L,C)=>{var _;let A=!0;return le(L.show)?A=(_=L.show)==null?void 0:_.call(L,c):Le(L.show)&&(A=L.show),A?S("span",{key:C,class:x("action")},[L.render(c)]):null})}const He=F(()=>{const c=ae(l.value);return wt(c,(g,L)=>{var de;const C=o.searchText,{highlight:A}=i(e),{title:_,key:B,children:T}=i(k),D=$e(g,g.icon),w=jt(g,_),I=C?w.indexOf(C):-1,X=o.startSearch&&!Ft(C)&&A&&I!==-1,Y=`color: ${Le(A)?"#f50":A}`,Ve=X?S("span",{class:(de=i(r))!=null&&de.blockNode?`${x("content")}`:""},[S("span",null,[w.substr(0,I)]),S("span",{style:Y},[C]),S("span",null,[w.substr(I+C.length)])]):w;return g[_]=S("span",{class:`${x("title")} pl-2`,onClick:Pe.bind(null,g[B],g[T])},[n!=null&&n.title?Mt(n,"title",g):S(W,null,[D&&S(Zt,{icon:D},null),Ve,S("span",{class:x("actions")},[Re(g)])])]),g}),c});return K(Ue),()=>{let c;const{title:g,helpMessage:L,toolbar:C,search:A,checkable:_}=e,B=g||C||A||n.headerTitle,T={height:"calc(100% - 38px)"};return S("div",{class:[x(),"h-full",t.class]},[B&&S(Jt,{checkable:_,checkAll:ue,expandAll:Q,title:g,search:A,toolbar:C,helpMessage:L,onStrictlyChange:je,onSearch:ee,searchText:o.searchText},an(c=Bt(n))?c:{default:()=>[c]}),S(Dt,{spinning:i(e.loading),tip:"\u52A0\u8F7D\u4E2D..."},{default:()=>[ve(S(It,{style:T},{default:()=>[S(Nt,$t(i(r),{showIcon:!1,treeData:He.value}),null)]}),[[Ke,!i(a)]]),ve(S(Ce,{image:Ce.PRESENTED_IMAGE_SIMPLE,class:"!mt-4"},null),[[Ke,i(a)]])]})])}}});export{hn as _};
