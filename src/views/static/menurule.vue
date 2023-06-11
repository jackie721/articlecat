<template>
    <!--
         1 el-table显示数据,分页 
         2  token cookie|session 服务端保存状态信息方式   
         H5 token 如果有值 登录状态 否则就是登录
         进入某个页面就要进行拦截：判断用户是否登录
         通过什么方式：路由守卫
         3 添加和更新
    -->


    <div class="Menurules">
        <div class="Menurule-tools">
            <el-button type="primary" @click="toAdd">添加</el-button>
            <el-input v-model="searchId" placeholder="请输入ID" clearable style="width: 120px;"></el-input>
            <el-button type="primary" @click="searchMenurule">搜索</el-button>
        </div>
        <el-table :data="Menurules" style="width: 100%">
            <el-table-column fixed prop="component" label="组件路径" width="120" />
            <el-table-column prop="createTime" label="创建时间" width="120" />
            <el-table-column prop="extend" label="扩展属性" width="120" />
            <el-table-column prop="icon" label="图标" width="120" />
            <el-table-column prop="id" label="ID" width="120" />
            <el-table-column prop="keepalive" label="缓存" width="120" />
            <el-table-column prop="menuType" label="菜单类型" width="120" />
            <el-table-column prop="name" label="规则名称" width="120" />
            <el-table-column prop="path" label="路由路径" width="120" />
            <el-table-column prop="remark" label="备注" width="120"/>
            <el-table-column prop="status" label="状态" width="120"/>
            <el-table-column prop="title" label="标题" width="120"/>
            <el-table-column prop="type" label="类型" width="120"/>
            <el-table-column prop="updateTime" label="更新时间" width="120"/>
            <el-table-column prop="url" label="Url" width="120"/>
            <el-table-column prop="weigh" label="权重" width="120"/>
            <el-table-column prop="type" label="修改操作" width="120">
                <template #default="scope">
                    <el-button link type="primary" size="small" @click="toEdit(scope.row)">更新</el-button>
                    <el-button link type="primary" size="small" @click="del(scope.row.id)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-pagination background layout="prev, pager, next" :page-size="page.size" :total="page.total"
            @current-change="currentchange" />
    </div>
    <el-dialog v-model="dialogFormVisible" title="编辑表单">
        <el-form :model="Menurule">
            <el-form-item label="组件路径" :label-width="formLabelWidth">
                <el-input v-model="Menurule.component" autocomplete="off" />
            </el-form-item>
            <el-form-item label="创建时间" :label-width="formLabelWidth">
                <el-input v-model="Menurule.createTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="扩展属性" :label-width="formLabelWidth">
                <el-input v-model="Menurule.extend" autocomplete="off" />
            </el-form-item>
            <el-form-item label="图标" :label-width="formLabelWidth">
                <el-input v-model="Menurule.icon" autocomplete="off" />
            </el-form-item>
            <el-form-item label="ID" :label-width="formLabelWidth">
                <el-input v-model="Menurule.id" autocomplete="off" />
            </el-form-item>
            <el-form-item label="缓存" :label-width="formLabelWidth">
                <el-input v-model="Menurule.keepalive" autocomplete="off" />
            </el-form-item>
            <el-form-item label="菜单类型" :label-width="formLabelWidth">
                <el-input v-model="Menurule.menuType" autocomplete="off" />
            </el-form-item>
            <el-form-item label="规则名称" :label-width="formLabelWidth">
                <el-input v-model="Menurule.name" autocomplete="off" />
            </el-form-item>
            <el-form-item label="路由路径" :label-width="formLabelWidth">
                <el-input v-model="Menurule.path" autocomplete="off" />
            </el-form-item>
            <el-form-item label="上级菜单" :label-width="formLabelWidth">
                <el-input v-model="Menurule.pid" autocomplete="off" />
            </el-form-item>
            <el-form-item label="备注" :label-width="formLabelWidth">
                <el-input v-model="Menurule.remake" autocomplete="off" />
            </el-form-item>
            <el-form-item label="状态" :label-width="formLabelWidth">
                <el-input v-model="Menurule.status" autocomplete="off" />
            </el-form-item>
            <el-form-item label="标题" :label-width="formLabelWidth">
                <el-input v-model="Menurule.title" autocomplete="off" />
            </el-form-item>
            <el-form-item label="类型" :label-width="formLabelWidth">
                <el-input v-model="Menurule.type" autocomplete="off" />
            </el-form-item>
            <el-form-item label="更新时间" :label-width="formLabelWidth">
                <el-input v-model="Menurule.updateTime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="Url" :label-width="formLabelWidth">
                <el-input v-model="Menurule.url" autocomplete="off" />
            </el-form-item>
            <el-form-item label="权重" :label-width="formLabelWidth">
                <el-input v-model="Menurule.weigh" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="save">
                    保存
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script>
import { defineComponent } from "vue"
import { adCatePage, adCateDelId, adCateAdd, adCateEdit, } from "../../http/Menurule";
import { ElMessage } from 'element-plus'
import { cloneDeep } from 'lodash-es'
export default defineComponent({
    data() {
        return {
            Menurules: [],
            page: {
                total: 0,
                current: 1,
                size: 10
            },
            dialogFormVisible: false,
            Menurule: {
                "component": "",
                "createTime": 0,
                "exten": 0,
                "icon": "",
                "id": "",
                "keepalive": "",
                "menuType": "",
                "name": "",
                "path": 0,
                "pid":"",
                "remark":"",
                "status":"",
                "title":"",
                "type":"",
                "updateTime":"",
                "url":"",
                "weigh":""
            },
            formLabelWidth: 80
        }
    },
    mounted() {
        this.getAdCatesPage(1)
    },
    methods: {
        toEdit(Menurule) {
            console.log(Menurule);
            this.dialogFormVisible = true;
            this.Menurule = cloneDeep(Menurule);
        },
        getAdCatesPage(current) {
            const data = {
                current: current,
                size: 2
            }
            adCatePage(data).then(res => {
                console.log(res);
                const page = res.data.page;
                this.Menurules = page.records;
                this.page = page;
            }).catch(err => {
                console.log(err);
            })

        },
        currentchange(current) {
            // console.log(current);
            this.getAdCatesPage(current);
            this.page.current = current;//数据更新目前显示的页面
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
        toAdd() {
            //到添加的页面
            this.dialogFormVisible = true;
            this.Menurule = {
                "component": "",
                "createTime": 0,
                "exten": 0,
                "icon": "",
                "id": "",
                "keepalive": "",
                "menuType": "",
                "name": "",
                "path": 0,
                "pid":"",
                "remark":"",
                "status":"",
                "title":"",
                "type":"",
                "updateTime":"",
                "url":"",
                "weigh":""
            }
        },
        searchMenurule() {
            const id = parseInt(this.searchId);
            if(isNaN(id)) {
                ElMessage.warning('请输入有效的ID');
                return;
            }

            console.log('Searching Menurule with ID:', id);

            getOneMenurule(id)
                .then(res => {
                    console.log('Search result:', res);
                    if (res.success) {
                        // 处理搜索结果
                        const Menurule = res.data.records;
                        this.Menurules = [Menurule]; // 将结果放入数组中
                        this.page = {
                            total: 1,
                            current: 1,
                            size: this.page.size
                        };
                    } else {
                        ElMessage.error(res.msg);
                    }
                })
                .catch(err =>{
                    ElMessage.error('网络错误，请联系管理员');
                });
        },
        save() {
            const Menurule = this.Menurule;
            if (Menurule.id == 0) {
                adCateAdd(Menurule).then(res => {
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
                adCateEdit(Menurule).then(res => {
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

        }

    }

});
</script>

<style lang="scss" scoped></style>
