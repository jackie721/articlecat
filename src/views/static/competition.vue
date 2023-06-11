<template>
    <div class="tools">
        <el-button icon="plus" @click="toadd">添加</el-button>
    </div>


    <el-table :data="salesclerks" stripe style="width: 100%">
        <el-table-column prop="id" label="id" width="50" />
        <el-table-column prop="name" label="竞赛名称" />
        <el-table-column prop="homePage" label="竞赛官网" />
        <el-table-column prop="type" label="竞赛类型" />
        <el-table-column prop="level" label="竞赛等级" />
        <el-table-column prop="schoolId" label="学校" />
        <el-table-column prop="organizer" label="主办单位" />
        <el-table-column prop="start" label="开始时间" />
        <el-table-column prop="end" label="结束时间" />
        <el-table-column label="功能管理">
            <template #default="scope">
                <el-button size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
        </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :page-size="page.size" :total="page.total"
        @current-change="currentchange" />

    <!--对话框添加-->
    <el-dialog v-model="dialogSalesclerksFormVisible" title="添加">
        <el-form :model="salesclerk">
            <el-form-item label="id" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛名称" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛官网" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.homePage" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛类型" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="竞赛等级" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.level" autocomplete="off" />
            </el-form-item>
            <el-form-item label="学校" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.schoolId" autocomplete="off" />
            </el-form-item>
            <el-form-item label="主办单位" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.organizer" autocomplete="off" />
            </el-form-item>
            <el-form-item label="开始时间" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.start" autocomplete="off" />
            </el-form-item>
            <el-form-item label="结束时间" :label-width="formLabelWidth">
                <el-input v-model="salesclerk.end" autocomplete="off" />
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
import {
    adCatePage,adCateDelId,adCateAdd,adCateEdit} from "../../http/competition";
export default defineComponent({
    data() {
        return {/*
            Patent: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            Patent: {
                "name": "",
                "homePage": "",
                "type": "",
                "id": 0,
                "level": "",
                "schoolId": "",
                "organizer": "",
                "start": "",
                "end": "",
            },
            formLabelWidth: 80
            */
        }
    },

    props: [
        'id'
    ],
    data() {
        return {

            competition: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            competition: {
                "name": "",
                "homePage": "",
                "type": "",
                "id": 0,
                "level": "",
                "schoolId": "",
                "organizer": "",
                "start": "",
                "end": "",
            },
            formLabelWidth: 80,

            
            isActive: true,
            hasError: false,
            activeClass: {
                background: 'red',
                color: 'blue'
            },
            errorClass: 'hasError',
            awesome: true,

            //数据
            salesclerks: [
                { id: 1, name: '智能家居管理系统', homePage: '泉州信息工程学院', type: '个人赛', level: '院级', schoolId: '666', organizer: '软件学院', start: '2023.2.2', end: '2023.6.30' },
                { id: 2, name: '学生宿舍管理系统', homePage: '泉州信息工程学院', type: '个人赛', level: '院级', schoolId: '666', organizer: '软件学院', start: '2023.2.2', end: '2023.6.30' },
                { id: 3, name: '医疗设备管理系统', homePage: '泉州信息工程学院', type: '个人赛', level: '院级', schoolId: '666', organizer: '软件学院', start: '2023.2.2', end: '2023.6.30' },
                //存放数据
            ],
            dialogSalesclerksFormVisible: false,
            salesclerk: {
                id: 0,
                name: '',
                prefession: '',
                shop: '',
            },
            formLabelWidth: '140px',
            flag: true,
        }

    },
    methods: {

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

        save() {
            //添加
            console.log(this.salesclerk)
            if (this.flag) {
                this.salesclerks.push(this.salesclerk)
            } else {

            }
            this.dialogSalesclerksFormVisible = false;
        },
        // save() {
        //     const Patent = this.Patent;
        //     if (Patent.id == 0) {
        //         adCateAdd(Patent).then(res => {
        //             if (res.success) {
        //                 //刷新页面
        //                 this.dialogFormVisible = false;
        //                 this.getAdCatesPage(this.page.current)
        //                 ElMessage(res.msg)
        //             }
        //             else {
        //                 ElMessage(res.msg)
        //                 return false
        //             }
        //         }).catch(err => {
        //             ElMessage('网络错误联系管理员')
        //         })
        //     }
        //     else {
        //         adCateEdit(Patent).then(res => {
        //             if (res.success) {
        //                 //刷新页面
        //                 this.dialogFormVisible = false;
        //                 this.getAdCatesPage(this.page.current)
        //                 ElMessage(res.msg)
        //             }
        //             else {
        //                 ElMessage(res.msg)
        //                 return false
        //             }
        //         }).catch(err => {
        //             ElMessage('网络错误联系管理员')
        //         })
        //     }

        // },
        handleEdit(index, row) {
            //修改
            this.flag = false;
            console.log(index, row);
            this.dialogSalesclerksFormVisible = true;

            this.salesclerk = row;

        },
        handleDelete(index, row) {
            //删除
            console.log(index, row);
            this.salesclerks.splice(index, 1);
        },
        toadd() {

            this.salesclerk = {
                id: 0,
                name: '',
                prefession: '',
                shop: '',
            };
            this.dialogSalesclerksFormVisible = true;
            this.flag = true;
        },
        customEvent() {
            console.log('customEvent')
        },
        customEvent1(id) {
            console.log('customEvent', id)
        }
    }

});



</script>


<style lang="scss" scoped>
.active {
    background-color: red;
}

.hasError {
    color: red;
}
</style>