import{v as B,cc as we,V as Ze,a as fe,f as Z,n as s,c2 as ne,M as he,N as D,U as We,_ as Y,r as Lt,cd as G,a9 as _,K as De,J as Se,ce as Kt,b7 as Wt,cf as Dt,cg as jt,Q as Je,a7 as Ft,T as zt,bc as Ht,$ as st,ch as Be,ci as dt,O as ue,cj as Tt,ck as Vt,H as Ct,X as Gt,a2 as $t,cl as Ut,c1 as qt,c5 as Ye,S as Xt,a0 as Yt,cm as Zt,cn as ft,c7 as Jt}from"./index.c8efd86c.js";import{u as Qt}from"./useRefs.76e09c0b.js";function ea(c){var e=B(),t=B(!1);function i(){for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];t.value||(we.cancel(e.value),e.value=we(function(){c.apply(void 0,r)}))}return Ze(function(){t.value=!0,we.cancel(e.value)}),i}function ta(c){var e=B([]),t=B(typeof c=="function"?c():c),i=ea(function(){var r=t.value;e.value.forEach(function(l){r=l(r)}),e.value=[],t.value=r});function a(r){e.value.push(r),i()}return[t,a]}var aa=fe({name:"TabNode",props:{id:{type:String},prefixCls:{type:String},tab:{type:Object},active:{type:Boolean},closable:{type:Boolean},editable:{type:Object},onClick:{type:Function},onResize:{type:Function},renderWrapper:{type:Function},removeAriaLabel:{type:String},onFocus:{type:Function}},emits:["click","resize","remove","focus"],setup:function(e,t){var i=t.expose,a=t.attrs,r=B();function l(v){var m;!((m=e.tab)===null||m===void 0)&&m.disabled||e.onClick(v)}i({domRef:r});function d(v){var m;v.preventDefault(),v.stopPropagation(),e.editable.onEdit("remove",{key:(m=e.tab)===null||m===void 0?void 0:m.key,event:v})}var o=Z(function(){var v;return e.editable&&e.closable!==!1&&!(!((v=e.tab)===null||v===void 0)&&v.disabled)});return function(){var v,m,g=e.prefixCls,p=e.id,O=e.active,k=e.tab,j=k.key,P=k.tab,z=k.disabled,x=k.closeIcon,u=e.renderWrapper,w=e.removeAriaLabel,H=e.editable,M=e.onFocus,I="".concat(g,"-tab"),L=s("div",{key:j,ref:r,class:he(I,(v={},D(v,"".concat(I,"-with-remove"),o.value),D(v,"".concat(I,"-active"),O),D(v,"".concat(I,"-disabled"),z),v)),style:a.style,onClick:l},[s("div",{role:"tab","aria-selected":O,id:p&&"".concat(p,"-tab-").concat(j),class:"".concat(I,"-btn"),"aria-controls":p&&"".concat(p,"-panel-").concat(j),"aria-disabled":z,tabindex:z?null:0,onClick:function(K){K.stopPropagation(),l(K)},onKeydown:function(K){[ne.SPACE,ne.ENTER].includes(K.which)&&(K.preventDefault(),l(K))},onFocus:M},[typeof P=="function"?P():P]),o.value&&s("button",{type:"button","aria-label":w||"remove",tabindex:0,class:"".concat(I,"-remove"),onClick:function(K){K.stopPropagation(),d(K)}},[(x==null?void 0:x())||((m=H.removeIcon)===null||m===void 0?void 0:m.call(H))||"\xD7"])]);return u?u(L):L}}}),bt={width:0,height:0,left:0,top:0};function na(c,e){var t=B(new Map);return We(function(){for(var i,a,r=new Map,l=c.value,d=e.value.get((i=l[0])===null||i===void 0?void 0:i.key)||bt,o=d.left+d.width,v=0;v<l.length;v+=1){var m=l[v].key,g=e.value.get(m);g||(g=e.value.get((a=l[v-1])===null||a===void 0?void 0:a.key)||bt);var p=r.get(m)||Y({},g);p.right=o-p.left-p.width,r.set(m,p)}t.value=new Map(r)}),t}var kt=fe({name:"AddButton",inheritAttrs:!1,props:{prefixCls:String,editable:{type:Object},locale:{type:Object,default:void 0}},setup:function(e,t){var i=t.expose,a=t.attrs,r=B();return i({domRef:r}),function(){var l=e.prefixCls,d=e.editable,o=e.locale;return!d||d.showAdd===!1?null:s("button",{ref:r,type:"button",class:"".concat(l,"-nav-add"),style:a.style,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(m){d.onEdit("add",{event:m})}},[d.addIcon?d.addIcon():"+"])}}}),ra={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},ia=ra;function mt(c){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},i=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(i=i.concat(Object.getOwnPropertySymbols(t).filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),i.forEach(function(a){la(c,a,t[a])})}return c}function la(c,e,t){return e in c?Object.defineProperty(c,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):c[e]=t,c}var Qe=function(e,t){var i=mt({},e,t.attrs);return s(Lt,mt({},i,{icon:ia}),null)};Qe.displayName="PlusOutlined";Qe.inheritAttrs=!1;var oa=Qe,ua={prefixCls:{type:String},id:{type:String},tabs:{type:Object},rtl:{type:Boolean},tabBarGutter:{type:Number},activeKey:{type:[String,Number]},mobile:{type:Boolean},moreIcon:Je.any,moreTransitionName:{type:String},editable:{type:Object},locale:{type:Object,default:void 0},removeAriaLabel:String,onTabClick:{type:Function}},ca=fe({name:"OperationNode",inheritAttrs:!1,props:ua,emits:["tabClick"],slots:["moreIcon"],setup:function(e,t){var i=t.attrs,a=t.slots,r=G(!1),l=_(r,2),d=l[0],o=l[1],v=G(null),m=_(v,2),g=m[0],p=m[1],O=function(u){for(var w=e.tabs.filter(function($){return!$.disabled}),H=w.findIndex(function($){return $.key===g.value})||0,M=w.length,I=0;I<M;I+=1){H=(H+u+M)%M;var L=w[H];if(!L.disabled){p(L.key);return}}},k=function(u){var w=u.which;if(!d.value){[ne.DOWN,ne.SPACE,ne.ENTER].includes(w)&&(o(!0),u.preventDefault());return}switch(w){case ne.UP:O(-1),u.preventDefault();break;case ne.DOWN:O(1),u.preventDefault();break;case ne.ESC:o(!1);break;case ne.SPACE:case ne.ENTER:g.value!==null&&e.onTabClick(g.value,u);break}},j=Z(function(){return"".concat(e.id,"-more-popup")}),P=Z(function(){return g.value!==null?"".concat(j.value,"-").concat(g.value):null}),z=function(u,w){u.preventDefault(),u.stopPropagation(),e.editable.onEdit("remove",{key:w,event:u})};return De(function(){Se(g,function(){var x=document.getElementById(P.value);x&&x.scrollIntoView&&x.scrollIntoView(!1)},{flush:"post",immediate:!0})}),Se(d,function(){d.value||p(null)}),function(){var x,u=e.prefixCls,w=e.id,H=e.tabs,M=e.locale,I=e.mobile,L=e.moreIcon,$=L===void 0?((x=a.moreIcon)===null||x===void 0?void 0:x.call(a))||s(Kt,null,null):L,K=e.moreTransitionName,F=e.editable,ce=e.tabBarGutter,h=e.rtl,n=e.onTabClick,f="".concat(u,"-dropdown"),T=M==null?void 0:M.dropdownAriaLabel,W=D({},h?"marginRight":"marginLeft",ce);H.length||(W.visibility="hidden",W.order=1);var N=he(D({},"".concat(f,"-rtl"),h)),E=I?null:s(jt,{prefixCls:f,trigger:["hover"],visible:d.value,transitionName:K,onVisibleChange:o,overlayClassName:N,mouseEnterDelay:.1,mouseLeaveDelay:.1},{overlay:function(){return s(Wt,{onClick:function(A){var U=A.key,re=A.domEvent;n(U,re),o(!1)},id:j.value,tabindex:-1,role:"listbox","aria-activedescendant":P.value,selectedKeys:[g.value],"aria-label":T!==void 0?T:"expanded dropdown"},{default:function(){return[H.map(function(A){var U,re,Te=F&&A.closable!==!1&&!A.disabled;return s(Dt,{key:A.key,id:"".concat(j.value,"-").concat(A.key),role:"option","aria-controls":w&&"".concat(w,"-panel-").concat(A.key),disabled:A.disabled},{default:function(){return[s("span",null,[typeof A.tab=="function"?A.tab():A.tab]),Te&&s("button",{type:"button","aria-label":e.removeAriaLabel||"remove",tabindex:0,class:"".concat(f,"-menu-item-remove"),onClick:function(ve){ve.stopPropagation(),z(ve,A.key)}},[((U=A.closeIcon)===null||U===void 0?void 0:U.call(A))||((re=F.removeIcon)===null||re===void 0?void 0:re.call(F))||"\xD7"])]}})})]}})},default:function(){return s("button",{type:"button",class:"".concat(u,"-nav-more"),style:W,tabindex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":j.value,id:"".concat(w,"-more"),"aria-expanded":d.value,onKeydown:k},[$])}});return s("div",{class:he("".concat(u,"-nav-operations"),i.class),style:i.style},[E,s(kt,{prefixCls:u,locale:M,editable:F},null)])}}}),Pt=Symbol("tabsContextKey"),It=function(e){Ft(Pt,e)},Et=function(){return zt(Pt,{tabs:B([]),prefixCls:B()})};fe({name:"TabsContextProvider",inheritAttrs:!1,props:{tabs:{type:Object,default:void 0},prefixCls:{type:String,default:void 0}},setup:function(e,t){var i=t.slots;return It(Ht(e)),function(){var a;return(a=i.default)===null||a===void 0?void 0:a.call(i)}}});var va=.1,yt=.01,Ke=20,ht=Math.pow(.995,Ke);function sa(c,e){var t=G(),i=_(t,2),a=i[0],r=i[1],l=G(0),d=_(l,2),o=d[0],v=d[1],m=G(0),g=_(m,2),p=g[0],O=g[1],k=G(),j=_(k,2),P=j[0],z=j[1],x=B();function u(h){var n=h.touches[0],f=n.screenX,T=n.screenY;r({x:f,y:T}),clearInterval(x.value)}function w(h){if(!!a.value){h.preventDefault();var n=h.touches[0],f=n.screenX,T=n.screenY,W=f-a.value.x,N=T-a.value.y;e(W,N),r({x:f,y:T});var E=Date.now();O(E-o.value),v(E),z({x:W,y:N})}}function H(){if(!!a.value){var h=P.value;if(r(null),z(null),h){var n=h.x/p.value,f=h.y/p.value,T=Math.abs(n),W=Math.abs(f);if(Math.max(T,W)<va)return;var N=n,E=f;x.value=setInterval(function(){if(Math.abs(N)<yt&&Math.abs(E)<yt){clearInterval(x.value);return}N*=ht,E*=ht,e(N*Ke,E*Ke)},Ke)}}}var M=B();function I(h){var n=h.deltaX,f=h.deltaY,T=0,W=Math.abs(n),N=Math.abs(f);W===N?T=M.value==="x"?n:f:W>N?(T=n,M.value="x"):(T=f,M.value="y"),e(-T,-T)&&h.preventDefault()}var L=B({onTouchStart:u,onTouchMove:w,onTouchEnd:H,onWheel:I});function $(h){L.value.onTouchStart(h)}function K(h){L.value.onTouchMove(h)}function F(h){L.value.onTouchEnd(h)}function ce(h){L.value.onWheel(h)}De(function(){var h,n;document.addEventListener("touchmove",K,{passive:!1}),document.addEventListener("touchend",F,{passive:!1}),(h=c.value)===null||h===void 0||h.addEventListener("touchstart",$,{passive:!1}),(n=c.value)===null||n===void 0||n.addEventListener("wheel",ce,{passive:!1})}),Ze(function(){document.removeEventListener("touchmove",K),document.removeEventListener("touchend",F)})}function gt(c,e){var t=B(c);function i(a){var r=typeof a=="function"?a(t.value):a;r!==t.value&&e(r,t.value),t.value=r}return[t,i]}var pt={width:0,height:0,left:0,top:0,right:0},da=function(){return{id:{type:String},tabPosition:{type:String},activeKey:{type:[String,Number]},rtl:{type:Boolean},animated:{type:Object,default:void 0},editable:{type:Object},moreIcon:Je.any,moreTransitionName:{type:String},mobile:{type:Boolean},tabBarGutter:{type:Number},renderTabBar:{type:Function},locale:{type:Object,default:void 0},onTabClick:{type:Function},onTabScroll:{type:Function}}},St=fe({name:"TabNavList",inheritAttrs:!1,props:da(),slots:["moreIcon","leftExtra","rightExtra","tabBarExtraContent"],emits:["tabClick","tabScroll"],setup:function(e,t){var i=t.attrs,a=t.slots,r=Et(),l=r.tabs,d=r.prefixCls,o=B(),v=B(),m=B(),g=B(),p=Qt(),O=_(p,2),k=O[0],j=O[1],P=Z(function(){return e.tabPosition==="top"||e.tabPosition==="bottom"}),z=gt(0,function(y,S){P.value&&e.onTabScroll&&e.onTabScroll({direction:y>S?"left":"right"})}),x=_(z,2),u=x[0],w=x[1],H=gt(0,function(y,S){!P.value&&e.onTabScroll&&e.onTabScroll({direction:y>S?"top":"bottom"})}),M=_(H,2),I=M[0],L=M[1],$=G(0),K=_($,2),F=K[0],ce=K[1],h=G(0),n=_(h,2),f=n[0],T=n[1],W=G(null),N=_(W,2),E=N[0],xe=N[1],ge=G(null),A=_(ge,2),U=A[0],re=A[1],Te=G(0),pe=_(Te,2),Ce=pe[0],ve=pe[1],Ae=G(0),J=_(Ae,2),je=J[0],Ne=J[1],Re=ta(new Map),Oe=_(Re,2),Fe=Oe[0],ke=Oe[1],Me=na(l,Fe),Bt=Z(function(){return"".concat(d.value,"-nav-operations-hidden")}),Pe=B(0),Ie=B(0);We(function(){P.value?e.rtl?(Pe.value=0,Ie.value=Math.max(0,F.value-E.value)):(Pe.value=Math.min(0,E.value-F.value),Ie.value=0):(Pe.value=Math.min(0,U.value-f.value),Ie.value=0)});var ze=function(S){return S<Pe.value?Pe.value:S>Ie.value?Ie.value:S},et=B(),wt=G(),tt=_(wt,2),He=tt[0],at=tt[1],Ve=function(){at(Date.now())},Ge=function(){clearTimeout(et.value)},nt=function(S,b){S(function(R){var C=ze(R+b);return C})};sa(o,function(y,S){if(P.value){if(E.value>=F.value)return!1;nt(w,y)}else{if(U.value>=f.value)return!1;nt(L,S)}return Ge(),Ve(),!0}),Se(He,function(){Ge(),He.value&&(et.value=setTimeout(function(){at(0)},100))});var rt=function(){var S=arguments.length>0&&arguments[0]!==void 0?arguments[0]:e.activeKey,b=Me.value.get(S)||{width:0,height:0,left:0,right:0,top:0};if(P.value){var R=u.value;e.rtl?b.right<u.value?R=b.right:b.right+b.width>u.value+E.value&&(R=b.right+b.width-E.value):b.left<-u.value?R=-b.left:b.left+b.width>-u.value+E.value&&(R=-(b.left+b.width-E.value)),L(0),w(ze(R))}else{var C=I.value;b.top<-I.value?C=-b.top:b.top+b.height>-I.value+U.value&&(C=-(b.top+b.height-U.value)),w(0),L(ze(C))}},$e=B(0),Ue=B(0);We(function(){var y,S,b,R,C,q,X,be=Me.value;["top","bottom"].includes(e.tabPosition)?(S="width",C=E.value,q=F.value,X=Ce.value,b=e.rtl?"right":"left",R=Math.abs(u.value)):(S="height",C=U.value,q=F.value,X=je.value,b="top",R=-I.value);var Q=C;q+X>C&&q<C&&(Q=C-X);var ie=l.value;if(!ie.length){var le;return le=[0,0],$e.value=le[0],Ue.value=le[1],le}for(var me=ie.length,V=me,te=0;te<me;te+=1){var ae=be.get(ie[te].key)||pt;if(ae[b]+ae[S]>R+Q){V=te-1;break}}for(var oe=0,ee=me-1;ee>=0;ee-=1){var ye=be.get(ie[ee].key)||pt;if(ye[b]<R){oe=ee+1;break}}return y=[oe,V],$e.value=y[0],Ue.value=y[1],y});var qe=function(){var S,b,R,C,q,X=((S=o.value)===null||S===void 0?void 0:S.offsetWidth)||0,be=((b=o.value)===null||b===void 0?void 0:b.offsetHeight)||0,Q=((R=g.value)===null||R===void 0?void 0:R.$el)||{},ie=Q.offsetWidth||0,le=Q.offsetHeight||0;xe(X),re(be),ve(ie),Ne(le);var me=(((C=v.value)===null||C===void 0?void 0:C.offsetWidth)||0)-ie,V=(((q=v.value)===null||q===void 0?void 0:q.offsetHeight)||0)-le;ce(me),T(V),ke(function(){var te=new Map;return l.value.forEach(function(ae){var oe=ae.key,ee,ye=j.value.get(oe),de=((ee=ye)===null||ee===void 0?void 0:ee.$el)||ye;de&&te.set(oe,{width:de.offsetWidth,height:de.offsetHeight,left:de.offsetLeft,top:de.offsetTop})}),te})},it=Z(function(){return[].concat(st(l.value.slice(0,$e.value)),st(l.value.slice(Ue.value+1)))}),At=G(),lt=_(At,2),Nt=lt[0],Rt=lt[1],se=Z(function(){return Me.value.get(e.activeKey)}),ot=B(),ut=function(){we.cancel(ot.value)};Se([se,P,function(){return e.rtl}],function(){var y={};se.value&&(P.value?(e.rtl?y.right=Be(se.value.right):y.left=Be(se.value.left),y.width=Be(se.value.width)):(y.top=Be(se.value.top),y.height=Be(se.value.height))),ut(),ot.value=we(function(){Rt(y)})}),Se([function(){return e.activeKey},se,Me,P],function(){rt()},{flush:"post"}),Se([function(){return e.rtl},function(){return e.tabBarGutter},function(){return e.activeKey},function(){return l.value}],function(){qe()},{flush:"post"});var Xe=function(S){var b=S.position,R=S.prefixCls,C=S.extra;if(!C)return null;var q=C==null?void 0:C({position:b});return q?s("div",{class:"".concat(R,"-extra-content")},[q]):null};return Ze(function(){Ge(),ut()}),function(){var y,S=e.id,b=e.animated,R=e.activeKey,C=e.rtl,q=e.editable,X=e.locale,be=e.tabPosition,Q=e.tabBarGutter,ie=e.onTabClick,le=i.class,me=i.style,V=d.value,te=!!it.value.length,ae="".concat(V,"-nav-wrap"),oe,ee,ye,de;P.value?C?(ee=u.value>0,oe=u.value+E.value<F.value):(oe=u.value<0,ee=-u.value+E.value<F.value):(ye=I.value<0,de=-I.value+U.value<f.value);var Le={};be==="top"||be==="bottom"?Le[C?"marginRight":"marginLeft"]=typeof Q=="number"?"".concat(Q,"px"):Q:Le.marginTop=typeof Q=="number"?"".concat(Q,"px"):Q;var ct=l.value.map(function(Ee,vt){var _e=Ee.key;return s(aa,{id:S,prefixCls:V,key:_e,tab:Ee,style:vt===0?void 0:Le,closable:Ee.closable,editable:q,active:_e===R,removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:k(_e),onClick:function(Mt){ie(_e,Mt)},onFocus:function(){rt(_e),Ve(),o.value&&(C||(o.value.scrollLeft=0),o.value.scrollTop=0)}},a)});return s("div",{role:"tablist",class:he("".concat(V,"-nav"),le),style:me,onKeydown:function(){Ve()}},[s(Xe,{position:"left",prefixCls:V,extra:a.leftExtra},null),s(dt,{onResize:qe},{default:function(){return[s("div",{class:he(ae,(y={},D(y,"".concat(ae,"-ping-left"),oe),D(y,"".concat(ae,"-ping-right"),ee),D(y,"".concat(ae,"-ping-top"),ye),D(y,"".concat(ae,"-ping-bottom"),de),y)),ref:o},[s(dt,{onResize:qe},{default:function(){return[s("div",{ref:v,class:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(u.value,"px, ").concat(I.value,"px)"),transition:He.value?"none":void 0}},[ct,s(kt,{ref:g,prefixCls:V,locale:X,editable:q,style:Y(Y({},ct.length===0?void 0:Le),{visibility:te?"hidden":null})},null),s("div",{class:he("".concat(V,"-ink-bar"),D({},"".concat(V,"-ink-bar-animated"),b.inkBar)),style:Nt.value},null)])]}})])]}}),s(ca,ue(ue({},e),{},{removeAriaLabel:X==null?void 0:X.removeAriaLabel,ref:m,prefixCls:V,tabs:it.value,class:!te&&Bt.value}),Tt(a,["moreIcon"])),s(Xe,{position:"right",prefixCls:V,extra:a.rightExtra},null),s(Xe,{position:"right",prefixCls:V,extra:a.tabBarExtraContent},null)])}}}),fa=fe({name:"TabPanelList",inheritAttrs:!1,props:{activeKey:{type:[String,Number]},id:{type:String},rtl:{type:Boolean},animated:{type:Object,default:void 0},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean}},setup:function(e){var t=Et(),i=t.tabs,a=t.prefixCls;return function(){var r=e.id,l=e.activeKey,d=e.animated,o=e.tabPosition,v=e.rtl,m=e.destroyInactiveTabPane,g=d.tabPane,p=a.value,O=i.value.findIndex(function(k){return k.key===l});return s("div",{class:"".concat(p,"-content-holder")},[s("div",{class:["".concat(p,"-content"),"".concat(p,"-content-").concat(o),D({},"".concat(p,"-content-animated"),g)],style:O&&g?D({},v?"marginRight":"marginLeft","-".concat(O,"00%")):null},[i.value.map(function(k){return Vt(k.node,{key:k.key,prefixCls:p,tabKey:k.key,id:r,animated:g,active:k.key===l,destroyInactiveTabPane:m})})])])}}}),xt=0,_t=function(){return{prefixCls:{type:String},id:{type:String},activeKey:{type:[String,Number]},defaultActiveKey:{type:[String,Number]},direction:{type:String},animated:{type:[Boolean,Object]},renderTabBar:{type:Function},tabBarGutter:{type:Number},tabBarStyle:{type:Object},tabPosition:{type:String},destroyInactiveTabPane:{type:Boolean},hideAdd:Boolean,type:{type:String},size:{type:String},centered:Boolean,onEdit:{type:Function},onChange:{type:Function},onTabClick:{type:Function},onTabScroll:{type:Function},"onUpdate:activeKey":{type:Function},locale:{type:Object,default:void 0},onPrevClick:Function,onNextClick:Function,tabBarExtraContent:Je.any}};function ba(c){return c.map(function(e){if($t(e)){for(var t=Y({},e.props||{}),i=0,a=Object.entries(t);i<a.length;i++){var r=_(a[i],2),l=r[0],d=r[1];delete t[l],t[Ut(l)]=d}var o=e.children||{},v=e.key!==void 0?e.key:void 0,m=t.tab,g=m===void 0?o.tab:m,p=t.disabled,O=t.forceRender,k=t.closable,j=t.animated,P=t.active,z=t.destroyInactiveTabPane;return Y(Y({key:v},t),{node:e,closeIcon:o.closeIcon,tab:g,disabled:p===""||p,forceRender:O===""||O,closable:k===""||k,animated:j===""||j,active:P===""||P,destroyInactiveTabPane:z===""||z})}return null}).filter(function(e){return e})}var ma=fe({name:"InternalTabs",inheritAttrs:!1,props:Y(Y({},Ct(_t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}})),{tabs:{type:Array}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var i=t.attrs,a=t.slots;Ye(e.onPrevClick===void 0&&e.onNextClick===void 0,"Tabs","`onPrevClick / @prevClick` and `onNextClick / @nextClick` has been removed. Please use `onTabScroll / @tabScroll` instead."),Ye(e.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` prop has been removed. Please use `rightExtra` slot instead."),Ye(a.tabBarExtraContent===void 0,"Tabs","`tabBarExtraContent` slot is deprecated. Please use `rightExtra` slot instead.");var r=Xt("tabs",e),l=r.prefixCls,d=r.direction,o=r.size,v=r.rootPrefixCls,m=Z(function(){return d.value==="rtl"}),g=Z(function(){var n=e.animated,f=e.tabPosition;return n===!1||["left","right"].includes(f)?{inkBar:!1,tabPane:!1}:n===!0?{inkBar:!0,tabPane:!0}:Y({inkBar:!0,tabPane:!1},Yt(n)==="object"?n:{})}),p=G(!1),O=_(p,2),k=O[0],j=O[1];De(function(){j(Zt())});var P=ft(function(){var n;return(n=e.tabs[0])===null||n===void 0?void 0:n.key},{value:Z(function(){return e.activeKey}),defaultValue:e.defaultActiveKey}),z=_(P,2),x=z[0],u=z[1],w=G(function(){return e.tabs.findIndex(function(n){return n.key===x.value})}),H=_(w,2),M=H[0],I=H[1];We(function(){var n,f=e.tabs.findIndex(function(T){return T.key===x.value});f===-1&&(f=Math.max(0,Math.min(M.value,e.tabs.length-1)),u((n=e.tabs[f])===null||n===void 0?void 0:n.key)),I(f)});var L=ft(null,{value:Z(function(){return e.id})}),$=_(L,2),K=$[0],F=$[1],ce=Z(function(){return k.value&&!["left","right"].includes(e.tabPosition)?"top":e.tabPosition});De(function(){e.id||(F("rc-tabs-".concat(xt)),xt+=1)});var h=function(f,T){var W,N;(W=e.onTabClick)===null||W===void 0||W.call(e,f,T);var E=f!==x.value;u(f),E&&((N=e.onChange)===null||N===void 0||N.call(e,f))};return It({tabs:Z(function(){return e.tabs}),prefixCls:l}),function(){var n,f=e.id,T=e.type,W=e.tabBarGutter,N=e.tabBarStyle,E=e.locale,xe=e.destroyInactiveTabPane,ge=e.renderTabBar,A=ge===void 0?a.renderTabBar:ge,U=e.onTabScroll,re=e.hideAdd,Te=e.centered,pe={id:K.value,activeKey:x.value,animated:g.value,tabPosition:ce.value,rtl:m.value,mobile:k.value},Ce;T==="editable-card"&&(Ce={onEdit:function(Ne,Re){var Oe=Re.key,Fe=Re.event,ke;(ke=e.onEdit)===null||ke===void 0||ke.call(e,Ne==="add"?Fe:Oe,Ne)},removeIcon:function(){return s(Jt,null,null)},addIcon:a.addIcon?a.addIcon:function(){return s(oa,null,null)},showAdd:re!==!0});var ve,Ae=Y(Y({},pe),{moreTransitionName:"".concat(v.value,"-slide-up"),editable:Ce,locale:E,tabBarGutter:W,onTabClick:h,onTabScroll:U,style:N});A?ve=A(Y(Y({},Ae),{DefaultTabBar:St})):ve=s(St,Ae,Tt(a,["moreIcon","leftExtra","rightExtra","tabBarExtraContent"]));var J=l.value;return s("div",ue(ue({},i),{},{id:f,class:he(J,"".concat(J,"-").concat(ce.value),(n={},D(n,"".concat(J,"-").concat(o.value),o.value),D(n,"".concat(J,"-card"),["card","editable-card"].includes(T)),D(n,"".concat(J,"-editable-card"),T==="editable-card"),D(n,"".concat(J,"-centered"),Te),D(n,"".concat(J,"-mobile"),k.value),D(n,"".concat(J,"-editable"),T==="editable-card"),D(n,"".concat(J,"-rtl"),m.value),n),i.class)}),[ve,s(fa,ue(ue({destroyInactiveTabPane:xe},pe),{},{animated:g.value}),null)])}}}),ga=fe({name:"ATabs",inheritAttrs:!1,props:Ct(_t(),{tabPosition:"top",animated:{inkBar:!0,tabPane:!1}}),slots:["tabBarExtraContent","leftExtra","rightExtra","moreIcon","addIcon","removeIcon","renderTabBar"],setup:function(e,t){var i=t.attrs,a=t.slots,r=t.emit,l=function(o){r("update:activeKey",o),r("change",o)};return function(){var d,o=ba(Gt((d=a.default)===null||d===void 0?void 0:d.call(a)));return s(ma,ue(ue(ue({},qt(e,["onUpdate:activeKey"])),i),{},{onChange:l,tabs:o}),a)}}});export{ga as T};
