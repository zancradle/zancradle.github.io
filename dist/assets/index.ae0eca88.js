import{ah as V,U as q,a as I,Q as Y,v as C,S as H,f as Z,cT as ee,a0 as ae,au as te,J as W,L as B,K as $,c6 as D,N as g,n as m,_ as A,ci as re,O as b,X as ne,ck as oe,bo as le,c2 as G}from"./index.c8efd86c.js";import{u as ie,a as ue}from"./useSize.822cfd2a.js";function se(n){var e=V();return q(function(){e.value=n()},{flush:"sync"}),e}var ce=function(){return{prefixCls:String,shape:{type:String,default:"circle"},size:{type:[Number,String,Object],default:function(){return"default"}},src:String,srcset:String,icon:Y.any,alt:String,gap:Number,draggable:{type:Boolean,default:void 0},crossOrigin:String,loadError:{type:Function}}},ve=I({name:"AAvatar",inheritAttrs:!1,props:ce(),slots:["icon"],setup:function(e,i){var r=i.slots,a=i.attrs,p=C(!0),x=C(!1),v=C(1),f=C(null),S=C(null),k=H("avatar",e),y=k.prefixCls,z=ie(),t=Z(function(){return e.size==="default"?z.value:e.size}),c=ee(),u=se(function(){if(ae(e.size)==="object"){var o=te.find(function(s){return c.value[s]}),l=e.size[o];return l}}),O=function(l){return u.value?{width:"".concat(u.value,"px"),height:"".concat(u.value,"px"),lineHeight:"".concat(u.value,"px"),fontSize:"".concat(l?u.value/2:18,"px")}:{}},d=function(){if(!(!f.value||!S.value)){var l=f.value.offsetWidth,s=S.value.offsetWidth;if(l!==0&&s!==0){var h=e.gap,E=h===void 0?4:h;E*2<s&&(v.value=s-E*2<l?(s-E*2)/l:1)}}},T=function(){var l=e.loadError,s=l==null?void 0:l();s!==!1&&(p.value=!1)};return W(function(){return e.src},function(){B(function(){p.value=!0,v.value=1})}),W(function(){return e.gap},function(){B(function(){d()})}),$(function(){B(function(){d(),x.value=!0})}),function(){var o,l,s=e.shape,h=e.src,E=e.alt,F=e.srcset,L=e.draggable,U=e.crossOrigin,_=D(r,e,"icon"),P=y.value,M=(o={},g(o,"".concat(a.class),!!a.class),g(o,P,!0),g(o,"".concat(P,"-lg"),t.value==="large"),g(o,"".concat(P,"-sm"),t.value==="small"),g(o,"".concat(P,"-").concat(s),s),g(o,"".concat(P,"-image"),h&&p.value),g(o,"".concat(P,"-icon"),_),o),X=typeof t.value=="number"?{width:"".concat(t.value,"px"),height:"".concat(t.value,"px"),lineHeight:"".concat(t.value,"px"),fontSize:_?"".concat(t.value/2,"px"):"18px"}:{},K=(l=r.default)===null||l===void 0?void 0:l.call(r),j;if(h&&p.value)j=m("img",{draggable:L,src:h,srcset:F,onError:T,alt:E,crossorigin:U},null);else if(_)j=_;else if(x.value||v.value!==1){var N="scale(".concat(v.value,") translateX(-50%)"),J={msTransform:N,WebkitTransform:N,transform:N},Q=typeof t.value=="number"?{lineHeight:"".concat(t.value,"px")}:{};j=m(re,{onResize:d},{default:function(){return[m("span",{class:"".concat(P,"-string"),ref:f,style:A(A({},Q),J)},[K])]}})}else j=m("span",{class:"".concat(P,"-string"),ref:f,style:{opacity:0}},[K]);return m("span",b(b({},a),{},{ref:S,class:M,style:[X,O(!!_),a.style]}),[j])}}}),w=ve,fe=function(){return{prefixCls:String,maxCount:Number,maxStyle:{type:Object,default:void 0},maxPopoverPlacement:{type:String,default:"top"},maxPopoverTrigger:String,size:{type:[Number,String,Object],default:"default"}}},de=I({name:"AAvatarGroup",inheritAttrs:!1,props:fe(),setup:function(e,i){var r=i.slots,a=i.attrs,p=H("avatar-group",e),x=p.prefixCls,v=p.direction;return ue(e),function(){var f,S=e.maxPopoverPlacement,k=S===void 0?"top":S,y=e.maxCount,z=e.maxStyle,t=e.maxPopoverTrigger,c=t===void 0?"hover":t,u=(f={},g(f,x.value,!0),g(f,"".concat(x.value,"-rtl"),v.value==="rtl"),g(f,"".concat(a.class),!!a.class),f),O=D(r,e),d=ne(O).map(function(s,h){return oe(s,{key:"avatar-key-".concat(h)})}),T=d.length;if(y&&y<T){var o=d.slice(0,y),l=d.slice(y,T);return o.push(m(le,{key:"avatar-popover-key",content:l,trigger:c,placement:k,overlayClassName:"".concat(x.value,"-popover")},{default:function(){return[m(w,{style:z},{default:function(){return["+".concat(T-y)]}})]}})),m("div",b(b({},a),{},{class:u,style:a.style}),[o])}return m("div",b(b({},a),{},{class:u,style:a.style}),[d])}}}),R=de;w.Group=R;w.install=function(n){return n.component(w.name,w),n.component(R.name,R),n};var pe=globalThis&&globalThis.__rest||function(n,e){var i={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(i[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,r=Object.getOwnPropertySymbols(n);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(n,r[a])&&(i[r[a]]=n[r[a]]);return i},ye={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},ge=I({name:"TransButton",inheritAttrs:!1,props:{noStyle:{type:Boolean,default:void 0},onClick:Function,disabled:{type:Boolean,default:void 0},autofocus:{type:Boolean,default:void 0}},setup:function(e,i){var r=i.slots,a=i.emit,p=i.attrs,x=i.expose,v=C(),f=function(c){var u=c.keyCode;u===G.ENTER&&c.preventDefault()},S=function(c){var u=c.keyCode;u===G.ENTER&&a("click",c)},k=function(c){a("click",c)},y=function(){v.value&&v.value.focus()},z=function(){v.value&&v.value.blur()};return $(function(){e.autofocus&&y()}),x({focus:y,blur:z}),function(){var t,c=e.noStyle,u=e.disabled,O=pe(e,["noStyle","disabled"]),d={};return c||(d=A({},ye)),u&&(d.pointerEvents="none"),m("div",b(b(b({role:"button",tabindex:0,ref:v},O),p),{},{onClick:k,onKeydown:f,onKeyup:S,style:A(A({},d),p.style||{})}),[(t=r.default)===null||t===void 0?void 0:t.call(r)])}}}),xe=ge;export{w as A,xe as T,se as e};
