import{h as A,d as N,q as ae,p as d,k as E,o as p,c as M,z as U,b as z,w,s as j,a as $,y as m,t,D as q,aj as Z,ac as G,B as W,N as re,aW as le,X as O,aF as ie,aw as X,bb as ue,as as ce,m as k,at as F,H as de,L as pe,aS as me,b2 as fe,f as h,E as ge,a4 as T,a2 as H,a3 as ye,F as ve,A as Ce,ar as he,bc as be,a7 as Te,j as P,ax as J,a8 as x,ay as R,aB as we,bd as Ne}from"./index-c98f9125.js";const V={},Se=A({value:{type:[String,Number],default:""},max:{type:Number,default:99},isDot:Boolean,hidden:Boolean,type:{type:String,values:["primary","success","warning","info","danger"],default:"danger"}}),Be=["textContent"],ke=N({name:"ElBadge"}),Ee=N({...ke,props:Se,setup(s,{expose:n}){const e=s,o=ae("badge"),a=d(()=>e.isDot?"":E(e.value)&&E(e.max)?e.max<e.value?`${e.max}+`:`${e.value}`:`${e.value}`);return n({content:a}),(l,u)=>(p(),M("div",{class:m(t(o).b())},[U(l.$slots,"default"),z(G,{name:`${t(o).namespace.value}-zoom-in-center`,persisted:""},{default:w(()=>[j($("sup",{class:m([t(o).e("content"),t(o).em("content",l.type),t(o).is("fixed",!!l.$slots.default),t(o).is("dot",l.isDot)]),textContent:q(t(a))},null,10,Be),[[Z,!l.hidden&&(t(a)||l.isDot)]])]),_:1},8,["name"])],2))}});var Me=W(Ee,[["__file","/home/runner/work/element-plus/element-plus/packages/components/badge/src/badge.vue"]]);const $e=re(Me),K=["success","info","warning","error"],i=ie({customClass:"",center:!1,dangerouslyUseHTMLString:!1,duration:3e3,icon:void 0,id:"",message:"",onClose:void 0,showClose:!1,type:"info",offset:16,zIndex:0,grouping:!1,repeatNum:1,appendTo:X?document.body:void 0}),xe=A({customClass:{type:String,default:i.customClass},center:{type:Boolean,default:i.center},dangerouslyUseHTMLString:{type:Boolean,default:i.dangerouslyUseHTMLString},duration:{type:Number,default:i.duration},icon:{type:le,default:i.icon},id:{type:String,default:i.id},message:{type:O([String,Object,Function]),default:i.message},onClose:{type:O(Function),required:!1},showClose:{type:Boolean,default:i.showClose},type:{type:String,values:K,default:i.type},offset:{type:Number,default:i.offset},zIndex:{type:Number,default:i.zIndex},grouping:{type:Boolean,default:i.grouping},repeatNum:{type:Number,default:i.repeatNum}}),ze={destroy:()=>!0},c=ue([]),_e=s=>{const n=c.findIndex(a=>a.id===s),e=c[n];let o;return n>0&&(o=c[n-1]),{current:e,prev:o}},Ie=s=>{const{prev:n}=_e(s);return n?n.vm.exposed.bottom.value:0},Le=(s,n)=>c.findIndex(o=>o.id===s)>0?20:n,De=["id"],Oe=["innerHTML"],Fe=N({name:"ElMessage"}),He=N({...Fe,props:xe,emits:ze,setup(s,{expose:n}){const e=s,{Close:o}=he,{ns:a,zIndex:l}=ce("message"),{currentZIndex:u,nextZIndex:f}=l,g=k(),v=k(!1),C=k(0);let S;const Y=d(()=>e.type?e.type==="error"?"danger":e.type:"info"),ee=d(()=>{const r=e.type;return{[a.bm("icon",r)]:r&&F[r]}}),_=d(()=>e.icon||F[e.type]||""),se=d(()=>Ie(e.id)),I=d(()=>Le(e.id,e.offset)+se.value),ne=d(()=>C.value+I.value),te=d(()=>({top:`${I.value}px`,zIndex:u.value}));function B(){e.duration!==0&&({stop:S}=be(()=>{b()},e.duration))}function L(){S==null||S()}function b(){v.value=!1}function oe({code:r}){r===Te.esc&&b()}return de(()=>{B(),f(),v.value=!0}),pe(()=>e.repeatNum,()=>{L(),B()}),me(document,"keydown",oe),fe(g,()=>{C.value=g.value.getBoundingClientRect().height}),n({visible:v,bottom:ne,close:b}),(r,D)=>(p(),h(G,{name:t(a).b("fade"),onBeforeLeave:r.onClose,onAfterLeave:D[0]||(D[0]=je=>r.$emit("destroy")),persisted:""},{default:w(()=>[j($("div",{id:r.id,ref_key:"messageRef",ref:g,class:m([t(a).b(),{[t(a).m(r.type)]:r.type&&!r.icon},t(a).is("center",r.center),t(a).is("closable",r.showClose),r.customClass]),style:ge(t(te)),role:"alert",onMouseenter:L,onMouseleave:B},[r.repeatNum>1?(p(),h(t($e),{key:0,value:r.repeatNum,type:t(Y),class:m(t(a).e("badge"))},null,8,["value","type","class"])):T("v-if",!0),t(_)?(p(),h(t(H),{key:1,class:m([t(a).e("icon"),t(ee)])},{default:w(()=>[(p(),h(ye(t(_))))]),_:1},8,["class"])):T("v-if",!0),U(r.$slots,"default",{},()=>[r.dangerouslyUseHTMLString?(p(),M(ve,{key:1},[T(" Caution here, message could've been compromised, never use user's input as message "),$("p",{class:m(t(a).e("content")),innerHTML:r.message},null,10,Oe)],2112)):(p(),M("p",{key:0,class:m(t(a).e("content"))},q(r.message),3))]),r.showClose?(p(),h(t(H),{key:2,class:m(t(a).e("closeBtn")),onClick:Ce(b,["stop"])},{default:w(()=>[z(t(o))]),_:1},8,["class","onClick"])):T("v-if",!0)],46,De),[[Z,v.value]])]),_:3},8,["name","onBeforeLeave"]))}});var Pe=W(He,[["__file","/home/runner/work/element-plus/element-plus/packages/components/message/src/message.vue"]]);let Re=1;const Q=s=>{const n=!s||P(s)||J(s)||x(s)?{message:s}:s,e={...i,...n};if(!e.appendTo)e.appendTo=document.body;else if(P(e.appendTo)){let o=document.querySelector(e.appendTo);we(o)||(o=document.body),e.appendTo=o}return e},Ve=s=>{const n=c.indexOf(s);if(n===-1)return;c.splice(n,1);const{handler:e}=s;e.close()},Ae=({appendTo:s,...n},e)=>{const o=`message_${Re++}`,a=n.onClose,l=document.createElement("div"),u={...n,id:o,onClose:()=>{a==null||a(),Ve(C)},onDestroy:()=>{R(null,l)}},f=z(Pe,u,x(u.message)||J(u.message)?{default:x(u.message)?u.message:()=>u.message}:null);f.appContext=e||y._context,R(f,l),s.appendChild(l.firstElementChild);const g=f.component,C={id:o,vnode:f,vm:g,handler:{close:()=>{g.exposed.visible.value=!1}},props:f.component.props};return C},y=(s={},n)=>{if(!X)return{close:()=>{}};if(E(V.max)&&c.length>=V.max)return{close:()=>{}};const e=Q(s);if(e.grouping&&c.length){const a=c.find(({vnode:l})=>{var u;return((u=l.props)==null?void 0:u.message)===e.message});if(a)return a.props.repeatNum+=1,a.props.type=e.type,a.handler}const o=Ae(e,n);return c.push(o),o.handler};K.forEach(s=>{y[s]=(n={},e)=>{const o=Q(n);return y({...o,type:s},e)}});function Ue(s){for(const n of c)(!s||s===n.props.type)&&n.handler.close()}y.closeAll=Ue;y._context=null;const Ze=Ne(y,"$message");export{Ze as E};
