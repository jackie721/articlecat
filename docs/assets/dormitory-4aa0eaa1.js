import{i as p,_ as C,d as N,o as v,c as F,a as f,b as l,w as a,F as k,e as n}from"./index-c98f9125.js";import{E,a as B,b as I}from"./el-table-column-271ee003.js";import{E as U,a as D,b as L,c as W}from"./el-button-1faef406.js";import{E as $}from"./el-pagination-37a4c347.js";import"./el-select-68f3d92a.js";/* empty css                   */import{c}from"./cloneDeep-c9f0cd72.js";import{E as u}from"./index-a8cc67c8.js";import"./validator-0f117868.js";const z=e=>p.request({url:"api/dormitory/all",data:e}),P=e=>p.request({url:"api/dormitory/add",method:"post",data:e}),T=e=>p.request({url:"api/dormitory/delete",params:e}),q=e=>p.request({url:"api/dormitory/edit",method:"post",data:e}),A=e=>p.request({url:"api/dormitory/one",params:e}),M=N({data(){return{dormitorys:[],Dormitory:[],searchText:"",page:{total:0,current:1,size:10},dialogFormVisible:!1,dialogFormVisibleById:!1,dormitory:{building:"",comment:"",id:0,name:"",maxNumber:0,leader:"",leftNumber:0,liveNumber:0,school:"",status:0,type:0},formLabelWidth:80}},mounted(){this.getdormitoryPage(1)},methods:{refresh(){this.getdormitoryPage(1)},toEdit(e){console.log(e),this.dialogFormVisible=!0,this.dormitory=c(e)},getdormitoryPage(){let e=this.page.size*(this.page.current-1),o=this.page.current*this.page.size;z().then(r=>{this.dormitorys=r.data.dormitories.slice(e,o),this.page.total=r.data.dormitories.length,u(r.msg)}).catch(r=>{console.log(r)})},getdormitoryById(e){console.log(e),this.Dormitory=[],A({id:e}).then(r=>{this.dialogFormVisibleById=!1,console.log(r),this.Dormitory.push(r.data.dormitory);const b=this.Dormitory;this.dormitorys=b})},currentchange(e){this.getdormitoryPage(e),this.page.current=e},del(e){confirm("是否删除")==!0&&(console.log(e),T({id:e}).then(r=>{if(r.success)this.getdormitoryPage(this.page.current);else return console.log(r.msg),!1}).catch(r=>{}))},toAdd(){this.dialogFormVisible=!0},searchById(){this.dialogFormVisibleById=!0},save(){const e=this.dormitory;e.id==0?P(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getdormitoryPage(this.page.current),u(o.msg);else return u(o.msg),!1}).catch(o=>{u("网络错误联系管理员")}):q(e).then(o=>{if(o.success)this.dialogFormVisible=!1,this.getdormitoryPage(this.page.current),u(o.msg);else return u(o.msg),!1}).catch(o=>{u("网络错误联系管理员")})}}}),O={class:"head"},j={class:"adcate-tools"},G={class:"dialog-footer"},H={class:"dialog-footer"};function J(e,o,r,b,K,Q){const s=U,i=I,h=E,V=$,d=D,m=L,g=W,y=B;return v(),F(k,null,[f("div",O,[f("div",j,[l(s,{type:"warning",onClick:e.toAdd},{default:a(()=>[n("添加")]),_:1},8,["onClick"]),l(s,{type:"warning",onClick:e.searchById},{default:a(()=>[n("查询")]),_:1},8,["onClick"]),l(s,{type:"warning",onClick:o[0]||(o[0]=t=>e.refresh())},{default:a(()=>[n("刷新查询")]),_:1})]),l(h,{data:e.dormitorys,style:{width:"100%"}},{default:a(()=>[l(i,{fixed:"",prop:"id",label:"id",width:"150"}),l(i,{fixed:"",prop:"name",label:"name",width:"120"}),l(i,{fixed:"",prop:"leader",label:"leader",width:"120"}),l(i,{fixed:"",prop:"maxNumber",label:"maxNumber",width:"120"}),l(i,{fixed:"",prop:"leftNumber",label:"leftNumber",width:"120"}),l(i,{fixed:"",prop:"liveNumber",label:"liveNumber",width:"120"}),l(i,{fixed:"",prop:"status",label:"status",width:"120"}),l(i,{fixed:"",prop:"comment",label:"comment",width:"120"}),l(i,{fixed:"",prop:"school",label:"school",width:"120"}),l(i,{fixed:"",prop:"type",label:"type",width:"120"}),l(i,{fixed:"",prop:"building",label:"building",width:"120"}),l(i,{fixed:"right",label:"Operations",width:"120"},{default:a(t=>[l(s,{link:"",type:"primary",size:"small",onClick:w=>e.toEdit(t.row)},{default:a(()=>[n("更新")]),_:2},1032,["onClick"]),l(s,{link:"",type:"primary",size:"small",onClick:w=>e.del(t.row.id)},{default:a(()=>[n("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(V,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentchange},null,8,["page-size","total","onCurrentChange"])]),l(y,{modelValue:e.dialogFormVisible,"onUpdate:modelValue":o[12]||(o[12]=t=>e.dialogFormVisible=t),title:"添加宿舍"},{footer:a(()=>[f("span",G,[l(s,{onClick:o[10]||(o[10]=t=>e.dialogFormVisible=!1)},{default:a(()=>[n("Cancel")]),_:1}),l(s,{type:"primary",onClick:o[11]||(o[11]=t=>e.save())},{default:a(()=>[n("保存 ")]),_:1})])]),default:a(()=>[l(g,{model:e.dormitory},{default:a(()=>[l(m,{label:"name","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.name,"onUpdate:modelValue":o[1]||(o[1]=t=>e.dormitory.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"leader","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.leader,"onUpdate:modelValue":o[2]||(o[2]=t=>e.dormitory.leader=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"maxNumber","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.maxNumber,"onUpdate:modelValue":o[3]||(o[3]=t=>e.dormitory.maxNumber=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"leftNumber","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.leftNumber,"onUpdate:modelValue":o[4]||(o[4]=t=>e.dormitory.leftNumber=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"liveNumber","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.liveNumber,"onUpdate:modelValue":o[5]||(o[5]=t=>e.dormitory.liveNumber=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"status","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.status,"onUpdate:modelValue":o[6]||(o[6]=t=>e.dormitory.status=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"school","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.school,"onUpdate:modelValue":o[7]||(o[7]=t=>e.dormitory.school=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"type","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.type,"onUpdate:modelValue":o[8]||(o[8]=t=>e.dormitory.type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(m,{label:"building","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.dormitory.building,"onUpdate:modelValue":o[9]||(o[9]=t=>e.dormitory.building=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"]),l(y,{modelValue:e.dialogFormVisibleById,"onUpdate:modelValue":o[16]||(o[16]=t=>e.dialogFormVisibleById=t),title:"查询"},{footer:a(()=>[f("span",H,[l(s,{onClick:o[14]||(o[14]=t=>e.dialogFormVisible=!1)},{default:a(()=>[n("Cancel")]),_:1}),l(s,{type:"primary",onClick:o[15]||(o[15]=t=>e.getdormitoryById(e.searchText))},{default:a(()=>[n("查询 ")]),_:1})])]),default:a(()=>[l(g,{model:e.dormitory},{default:a(()=>[l(m,{label:"请输入宿舍ID","label-width":e.formLabelWidth},{default:a(()=>[l(d,{modelValue:e.searchText,"onUpdate:modelValue":o[13]||(o[13]=t=>e.searchText=t),placeholder:"请输入宿舍ID",autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const le=C(M,[["render",J]]);export{le as default};
