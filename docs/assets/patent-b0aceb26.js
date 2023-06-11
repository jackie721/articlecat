import{g as C,i as f,_ as E,d as _,o as v,c as y,a as u,b as l,w as o,F as I,e as m,S as T,T as F}from"./index-c98f9125.js";import{E as N,a as P,b as S}from"./el-table-column-271ee003.js";import{E as L,a as U,b as W,c as $}from"./el-button-1faef406.js";import{E as z}from"./el-pagination-37a4c347.js";import"./el-select-68f3d92a.js";import{c as A}from"./cloneDeep-c9f0cd72.js";import"./validator-0f117868.js";const q=e=>f.request({url:"api/patent/page",method:"post",data:e}),c=e=>f.request({url:"api/patent/delete",method:"get",params:e}),h=C.create({baseURL:"http://api.jqrjq.cn",withCredentials:!0});h.interceptors.request.use(e=>e,e=>Promise.reject(e));h.interceptors.response.use(e=>e,e=>Promise.reject(e));const D=_({props:["id"],data(){return{Patent:[],page:{total:0,current:1,size:10},dialogFormVisible:!1,Patent:{address:"",attachment:"",empowerTime:"",id:0,name:"",patentNo:"",type:"",userId:0},formLabelWidth:80,isActive:!0,hasError:!1,activeClass:{background:"red",color:"blue"},errorClass:"hasError",awesome:!0,salesclerks:[{patentNo:1,name:"智慧小区停车信息管理系统",address:"泉州信息工程学院",attachment:"论文以及实物",type:"软件著作权",empowerTime:"2019.7",userId:"王竞菲"},{patentNo:2,name:"一种速干护发梳",address:"泉州信息工程学院",attachment:"论文",type:"实用新型专利",empowerTime:"2019.6.29",userId:"苏乐辉"},{patentNo:3,name:"电动机电机的温度控制器",address:"泉州信息工程学院",attachment:"论文",type:"实用新型专利",empowerTime:"2019.6.4",userId:"吴俊杰"},{patentNo:4,name:"智慧城市综合信息智能响应系统V1.0",address:"泉州信息工程学院",attachment:"论文",type:"软件著作权",empowerTime:"2019.4.30",userId:"郭俊"},{patentNo:5,name:"一种基于深度学习的智能环境监控方法和系统及设备",address:"泉州信息工程学院",attachment:"论文",type:"发明专利",empowerTime:"2019.9",userId:"陈庆顺"},{patentNo:6,name:"基于知识图谱的智能家居场景联动系统",address:"泉州信息工程学院",attachment:"论文",type:"软件著作权",empowerTime:"2019.3.18",userId:"谢梦怡"}],dialogSalesclerksFormVisible:!1,salesclerk:{id:0,name:"",prefession:"",shop:""},formLabelWidth:"140px",flag:!0}},mounted(){this.getAdCatesPage(1)},methods:{toEdit(e){console.log(e),this.dialogFormVisible=!0,this.adCate=A(e)},del(e){console.log(e),c({id:e}).then(s=>{if(s.success)this.getAdCatesPage(this.page.current);else return console.log(s.msg),!1}).catch(s=>{})},getAdCatesPage(e){q({current:e,size:2}).then(s=>{console.log(s);const p=s.data.page;this.adCates=p.records,this.page=p}).catch(s=>{console.log(s)})},currentchange(e){this.getAdCatesPage(e),this.page.current=e},del(e){console.log(e),c({id:e}).then(s=>{if(s.success)this.getAdCatesPage(this.page.current);else return console.log(s.msg),!1}).catch(s=>{})},save(){console.log(this.salesclerk),this.flag&&this.salesclerks.push(this.salesclerk),this.dialogSalesclerksFormVisible=!1},handleEdit(e,a){this.flag=!1,console.log(e,a),this.dialogSalesclerksFormVisible=!0,this.salesclerk=a},handleDelete(e,a){console.log(e,a),this.salesclerks.splice(e,1)},toadd(){this.salesclerk={id:0,name:"",prefession:"",shop:""},this.dialogSalesclerksFormVisible=!0,this.flag=!0},customEvent(){console.log("customEvent")},customEvent1(e){console.log("customEvent",e)}}}),j=e=>(T("data-v-3fa3cc8c"),e=e(),F(),e),B=j(()=>u("h2",null,"泉州信息工程学院专利",-1)),R={class:"tools"},G={class:"dialog-footer"};function H(e,a,s,p,J,K){const i=L,r=S,g=N,b=z,n=U,d=W,k=$,V=P;return v(),y(I,null,[B,u("div",R,[l(i,{icon:"plus",onClick:e.toadd},{default:o(()=>[m("添加")]),_:1},8,["onClick"])]),l(g,{data:e.salesclerks,stripe:"",style:{width:"100%"}},{default:o(()=>[l(r,{prop:"patentNo",label:"专利号",width:"180"}),l(r,{prop:"name",label:"专利名称",width:"180"}),l(r,{prop:"address",label:"申请单位或个人地址",width:"180"}),l(r,{prop:"attachment",label:"佐证材料"}),l(r,{prop:"type",label:"专利类型"}),l(r,{prop:"empowerTime",label:"授权时间"}),l(r,{prop:"userId",label:"发明人"}),l(r,{label:"功能管理"},{default:o(t=>[l(i,{size:"small",onClick:w=>e.handleEdit(t.$index,t.row)},{default:o(()=>[m("编辑")]),_:2},1032,["onClick"]),l(i,{size:"small",type:"danger",onClick:w=>e.handleDelete(t.$index,t.row)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(b,{layout:"prev, pager, next","page-size":e.page.size,total:e.page.total,onCurrentChange:e.currentChange},null,8,["page-size","total","onCurrentChange"]),l(V,{modelValue:e.dialogSalesclerksFormVisible,"onUpdate:modelValue":a[8]||(a[8]=t=>e.dialogSalesclerksFormVisible=t),title:"专利添加"},{footer:o(()=>[u("span",G,[l(i,{onClick:a[7]||(a[7]=t=>e.dialogSalesclerksFormVisible=!1)},{default:o(()=>[m("取消")]),_:1}),l(i,{type:"primary",onClick:e.save},{default:o(()=>[m(" 确定 ")]),_:1},8,["onClick"])])]),default:o(()=>[l(k,{model:e.salesclerk},{default:o(()=>[l(d,{label:"专利号","label-width":e.formLabelWidth},{default:o(()=>[l(n,{modelValue:e.salesclerk.patentNo,"onUpdate:modelValue":a[0]||(a[0]=t=>e.salesclerk.patentNo=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"专利名称","label-width":e.formLabelWidth},{default:o(()=>[l(n,{modelValue:e.salesclerk.name,"onUpdate:modelValue":a[1]||(a[1]=t=>e.salesclerk.name=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"申请单位或个人地址","label-width":e.formLabelWidth},{default:o(()=>[l(n,{modelValue:e.salesclerk.address,"onUpdate:modelValue":a[2]||(a[2]=t=>e.salesclerk.address=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"佐证材料","label-width":e.formLabelWidth},{default:o(()=>[l(n,{modelValue:e.salesclerk.attachment,"onUpdate:modelValue":a[3]||(a[3]=t=>e.salesclerk.attachment=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"专利类型","label-width":e.formLabelWidth},{default:o(()=>[l(n,{modelValue:e.salesclerk.type,"onUpdate:modelValue":a[4]||(a[4]=t=>e.salesclerk.type=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"授权时间","label-width":e.formLabelWidth},{default:o(()=>[l(n,{modelValue:e.salesclerk.empowerTime,"onUpdate:modelValue":a[5]||(a[5]=t=>e.salesclerk.empowerTime=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"]),l(d,{label:"发明人","label-width":e.formLabelWidth},{default:o(()=>[l(n,{modelValue:e.salesclerk.userId,"onUpdate:modelValue":a[6]||(a[6]=t=>e.salesclerk.userId=t),autocomplete:"off"},null,8,["modelValue"])]),_:1},8,["label-width"])]),_:1},8,["model"])]),_:1},8,["modelValue"])],64)}const ee=E(D,[["render",H],["__scopeId","data-v-3fa3cc8c"]]);export{ee as default};
