<template>
    <h2>泉州信息工程学院专利</h2>
        <div class="tools">
            <!--
                <el-button icon="plus" @click="dialogSalesclerksFormVisible=true" />
            -->
            <el-button icon="plus" @click="toadd">添加</el-button>
        </div>

        <el-table :data="salesclerks" stripe style="width: 100%">
            <el-table-column prop="patentNo" label="专利号" width="180" />
            <el-table-column prop="name" label="专利名称" width="180" />
            <el-table-column prop="address" label="申请单位或个人地址" width="180" />
            <el-table-column prop="attachment" label="佐证材料" />
            <el-table-column prop="type" label="专利类型"/>
            <el-table-column prop="empowerTime" label="授权时间"/>
            <el-table-column prop="userId" label="发明人"/>
            <el-table-column label="功能管理">
      <template #default="scope">
        <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
          >编辑</el-button
        >
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >删除</el-button
        >
      </template>
    </el-table-column>
        </el-table>
        <!--分页-->
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentChange" />

        
<!--对话框添加-->
        <el-dialog v-model="dialogSalesclerksFormVisible" title="专利添加">
    <el-form :model="salesclerk">
        <el-form-item label="专利号" :label-width="formLabelWidth">
        <el-input v-model="salesclerk.patentNo" autocomplete="off" />
      </el-form-item>
      <el-form-item label="专利名称" :label-width="formLabelWidth">
        <el-input v-model="salesclerk.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="申请单位或个人地址" :label-width="formLabelWidth">
        <el-input v-model="salesclerk.address" autocomplete="off" />
      </el-form-item>
      <el-form-item label="佐证材料" :label-width="formLabelWidth">
        <el-input v-model="salesclerk.attachment" autocomplete="off" />
      </el-form-item>
      <el-form-item label="专利类型" :label-width="formLabelWidth">
        <el-input v-model="salesclerk.type" autocomplete="off" />
      </el-form-item>
      <el-form-item label="授权时间" :label-width="formLabelWidth">
        <el-input v-model="salesclerk.empowerTime" autocomplete="off" />
      </el-form-item>
      <el-form-item label="发明人" :label-width="formLabelWidth">
        <el-input v-model="salesclerk.userId" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogSalesclerksFormVisible = false">取消</el-button>
        <el-button type="primary" @click="save">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>

<!--对话框添加-->

</template>

<script>

import { defineComponent } from 'vue'
import { adCatePage,adCateAdd, adCateDelId } from "../../http/patent";
import { ElMessage } from 'element-plus'
import {cloneDeep} from 'lodash-es'

