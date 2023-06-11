<template>
    <!-- el-table显示数据,分页 -->

    <div class="interviews">
        <div class="interview-tools">
            <el-button type="warning" @click="toAdd">添加</el-button>
        </div>
        <!-- 表单显示部分 -->
        <el-table :data="interviews" style="width: 100%">
            <el-table-column fixed prop="id" width="150" />
            <el-table-column prop="idd" label="编号" width="120" />
            <el-table-column prop="title" label="面试题目" width="120" />
            <el-table-column prop="analysis" label="面试解析" width="500" />
            <el-table-column prop="interviewType" label="面试类型" width="120" />
            <el-table-column prop="deleted" label="deleted" width="120" />
            <el-table-column fixed="tight" label="view" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />
    </div>
    <!-- 添加按钮点击后出现的表单 -->
    <el-dialog v-model="dialogFormVisible" title="面试信息编辑">
        <el-form :model="Interview">
            <el-form-item label="面试题" :label-width="formLabelWidth">
                <el-input v-model="Interview.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="面试解析" :label-width="formLabelWidth">
                <el-input v-model="Interview.analysis" autocomplete="off" />
            </el-form-item>
            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="Interview.ucreateTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="Interview.UpdateTime" autocomplete="off" />
            </el-form-item>
            
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="save">保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { defineComponent } from 'vue';
import { add,
    all,
    getInterviewByColums,
    sdelete,
    edit,
    getInterviewByUserld,
    getInterviewWithTypeByPage,
    getInterviewWithTypeByPagea,
    getInterviewWithTypeName,
    getInterviewsPageByUserld,
    one} from '../../http/interviewcontroller';
import { cloneDeep } from 'lodash-es';
export default defineComponent({
    data() {
        return {
            interview: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            interviewr: {
                "analysis": "",
                "createTime": "",
                "deleted": 0,
                "id": 0,
                "interviewType": 0,
                "title": "",
                "updateTime": "",
                "userinfoId": 0,
                "view": 0
            },
            interviewColums: {
                "colums":"",
            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getinterviewsPage(1)
    },
    methods: {
        toEdit(interview) {
            this.dialogFormVisible = true;
            this.interview = cloneDeep(interview);
        },
        // 按page展示
        getinterviewsPage(current) {
            const data = {
                current: current,
                size: 4
            }

            getInterviewWithTypeByPage(data).then(res => {
                const page = res.data.page;
                this.interviews = page.records;
                this.page = page;
            }).catch(err => {
                console.log(err);
            })
        },
        // 按column展示
        getinterviewsColumn(colums) {
            const params = {
                colums: colums,
            }

            getInterviewByColums(params).then(res => {
                const page = res.params.page;
                this.interviews = page.records;
                this.page = page;
            }).catch(err => {
                console.log(err);
            })
        },
        currentchange(current) {
            // console.log(current);
            this.getinterviewsPage(current);
            this.page.current = current;//数据更新到目前显示的页面
        },
        del(id) {
            if (confirm("是否删除") == true) {
                console.log(id);
            }
            console.log(id);
            const params = {
                id: id
            }
            sdelete(params).then(res => {
                if (res.success) {
                    this.getinterviewsPage(this.page.current)
                } else {
                    console.log(res.msg);
                    return false
                }
            }).catch(err => {

            })
        },
        toAdd() {
            this.dialogFormVisible = true;
        },
        save() {
            const interview = this.interview
            if (interview.id == 0) {
                add(interview).then(res => {
                    if (res.success) {
                        this.dialogFormVisible = false
                        this.getinterviewsPage(this.page.current)
                        ElMessage(res.msg)
                    } else {
                        ElMessage(res.msg)
                        return false
                    }
                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
            else {
                edit(interview).then(res => {
                    if (res.success) {
                        this.dialogFormVisible = false
                        this.getinterviewsPage(this.page.current)
                        ElMessage(res.msg)
                    } else {
                        ElMessage(res.msg)
                        return false
                    }

                }).catch(err => {
                    ElMessage('网络错误联系管理员')
                })
            }
        }
    }
});
</script>
<style lang = "scss" scoped></style>