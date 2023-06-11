import{i as p,_ as C,d as E,o as k,c as _,a as c,b as l,w as a,F,e as r}from"./index-c98f9125.js";import{E as y,a as v,b as P}from"./el-table-column-271ee003.js";import{E as z,a as $,b as L,c as U}from"./el-button-1faef406.js";import{E as W}from"./el-pagination-37a4c347.js";import"./el-select-68f3d92a.js";/* empty css                   */import{c as j}from"./cloneDeep-c9f0cd72.js";import{E as d}from"./index-a8cc67c8.js";import"./validator-0f117868.js";const B=e=>p.request({url:"api/classinfo/add",method:"post",data:e}),I=e=>p.request({url:"api/classinfo/page",method:"post",data:e}),q=e=>p.request({url:"api/classinfo/edit",method:"post",data:e}),A=e=>p.request({url:"api/classinfo/delete",params:e}),D=E({data(){return{classinfos:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,classinfo:{id:0,name:"",major:"",depart:"",school:"",state:0},formLabelWidth:80}},mounted(){this.getclassinfosPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.classinfo=j(e)},getclassinfosPage(e){I({current:e,size:2}).then(t=>{console.log(t);const u=t.data.page;this.classinfos=u.records,this.page=u}).catch(t=>{console.log(t)})},currentchange(e){this.getclassinfosPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&console.log(e),console.log(e),A({id:e}).then(t=>{if(t.success)this.getclassinfoPage(this.page.current);else return console.log(t.msg),!1}).catch(t=>{})},toAdd(){this.dialogFormVisible=!0,this.classinfo={id:0,name:"",major:"",depart:"",school:"",state:0}},save(){const e=this.classinfo;e.id==0?B(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getclassinfosPage(this.page.current),d(o.msg);else return d(o.msg),!1}).catch(o=>{d("网络错误联系管理员")}):q(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getclassinfoPage(this.page.current),d(o.msg);else return d(o.msg),!1}).catch(o=>{d("添加成功")})}}}),N={class:"classinfos"},T={class:"classInfo-tools"},M={class:"dialog-footer"};function G(e,o,t,u,H,J){const n=z,i=P,g=y,h=W,m=$,f=L,b=U,V=v;return k(),_(F,null,[c("div",N,[c("div",T,[l(n,{type:"warning",onClick:e.toAdd},{default:a(()=>[r("添加")]),_:1},8,["onClick"]),l(n,{type:"warning",onClick:e.searchById},{default:a(()=>[r("查询")]),_:1},8,["onClick"])]),l(g,{data:e.classinfos,style:{width:"100%"}},{default:a(()=>[l(i,{prop:"id",label:"班级编号",width:"150"}),l(i,{prop:"name",label:"班级名称",width:"120"}),l(i,{prop:"major",label:"专业",width:"120"}),l(i,{prop:"depart",label:"学院",width:"120"}),l(i,{prop:"school",label:"学校",width:"120"}),l(i,{prop:"state",label:"状态",width:"120"}),l(i,{fixed:"right",label:"功能管理",width:"120"},{default:a(s=>[l(n,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(s.row)},{default:a(()=>[r("更新")]),_:2},1032,["onClick"]),l(n,{link:"",type:"primary",size:"small",onClick:w=>e.del(s.row.id)},{default:a(()=>[r("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(h,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(V,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[6]||(o[6]=s=>e.dialogFormVisible=s),title:"添加班级"},{footer:a(()=>[c("span",M,[l(n,{onClick:o[5]||(o[5]=s=>e.dialogFormVisible=!1)},{default:a(()=>[r("取消")]),_:1}),l(n,{type:"primary",onClick:e.save},{default:a(()=>[r("保存 ")]),_:1},8,["onClick"])])]),default:a(()=>[l(b,{model:e.classinfo},{default:a(()=>[l(f,{label:"班级名称","label-width":e.formLabelWidth},{default:a(()=>[l(m,{modelValue:e.classinfo.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.classinfo.name=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(f,{label:"专业","label-width":e.formLabelWidth},{default:a(()=>[l(m,{modelValue:e.classinfo.major,"onUpdate:modelValue":o[1]||(o[1]=s=>e.classinfo.major=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(f,{label:"学院","label-width":e.formLabelWidth},{default:a(()=>[l(m,{modelValue:e.classinfo.depart,"onUpdate:modelValue":o[2]||(o[2]=s=>e.classinfo.depart=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(f,{label:"学校","label-width":e.formLabelWidth},{default:a(()=>[l(m,{modelValue:e.classinfo.school,"onUpdate:modelValue":o[3]||(o[3]=s=>e.classinfo.school=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(f,{label:"状态","label-width":e.formLabelWidth},{default:a(()=>[l(m,{modelValue:e.classinfo.state,"onUpdate:modelValue":o[4]||(o[4]=s=>e.classinfo.state=s),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const ee=C(D,[["render",G]]);export{ee as default};