export default defineComponent({
    /*
    data() {
        return {
            Patent: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            Patent: {
                "address": "",
                "attachment": "",
                "empowerTime": "",
                "id": 0,
                "name": "",
                "patentNo": "",
                "type": "",
                "userId": 0
            },
            formLabelWidth: 80
        }
    },
    */
    props:[
        'id'
    ],
    
    data(){
        return{
            Patent: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            Patent: {
                "address": "",
                "attachment": "",
                "empowerTime": "",
                "id": 0,
                "name": "",
                "patentNo": "",
                "type": "",
                "userId": 0
            },
            formLabelWidth: 80,

            isActive:true,
            hasError:false,
            activeClass:{
                background:'red',
                color:'blue'
            },
            errorClass:'hasError',
            awesome:true,

            //数据
            salesclerks:[
                {patentNo:1,name:'智慧小区停车信息管理系统',address:'泉州信息工程学院',attachment:'论文以及实物',type:'软件著作权',empowerTime:'2019.7',userId:'王竞菲'},
                {patentNo:2,name:'一种速干护发梳',address:'泉州信息工程学院',attachment:'论文',type:'实用新型专利',empowerTime:'2019.6.29',userId:'苏乐辉'},
                {patentNo:3,name:'电动机电机的温度控制器',address:'泉州信息工程学院',attachment:'论文',type:'实用新型专利',empowerTime:'2019.6.4',userId:'吴俊杰'},
                {patentNo:4,name:'智慧城市综合信息智能响应系统V1.0',address:'泉州信息工程学院',attachment:'论文',type:'软件著作权',empowerTime:'2019.4.30',userId:'郭俊'},
                {patentNo:5,name:'一种基于深度学习的智能环境监控方法和系统及设备',address:'泉州信息工程学院',attachment:'论文',type:'发明专利',empowerTime:'2019.9',userId:'陈庆顺'},
                {patentNo:6,name:'基于知识图谱的智能家居场景联动系统',address:'泉州信息工程学院',attachment:'论文',type:'软件著作权',empowerTime:'2019.3.18',userId:'谢梦怡'},
            //存放数据
            ],
            dialogSalesclerksFormVisible:false,
            salesclerk:{
                id:0,
                name:'',
                prefession:'',
                shop:'',
            },
            formLabelWidth:'140px',
            flag:true,
        }
        
    },
    mounted() {
        this.getAdCatesPage(1)
    },
    methods:{
        toEdit(adcate) {
            console.log(adcate);
            this.dialogFormVisible=true;
            this.adCate=cloneDeep(adcate);    
        },
        del(id) {
            //删除数据
            //模拟删除，服务器进行处理 
            //要别人反悔机会
            // 如果只有一条数据，删除数据之后如何处理？
            //人机交互
            console.log(id)
            const params = {
                id: id
            }
            adCateDelId(params).then(res => {
                if (res.success) {
                    this.getAdCatesPage(this.page.current)

                }
                else {
                    console.log(res.msg)
                    return false
                }


            }).catch(err => {

            })
        },
        
        getAdCatesPage(current){
            const data={
                current:current,
                size:2
            }
            adCatePage(data).then(res=>{
                console.log(res);
                const page=res.data.page;
                this.adCates=page.records;
                this.page=page;
            }).catch(err=>{
                console.log(err);
            })
        },
        currentchange(current) {
            // console.log(current);
            this.getAdCatesPage(current);
            this.page.current = current;//数据更新目前显示的页面
        },
        /*
        currentchange(current){
            console.log(current);
        },*/
        del(id) {
            //删除数据
            //模拟删除，服务器进行处理 
            //要别人反悔机会
            // 如果只有一条数据，删除数据之后如何处理？
            //人机交互
            console.log(id)
            const params = {
                id: id
            }
            adCateDelId(params).then(res => {
                if (res.success) {
                    this.getAdCatesPage(this.page.current)

                }
                else {
                    console.log(res.msg)
                    return false
                }


            }).catch(err => {

            })
        },
        save(){
            //添加
            console.log(this.salesclerk)
            if(this.flag){
                this.salesclerks.push(this.salesclerk)
            }else{
                
            }
            this.dialogSalesclerksFormVisible=false;      
        },
        
       /*
        save() {
            const Patent = this.Patent;
            if (Patent.id == 0) {
                adCateAdd(Patent).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getAdCatesPage(this.page.current)
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
            else {
                adCateEdit(Patent).then(res => {
                    if (res.success) {
                        //刷新页面
                        this.dialogFormVisible = false;
                        this.getAdCatesPage(this.page.current)
                        ElMessage(res.msg)
                    }
                    else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }

        },
        */
        handleEdit(index,row){
            //修改
            this.flag=false;
            console.log(index,row);
            this.dialogSalesclerksFormVisible=true;

            this.salesclerk=row;

        },
        handleDelete(index,row){
            //删除
            console.log(index,row);
            this.salesclerks.splice(index,1);
        },
        toadd(){
        
            this.salesclerk={
                id:0,
                name:'',
                prefession:'',
                shop:'',
            };
            this.dialogSalesclerksFormVisible=true;
            this.flag=true;
        },
        customEvent(){
            console.log('customEvent')
        },
        customEvent1(id){
            console.log('customEvent',id)
        }
    }
    
});



</script>


<style lang="scss" scoped>
    .active{
        background-color: red;
    }

    .hasError{
        color: red;
    }


</style>