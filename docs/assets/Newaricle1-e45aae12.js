import{_ as I,d as T,o as A,c as F,a as s,b as l,w as a,F as $,P as z,e as o,D as h,Q as P,R as S,S as N,T as B}from"./index-c98f9125.js";import{E as U,a as D,b as L}from"./el-table-column-271ee003.js";import{E as M}from"./el-date-picker-f228ea9c.js";import{c as W,a as O,b as Q,E as R}from"./el-button-1faef406.js";import{A as j,a as q,b as G,c as H}from"./articleCat5-035f14a0.js";import{c as f}from"./cloneDeep-c9f0cd72.js";import{E as J}from"./index-a5de5c87.js";import{E as c}from"./index-a8cc67c8.js";import"./validator-0f117868.js";const K=T({data(){return{value:"",detailC:{},current:2,total:100,size:10,formInline:{},articleCats:[],page:{total:"100",current:1,size:"10"},dialogFormVisible:!1,dialogFormVisible1:!1,articleCat:{articleCatId:0,content:"",createTime:"",deleted:0,id:0,open:0,title:"",updateTime:"",userinfoId:0},formLabelWidth:98}},created(){},mounted(){this.getArticleCatsPage(1)},methods:{gouser(){this.$router.push({path:"/Newaricle2"})},gofenlei(){this.$router.push({path:"/Newaricle"})},addTask(){this.$router.push({path:"/Newaricle1"})},changeOption(e){console.log("切换了",e),this.$router.push({path:"/"+e})},daohang(e){console.log("aaa",f(e)),this.detailC=f(e),this.dialogFormVisible1=!0},pageChange(e){console.log("113",e)},Find(){this.articleCats1=[],this.articleCats.filter(e=>{e.title.indexOf(this.formInline.title)!==-1&&this.articleCats.push(e),this.articleCats=[],this.articleCats=this.articleCats1})},toEdit(e){this.dialogFormVisible=!0,this.articleCat=f(e),console.log(this.articleCat)},getArticleCatsPage(e){this.articleCats=[];const t={current:this.current,size:this.size};j().then(n=>{console.log("入参",t,n),this.articleCats=n.data.articles}).catch(n=>{console.log(n)})},currentchange(e){this.getArticleCatsPage(e),this.page.current=e},del(e){J.confirm("确定删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(()=>{q({id:e}).then(n=>{if(n.success){const g=this.articleCats.findIndex(C=>C.id===e);this.articleCats.splice(g,1),this.page.total--,this.articleCats.length===0&&this.page.current>1?this.currentchange(this.page.current-1):this.getArticleCatsPage(this.page.current)}else return console.log(n.msg),!1}).catch(n=>{})}).catch(()=>{})},toAdd(){this.dialogFormVisible=!0,this.resetArticleCat()},save(){const e=this.articleCat;e.id==0?G(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getArticleCatsPage(this.page.current),c(t.msg),this.resetArticleCat();else return c(t.msg),!1}).catch(t=>{c("失败")}):H(e).then(t=>{if(t.success)this.dialogFormVisible=!1,this.getArticleCatsPage(this.page.current),c(t.msg),this.resetArticleCat();else return c(t.msg),!1}).catch(t=>{c("失败")})},resetArticleCat(){this.articleCat={articleCatId:0,content:"",createTime:"",deleted:0,id:0,open:0,title:"",updateTime:"",userinfoId:0}}}}),v=e=>(N("data-v-a2715659"),e=e(),B(),e),X={class:"articleCats"},Y=v(()=>s("div",{class:"title"},[s("h1",null,"文章列表")],-1)),Z=v(()=>s("div",{class:"flex-grow"},null,-1)),x={class:"article-tools"},ee={class:"dialog-footer"},te={style:{width:"45vw",height:"100vh"}},le={class:"title",style:{"font-size":"1.2vw","font-weight":"bold"}},ae={style:{"margin-top":"20px"}},ie={style:{width:"40vw","margin-top":"20px"}};function oe(e,t,n,g,C,se){const u=P,y=S,k=z,p=O,d=Q,r=R,b=W,m=L,E=U,_=M,w=D;return A(),F($,null,[s("div",X,[l(k,{"default-active":e.activeIndex,class:"el-menu-demo",mode:"horizontal",ellipsis:!1,onSelect:e.handleSelect},{default:a(()=>[Y,Z,l(u,{index:"1",onClick:t[0]||(t[0]=i=>e.gouser())},{default:a(()=>[o("用户端")]),_:1}),l(y,{index:"2"},{title:a(()=>[o("文章管理")]),default:a(()=>[l(u,{index:"2-1",onClick:t[1]||(t[1]=i=>e.gofenlei())},{default:a(()=>[o("文章分类")]),_:1}),l(u,{index:"2-2",onClick:t[2]||(t[2]=i=>e.addTask())},{default:a(()=>[o("文章列表")]),_:1})]),_:1})]),_:1},8,["default-active","onSelect"]),s("div",x,[l(b,{inline:!0,model:e.formInline,class:"demo-form-inline"},{default:a(()=>[l(d,null,{default:a(()=>[l(p,{modelValue:e.formInline.title,"onUpdate:modelValue":t[3]||(t[3]=i=>e.formInline.title=i),placeholder:"请输入关键词"},null,8,["modelValue"])]),_:1}),l(d,null,{default:a(()=>[l(r,{type:"primary",onClick:e.Find},{default:a(()=>[o("查询")]),_:1},8,["onClick"]),l(r,{type:"warning",onClick:e.toAdd},{default:a(()=>[o("添加")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),l(E,{data:e.articleCats,stripe:"",style:{width:"100%"}},{default:a(()=>[l(m,{fixed:"",prop:"id",label:"id",width:"80",sortable:""}),l(m,{prop:"title",label:"文章标题",width:"120"}),l(m,{prop:"content",label:"文章内容",width:"500"}),l(m,{prop:"createTime",label:"创建时间",width:"200"}),l(m,{prop:"updateTime",label:"更新时间",width:"200"}),o("> "),l(m,{fixed:"right",label:"操作",width:"300"},{default:a(i=>[l(r,{type:"primary",size:"small",onClick:V=>e.toEdit(i.row),plain:""},{default:a(()=>[o("更新")]),_:2},1032,["onClick"]),l(r,{type:"primary",size:"small",onClick:V=>e.del(i.row.id),plain:""},{default:a(()=>[o("删除")]),_:2},1032,["onClick"]),l(r,{type:"primary",size:"small",onClick:V=>e.daohang(i.row),plain:""},{default:a(()=>[o("查看")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])]),l(w,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":t[9]||(t[9]=i=>e.dialogFormVisible=i),title:"文章编辑"},{footer:a(()=>[s("span",ee,[l(r,{onClick:t[8]||(t[8]=i=>e.dialogFormVisible=!1)},{default:a(()=>[o("取消")]),_:1}),l(r,{type:"primary",onClick:e.save},{default:a(()=>[o("保存")]),_:1},8,["onClick"])])]),default:a(()=>[l(b,{model:e.articleCat},{default:a(()=>[l(d,{label:"文章标题","label-width":e.formLabelWidth},{default:a(()=>[l(p,{modelValue:e.articleCat.title,"onUpdate:modelValue":t[4]||(t[4]=i=>e.articleCat.title=i),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"文章内容","label-width":e.formLabelWidth},{default:a(()=>[l(p,{type:"textarea",rows:5,placeholder:"请输入内容",modelValue:e.articleCat.content,"onUpdate:modelValue":t[5]||(t[5]=i=>e.articleCat.content=i)},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"创建时间","label-width":e.formLabelWidth},{default:a(()=>[l(_,{modelValue:e.articleCat.createTime,"onUpdate:modelValue":t[6]||(t[6]=i=>e.articleCat.createTime=i),type:"date",autocomplete:"off",placeholder:"选择日期"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"更新时间","label-width":e.formLabelWidth},{default:a(()=>[l(_,{modelValue:e.articleCat.updateTime,"onUpdate:modelValue":t[7]||(t[7]=i=>e.articleCat.updateTime=i),type:"date",autocomplete:"off",placeholder:"选择日期"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(w,{modelValue:e.dialogFormVisible1,"onUpdate:modelValue":t[10]||(t[10]=i=>e.dialogFormVisible1=i),title:"查看"},{default:a(()=>[s("div",te,[s("div",le,h(e.detailC.title),1),s("div",ae,"更新时间"+h(e.detailC.createTime),1),s("div",ie,h(e.detailC.content),1)])]),_:1},8,["modelValue"])],64)}const ge=I(K,[["render",oe],["__scopeId","data-v-a2715659"]]);export{ge as default};
