import{n as S,r as Re,eu as Oe,ev as _e,a as be,v as E,V as Me,cm as Ue,M as T,N as y,O as B,ai as $e,cc as we,_ as A,a0 as qe,f as le,a9 as He,J,c2 as oe,Q as ve,R as ze,S as Le,K as Ge,L as Ke,cQ as We,c1 as Xe,ck as Qe}from"./index.c8efd86c.js";var Je={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 00140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7z"}}]},name:"up",theme:"outlined"},Ye=Je;function xe(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},r=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(u){return Object.getOwnPropertyDescriptor(t,u).enumerable}))),r.forEach(function(u){Ze(n,u,t[u])})}return n}function Ze(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}var ye=function(e,t){var r=xe({},e,t.attrs);return S(Re,xe({},r,{icon:Ye}),null)};ye.displayName="UpOutlined";ye.inheritAttrs=!1;var et=ye;function ge(){return typeof BigInt=="function"}function Y(n){var e=n.trim(),t=e.startsWith("-");t&&(e=e.slice(1)),e=e.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),e.startsWith(".")&&(e="0".concat(e));var r=e||"0",u=r.split("."),c=u[0]||"0",m=u[1]||"0";c==="0"&&m==="0"&&(t=!1);var v=t?"-":"";return{negative:t,negativeStr:v,trimStr:r,integerStr:c,decimalStr:m,fullStr:"".concat(v).concat(r)}}function he(n){var e=String(n);return!Number.isNaN(Number(e))&&e.includes("e")}function Z(n){var e=String(n);if(he(n)){var t=Number(e.slice(e.indexOf("e-")+2)),r=e.match(/\.(\d+)/);return r!=null&&r[1]&&(t+=r[1].length),t}return e.includes(".")&&Ne(e)?e.length-e.indexOf(".")-1:0}function Se(n){var e=String(n);if(he(n)){if(n>Number.MAX_SAFE_INTEGER)return String(ge()?BigInt(n).toString():Number.MAX_SAFE_INTEGER);if(n<Number.MIN_SAFE_INTEGER)return String(ge()?BigInt(n).toString():Number.MIN_SAFE_INTEGER);e=n.toFixed(Z(e))}return Y(e).fullStr}function Ne(n){return typeof n=="number"?!Number.isNaN(n):n?/^\s*-?\d+(\.\d+)?\s*$/.test(n)||/^\s*-?\d+\.\s*$/.test(n)||/^\s*-?\.\d+\s*$/.test(n):!1}var tt=function(){function n(e){if(_e(this,n),this.origin="",!e&&e!==0||!String(e).trim()){this.empty=!0;return}this.origin=String(e),this.number=Number(e)}return Oe(n,[{key:"negate",value:function(){return new n(-this.toNumber())}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var r=Number(t);if(Number.isNaN(r))return this;var u=this.number+r;if(u>Number.MAX_SAFE_INTEGER)return new n(Number.MAX_SAFE_INTEGER);if(u<Number.MIN_SAFE_INTEGER)return new n(Number.MIN_SAFE_INTEGER);var c=Math.max(Z(this.number),Z(r));return new n(u.toFixed(c))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toNumber()===(t==null?void 0:t.toNumber())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Se(this.number):this.origin}}]),n}(),nt=function(){function n(e){if(_e(this,n),this.origin="",!e&&e!==0||!String(e).trim()){this.empty=!0;return}if(this.origin=String(e),e==="-"){this.nan=!0;return}var t=e;if(he(t)&&(t=Number(t)),t=typeof t=="string"?t:Se(t),Ne(t)){var r=Y(t);this.negative=r.negative;var u=r.trimStr.split(".");this.integer=BigInt(u[0]);var c=u[1]||"0";this.decimal=BigInt(c),this.decimalLen=c.length}else this.nan=!0}return Oe(n,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(t){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(t,"0"));return BigInt(r)}},{key:"negate",value:function(){var t=new n(this.toString());return t.negative=!t.negative,t}},{key:"add",value:function(t){if(this.isInvalidate())return new n(t);var r=new n(t);if(r.isInvalidate())return this;var u=Math.max(this.getDecimalStr().length,r.getDecimalStr().length),c=this.alignDecimal(u),m=r.alignDecimal(u),v=(c+m).toString(),f=Y(v),b=f.negativeStr,g=f.trimStr,l="".concat(b).concat(g.padStart(u+1,"0"));return new n("".concat(l.slice(0,-u),".").concat(l.slice(-u)))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(t){return this.toString()===(t==null?void 0:t.toString())}},{key:"lessEquals",value:function(t){return this.add(t.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return t?this.isInvalidate()?"":Y("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),n}();function V(n){return ge()?new nt(n):new tt(n)}function pe(n,e,t){if(n==="")return"";var r=Y(n),u=r.negativeStr,c=r.integerStr,m=r.decimalStr,v="".concat(e).concat(m),f="".concat(u).concat(c);if(t>=0){var b=Number(m[t]);if(b>=5){var g=V(n).add("".concat(u,"0.").concat("0".repeat(t)).concat(10-b));return pe(g.toString(),e,t)}return t===0?f:"".concat(f).concat(e).concat(m.padEnd(t,"0").slice(0,t))}return v===".0"?f:"".concat(f).concat(v)}var at=200,rt=600,it=be({name:"StepHandler",inheritAttrs:!1,props:{prefixCls:String,upDisabled:Boolean,downDisabled:Boolean,onStep:{type:Function}},slots:["upNode","downNode"],setup:function(e,t){var r=t.slots,u=t.emit,c=E(),m=function(b,g){b.preventDefault(),u("step",g);function l(){u("step",g),c.value=setTimeout(l,at)}c.value=setTimeout(l,rt)},v=function(){clearTimeout(c.value)};return Me(function(){v()}),function(){if(Ue())return null;var f=e.prefixCls,b=e.upDisabled,g=e.downDisabled,l="".concat(f,"-handler"),_=T(l,"".concat(l,"-up"),y({},"".concat(l,"-up-disabled"),b)),M=T(l,"".concat(l,"-down"),y({},"".concat(l,"-down-disabled"),g)),D={unselectable:"on",role:"button",onMouseup:v,onMouseleave:v},w=r.upNode,F=r.downNode;return S("div",{class:"".concat(l,"-wrap")},[S("span",B(B({},D),{},{onMousedown:function(C){m(C,!0)},"aria-label":"Increase Value","aria-disabled":b,class:_}),[(w==null?void 0:w())||S("span",{unselectable:"on",class:"".concat(f,"-handler-up-inner")},null)]),S("span",B(B({},D),{},{onMousedown:function(C){m(C,!1)},"aria-label":"Decrease Value","aria-disabled":g,class:M}),[(F==null?void 0:F())||S("span",{unselectable:"on",class:"".concat(f,"-handler-down-inner")},null)])])}}});function ut(n,e){var t=E(null);function r(){try{var c=n.value,m=c.selectionStart,v=c.selectionEnd,f=c.value,b=f.substring(0,m),g=f.substring(v);t.value={start:m,end:v,value:f,beforeTxt:b,afterTxt:g}}catch(l){}}function u(){if(n.value&&t.value&&e.value)try{var c=n.value.value,m=t.value,v=m.beforeTxt,f=m.afterTxt,b=m.start,g=c.length;if(c.endsWith(f))g=c.length-t.value.afterTxt.length;else if(c.startsWith(v))g=v.length;else{var l=v[b-1],_=c.indexOf(l,b-1);_!==-1&&(g=_+1)}n.value.setSelectionRange(g,g)}catch(M){$e(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(M.message))}}return[r,u]}var lt=function(){var n=E(0),e=function(){we.cancel(n.value)};return Me(function(){e()}),function(t){e(),n.value=we(function(){t()})}},ot=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(n);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(n,r[u])&&(t[r[u]]=n[r[u]]);return t},Ee=function(e,t){return e||t.isEmpty()?t.toString():t.toNumber()},De=function(e){var t=V(e);return t.isInvalidate()?null:t},Ve=function(){return{stringMode:{type:Boolean},defaultValue:{type:[String,Number]},value:{type:[String,Number]},prefixCls:{type:String},min:{type:[String,Number]},max:{type:[String,Number]},step:{type:[String,Number],default:1},tabindex:{type:Number},controls:{type:Boolean,default:!0},readonly:{type:Boolean},disabled:{type:Boolean},autofocus:{type:Boolean},keyboard:{type:Boolean,default:!0},parser:{type:Function},formatter:{type:Function},precision:{type:Number},decimalSeparator:{type:String},onInput:{type:Function},onChange:{type:Function},onPressEnter:{type:Function},onStep:{type:Function},onBlur:{type:Function},onFocus:{type:Function}}},st=be({name:"InnerInputNumber",inheritAttrs:!1,props:A(A({},Ve()),{lazy:Boolean}),slots:["upHandler","downHandler"],setup:function(e,t){var r=t.attrs,u=t.slots,c=t.emit,m=t.expose,v=E(),f=E(!1),b=E(!1),g=E(!1),l=E(V(e.value));function _(o){e.value===void 0&&(l.value=o)}var M=function(a,s){if(!s)return e.precision>=0?e.precision:Math.max(Z(a),Z(e.step))},D=function(a){var s=String(a);if(e.parser)return e.parser(s);var i=s;return e.decimalSeparator&&(i=i.replace(e.decimalSeparator,".")),i.replace(/[^\w.-]+/g,"")},w=E(""),F=function(a,s){if(e.formatter)return e.formatter(a,{userTyping:s,input:String(w.value)});var i=typeof a=="number"?Se(a):a;if(!s){var d=M(i,s);if(Ne(i)&&(e.decimalSeparator||d>=0)){var I=e.decimalSeparator||".";i=pe(i,I,d)}}return i},z=function(){var o=e.value;return l.value.isInvalidate()&&["string","number"].includes(qe(o))?Number.isNaN(o)?"":o:F(l.value.toString(),!1)}();w.value=z;function C(o,a){w.value=F(o.isInvalidate()?o.toString(!1):o.toString(!a),a)}var P=le(function(){return De(e.max)}),N=le(function(){return De(e.min)}),h=le(function(){return!P.value||!l.value||l.value.isInvalidate()?!1:P.value.lessEquals(l.value)}),j=le(function(){return!N.value||!l.value||l.value.isInvalidate()?!1:l.value.lessEquals(N.value)}),L=ut(v,f),x=He(L,2),R=x[0],ee=x[1],U=function(a){return P.value&&!a.lessEquals(P.value)?P.value:N.value&&!N.value.lessEquals(a)?N.value:null},$=function(a){return!U(a)},q=function(a,s){var i,d=a,I=$(d)||d.isEmpty();if(!d.isEmpty()&&!s&&(d=U(d)||d,I=!0),!e.readonly&&!e.disabled&&I){var O=d.toString(),k=M(O,s);return k>=0&&(d=V(pe(O,".",k))),d.equals(l.value)||(_(d),(i=e.onChange)===null||i===void 0||i.call(e,d.isEmpty()?null:Ee(e.stringMode,d)),e.value===void 0&&C(d,s)),d}return l.value},G=lt(),K=function o(a){var s;if(R(),w.value=a,!g.value){var i=D(a),d=V(i);d.isNaN()||q(d,!0)}(s=e.onInput)===null||s===void 0||s.call(e,a),G(function(){var I=a;e.parser||(I=a.replace(/。/g,".")),I!==a&&o(I)})},W=function(){g.value=!0},te=function(){g.value=!1,K(v.value.value)},X=function(a){K(a.target.value)},Q=function(a){var s,i;if(!(a&&h.value||!a&&j.value)){b.value=!1;var d=V(e.step);a||(d=d.negate());var I=(l.value||V(0)).add(d.toString()),O=q(I,!1);(s=e.onStep)===null||s===void 0||s.call(e,Ee(e.stringMode,O),{offset:e.step,type:a?"up":"down"}),(i=v.value)===null||i===void 0||i.focus()}},ne=function(a){var s=V(D(w.value)),i=s;s.isNaN()?i=l.value:i=q(s,a),e.value!==void 0?C(l.value,!1):i.isNaN()||C(i,!1)},se=function(a){var s,i=a.which;b.value=!0,i===oe.ENTER&&(g.value||(b.value=!1),ne(!1),(s=e.onPressEnter)===null||s===void 0||s.call(e,a)),e.keyboard!==!1&&!g.value&&[oe.UP,oe.DOWN].includes(i)&&(Q(oe.UP===i),a.preventDefault())},p=function(){b.value=!1},H=function(a){ne(!1),f.value=!1,b.value=!1,c("blur",a)};return J(function(){return e.precision},function(){l.value.isInvalidate()||C(l.value,!1)},{flush:"post"}),J(function(){return e.value},function(){var o=V(e.value);l.value=o;var a=V(D(w.value));(!o.equals(a)||!b.value||e.formatter)&&C(o,b.value)},{flush:"post"}),J(w,function(){e.formatter&&ee()},{flush:"post"}),J(function(){return e.disabled},function(o){o&&(f.value=!1)}),m({focus:function(){var a;(a=v.value)===null||a===void 0||a.focus()},blur:function(){var a;(a=v.value)===null||a===void 0||a.blur()}}),function(){var o,a=A(A({},r),e),s=a.prefixCls,i=s===void 0?"rc-input-number":s,d=a.min,I=a.max,O=a.step,k=O===void 0?1:O;a.defaultValue,a.value;var ae=a.disabled,re=a.readonly;a.keyboard;var ie=a.controls,ce=ie===void 0?!0:ie,ue=a.autofocus;a.stringMode,a.parser,a.formatter,a.precision,a.decimalSeparator,a.onChange,a.onInput,a.onPressEnter,a.onStep;var Be=a.lazy,Ae=a.class,Fe=a.style,Pe=ot(a,["prefixCls","min","max","step","defaultValue","value","disabled","readonly","keyboard","controls","autofocus","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep","lazy","class","style"]),ke=u.upHandler,Te=u.downHandler,Ie="".concat(i,"-input"),fe={};return Be?fe.onChange=X:fe.onInput=X,S("div",{class:T(i,Ae,(o={},y(o,"".concat(i,"-focused"),f.value),y(o,"".concat(i,"-disabled"),ae),y(o,"".concat(i,"-readonly"),re),y(o,"".concat(i,"-not-a-number"),l.value.isNaN()),y(o,"".concat(i,"-out-of-range"),!l.value.isInvalidate()&&!$(l.value)),o)),style:Fe,onKeydown:se,onKeyup:p},[ce&&S(it,{prefixCls:i,upDisabled:h.value,downDisabled:j.value,onStep:Q},{upNode:ke,downNode:Te}),S("div",{class:"".concat(Ie,"-wrap")},[S("input",B(B(B({autofocus:ue,autocomplete:"off",role:"spinbutton","aria-valuemin":d,"aria-valuemax":I,"aria-valuenow":l.value.isInvalidate()?null:l.value.toString(),step:k},Pe),{},{ref:v,class:Ie,value:w.value,disabled:ae,readonly:re,onFocus:function(je){f.value=!0,c("focus",je)}},fe),{},{onBlur:H,onCompositionstart:W,onCompositionend:te}),null)])])}}});function de(n){return n!=null}var ct=globalThis&&globalThis.__rest||function(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var u=0,r=Object.getOwnPropertySymbols(n);u<r.length;u++)e.indexOf(r[u])<0&&Object.prototype.propertyIsEnumerable.call(n,r[u])&&(t[r[u]]=n[r[u]]);return t},Ce=Ve(),ft=function(){return A(A({},Ce),{size:{type:String},bordered:{type:Boolean,default:!0},placeholder:String,name:String,id:String,type:String,addonBefore:ve.any,addonAfter:ve.any,prefix:ve.any,"update:value":Ce.onChange,valueModifiers:Object})},me=be({name:"AInputNumber",inheritAttrs:!1,props:ft(),slots:["addonBefore","addonAfter","prefix"],setup:function(e,t){var r=t.emit,u=t.expose,c=t.attrs,m=t.slots,v=ze(),f=Le("input-number",e),b=f.prefixCls,g=f.size,l=f.direction,_=E(e.value===void 0?e.defaultValue:e.value),M=E(!1);J(function(){return e.value},function(){_.value=e.value});var D=E(null),w=function(){var h;(h=D.value)===null||h===void 0||h.focus()},F=function(){var h;(h=D.value)===null||h===void 0||h.blur()};u({focus:w,blur:F});var z=function(h){e.value===void 0&&(_.value=h),r("update:value",h),r("change",h),v.onFieldChange()},C=function(h){M.value=!1,r("blur",h),v.onFieldBlur()},P=function(h){M.value=!0,r("focus",h)};return Ge(function(){Ke(function(){})}),function(){var N,h,j,L,x=A(A({},c),e),R=x.class,ee=x.bordered,U=x.readonly,$=x.style,q=x.addonBefore,G=q===void 0?(h=m.addonBefore)===null||h===void 0?void 0:h.call(m):q,K=x.addonAfter,W=K===void 0?(j=m.addonAfter)===null||j===void 0?void 0:j.call(m):K,te=x.prefix,X=te===void 0?(L=m.prefix)===null||L===void 0?void 0:L.call(m):te,Q=x.valueModifiers,ne=Q===void 0?{}:Q,se=ct(x,["class","bordered","readonly","style","addonBefore","addonAfter","prefix","valueModifiers"]),p=b.value,H=g.value,o=T((N={},y(N,"".concat(p,"-lg"),H==="large"),y(N,"".concat(p,"-sm"),H==="small"),y(N,"".concat(p,"-rtl"),l.value==="rtl"),y(N,"".concat(p,"-readonly"),U),y(N,"".concat(p,"-borderless"),!ee),N),R),a=S(st,B(B({},Xe(se,["size","defaultValue"])),{},{ref:D,lazy:!!ne.lazy,value:_.value,class:o,prefixCls:p,readonly:U,onChange:z,onBlur:C,onFocus:P}),{upHandler:function(){return S(et,{class:"".concat(p,"-handler-up-inner")},null)},downHandler:function(){return S(We,{class:"".concat(p,"-handler-down-inner")},null)}}),s=de(G)||de(W);if(de(X)){var i,d=T("".concat(p,"-affix-wrapper"),(i={},y(i,"".concat(p,"-affix-wrapper-focused"),M.value),y(i,"".concat(p,"-affix-wrapper-disabled"),e.disabled),y(i,"".concat(p,"-affix-wrapper-sm"),g.value==="small"),y(i,"".concat(p,"-affix-wrapper-lg"),g.value==="large"),y(i,"".concat(p,"-affix-wrapper-rtl"),l.value==="rtl"),y(i,"".concat(p,"-affix-wrapper-readonly"),U),y(i,"".concat(p,"-affix-wrapper-borderless"),!ee),y(i,"".concat(R),!s&&R),i));a=S("div",{class:d,style:$,onMouseup:function(){return D.value.focus()}},[S("span",{class:"".concat(p,"-prefix")},[X]),a])}if(s){var I,O="".concat(p,"-group"),k="".concat(O,"-addon"),ae=G?S("div",{class:k},[G]):null,re=W?S("div",{class:k},[W]):null,ie=T("".concat(p,"-wrapper"),O,y({},"".concat(O,"-rtl"),l.value==="rtl")),ce=T("".concat(p,"-group-wrapper"),(I={},y(I,"".concat(p,"-group-wrapper-sm"),H==="small"),y(I,"".concat(p,"-group-wrapper-lg"),H==="large"),y(I,"".concat(p,"-group-wrapper-rtl"),l.value==="rtl"),I),R);a=S("div",{class:ce,style:$},[S("div",{class:ie},[ae,a,re])])}return Qe(a,{style:$})}}}),mt=A(me,{install:function(e){return e.component(me.name,me),e}});export{mt as I};
